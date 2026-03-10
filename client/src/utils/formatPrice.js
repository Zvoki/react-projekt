export function formatPrice(n) {
  if (n == null) return "";
  return `${Number(n)} SEK`;
}

/**export function formatPrice(n) {
  if (n == null) return ""; 
  return `${Number(n)} SEK`;
}
1) Number(n)
Ponekad backend ili forma pošalju cijenu kao string "199".
Number(n) osigurava da se uvijek pretvori u broj prije prikaza.

2) if (n == null) return ""
Ako se dogodi da cijena još nije učitana (npr. fetch kasni), izbjegavaš grešku i ružan prikaz undefined SEK.

3) Formatiranje ostaje jednostavno
Sada u bazi imaš samo broj, a prikaz uvijek dodaje " SEK"*/