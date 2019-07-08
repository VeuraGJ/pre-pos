'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=[];
  for(let i=0;i<collectionA.length;i++){
    let num=collectionA[i].match(/\d+/g);
    let charItem=collectionA[i];
    let keyFlag=false;
    if(num){
      charItem=collectionA[i].substring(0,1);
    }
    for(let j in collectionC){
      keyFlag=false;
      if(collectionC[j].key==charItem){
        if(num){
          collectionC[j].count+=Number(num);
        }
        else collectionC[j].count++;
        keyFlag=true;
        break;
      }
    }
    if(!keyFlag){
      let item={};
      item.key=charItem;
      if(num) item.count=Number(num);
      else item.count=1;
      collectionC.push(item);
    }
  }
  for(let i=0;i<collectionC.length;i++){
    for(let j=0;j<objectB.value.length;j++){
      if(collectionC[i].key==objectB.value[j]){
        let deleteNum=parseInt(collectionC[i].count/3);
        collectionC[i].count-=deleteNum;
      }
    }
  }
  return collectionC;
}
