/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 19;
console.log(votingAge > 18);


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let firstName = 'Elijah';

if(firstName === 'Elijah') {
    firstName = 'Eli';
} else {
    firstName = 'Bob';
}

console.log(firstName);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let stringToInt = '1999';
console.log(stringToInt);

stringToInt = Number(stringToInt);
console.log(stringToInt);

//Task d: Write a function to multiply a*b 

function multiplyEx(num1, num2) {
    return num1 * num2;
}


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function humanToDog(age) {
    return age * 7;
}


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

function dogFeeder(pounds, age) {
    if(age < 1) {
        return puppyFeeder(pounds, age);
    } else {
        return foodCalculator(pounds);
    }
}

function puppyFeeder(pounds, age) {
    if (age < .26) {
        return pounds * .1;
    } else if(age <.59) {
        return pounds * .05;
    } else {
        return pounds * .4;
    }
}

function foodCalculator(weight) {
    if(weight < 6) {
        return weight * .05;
    } else if(weight < 11) {
        return weight * .04;
    } else if(weight < 16) {
        return weight * .03;
    } else {
        return weight * .02;
    }
}


// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
console.log(dogFeeder(15,1));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


/*
function RPS(play) {
    // generates a random number between 0-2 and uses that to get computer played rps
    let computer = assignComputer(Math.floor(Math.random() * 3));       

    return results(play.toLowerCase(), computer);
}

function assignComputer(num) {
    let computer = '';
    if (num === 0) {
        computer = 'rock';
    } else if (num === 1) {
        computer = 'paper';
    } else {
        computer = 'scissors';
    }

    return computer;
}

function results(play, computer) {
    if ((play === 'scissors' && computer === 'paper') || (play === 'paper' && computer === 'rock') || 
        (play === 'rock' && computer === 'scissors')) {
            return 'You win!';
    } else if (play === computer) {
        return 'You tied!';
    } else {
        return 'You lost!';
    }
}

console.log(RPS('scissors')); */
    

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
    return km * 1.60934;
}

console.log(kmToMiles(5));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCM(feet) {
    return (feet * 12) * 2.54;
}

console.log(feetToCM(6));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num) {
    let annoying = ""
    for(let i = num; i > 0; i--) {
        holder = i.toString();

        annoying += `${holder} bottles of soda on the wall, ${holder} bottles of soda, take one down pass it around, ${(i - 1).toString()} bottles of soda on the wall! `;
    }

    return annoying;
}

console.log(annoyingSong(5));


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeCalculator(grade) {
    if (grade > 89) {
        return 'A';
    } else if (grade > 79) {
        return 'B';
    } else if (grade > 69) {
        return 'C';
    } else if (grade > 59) {
        return 'D';
    } else {
        return 'F';
    }
}
  
console.log(gradeCalculator(95));
console.log(gradeCalculator(75));
console.log(gradeCalculator(45));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function countVowels(word) {
    word = word.toLowerCase();
    let count = 0

    for (let i = 0; i < word.length; i++) {
        if (isVowel(word[i])) {
            count ++;
        }
    }
    
    return count;
}

function isVowel(character) {
    return character === 'a' || character === 'e' || character === 'i' || character == 'o' || character === 'u';
}

console.log(countVowels("orange"));


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function RPS() {
    //take answer from console
    //console.log("Lets play RPS");
    let play = prompt("Lets play RPS!");

    // generates a random number between 0-2 and uses that to get computer played rps
    let computer = assignComputer(Math.floor(Math.random() * 3));       

    return results(play.toLowerCase(), computer);
}

function assignComputer(num) {
    let computer = '';
    if (num === 0) {
        computer = 'rock';
    } else if (num === 1) {
        computer = 'paper';
    } else {
        computer = 'scissors';
    }

    return computer;
}

function results(play, computer) {
    if ((play === 'scissors' && computer === 'paper') || (play === 'paper' && computer === 'rock') || 
        (play === 'rock' && computer === 'scissors')) {
            return 'You win!';
    } else if (play === computer) {
        return 'You tied!';
    } else {
        return 'You lost!';
    }
}



