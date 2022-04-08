const { NOTIMP } = require("dns");

module.exports = {
   apps: [
      {
         script: "backend/server.js",
         cwd: "./backend/",
         name: "Backend",
         watch: true,
         ignore_watch: ['node_modules', '.git', 'users.json']
      },
      {
         script: "frontend/app.js",
         cwd: "./frontend/",
         name: "Frontend",
         watch: true
      }
   ]
}