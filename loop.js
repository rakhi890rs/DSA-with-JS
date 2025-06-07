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

