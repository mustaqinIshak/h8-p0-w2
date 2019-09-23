// 1. Melakukan Looping Menggunakan While

var angka = 1;
console.log("LOOPING PERTAMA")
while(angka <= 20){
  if ( angka % 2 == 0) {
    console.log(angka + " - I love coding");
  }
   angka++ 
}


var angka2 = 20;
console.log("LOOPING KEDUA")
while(angka > 0){
  if ( angka % 2 == 0) {
    console.log(angka + " - I love coding");
  }
  angka--
}

// 2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA")
for(let i = 1; i <= 20; i++){
  console.log(i + " - I love coding")
}
console.log("LOOPING KEDUA")
for(let i = 20; i > 0; i--){
  console.log(i + " I will become fullstack developer")
}

// 3. Angka Ganjil dan Genap

for(let i = 1; i <= 100; i++){
  if(i % 2 == 0) {
    console.log(i + " GENAP");
  } else {
    console.log(i + " GANJIL");
  }
}

for(let i = 1; i <= 100; i+=2){
  if(i % 3 == 0){
    console.log(i + " KELIPATAN 3") 
  }
}
for(let i = 1; i <= 100; i+=5){
  if(i % 6 == 0){
    console.log(i + " KELIPATAN 6") 
  }
}
for(let i = 1; i <= 100; i+=9){
    if(i % 10 == 0){
      console.log(i + " KELIPATAN 10") 
    }
  }