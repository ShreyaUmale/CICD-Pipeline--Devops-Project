const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Home page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>CI/CD Pipeline Demo</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 100px;">
        <h1>🚀 Hello! My CI/CD Pipeline is Working</h1>
        <p>Deployed via GitHub Actions + Docker + AWS EC2</p>
        <p><a href="/api/info">View API Info</a> | <a href="/api/status">Check Status</a></p>
      </body>
    </html>
  `);
});

// Health check (used by tests / Docker / load balancers)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// JSON API: basic project info
app.get('/api/info', (req, res) => {
  res.json({
    project: 'CI/CD Pipeline Demo',
    technologies: ['GitHub', 'GitHub Actions', 'Docker', 'AWS EC2', 'Nginx'],
    author: 'Shreya Umale',
    version: '1.0.0'
  });
});

// JSON API: server status with uptime
app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    uptime_seconds: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// JSON API: simple echo route (accepts a name and greets back)
app.get('/api/greet/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}! Welcome to the pipeline demo.` });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Only start the server if this file is run directly (not when imported by tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;