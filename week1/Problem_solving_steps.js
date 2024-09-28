/*''Learning Objectives
Comment in a code file to describe problem-solving steps.
Analyze a problem in order to determine how to solve it.
Directions
Read through the user story below.
In a VS Code file, do the following:
Using comments, write out 1 strategy that could be used to solve the problem.
Using comments, create pseudocode (an informal but readable description of code that uses regular language to outline a solution) to apply one of the strategies to solve the problem.
Using comments, write a short paragraph that answers: What is the hardest part of problem-solving?
User Story
A computer application needs to be able to identify if a written paragraph is written in First, Second, or Third Person 
*/

//the first strategy that could be used to solve this problem is to define the most used pronouns in the paragraph to identify if it is written in first ,second and third person.


/* pseudocode : 
we set countFirst =0
countSecond=0
countThird=0
creat a function identifyParagraph(paragraph){
create 3 tables tha contane firstPronouns/secondPronouns/thirdPronouns
first identify each word in a string called paragraph as a parameter we iterate the paragraphe with a for loop{
a for loop  , with an if condition (pargraph[i-1]==" " || paragraph[i+1]==" "){
than we compare if (paragrah[i]== firstPronouns[i]){
countFirst+=1}else if (paragrah[i]== secondPronouns[i]){
countSecond+=1}else if (paragrah[i]== thirdPronouns[i]){
countThird+=1}
if (math.max(countFirst,countSecond,countThird)==countFirst){
console.log("This paragraph is written in first person")} else if (math.max(countFirst,countSecond,countThird)==countSecond)
{
console.log("This paragraph is written in second  person")
}else {
console.log("This paragraph is written in third person")
}
}


*/