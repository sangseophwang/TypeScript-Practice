import * as CryptoJS from 'crypto-js';

class Block {
  public index:        number;
  public hash:         string;
  public previousHash: string;
  public data:         string;
  public timestamp:    number;

  static calculateBlockHash = (
    index:        number, 
    previousHash: string, 
    timestamp:    number, 
    data:         string
    ): string => CryptoJS.SHA256( index + previousHash + timestamp + data ).toString();

  constructor (
    index:        number,
    hash:         string,
    previousHash: string,
    data:         string,
    timestamp:    number
    ){
      this.index =        index;
      this.hash =         hash;
      this.previousHash = previousHash;
      this.data =         data;
      this.timestamp =    timestamp;
    }
}

// constructor 편하게 수정하기

// 1. index앞부분 커서 위치
// 2. ctrl + alt + 방향키(↓) timestamp까지 선택
// 3. shift + End 키로 맨뒤까지 선택
// 4. ctrl + c, ctrl + v 로 복붙
// 5. constructor 안의 ;선택
// 6. ctrl + d로 다중선택 후 ,로 교체
// 7. timestamp뒤의 ,는 삭제


const genesisBlock: Block = new Block(0, "20020202002", "", "Hello", 123454);

let blockchain: Block[] = [genesisBlock];

const getBlockchain   = () : Block[] => blockchain;
const getLatestBlock  = () : Block   => blockchain[blockchain.length  - 1];
const getNewTimeStamp = () : number  => Math.round(new Date().getTime() / 1000);



export {}