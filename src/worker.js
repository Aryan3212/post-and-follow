import { Worker } from "bullmq";
import nodemailer from "nodemailer";
import crypto from "node:crypto";
import client from "./cache.js";

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
});

const worker = new Worker('email', async job => {
  let token = crypto.randomBytes(64).toString('hex');
  while(true) {
    // EX: expire in 30 secs NX: set if token is unique, otherwise it returns null
    const cacheResponse = await client.set(`token:${token}`, 'user',  {
      EX: 20,
      NX: true
    })
    if (cacheResponse) break;
  }

  let mailOptions = {
    from: process.env.EMAIL,
    to: job.data.email,
    subject: 'Password Reset Test Email',
    text: `${job.data.body}
    Go to link to initiate password reset: http://localhost:3000/v1/reset-password?token=${token}
    `,
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
  });
}, {
  connection: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST, 
    password: process.env.REDIS_PASS,
  }
});

worker.on('completed', job => {
    console.log('Job Completed: ', job.id)
})
worker.on('failed', (job, error) => {
    console.log('Job Failed: ', job.id, error)
})