const readline = require("readline");
const { circleArea, circleCircumference } = require("./circle");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Yarıçapı girin: ", (r) => {
  r = parseFloat(r);

  if (!isNaN(r)) {
    console.log(`Daire Alanı: ${circleArea(r)}`);
    console.log(`Daire Çevresi: ${circleCircumference(r)}`);
  } else {
    console.log("Geçerli bir sayı girin!");
  }

  rl.close();
});
