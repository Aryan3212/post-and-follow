import app from './app.js';

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});

export default app;