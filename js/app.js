'use strict';

let userName = prompt('Welcome to my website! What is your name?')

alert('Hello ' + userName + '!' + ' Nice to meet you!')
document.write (userName)

let study = prompt ('Do you think that I finished my study?')
if (study.toLocaleLowerCase() == 'yes' || study.toLocaleLowerCase() == 'y'){
    console.log ('Yes, you are correct!');
    alert('Yes, you are correct!');
    }
    else{
        alert('No, you are not correct! I finished it the last year!');
    }



let age= prompt('Do you think my age is above 30 years?')
if(age.toLocaleLowerCase() == 'yes' || study.toLocaleLowerCase() == 'y'){
    alert('No! I am below thirty');
} else{
    console.log ('Yes! your answer is correct!');
    alert('Yes! your answer is correct!');

}



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
    break;
case 'n':
    console.log ('Yes! correct answer :)')
    alert('Yes! correct answer :) ')
    break;
default:
    alert('Please answer in yes/no or y/n')

}



let work = prompt('Do you think I did not work before?')
if (work.toUpperCase() == 'NO' || work.toUpperCase()=='N'){
console.log ('Right! I worked at JUST university');
    alert('Right! I worked at JUST university');
} else{
    alert('Wrong answer! I used to work in the past years!');
}



let like = prompt('Do you think that I like programming?')
if (like.toUpperCase() == 'YES' || like.toUpperCase() == 'Y') {
    console.log('Exactly! right answer!');
    alert('Exactly! right answer!');    
} else{
    alert('No! I love programming!');
}




