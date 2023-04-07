const express = require("express");
const router = express.Router();

// exports our storyData into our index.js
router.get("/stories", (req, res) => {
  const storyData = [
    {
      title: "Learning About History",
      blanks: [
        "adjective",
        "noun",
        "nouns",
        "adjective",
        "nouns",
        "nouns",
        "animals",
        "nouns",
        "nouns",
        "number",
        "number",
        "nouns",
        "adjective",
        "nouns",
      ],
      value: [
        "History is ",
        " because we learn about ",
        " and ",
        " that happened long ago. I can't believe people used to dress in ",
        " clothing and kids played with ",
        " and ",
        " instead of video games. Also, before cars were invented, people actually rode ",
        "! People read ",
        " instead of computers and tablets, and sent messages via ",
        " that took ",
        " days to arrive. I wonder how kids will view my life in ",
        " year(s); maybe they will ride flying cars to school and play with ",
        " and ",
        " ",
        "!",
        0,
      ],
    },
  ]

  res.send(storyData);
});

// exports router
module.exports = router;
