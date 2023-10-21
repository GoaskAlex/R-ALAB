///Easy Going////
// for (let i = 0 ; i <= 20 ; i++){
//     console.log(i);
// }

// Get Even///
// for (let i = 0 ; i <= 200 ; i +=2){
     
// console.log(i);
// }


//Fizz Buzz ///


    function fizzBuzz(num){

        for (let i = 1 ; i <= num ; i++){
            if (i % 3 === 0 && i % 5 === 0) console.log( 'Fizz_Buzz');
                else if(i % 3 === 0 ) console.log ('Fizz');
                    else if(i % 5 === 0 ) console.log ('Buzz');
                        else console.log('.');
    
        }

    }
    fizzBuzz(60);