'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let countArray=[];
  for(let i=0;i<collectionA.length;i++){
    let keyFlag=false;
    for(let j in countArray){
      keyFlag=false;
      if(countArray[j].key==collectionA[i]){
        countArray[j].count++;
        keyFlag=true;
        break;
      }
    }
    if(!keyFlag){
      let item={};
      item.key=collectionA[i];
      item.count=1;
      countArray.push(item);
    }
  }
  for(let i=0;i<countArray.length;i++){
    for(let j=0;j<objectB.value.length;j++){
      if(objectB.value[j]==countArray[i].key){
        let deleteNum=parseInt(countArray[i].count/3);
        countArray[i].count-=deleteNum;
      }
    }
  }
  return countArray;
}
