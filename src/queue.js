import { Queue } from "bullmq";

const REDIS_URL = 'redis://my-password@127.0.0.1:6379';

const queue = new Queue('email', {
  connection: {
    url: REDIS_URL,
  }
});

queue.on('failed', (job, err) => {
  console.error('Job failed', job.id, err);
});

export default queue;