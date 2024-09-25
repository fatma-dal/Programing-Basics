//a function howMuchLeftOverCake 
//that passes  2 parameters numberOfPieces , numberOfPeople
//and return the remaining 
function howMuchLeftOverCake(numberOfPieces,numberOfPeople){

if (numberOfPieces % numberOfPeople==0){
console.log("no leftovers for you!")
}else if (numberOfPieces % numberOfPeople ==2)
    {console.log("You have Some leftovers")}
        else if (numberOfPieces % numberOfPeople >=3 && numberOfPieces % numberOfPeople <=5){
        console.log("You have leftovers to share")
        }else {
        console.log("Hold an other party!")
        }

}
howMuchLeftOverCake()