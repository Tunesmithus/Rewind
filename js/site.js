//Get the string from page 
//Controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);

}


//Reverse the string
//logic function
function reverseString(userString){

    let reverseString = [];

    //reverse a string using a for loop
    for (let index = userString.length - 1; index > 0; index--) {

        reverseString += userString[index];
        
    }

    return reverseString;

}


//Display reversed string to user
// View Function
function displayString(reverseString){

    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${reverseString}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}