function runProgram(input){
    var input = input.split("\n");
    let N = +input[0];
    let arr = input[1].split(" ").map(Number);
    qS(arr,0,N-1);
    console.log(arr.join(" "))
     
 }
 function qS(arr,left,right){
     if(left>=right){
         return
     }
     let index = p(arr,left,right);
     qS(arr,left,index-1);
     qS(arr,index+1,right);
 }
 
 function p(arr,left,right){
     let random = Math.floor(Math.random() * (right - left) + left);
     swap(arr, left, random);
     let pivot = arr[left];
     let i= left;
     let j= right;
     
     while(i<j){
         while(arr[i] <= pivot && i<right){
             i++;
         }
         while(arr[j] > pivot && j>left){
             j--;
         }
         if( i<j ){
             swap(arr,i,j);
         }
     }
     swap(arr,left,j);
     return j;
 }
 function swap(arr,a,b){
     let temp = arr[a];
     arr[a] = arr[b];
     arr[b] = temp;
 }
  
 
 if (process.env.USERNAME === "hriti") {
   runProgram(`5
   3 5 0 9 8`);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }