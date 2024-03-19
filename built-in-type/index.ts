let firstName: string;
let lastName : string;
let fullName: string;
let userId : number;
let isActivated : boolean;

firstName = "abadat";
lastName = " hossain";
userId = 101;
isActivated = true;
fullName= firstName.concat(lastName)


console.log(userId)
console.log(firstName)
console.log(lastName)
console.log(isActivated)
console.log(fullName)

console.log(`your userId: ${userId}, userName: ${firstName+lastName}, isActivated: ${isActivated}`)

console.log(firstName.split(""))


function toDisplay():void{
    console.log("abadat")
}
toDisplay()