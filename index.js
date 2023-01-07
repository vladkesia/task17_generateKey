const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';



const generateKey = (lenght, simbols ) => {
  let arr = []
  for (let i = 0; i<lenght;i++){
    let random =( 0.5 + Math.random() * (simbols.length-1)).toFixed(0);
    arr.push(simbols[random])
  }
  return arr.join('')
}
const key = generateKey(30, characters);
console.log(key); // eg599gb60q926j8i
