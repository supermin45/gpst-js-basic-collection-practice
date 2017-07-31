'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var result = new Array();
        	const collectionC = objectB.value.toString();
        	for (var i=0; i<collectionA.length; i++) {
        		if (collectionC.indexOf(collectionA[i].key.toString())>-1) {
        			result.push(collectionA[i].key);
        		}
        	}
        	return result;
}
