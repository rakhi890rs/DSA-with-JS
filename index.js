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



// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);


// let u;
// do{
//     console.log("namaste");
//     u=prompt("Enter yes or no").toLocaleLowerCase();
// }while(u=="yes");


// guess the number
// let com=Math.floor(Math.random()*100);
// let user;
// do{
//     user=Number(prompt("Enter the number"));

//     if( isNan(user)|| user<0 || user>100){
//         console.log("Invalid input");
//         continue;}
// if(user>com){
//     console.log("Number is too large"); }
// else if(user<com){
//     console.log("Number is too small"); }
// else{
//     console.log("Congratulations you have guessed the correct number"+com);
// }

// }while(user!==com);  

// do{
//     let num1=Number(prompt("Enter the first number"));
//     let num2=Number(prompt("Enter the second number"));
//     let op=prompt("Enter the operator");
//     switch(op){
//         case '+':
//             console.log(num1+num2);
//             break;
//         case '-':
//             console.log(num1-num2);
//             break;
//         case '*':
//             console.log(num1*num2);
//             break;
//         case '/':
//             console.log(num1/num2);
//             break;
//         default:
//             console.log("Invalid operator");
//             break;              
//     }
//     userInput= prompt("Do you want to continue?");
//     userInput=userInput.toLowerCase();
// }while();














// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log("");
//     // process.stdout.write("*");

// }

// const prompt = require("prompt-sync")();
// let n=Number(prompt("Enter a number"));
// console.log(n);

// for(let i=1;i<n;i++){
//     for(let j=1;j<=n;j++){
//         process.stdout.write("*");
//     }
//     console.log("");
// }

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(j.toString());
//     }
//     console.log(" ");
// }

// inverted star
// for(let i=n;i>=1;i--){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log("");
// }

// for(let i=0;i<n;i++){
//     let str="";
//     for(let j=0;j<i;j++){
//         str+=String.fromCharCode(65+j);
//     }
//     console.log(str);
// }
// for(let i=0;i<n;i++){
//     // process.stdout.write("*");
//     for(let j=0;j<i;j++){
//         process.stdout.write(" ");
//     }
//     console.log("*");
// }


// mirror star pattern
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write("  ");
//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write("* ");
//     }
//      console.log();

// }


//  x pattern
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==j || i+j==n+1){
//             process.stdout.write("* ");
//         }
//         else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log();
// }

//  v pattern
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=(n*2)-1;j++){
//         if(i==j|| i+j==n*2){
//             process.stdout.write("* ");
//         }
//         else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log();
// }


// strong number
// const prompt = require("prompt-sync")();
// let n=Number(prompt("Enter a number"));
// let sum=0;
// let num=n;
// while(num>0){
//     let fact=1;
//     let digit=num%10;
//     for(let i=1;i<=digit;i++){
//         fact*=i;
//     }
//     sum+=fact;
//     num=Math.floor(num/10);
// }
// if(sum==n){
//     console.log(n+" is a strong number");
// }
// else{
//     console.log(n+" is not a strong number");
// }





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













// advance array




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





