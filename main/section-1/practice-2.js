'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
 var result = new Array();
            const collectionC = collectionB[0].toString();
            for(var i=0; i<collectionA.length;i++){
                if(collectionC.indexOf(collectionA[i].toString())>-1){
                    result.push(collectionA[i]);
                }
            } 
            return result; 
}
