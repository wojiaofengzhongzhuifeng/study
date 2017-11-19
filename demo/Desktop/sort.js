
//在数组中获得最小的数字
var minNum = function(array){
	var a = array;
	var min = a[0];
	for(var i = 1; i <= a.length - 1; i++) {
		if (min > a[i]) {
			min = a[i]
		}
	}
	return min
}
var b = minNum([2,3,3,4,2,1,0])
console.log(b)

//冒泡排序
var babelSort = function(array) {
    var a = array
    //i = 轮数
    for(var i = 1; i < a.length; i++) {
        //j = 下标
        for(var j = 0; j < a.length - 1;j++) {
            if (a[j] > a[j + 1]) {
                //tem = 用于交换数组的辅助参数
                var tem = a[j]
                a[j] = a[j + 1]
                a[j + 1] = tem
            }
        }
    }
    return array
}

//选择排序
var selectSort = function(array){
    var a = array
    //j = 下标
    for(var j = 0; j < a.length - 1; j++){
        //jump = 跳跃数
        for(var jump = 1; jump < a.length; jump++) {
            if (a[j] > a[j + jump]){
                var tem = a[j]
                a[j] = a[j + jump]
                a[j + jump] = tem
            }
        }
    }
    return array
}







//计数排序
var countSort = function(array) {
    var hash = {}
    var newarr = []
    for(var i = 0; i < array.length; i++){
        var num = array[i]
        if (hash[num] != undefined){
            hash[num] ++
        } else {
            hash[num] = 1
        }
    }
    var max = getArrMax(array)
    for(var j = 0; j < max; j++){
        if (hash[j] == undefined){
            //什么也不做
        } else {
            for(var count = 0; count < hash[j]; count++){
                newarr.push(j)
            }
        }
    }
    return newarr
}
var getArrMax = function(array){
    var max = array[0]
    for (var i = 1; i < array.length; i++){
        if (array[i] > max){
            max = array[i]
        }
    }
    return max
}


//插入排序
var insertSort = function(array){
    for(var i = 1; i < array.length; i++){
        var value = array[i]
        for(var j = i - 1; j > -1 && array[j] > value; j--){
            array[j + 1] = array[j]
        }
        array[j + 1] = value
    }
    return array
}



//桶排序
function bucketSort(array, step) {
    var result = [],
        bucket = [],
        bucketCount,
        l = array.length,
        i,
        j,
        k,
        s,
        max = array[0],
        min = array[0],
        temp;
    i = 1
    while(i < l){
        if (array[i] > max) {
            max = array[i]
        }
        if (array[i] < min) {
            min = array[i];
        }
        i++ 
    }
    min = min - 1;
    bucketCount = Math.ceil((max - min) / step); // 需要桶的数量

    i = 1
    while(i < l){
        temp = array[i];
        var j = 0
        j = 0
        while(j < bucketCount){
            if (temp > (min + step * j) && temp <= (min + step * (j + 1))) { // 判断放入哪个桶
                if (!bucket[j]) {
                    bucket[j] = [];
                }
                // 通过插入排序将数字插入到桶中的合适位置
                s = bucket[j].length;
                if (s > 0) {
                    k = s - 1
                    while(k >=0){
                        if (bucket[j][k] > temp) {
                            bucket[j][k + 1] = bucket[j][k];
                        } else {
                            break;
                        }
                        k--                        
                    }
                    bucket[j][k + 1] = temp;
                } else {
                    bucket[j].push(temp);
                }
            }
            j++
        }
        i++
    }

    i = 0
    while(i < bucketCount){// 循环取出桶中数据
        if (bucket[i]) {
            k = bucket[i].length;
            for (j = 0; j < k; j++) {
                result.push(bucket[i][j]);
            }
        }
        i++
    }
    return result;
}














