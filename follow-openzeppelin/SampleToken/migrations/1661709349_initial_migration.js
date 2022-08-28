var SampleToken = artifacts.require("SampleToken");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(SampleToken, "Udacity Sample Token", "UET", 1000);
};
