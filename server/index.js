const fs = require("fs");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
const clientDistPath = path.join(__dirname, "..", "client", "dist");
const hasClientBuild = fs.existsSync(clientDistPath);

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    message: "Backend is connected."
  });
});

if (hasClientBuild) {
  app.use(express.static(clientDistPath));

  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
