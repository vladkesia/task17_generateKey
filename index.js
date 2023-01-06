const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';



const generateKey = (lenght, simbols ) => {
  let arr = []
  for (let i = 0; i<lenght;i++){
    let random = 1-0.5 + Math.random() * (simbols.length-1 - 1 + 1);

    arr.push(simbols[+random.toFixed(0)])
  }

  return arr.join('')
}
const key = generateKey(30, characters);
console.log(key); // eg599gb60q926j8i
