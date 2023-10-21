///Easy Going////
// for (let i = 0 ; i <= 20 ; i++){
//     console.log(i);
// }

// Get Even///
// for (let i = 0 ; i <= 200 ; i +=2){
     
// console.log(i);
// }


//Fizz Buzz ///


    // function fizzBuzz(num){

    //     for (let i = 1 ; i <= num ; i++){
    //         if (i % 3 === 0 && i % 5 === 0) console.log( 'Fizz_Buzz');
    //             else if(i % 3 === 0 ) console.log ('Fizz');
    //                 else if(i % 5 === 0 ) console.log ('Buzz');
    //                     else console.log('.');
    
    //     }

    // }
    // fizzBuzz(60);

//Wild Wild Life///
            //Name    //Animal //Age //Home town
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Part 1//
plantee[2]+= 1;console.log(plantee);

//Part 2//
wolfy[3]= 'Gotham City';console.log(wolfy);

//Part 3 //
dart.push('Hawkins');console.log(dart);
//or
// dart[4]='Hawkins';console.log(dart);

//Part 4//
wolfy[0]='Gameboy';console.log(wolfy);
//or
wolfy.splice(0,0,'gameboy');console.log(wolfy);