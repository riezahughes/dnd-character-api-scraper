const getRaces = require('./types/races');

const runScripts = async () => {
  const raceReturn = await getRaces();
};

runScripts();
