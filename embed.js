require("dotenv").config();
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.API_KEY,
});

(async () => {
  const embed = await cohere.embed({
    texts: ["hello", "goodbye"],
    model: "embed-english-v3.0",
    inputType: "classification",
  });
  embed.console.log(embed);
})();
