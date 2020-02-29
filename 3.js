
const sequence = num => {

  let arr = [];
  arr.push(num)

  while(num !== 1){
    
    if(num % 2 === 0){
      arr.push(num/2)
      num = num/2
    } 
    else if(num % 2 === 1){
      arr.push(3*num + 1)
      num =  3*num + 1
    } 
    else{  
      return 'Parameter harus bilangan positif!'
      break; 
    }
  }
  return `array: [${arr}] \ncount: ${arr.length}`
}

console.log(sequence(13)) // array: [13,40,20,10,5,16,8,4,2,1]
                          // count: 10
console.log(sequence(3))  // array: [3,10,5,16,8,4,2,1]
                          // count: 8
console.log(sequence(-9)) // Parameter harus bilangan positif!
