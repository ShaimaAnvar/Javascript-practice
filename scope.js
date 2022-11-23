// const fruit ="orange"
// function fruits(){
//     fruit = "apple";
//     console.log(fruit);
// }
// console.log(fruit);
// fruits();
// console.log(fruit);
//block scope
// program showing block-scoped concept
// global variable
// let a = 'Hello';

// function greet() {

//     // local variable
//     let b = 'World';

//     console.log(a + ' ' + b);

//     if (b == 'World') {

//         // block-scoped variable
//         let c = 'hello';

//         console.log(a + ' ' + b + ' ' + c);
//     }

//     // variable c cannot be accessed here
//     console.log(a + ' ' + b + ' ' + c);
// }

// greet();

let a=1;
function sum(){
    let b= 2;
    if (a!=b){
       let c=4;
        console.log(a+b+c);
    }
    console.log(a+b+c);
}
sum();