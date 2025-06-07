
//             Array
// let arr=[10,50,69,73,7];
// arr.push(100); // insert at last
// arr.pop(); // delete at last
// arr.shift(); // delete at first
// arr.unshift(200); //insert at first
// console.log(arr); 

// let arr= new Array(5);// 0-4 
// // arr[0]=10;
// // arr[1]=20;  
// // arr[2]=30;
// // arr[3]=40; 
// // arr[4]=50;
// // arr[8]=100; //dynamic array

// push(100); //dynamic array
// console.log(arr);

// let prompt=require("prompt-sync")();
// let n=Number(prompt("Enter the size of array"));
// let arr=new Array(n);
// let sum=0;
// for(let i=0;i<n;i++){
//     arr[i]=Number(prompt("Enter the element"));
//     sum+=arr[i];
// }
// console.log(arr);
// console.log(sum);




// max element in array
// let arr=[10,50,69,73,7];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//      max=arr[i];
// }
// }
// console.log(max);


// let arr=[10,50,69,73,7];
// let a=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<a){
//         a=arr[i];
//     }
// }
// console.log(a);



//                       2nd largest element in array
// let arr=[10,50,69,73,7];
// let max=Math.max(arr[0],arr[1]);
// let sMax=Math.min(arr[0],arr[1]);
// for(let i=2;i<arr.length;i++){
//     if(arr[i]>max){
//         sMax=max;
//         max=arr[i];
//     }
//     else if(arr[i]>sMax && arr[i]<max){
//         sMax=arr[i];
//     }
// }
// console.log(sMax);



//        reverse of array
// let arr=[10,50,69,73,7];
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }



//      reverse of array using temp array
// let arr=[10,50,69,73,7];
// let temp = new Array(arr.length);
// let i=0;
// for(let j=arr.length-1;j>=0;j--){
//     temp[i]=arr[j];
//     i++;
// }
// console.log(temp);
// console.log(arr.reverse());



//      reverse of array using swapping
// let arr=[10,50,-69,73,7];
// let i=0,j=arr.length-1;
// while(i<j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }
// console.log(arr);