const yil = +prompt("Yıl giriniz");
if (1 <= yil && yil <= 2005) {
  const yy = Math.floor(yil / 100 + 1);
  console.log(`Girdiğiniz yıl ${yy}. yüzyıldadır.`);
} else alert("1 ile 2005 arasında yıl giriniz.");
