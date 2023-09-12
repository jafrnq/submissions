/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?//done
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/




//START PROJECT
// create a variable to hold your NFT's
var nfts = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,rarity,color) {
    const nft = {
        nftname: name,
        nftrarity: rarity,
        nftcolor: color,
    };
    nfts.push(nft); // Push the NFT object into the 'nfts' array
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < nfts.length; i++) {
        console.log("NFT Name: " + nfts[i].nftname);
        console.log("NFT Rarity: " + nfts[i].nftrarity);
        console.log("NFT Color: " + nfts[i].nftcolor);
        console.log("\n"); // Add a newline for separation
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length; // Return the length of the 'nfts' array

}

// call your functions below this line
mintNFT("NFT 1", "Common", "Red");
mintNFT("NFT 2", "Rare", "Blue");
mintNFT("NFT 3", "Legendary", "Gold");
mintNFT("Sample", "Rare", "Silver");


listNFTs(); //lists the nft's that are minted

console.log("Total NFTs Minted: " + getTotalSupply());// lists the total nft minted

