// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

//1. Write a for loop that will traverse through an array of numbers, and print each number.

for (var i=0;i<arr1.length;i++){
    console.log(arr1[i])

}
//2. Write a for loop that will traverse through an array of numbers, and print the sum of the number and the index of the number in the array.
sum=0
 for (var i=0;i<arr2.length;i++){
      sum=sum+arr2[i]
      console.loge(i)
 }
 //3. Write a for loop that will traverse through an array of numbers, and print only the numbers greater than 5.
 for (var i=0;i<arr3.length;i++){
    if (arr3[i]>5){
        console.log(arr3[i])
    }
 }
 //Ninja Bonus: Modify your solution for #3 so that any numbers in the array that are not greater than 5 are instead replaced with a string of "No dice." This string should not be printed.

 for (var i=0;i<arr3.length;i++){
    if (arr3[i]>5){
        console.log(arr3[i])
    }else{
        console.log("No dice.")
    }
 }