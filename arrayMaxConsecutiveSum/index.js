function twoDimensionArray(a, b) {
  let arr = [];

  // creating two dimensional array
  for (let i = 0; i< a; i++) {
      for(let j = 0; j< b; j++) {
          arr[i] = [];
      }
  }

  // inserting elements to array
  for (let i = 0; i< a; i++) {
      for(let j = 0; j< b; j++) {
          arr[i][j] = null;
      }
  }
  return arr;
}


let str = "km m mm cm"

let st1 = ["km = 1000 m", "m = 100 cm", "cm = 10 mm"]

let dms = str.split(" ")

console.log(dms)

let mat = twoDimensionArray(dms.length,dms.length)

//console.log(mat)

dms.forEach( dm =>{

  st1.forEach(st => {
    
  })


})


console.log(mat)