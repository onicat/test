const getConfigData = require('./scripts/getConfigData.js');

(async () => {
  console.log(await getConfigData());
})();