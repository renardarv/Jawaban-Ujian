
const randomize = num => {

  let arr = []
  let sum = 0

  for(let i = 0; i < num; i++){

    let rand = Math.ceil(Math.random() * 99)
 
    if(rand <= 10){ 
      arr.push(2)
      sum += 2
    }      
    else if(rand <= 20 && rand >= 10){ 
      arr.push(3)
      sum += 3
    }
    else if(rand <= 30 && rand >= 20){ 
      arr.push(5)
      sum += 5
    }
    else if(rand <= 40 && rand >= 30){ 
      arr.push(7)
      sum += 7
    }
    else if(rand <= 50 && rand >= 40){ 
      arr.push(11)
      sum += 11
    }
    else if(rand <= 60 && rand >= 50){ 
      arr.push(13)
      sum += 13
    }
    else if(rand <= 70 && rand >= 60){ 
      arr.push(17)
      sum += 17
    }
    else if(rand <= 80 && rand >= 70){ 
      arr.push(19)
      sum += 19
    }
    else if(rand <= 90 && rand >= 80){ 
      arr.push(23)
      sum +=23
    }
    else{ 
      arr.push(29)
      sum += 29
    } 
  }
 return `array : [${arr}] \nsum   : ${sum}`
}


console.log(randomize(5))