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
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// //Part 1//
// plantee[2]+= 1;console.log(plantee);

// //Part 2//
// wolfy[3]= 'Gotham City';console.log(wolfy);

// //Part 3 //
// dart.push('Hawkins');console.log(dart);
// //or
// // dart[4]='Hawkins';console.log(dart);

// //Part 4//
// wolfy[0]='Gameboy';console.log(wolfy);
//or
// wolfy.splice(0,1,'Gameboy');console.log(wolfy);

////Yell at the Ninja Turtles///

// const turtles =['Donatello','Leonardo','Raphael','Michaelangelo'];

// for(const ninja of turtles ){
//     console.log(ninja.toUpperCase());
// }

//Methods Revisited //

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 
'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
 
// const index = favMovies.indexOf('Titanic');
// console.log(index);

//P1//
// const orgin= favMovies.sort();
// console.log(orgin);

//P3//

// const poppy= favMovies.pop();
// console.log(poppy);

//P4//
// const guard= favMovies.push('Guardians of the Galaxy');
// console.log(favMovies);

//P5//
// favMovies.reverse()
// console.log(favMovies);

//P6&7//
// favMovies.shift();
//  console.log(favMovies);

// favMovies.unshift();
// console.log(favMovies);

//P8//
// const django =favMovies.indexOf('Django Unchained');
// console.log(django);

// const avatar= favMovies.splice(3,1, 'Avatar' );
// console.log(favMovies);

//P9//

//  favMovies.forEach((favMovies,index)=>{
//      console.log(index, favMovies);
    
//  });

// const newFavs= favMovies.slice(0,9);
// console.log(newFavs);

// const fast= newFavs.indexOf('Fast and Furious');
// console.log(fast);

//Where is Waldo //

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                       ["Lucinda", "Jacc", "Neff", "Snoop"],
//                       ["Petunia", ["Baked Goods", "Waldo"]]];

//                     const newWhereIsWaldo = whereIsWaldo.slice(0, 1).concat(whereIsWaldo.slice(2))
//                     //   console.log(newWhereIsWaldo)
//                     newWhereIsWaldo[1][2]='No One';
//                     console.log (newWhereIsWaldo);
                   

//                        const waldo= newWhereIsWaldo[2][1][1];
//                        console.log(waldo);

//ExCitied Kitten//
const s='S'
let repS=''

const phrase=["...human... why you taking pictures of me...?","...the catnip made me do it...","...why does the red dot always get away...?"]
let catTalk =""

for( let i = 0 ; i < 20; i++){
    repS+=s;
    if(i % 2 === 0 ){
       catTalk=phrase[Math.floor(Math.random()*phrase.length)];
    }
    
}
console.log('Love me, pet me! '+'H'+repS+ catTalk);