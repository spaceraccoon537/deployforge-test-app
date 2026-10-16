const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (_req, res) => {
  res.json({
    status: "healthy",
    application: "deployforge-test-app"
  });
});

app.get("/", (_req, res) => {
  res.send("Hello from DeployForge again!");
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});