var jumlahAngkot = 10;
var AngkotBeroprasi = 6;
var noAngkot = 1;

while (noAngkot <= AngkotBeroprasi) {
  console.log("Angkot No. " + noAngkot + " beroprasi dengan baik");
  noAngkot++;
}

for (noAngkot = AngkotBeroprasi + 1; noAngkot <= 10; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi");
}
