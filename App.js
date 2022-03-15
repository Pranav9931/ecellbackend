const express = require("express");

const fs = require("fs");

const app = express();
const port = process.env.port || 8000;

app.use(express.json());

const membersData = require("./databases/members.json");

app.get("/members", (req, res) => {
  res.send(membersData);
});

app.post("/user", (req, res) => {
  const newUser = req.body;

  const newDatabase = membersData;
  newDatabase.push(newUser);

  fs.writeFile(
    "./databases/members.json",
    JSON.stringify(newDatabase, null, 2),
    function writeJSON(err) {
      if (err) return console.log(err);
      console.log(JSON.stringify(newDatabase));
    }
  );
  res.send("User Added Successfully!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
