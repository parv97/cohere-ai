const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: "XdBcio99i9AR3LCfmSEgio0pz4dDsSd4pX17XYqY",
});

(async () => {
  const prediction = await cohere.generate({
    prompt: "hello",
    maxTokens: 10,
  });

  console.log("Received prediction", prediction);
})();
