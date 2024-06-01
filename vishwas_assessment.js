// create a variable to hold your NFT's
let NFTContainer = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, type, rarity, attack, defense, speed, level) {
    let NFT = {
        name: name,
        type: type,
        rarity: rarity,
    }
    NFTContainer.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTContainer.length; i++) {
        console.log("\n\n________ ANIMAL CARD  __________\n\n" );
        console.log("Name: " + NFTContainer[i].name);
        console.log("Type: " + NFTContainer[i].type);
        console.log("Rarity: " + NFTContainer[i].rarity);
        console.log("\n\n________* * * * *________\n" );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted so Far: " + NFTContainer.length);
}

// call your functions below this line
mintNFT("Lion", "Mammal", "Rare");
mintNFT("Tiger", "Mammal", "Common");
mintNFT("Elephant", "Mammal", "Rare");
mintNFT("Eagle", "Bird", "Common");

listNFTs();
getTotalSupply();