//1.print even index as even
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

//2.sum
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 sum += numsArr[i]
}
console.log(sum);
//3.sum of inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);
//4.inner array index
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
      if(inner_array[j] %2 == 0 )
      {
       numsArr [i][j] = "even"
       }
}
//console.log(numsArr);

//5.print inner array reverse
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = numsArr.length-1; i >=0; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- )
     str_all +=inner_array[j] +" ";
}
//console.log(str_all);

//6.sum of odd and even elements of inner array

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0)
 {
 sum_odd += inner_array[j]
 }
 else
 {
 sum_even += inner_array[j]
 }
}
}
//console.log(sum_odd);
//console.log(sum_even);
