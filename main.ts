console.log("Hello World");

//tsc --init for tsconfig.json
//npm i @types/node -D
//npm init -y
//----------------variables----------------//

let favoriteColor = "blue";
favoriteColor = "Red";
console.log(favoriteColor);
//----------------Naming Convention----------------//

//----camelCase----//
//----snake_case----//
//----PascalCase----//

//----Strong Typing----//
/*
    TypeScript assign types to variables to ensure they are used correctly
    throughout your code.
    This helps prevent errors,such as mixing up numbers with text or trying
    to perform operations on incompatible data types.
    TypeScript enhances javascript by adding a type system. 
*/ 
let userName:string = "This is my Name";

let userLocation:string = "Governor House";
let userCoordinate:number = 3124.2;
let isUserStudent:boolean = true;
console.log(userLocation);
console.log(userCoordinate);
console.log(isUserStudent);
let someVariable:any = "This is my kingdom come";
console.log(someVariable);
someVariable = 10;
console.log(someVariable);
console.log(typeof(someVariable));