const SuperMarioWorldCollection = artifacts.require("SuperMarioWorldCollection.sol");

module.exports = async function (deployer) {
  
    await deployer.deploy(
        SuperMarioWorldCollection,
        "Super Mario World Collection", 
        "SMWC", 
        "https://ipfs.io/ipfs/Qmb6tWBDLd9j2oSnvSNhE314WFL7SRpQNtfwjFWsStXp5A/"
        );
}; 
 