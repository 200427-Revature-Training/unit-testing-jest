/*
    * FizzBuzz - Write a function which accepts a number as input.
    * If the number is divisible by 3 and not divisible by 5, return 'fizz'.
    * If the number is divisible by 5 and not divisible by 3, return 'buzz'.
    * If the number is both divisible by 3 and 5, return 'fizzbuzz'.
    * Otherwise return the number.
*/

/* export fizzbuzz - the fizzbuzz function can be imported in other .ts files */

/**
    * FizzBuzz - Write a function which accepts a number as input.
    * If the number is divisible by 3 and not divisible by 5, return 'fizz'.
    * If the number is divisible by 5 and not divisible by 3, return 'buzz'.
    * If the number is both divisible by 3 and 5, return 'fizzbuzz'.
    * Otherwise return the number.
    * @param input - input number
    * @return string | number - dependenant on input
*/
export const fizzbuzz = (input: number) => {
    if(input %3 == 0 && input %5 != 0){
        return 'fizz';
    }
    
    if ( (input % 3 != 0) && (input % 5 == 0) ) { 
        return 'buzz';
    }
    if (input % 3 == 0 && input % 5 == 0){
        return 'fizzbuzz';
    }
    if (input % 3 != 0 && input %5 != 0) {
        return input;
    }
    
};
