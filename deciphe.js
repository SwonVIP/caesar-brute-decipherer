"use strict";

function startDeciphe(){
    const inputValue = document.getElementById("inputField").value.toUpperCase();
    document.getElementById("outputField").value = incDeciphe(inputValue);
}

function incDeciphe(input){

    let targetString = '';
    //duplicate array to allow transformation based on high key values
    let decipheArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for(let key = 1;key <= 26;key++)
    {
        targetString = targetString + '\r\n Key' + key + ': ';

        for(let i=0;i<=input.length;i++)
        {
            //filter placeholder chars out
            if(input.charAt(i) != ' ' && input.charAt(i) != ',' && input.charAt(i) != '.' && input.charAt(i) != '-')
            {
                //only iterate through the first half of the array minus offset
                for(let z=0;z<=((decipheArray.length/2)-1);z++)
                {
                    if(input.charAt(i) == decipheArray[z])
                    {
                        //deciphered char will match the char in the array plus the key value
                        targetString = targetString + decipheArray[z+key];   
                    }
                }
            }
            else
            {
                targetString = targetString + ' ';
            }
        }
    }
    return targetString;
}
