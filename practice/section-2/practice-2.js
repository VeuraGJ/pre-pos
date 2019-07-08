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
      let charIndex=collection[i].indexOf('-');
      if(charIndex!=-1){
        item.key=collection[i].substring(0,charIndex);
        item.count=Number(collection[i].substring(charIndex+1,collection[i].length));
      }else{
      item.key=collection[i];
      item.count=1;
      }
      countArray.push(item);
    }
  }
  return countArray;
}
