//Starting an express app
const express = require('express');
const app = express();

//Enabling the usage of static files from the 'public' folder
app.use(express.static('public'));

//Enabling dotenv to use environment variables
require('dotenv').config();

//Using the twitter-lite package to access the Twitter API
const Twitter = require('twitter-lite');

//Setting the port for the app at localhost:3000
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  });


const language = require('@google-cloud/language');
const languageClient = new language.LanguageServiceClient();

async function getSentiment(text) {
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    // Detects the sentiment of the text
    const [result] = await languageClient.analyzeSentiment({document: document});
    const sentiment = result.documentSentiment;

    return sentiment.score;
}

getSentiment("I HATE MESSI");

