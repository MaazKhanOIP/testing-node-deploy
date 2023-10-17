const express = require("express");

const app = express();

app.get("/contacts", (req, res) => {
  const body = req.body;

  res.send({
    contacts: [
      {
        firstName: "Some",
      },
    ],
  });
});

app.listen(4000, () => {
  console.log("Server is listening on PORT 4000 ");
});
