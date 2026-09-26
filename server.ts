const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        status: "healthy",
        application: "deployforge-test-app"
      })
    );

    return;
  }

  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("Hello from DeployForge again 2!");
});

server.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});