const minNum = 7;
const maxNum = 21;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;  /* To keep track of attempts of user */
let guess;        /* user input */
let running = true;  /* Boolean because to exit the game when its over */

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid Number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid Number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("To low tyy again");
        }
        else if(guess > answer){
            window.alert("To high tyy again")
        }
        else{
            window.alert(`you'r gussing number is ${answer}. It took ${attempts} attempts`);
        }running = false; /* exit the game */
    }

}