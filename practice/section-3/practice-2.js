'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<objectB.value.length;j++){
      if(objectB.value[j]==collectionA[i].key){
        let deleteNum=parseInt(collectionA[i].count/3);
        collectionA[i].count-=deleteNum;
        break;
      }
    }
  }
  return collectionA;
}
