function konversiMenit(menit) {
    // you can only write your code here!
    var detik = Math.floor(menit % 60)
    var jam = Math.floor(menit / 60)
  
    if(detik < 10){
      return (jam +":0"+ detik)
    } else {
       return (jam +":"+ detik)
    } 
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
