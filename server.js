import express from "express";

const app = express();

// opcional: rota raiz
app.get("/", (_req, res) => {
  res.type("text/plain").send("OK");
});

// sua API
app.get("/api/status", (_req, res) => {
  res.json({ status: "hello world" });
});

const PORT = process.env.PORT || 3000;
// no Render é importante escutar em 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
