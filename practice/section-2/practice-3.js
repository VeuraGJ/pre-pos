'use strict';

function countSameElements(collection) {
  var countArray=[];
  for(let i=0;i<collection.length;i++){
    let item={};
    let keyflag=false;
    let collectionChar=collection[i].substring(0,1);
    let num=collection[i].match(/\d+/g);
    for(let j in countArray){
      keyflag=false;
      if(countArray[j].name==collectionChar){
        if(num){
          countArray[j].summary+=Number(num);
        }
        else countArray[j].summary++;
        keyflag=true;
        break;
      }
    }
    if(!keyflag){
      if(num){
        item.name=collectionChar
        item.summary=Number(num);
      }else{
      item.name=collectionChar;
      item.summary=1;
      }
      countArray.push(item);
    }
  }
  //console.log(countArray);
  return countArray;
}
