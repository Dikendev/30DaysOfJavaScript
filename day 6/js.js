const countries = [
  'Brazil',
  'Venezuela',
  'Argentina',
  'Peru',
  'Alemanha',
  'USA',
  'Bolivia',
  'Chile'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Angular',
  'Java',
  'Python',
  'Node',
  'Redux'
]

const frontStack = ['HTML', 'CSS', 'JavaScript', 'React']


//for (i = 0; i <= 10; i++) {
//  console.log(i)
//}

//for (i = 10; i >= 0; i--) {
//  console.log(i)
//}


/*
Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######


//for (let i = 1; i <=7; i++){
//  console.log('# '.repeat(i));
//}
console.log('1 i^2 i^3') 
for (let i = 0; i <= 10; i++){
  console.log(`${i}  ${i*i}  ${i*i*i}`) 
}
*/

for (let i = 0; i <=100; i++){
  if (i === 0){
    console.log(i);
  
  } if (i % 2 === 0){
    console.log(i);
  } 

  else {
    continue
  }  
}
