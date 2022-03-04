const SuperMarioWorldCollection = artifacts.require("SuperMarioWorldCollection.sol");

module.exports = async done => {
    const superMarioWorldCollection = await SuperMarioWorldCollection.deployed();
    
    await superMarioWorldCollection.mint(10); // 1 Mario
    console.log("NFT 1 minted successfully");

    await superMarioWorldCollection.mint(10); // 2 Luigi
    console.log("NFT 2 minted successfully");
    
    await superMarioWorldCollection.mint(10);
    console.log("NFT 3 minted successfully");
    
    await superMarioWorldCollection.mint(10);
    console.log("NFT 4 minted successfully");
    
    await superMarioWorldCollection.mint(1); // 5 Mario Gold (rare)
    console.log("NFT 5 minted successfully");
    
    await superMarioWorldCollection.mint(1); // 6 Luigi Gold (rare)
    console.log("NFT 6 minted successfully");
    
    await superMarioWorldCollection.mint(1);
    console.log("NFT 7 minted successfully");
    
    await superMarioWorldCollection.mint(1);
    console.log("NFT 8 minted successfully");

    done();
}