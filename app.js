/* eslint-disable @typescript-eslint/no-require-imports -- cPanel Passenger uses a CommonJS startup file. */
const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");
const handler = require("serve-handler");

const publicDirectory = path.join(__dirname, "out");

if (!fs.existsSync(path.join(publicDirectory, "index.html"))) {
  throw new Error(
    "Missing out/index.html. Run npm run build -- --webpack before starting the app.",
  );
}

const server = http.createServer((request, response) => {
  handler(request, response, {
    public: publicDirectory,
    directoryListing: false,
    cleanUrls: true,
    trailingSlash: true,
  }).catch((error) => {
    console.error("Static request failed:", error);
    if (response.headersSent) {
      response.destroy();
      return;
    }
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Internal server error");
  });
});

server.listen(process.env.PORT || 3000);
