'use strict';

module.exports = function countSameElements(collection) {
  var count0 = 1;//设置每个元素的初始出现次数为1
        	var yuansu = new Array();
            var sum = new Array();
            for (var i=0; i<collection.length; i++) {
            	if (collection[i].indexOf('-')>0) {//判断是否存在'-'
            			var a = collection[i].split('',3);
            		    yuansu[i] = a[0];
                        sum[i] = parseInt(a[2]);
            			
            		}else if (collection[i].indexOf(':')>0){//判断是否存在':'
            			var b = collection[i].split('',3);
            		    yuansu[i] = b[0];
                        sum[i] = parseInt(b[2]);
            		}else if (collection[i].indexOf('[')>0){
            			var c = collection[i].split('');
            			if (c.length === 4) {
            				yuansu[i] = c[0];
            				sum[i] = parseInt(c[2]);
            			}else {
            				yuansu[i] = c[0];
                            sum[i] = parseInt(c[2]+c[3]);
                            
            			}
            			
            		}else {
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
            	result[i] = {name:' ', summary:0};
            	result[i].name = yuansu[i];
            	result[i].summary = sum[i];
            }
            
            for (var i=0; i<result.length; i++) {
            	for (var j=i+1; j<result.length; j++) {
            		if (result[i].name === result[j].name){
            			result[i].summary = result[i].summary + result[j].summary;
            			result.splice(j,1);
            			j--;
            		}
            	}
            }
            return result;
}
