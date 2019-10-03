var nama = 'Mikael';
var peran = 'Tabib';

if ((nama === '' && peran === '')||(nama === '' && peran !== '')) {
 console.log("Nama harus diisi!")
} else if (nama !== '' && peran === '' ) {
  console.log("Halo "+ nama + " Pilih peranmu untuk memulai game!" );
}  else if ( nama !== '' && peran === 'Ksatria') {
  console.log("Selamat datang di Dunia Proxyta, "+ nama);
  console.log("Halo Ksatria "+ nama +", kamu dapat menyerang dengan senjatamu!");
} else if (nama !== '' && peran === 'Tabib') {
  console.log("Selamat datang di Dunia Proxyta, "+ nama);
  console.log("Halo Tabib "+ nama +", kamu akan membantu temanmu yang terluka");
} else if (nama !== '' && peran === 'Penyihir'){
  console.log("Selamat datang di Dunia Proxyta, "+ nama);
  console.log("Halo Penyihir "+ nama +", ciptakan keajaiban yang membantu kemenanganmu!");
} else {
  console.log("peran yang anda pilih tidak tersedia");
  console.log("Silahkan pilih salah satu dari 3 peran ini : Ksatria, Tabib, Penyihir");
}