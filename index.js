const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Liste de citations de Noël
const christmasQuotes = [
    {
        "id": 1,
        "content": "Christmas is not a day nor a season, but a state of mind",
        "author": "Calvin Coolidge"
    },{
        "id": 2,
        "content": "The magic of Christmas is not in the presents, but in its presence." ,
        "author": "Unknown"
    },{
        "id": 3,
        "content": "Christmas is the only time of year when you can observe the whole family working together to create an atmosphere of complete chaos!",
        "author": "Mike Kinney"
    },{
        "id": 4,
        "content": 
        "Christmas is the day that holds all time together by giving gifts we never paid for.",
        "author": "Roy L. Smith"
    },{
        "id": 5,
        "content": "The best way to spread Christmas cheer is singing loud for all to hear.",
        "author": "Elf"
    },{
        "id": 6,
        "content": "Happiness is not something you postpone for the future; it is something you design for the present.",
        "author": "Zig Ziglar"
    },{
        "id": 7,
        "content": "It's easier to forgive during the Christmas season.",
        "author": "Unknown"
    },{
        "id": 8,
        "content": "Christmas is not a season. It's a feeling." ,
        "author": "Edna Ferber"
    },{
        "id": 9,
        "content": "Giving love is giving happiness.",
        "author": "Unknown"
    },{
        "id": 10,
        "content": "The best of all gifts around any Christmas tree: the presence of a happy family all wrapped up in each other's love.",
        "author": "Burton Hillis"
    },

];

// Route pour obtenir une citation aléatoire
app.get('/api/christmas-quotes', (req, res) => {
  const randomQuote = christmasQuotes[Math.floor(Math.random() * christmasQuotes.length)];
  res.json(randomQuote );
});

// Port d'écoute
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
