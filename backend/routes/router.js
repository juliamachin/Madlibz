const express = require("express");
const router = express.Router();

// exports our storyData into our index.js
router.get("/stories", (req, res) => {
  const storyData = [
    {
      "title": "Learning About History",
      "blanks": [
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
      "value": [
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
    {
      "title": "The Perfect Meal",
      "blanks": [
        "adjective",
        "noun",
        "adjective",
        "adjective",
        "noun",
        "noun",
        "adjective",
        "verb",
        "adjective",
        "verb",
        "noun",
        "adjective",
        "noun",
        "noun",
      ],
      "value": [
        "For my perfect meal, I want something ",
        " and ",
        " that will make me feel ",
        " and ",
        ". First, I'll start with a bowl of ",
        " and a side of ",
        " to get my appetite going. Then, I'll move on to the main course - a ",
        " ",
        " ",
        " ",
        " with a ",
        " ",
        " sauce. For dessert, I'll have a slice of ",
        " and a cup of ",
        " to wash it down. That sounds like the perfect way to spend an ",
        " afternoon!",
        0,
      ],
    },
  ];

  res.send(storyData);
});

// exports router
module.exports = router;
