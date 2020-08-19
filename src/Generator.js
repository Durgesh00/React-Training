
function* greet(){
  while(true)
  { 
    const name = yield "enter name"
    console.log(`hi ${name}`) 
  }
}


const ar = [5,4,3,2,1]
function*  ArrayIterator(ar) {
  for (let i = ar.length - 1; i >= 0; i--) {
    yield ar[i];
    console.log(ar[i]); 
  }
}
