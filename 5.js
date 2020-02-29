
const triangle = n => {

  let num = n + 1
  let star = ''

  for( let i = 1; i < num; i++){
    
    for( let j = 0; j + i < num - 1; j++){

      star += ' '
    }
    for( let k = 0; k < i; k++){

      star += '*'
    }   
    star += '\n'
  }
  return star
}

console.log(triangle(5))