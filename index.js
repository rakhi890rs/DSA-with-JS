// a=10;
// var a;
// console.log(a);


// let a=10;
// let b=20;
// // a=a+b;
// // b=a-b;
// // a=a-b;
// // console.log(a,b);
// [a,b]=[b,a];
// console.log(a,b);


// console.log(Math.floor(10/3));

// let a=true;
// let b=++a;
// console.log(a);

// console.log(Math.ceil(10.9));
// console.log(Math.floor(10.9));
// console.log(Math.round(6.1));
// console.log(Math.abs(-5));
// console.log(Math.trunc(2.389246399));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(25));
// console.log(Math.cbrt(27));
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.random());
// console.log(Math.round(Math.random()*10));


// compount interest
// let p=Number(prompt("Enter the principal amount"));
// let r=Number(prompt("Enter the rate of interest"));
// let t=Number(prompt("Enter the time period"));
// let ci=p*(Math.pow((1+r/100),t));
// // a=p*(1+r/100)^t;
// // ci=a-p
// console.log(ci);



// Q generate otp
// 1000-9999
// console.log(Math.floor(Math.random()*9000)+1000);


// area of triangle by using heron's formula
// let a=Number(prompt("Enter the first side of triangle"));
// let b=Number(prompt("Enter the second side of triangle"));
// let c=Number(prompt("Enter the third side of triangle"));
// let s=(a+b+c)/2;
// let area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
// console.log(area);


// circumference of circle
// let r=Number(prompt("Enter the radius of circle"));
// console.log(2*Math.PI*r);







//           linear search
// prompt=require("prompt-sync")();
// let arr=[1,2,3,4,5];
// let n=Number(prompt("Enter the element to be searched"));
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==n){
//         console.log("Element found at index "+i);
//         break;
//     }
// }  


// binary search
// Array should be sorted
// let arr=[1,2,3,4,5];

// binarySearch(arr,3);
// console.log(arr);
// function binarySearch(arr,n){
//     let s=0;
//     let e=arr.length-1;
//     while(s<=e){
//         let mid=Math.floor((s+e)/2);
//         if(arr[mid]==n){
//             return mid;
//         }
//         else if(arr[mid]<n){
//             s=mid+1;
//         }
//         else{
//             e=mid-1;
//         }
//     }
//     return -1;
// }



//         bubble sort
// let arr=[5,9,2,7,1];
// let n=arr.length;
// for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);


//         selection sort
// let arr=[5,9,2,7,1];
// for(let i=0;i<arr.length;i++){
//     let small=i;
//     for(let j=i+1;i<arr.length;j++){
//         if(arr[j]<arr[small]){
//             small=j;
//         }
//     }
//     if(small!=i){
//         let temp=arr[i];
//         arr[i]=arr[small];
//         arr[small]=temp;
//     }
// }
// console.log(arr);




//         insertion sort
// let arr=[5,9,2,7,1];
// for(let i=1;i<arr.length;i++){
//     let key=arr[i];
//     let j=i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1]=arr[j];
//         j--;
//     }
//     arr[j+1]=key;
// }
// console.log(arr);





