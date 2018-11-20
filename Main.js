import {sha256};
class Block{
  constructor(index, timestamp, data, previousHash = '', hash){
      this.index = index;
      this.timestamp = timestamp
      this.data =data;
      this.hash = hash;
  }
  calculateHash(){
    return SHA256(this.index + this.previoushash + this.timestamp + JSON.stringify(this.data)).toString();
  }};
  class Blockchain{
    constructor(){
      this.chain = [];
    }
    createGenesisBlock(){
      return new Block(0, '01/01/2018', 'GenesisBlock', "0");
    }
    getLatestBlock(){
      return this.chain[this.chain.length -1];
    }
    addBlock(newBlock){
      newBlock.previousHash = this.getLatestBlock().;
      newBlock.hash = newBlock.calculateHash();
      this.chain.push(newBlock);
    }
    isChainValid(){
      for(let i=1;i< this.chain.length;i++){
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i-1];

        if(currentBlock.hash !== currentBLock.calculateHash()){
          return false;
        }
        if(previous.Block.previosuhash !== previous.Block.hash){
          return false;
        }
      }
    }
  }
  let carbonCoin = new Blockchain();
  carbonCoin.addBlock(new Block(1,'10/28/2018', { amount: 100, datatype:'tree', data:{DBH:12,Height:121,Loc_x: 45.0000, Loc_y:-170.00000},}));
  carbonCoin.addBlock(new Block(1,'10/28/2018', { amount: 99}));

  console.log(JSON.stringify(carbonCoin, null, 100));
