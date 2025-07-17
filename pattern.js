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


// jkjkj