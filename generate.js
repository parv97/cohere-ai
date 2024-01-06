require("dotenv").config();
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.API_KEY,
});

(async () => {
  const prediction = await cohere.generate({
    prompt: "hello",
    maxTokens: 10,
  });

  console.log("Received prediction", prediction);
})();
