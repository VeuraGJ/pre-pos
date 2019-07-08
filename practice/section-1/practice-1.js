'use strict';

function collectSameElements(collectionA, collectionB) {
   var repeatArray=[];
  for(let i=0;i<collectionA.length;i++){
   for(let j=0;j<collectionB.length;j++){
     if(collectionA[i]==collectionB[j]){
       repeatArray.push(collectionB[j]);
       break;
     }
   }
  }
  return repeatArray;
}
