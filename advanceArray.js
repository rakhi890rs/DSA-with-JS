 //advance array




//         all 0's to the end of array and 1's to the front
// let arr=[1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1];
// let i=0,j=0;
// while(i<arr.length){
//     if(arr[i]==0){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         // i++;
//         j++;
//     }
//     i++;
// }
// console.log(arr);




//       rotate array by 1 position to the left
// let arr=[1,2,3,4,5];
// let temp=arr[0];
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=temp;
// console.log(arr);



//       rotate array by 1 position to the right
// let arr=[1,2,3,4,5];
// let temp=arr[arr.length-1];
// for(let i=arr.length-1;i>0;i++){
//     arr[i]=arr[i-1];
// }
// arr[0]=temp;
// console.log(arr);




//          rotate array by k position to the right
// let arr=[1,2,3,4,5];
// let k=1;
// for(let j=1;j<=k;j++){
//     // let copy=arr[0];
//     for(let i=0;i<arr.length-1;i++){
//         arr[i]=arr[i+1];
//     }
//     arr[arr.length-1]=copy;
// }
// console.log(arr);




//         rotate array by k position to the left
// let arr=[1,2,3,4,5];
// let temp= new Array(arr.length);
// let k=7;
// k=k%arr.length;
// for(let i=0;i<arr.length;i++){
//     temp[i]=arr[(i+k)%arr.length];
// }
// console.log(temp);



//        rotate array by k position to the left using reverse method
// let prompt=require("prompt-sync")();
// let arr=[1,2,3,4,5];
// let k=Number(prompt("Enter the number of rotations"));
// k=k%arr.length;
// reverse(arr,0,arr.length-1);
// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1);
// console.log(arr);

// function reverse(arr,i,j){
//     while(i<j){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i++;
//         j--;
//     }
// }