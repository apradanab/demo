// 1. Imprime por consola el string 'Hello World'.
console.log('Hello world');

// 2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
let name1 = 'Alejandro';
const name2 = 'Jose';
console.log(name1, name2)

// 3. Cambia ahora el valor de una de las dos variables e imprime por consola.
name1 = 'Sergio';
console.log(name1);

// 4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
let num1 = 1;
let num2 = 2;
console.log(num1 + num2)

// 5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
 let word1 = 'word';
 let word2 = 'word2';
 console.log(word1 + ' '+ word2)

// 6. Crea una función que imprima por consola el string 'Hello World'.
function greetings (){
  console.log('Hello world');
}
greetings();

//const greet1 = function(){}
//const greet2 = () => {}

// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
function mult(i,j){
  console.log(i*j)
}
mult(8,9)

//const mult=(a,b) => {console.log(a*b)}

// 8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
function cube(i){
 console.log(i*i*i)
}
cube(2)
//const makeCubed = (a)=>{console.log(a**3);}

// 9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro.
function area(i,j){
  console.log((i*j)+' m^2')
}
area(2,3)
// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.
//const random = () =>{ Math.random()*11 // evitar decimal Math.trunc()}
const random = ()=>{
const n = Math.random()
const result = Math.trunc(n*11)
console.log(result);
};

for(let i=0; i<10; i++){
  random();
}

// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
const app =() => {
  const randomNumber = random()
  const userNumber = prompt('Introduce un número del 1 al 10');

  if (randomNumber === userNumber){
    console.log('Has acertado');
  }else{
    console.log('No has acertado')
  }
}

app()

// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
const oddOrEven = (num) => {
  if (num % 2) {
    console.log('El número ${num} es impar');
  return;
}
console.log('El número ${num} es par')
}
oddOrEven(7);
oddOrEven(14);

// 13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).
const reserver(yourString){
  for (let i = yourString.lenght; i >= 0; i++) {
    console.log(yourString[i]);
  }
}
reserver('estanteria');

// 14. Crea una función que devuelva la tabla de multiplicar de un número introducido como parámetro.
// LLama a la función desde console.log() para que el resultado se imprima por consola
const multiplicationTable = (num) => {
  let result =[];
  for (let i = 0; i < 11; i++){
    result.push(num* i);
  }
  return result;
}

console.log(multiplicationTable(5))

// 15. Crea una función que reciba un número por parámetros y retorne si el número recibido es un número primo.
// LLama a la función desde console.log() para que el resultado se imprima por consola
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i =2; i < num; i++){
    if(num % i == 0){
      return false;
    } else {
      return true;
    }
  }
}

console.log(isPrime(11));
