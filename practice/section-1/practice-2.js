'use strict';

function collectSameElements(collectionA, collectionB) {
  var repeatArray=[];
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<collectionB.length;j++){
      for(let k=0;k<collectionB[j].length;k++)
      if(collectionA[i]==collectionB[j][k]){
        repeatArray.push(collectionB[j][k]);
        break;
      }
    }
   }
  return repeatArray;
}
