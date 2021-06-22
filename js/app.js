'use strict';

let userName = prompt('Welcome to my website! What is your name?')

alert('Hello ' + userName + '!' + ' Nice to meet you!')
document.write (userName)


// question number 1:.................................................


let score = 0
let study = prompt ('Do you think that I finished my study?')
if (study.toLocaleLowerCase() == 'yes' || study.toLocaleLowerCase() == 'y'){
    console.log ('Yes, you are correct!');
    alert('Yes, you are correct!');
    score = score + 1
    }
    else{
        alert('No, you are not correct! I finished it the last year!');
    }

   


// question number 2:.................................................


let age= prompt('Do you think my age is below 30 years?')
if(age.toLocaleLowerCase() == 'yes' || study.toLocaleLowerCase() == 'y'){
    alert('Yes! your answer is correct!');
    console.log ('Yes! your answer is correct!');
    score = score + 1
} else{
     alert('No! I am below thirty');    
}




// question number 3:.................................................


let accomodation = prompt ('Do you think I live in South governorates in Jorden?')
switch (accomodation.toLocaleLowerCase()){
case 'yes':
    alert ('You are not correct! I live in North governorates! ')
    break;
case 'y':
        alert ('You are not correct! I live in North governorates! ')
        break;
case 'no':
    console.log ('Yes! correct answer :)')
    alert('Yes! correct answer :) ')
    score = score + 1
    break;
case 'n':
    console.log ('Yes! correct answer :)')
    alert('Yes! correct answer :) ')
    score = score + 1
    break;
default:
    alert('Please answer in yes/no or y/n')

}





// question number 4:.................................................


let work = prompt('Do you think I did not work before?')
if (work.toUpperCase() == 'NO' || work.toUpperCase()=='N'){
console.log ('Right! I worked at JUST university');
    alert('Right! I worked at JUST university');
    score = score + 1
} else{
    alert('Wrong answer! I used to work in the past years!');
}







// question number 5:.................................................


let like = prompt('Do you think that I like programming?')
if (like.toUpperCase() == 'YES' || like.toUpperCase() == 'Y') {
    console.log('Exactly! right answer!');
    alert('Exactly! right answer!');
    score = score + 1
} else{
    alert('No! I love programming!');
}




//question number 6:..............................................

for (let i=0; i<4 ; i++){
    let guess = prompt('Guess a number!')
    let num = 5

    if (Number(guess) > num){
        alert ('This is too high')

    }else if (Number(guess) < num) {
        alert ('This is too low')

    }else if (Number(guess) == num) {
        alert ('Great! You guessed the number. It is 5!');
            score = score + 1
            break;
    }else {
        break;
    }
     
}

alert('The correct number is: 5')





// question number 7:.................................................

let color = ['red', 'blue', 'green', 'black']
console.log (color);

let guessColor = prompt ('Can you guess what is my favourite color?')


for (let i=0; i<5; i++){

    if (guessColor.toLocaleLowerCase() == color[0]) {
        alert ('Correct! Red is my favourite color!');
        score = score + 1
        break;

    } else if (guessColor.toLocaleLowerCase() == color[1]) {
        alert ('Correct! Blue is my favourite color!');
        score = score + 1
        break;

    } else if (guessColor.toLocaleLowerCase() == color[2]) {
        alert ('Correct! Green is my favourite color!');
        score = score + 1
        break;

    } else if (guessColor.toLocaleLowerCase() == color[3]) {
        alert ('Correct! Black is my favourite color!');
        score = score + 1
        break;

    } else{
        let iteration = prompt ('Try again!');
            if (iteration.toLocaleLowerCase() == color[0] || iteration.toLocaleLowerCase() == color[1] || iteration.toLocaleLowerCase() == color[2] || iteration.toLocaleLowerCase() == color[3]) {
                alert ('Great! ' + iteration + ' is my favourite color!');
                score = score + 1
                console.log (iteration)
                break;
            }
    }}

alert ('The possible answers are:  ' + color);
alert ('You got ' + score + 'out of 7!')
console.log (score)


//.....................................................................


