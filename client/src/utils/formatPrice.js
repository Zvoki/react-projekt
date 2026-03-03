export function formatPrice(n) {
  return `${n} SEK`;
}
/**Primjer formatiranja cijene s dvije decimale i tisućnim separatorom:
 * export function formatPrice(n) {
  return `${n.toLocaleString('sv-SE', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  })} SEK`;
   formatPrice(999)      // "999,00 SEK"
formatPrice(1500.5)   // "1 500,50 SEK"  (razmak kao tisućni separator)
formatPrice(15000)    // "15 000,00 SEK"
} 
Što se dešava:

toLocaleString() formatira broj prema švedskoj lokalizaciji (sv-SE)
Dodaje zareze (,) za decimale
Dodaje razmake kao tisućni separatori
minimumFractionDigits: 2 osigurava 2 decimale*/