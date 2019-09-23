var nama = 'Mikael';
var peran = '';

if ((nama === '' && peran === '')||(nama === '' && peran !== null)) {
 console.log("Nama harus diisi!")
} else if (nama !== null && peran === '' ) {
  console.log("Halo "+ nama + " Pilih peranmu untuk memulai game!" );
}  else if ( nama !== null && peran === 'Ksatria') {
  console.log("Selamat datang di Dunia Proxyta, "+ nama);
  console.log("Halo Ksatria "+ nama +", kamu dapat menyerang dengan senjatamu!");
} else if (nama !== null && peran === 'Tabib') {
  console.log("Selamat datang di Dunia Proxyta, "+ nama);
  console.log("Halo Tabib "+ nama +", kamu akan membantu temanmu yang terluka");
} else if (nama !== null && peran === 'Penyihir'){
  console.log("Selamat datang di Dunia Proxyta, "+ nama);
  console.log("Halo Penyihir "+ nama +", ciptakan keajaiban yang membantu kemenanganmu!");
} else {
  console.log("peran yang anda pilih tidak tersedia");
  console.log("Silahkan pilih salah satu dari 3 peran ini : Ksatria, Tabib, Penyihir");
}