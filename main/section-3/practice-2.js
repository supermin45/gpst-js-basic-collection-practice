'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var sameElements = new Array();
            const collectionC = objectB.value.toString();
            for(var i=0; i<collectionA.length;i++){
                if(collectionC.indexOf(collectionA[i].key.toString())>-1){
                    sameElements.push(collectionA[i].key);
                }
            }
            for (var i=0; i<collectionA.length; i++){
            	for (var j=0; j<sameElements.length; j++){
            		if (collectionA[i].key === sameElements[j] && collectionA[i].count>=3) {
            		collectionA[i].count = collectionA[i].count-Math.floor(collectionA[i].count/3);
            	    }  
            	}
            	
            }
            return collectionA;
}
