// function kerjakanTugas(matakuliah, selesai) {
//   console.log(`Mulai mengerjakan tugas ${matakuliah}`);
//   selesai();
// }

// function selesai() {
//   console.log("selesai mengerjakan tugas...");
// }

// kerjakanTugas("kalkulus", selesai);

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`halo selamat ${waktu} ${nama},seamoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("malam");
// selamatPagi("Fardan");

// let total = 0,
//   count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(total);

function repeatLog(n, action) {
  for (let index = 0; index <= n; index++) {
    action(index);
  }
}
repeatLog(100, console.log);
