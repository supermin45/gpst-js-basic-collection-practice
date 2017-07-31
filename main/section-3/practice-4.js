'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
 var count0 = 1;//设置每个元素的初始出现次数为1
        	var yuansu = new Array();
            var sum = new Array();
            for (var i=0; i<collectionA.length; i++) {
            	if (collectionA[i].indexOf('-')>0) {
            			var a = collectionA[i].split('',3);
            				yuansu[i] = a[0];
                            sum[i] = a[2];
            			
            		}else{
            			for (var j=i+1; j<collectionA.length; j++) {
            				if (collectionA[i] === collectionA[j]) {
            			        count0 ++;
                                collectionA.splice(j,1);
                                j--;
            		        }
            			}
            			yuansu[i] = collectionA[i];//把当期元素存入结果
            	        sum[i] = count0;
                        count0 = 1;
            		}
                    
            	
            }
            var collectionC = new Array();
            for (var i=0; i<yuansu.length; i++) {
            	collectionC[i] = {key:' ', count:0};
            	collectionC[i].key = yuansu[i];
            	collectionC[i].count = sum[i];
            }
            var sameElements = new Array();
            const collectionD = objectB.value.toString();
            for(var i=0; i<collectionC.length;i++){
                if(collectionD.indexOf(collectionC[i].key.toString())>-1){
                    sameElements.push(collectionC[i].key);
                }
            }
            for (var i=0; i<collectionC.length; i++){
            	for (var j=0; j<sameElements.length; j++){
            		if (collectionC[i].key === sameElements[j] && collectionC[i].count>=3) {
            		collectionC[i].count = collectionC[i].count-Math.floor(collectionC[i].count/3);
            	    }  
            	}
            	
            }
            var result = collectionC;
            return result;
}
