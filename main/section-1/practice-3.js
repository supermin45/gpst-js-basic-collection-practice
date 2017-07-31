'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var result = new Array();
        	const collectionC = objectB.value.toString();
        	for (var i=0; i<collectionA.length; i++){
        		if (collectionC.indexOf(collectionA[i].toString())>-1){
        			result.push(collectionA[i]);
        		}
        	}
        	return result;
  
}
