## ASSIGMENT-3 (FLEX-GRID)

- Belirtilen linkteki gibi bir site şablonu flex-grid kullanarak tasarlayınız.

  https://flex-grid-cw.netlify.app/

## A-) Alanların uzunlukları için

- logo (4 col) ve menü (8 col)
- banner ve footer (tamamı)
- bolum1,2 ve 3 eşit
- bolum4 (3 col), bolum5 (6 col), bolum6(3 col)

## B-)Alanların yükseklikleri için

- logo ve menü satırının padding'i için 1rem
- banner'ın padding'i için 4rem
- bolum4,5ve 6'nın padding'i için 1rem
- footer'ın padding'i için 2rem
- bolum 1,2,3 satırı için ise tarayıcının görülebilir alanından geriye kalan yükseklilk

## ÇÖZÜM İÇİN TÜYO

.container {
width: 100%;
}

.row {
display: flex;
flex-wrap: wrap;
}

.col-1 {
width: 8.333333%;
}

.col-2 {
width: 16.666667%;
}

.col-3 {
width: 25%;
}

.col-4 {
width: 33.333333%;
}

.col-5 {
width: 41.666667%;
}

.col-6 {
width: 50%;
}

.col-7 {
width: 58.333333%;
}

.col-8 {
width: 66.666667%;
}

.col-9 {
width: 75%;
}

.col-10 {
width: 83.333333%;
}

.col-11 {
width: 91.666667%;
}

.col-12 {
width: 100%;
}
