'use strict';

function countSameElements(collection) {
  var countArray=[];
  for(let i=0;i<collection.length;i++){
    let item={};
    let keyflag=false;
    for(let j in countArray){
      keyflag=false;
      if(countArray[j].key==collection[i]){
        countArray[j].count++;
        keyflag=true;
        break;
      }
    }
    if(!keyflag){
      item.key=collection[i];
      item.count=1;
      countArray.push(item);
    }
  }
  return countArray;
}
