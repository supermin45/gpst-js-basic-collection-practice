'use strict';

module.exports = function countSameElements(collection) {
  var count0 = 1;//设置每个元素的初始出现次数为1
        	var yuansu = new Array();
            var sum = new Array();
            for (var i=0; i<collection.length; i++) {
            	if (collection[i].indexOf('-')>0) {
            			var a = collection[i].split('',3);
            				yuansu[i] = a[0];
                            sum[i] = parseInt(a[2]);
            			
            		}else{
            			for (var j=i+1; j<collection.length; j++) {
            				if (collection[i] === collection[j]) {
            			        count0 ++;
                                collection.splice(j,1);
                                j--;
            		        }
            			}
            			yuansu[i] = collection[i];//把当期元素存入结果
            	        sum[i] = count0;
                        count0 = 1;
            		}
                    
            	
            }
            var result = new Array();
            for (var i=0; i<yuansu.length; i++) {
            	result[i] = {key:' ', count:0};
            	result[i].key = yuansu[i];
            	result[i].count = sum[i];
            }
            return result;
}
