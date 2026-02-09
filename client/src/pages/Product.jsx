/**prikazati detalje proizvoda 
prikazati 3 slična proizvoda 
dugme “Lägg i varukorg” ne radi ništa 
 */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";


export default function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/products/${slug}`)

      .then(res => res.json())
      .then(data => setProduct(data));
  }, [slug]);

  if (!product) return <p>Laddar...</p>;

  return (
    <div>
      <h1>{product.namn}</h1>

      <img src={product.image_url} alt={product.namn} />
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button>Lägg i varukorg</button>

      <h3>Liknande produkter</h3>

      <div className="grid">
        {product.similar?.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

/*
*Kratko: Ovaj komponent učitava detalje jednog proizvoda iz backend-a koristeći slug iz URL‑a, sprema odgovor u stanje i prikazuje podatke te 
listu sličnih proizvoda; efekat za dohvat se ponovo pokreće svaki put kad se slug promijeni.

Pregled
Šta radi komponent: dohvaća /products/:slug s tvog servera, čuva rezultat u product stanju i renderuje stranicu proizvoda.

Gdje se koristi: obično na ruti poput /products/:slug u react-router-dom.

Uvozi i parametri
useEffect, useState — React hookovi za stanje i side‑efekte.

useParams — čita dinamički dio rute (slug) iz URL‑a.

Link — pravi navigacijske linkove bez reloada.

Red po red — objašnjenje
const { slug } = useParams();  
Uzimamo slug iz URL‑a (npr. telefon-xyz) i koristimo ga za poziv API‑ja.

const [product, setProduct] = useState(null);  
Inicijalno nema podataka; null znači da još čekamo odgovor.

useEffect(() => { fetch(...).then(...).then(...) }, [slug]);

Efekat se pokreće nakon prvog rendera i svaki put kad slug promijeni vrijednost. To znači da će komponent dohvatiti nove podatke kad korisnik klikne na drugi proizvod. 

fetch(\http://localhost:3001/products/${slug}\) šalje GET zahtjev serveru; res.json() parsira JSON; setProduct(data) sprema podatke u stanje. Ovo je standardan pattern za dohvat podataka u Reactu. 
 * 
 */

/** 
*Ovo je kompletna Express ruta koja:

pronalazi proizvod po slug-u

pronalazi 3 slična proizvoda (isti brand)

vraća sve zajedno u JSON-u

 Kako ovo radi?
products.find(...) → pronalazi proizvod koji korisnik gleda

filter(...) → bira proizvode sa istim brendom

slice(0, 3) → uzima samo 3 komada

res.json({...product, similar}) → frontend dobija sve u jednom objektu
Today
Objasni mi na jednstavan nacin sledeci kod: import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminList() {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        fetch("http:lokalhost:3001/admin/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
}
Evo jednostavnog i jasnog objašnjenja šta ovaj kod radi, bez komplikovanja.

🧠 Šta se ovde dešava?
1. Uvoz React funkcija
js
import { useEffect, useState } from "react";
useState omogućava da komponenta ima svoje stanje (state).

useEffect omogućava da se neki kod izvrši kada se komponenta učita.

2. Uvoz Link komponente
js
import { Link } from "react-router-dom";
Ovo služi za navigaciju između stranica, ali u ovom kodu se još ne koristi.

3. Definicija komponente
js
export default function AdminList() {
Ovo je React komponenta koja se zove AdminList.

4. State za proizvode
js
const [products, setProducts] = useState([]);
Pravimo promenljivu products (lista proizvoda).

Početna vrednost je prazna lista [].

setProducts je funkcija kojom kasnije menjamo tu listu.

5. useEffect – učitavanje podataka sa servera
js
useEffect(() => {
    fetch("http:lokalhost:3001/admin/products")
        .then(res => res.json())
        .then(data => setProducts(data));
}, []);
useEffect se pokreće samo jednom, kada se komponenta učita (zbog []).

fetch(...) šalje zahtev serveru da uzme listu proizvoda.

res.json() pretvara odgovor u JavaScript objekat.

setProducts(data) čuva te podatke u state-u.

📌 Važno: URL ima grešku — treba da bude:

Code
http://localhost:3001/admin/products
🧩 Ukratko:
Komponenta se učita.

useEffect se pokrene jednom.

fetch uzme listu proizvoda sa servera.

Ti proizvodi se smeste u products state.

Kasnije možeš da ih prikažeš u JSX-u.

Ako želiš, mogu ti i napisati kako da prikažeš te proizvode na ekranu ili da objasnim useEffect/useState još jednostavnije.

Naravno — objasniću ti ovo potpuno jednostavno, kao da prvi put vidiš React.

🧩 Šta ovaj kod radi?
Ovo je mala React komponenta koja:

ima svoju listu proizvoda,

kada se učita — ode na server,

preuzme proizvode,

i sačuva ih u state.

To je sve.

🔍 Korak po korak
1. Uvoz React funkcija
js
import { useEffect, useState } from "react";
useState — omogućava da komponenta ima promenljive koje pamte stanje.

useEffect — omogućava da se neki kod izvrši kada se komponenta učita.

2. Uvoz Link komponente
js
import { Link } from "react-router-dom";
Ovo služi za navigaciju između stranica, ali se u ovom kodu još ne koristi.

3. Definicija komponente
js
export default function AdminList() {
Počinje React komponenta koja se zove AdminList.

4. State za proizvode
js
const [products, setProducts] = useState([]);
products — promenljiva u kojoj će biti lista proizvoda.

setProducts — funkcija koja menja tu listu.

Početna vrednost je prazna lista [].

5. useEffect — učitavanje podataka
js
useEffect(() => {
    fetch("http:lokalhost:3001/admin/products")
        .then(res => res.json())
        .then(data => setProducts(data));
}, []);
useEffect se pokreće samo jednom, kada se komponenta prikaže na ekranu.

fetch(...) šalje zahtev serveru da uzme listu proizvoda.

res.json() pretvara odgovor u JavaScript objekat.

setProducts(data) čuva te podatke u state-u.

📌 Greška u URL-u: treba da bude:

Code
http://localhost:3001/admin/products
🟢 Ukratko
Komponenta se učita.

useEffect se pokrene jednom.

fetch preuzme proizvode sa servera.

proizvodi se sačuvaju u products.

kasnije ih možeš prikazati u JSX-u.

Ako želiš, mogu ti pokazati i kako da prikažeš te proizvode na ekranu ili da ti napišem kompletnu komponentu.

return (
    <div>
        <h1>Produkter</h1>
        <Link to="/admin/products/new">Ny produkt</Link>
        <table>
            <thead>
                <tr>
                    <th>Namn</th>
                    <th>SKU</th>
                    <th>Pris</th>
                </tr>
            </thead>

            <tbody>
                {products.map(p => (
                    <tr key={p.id}>
                    <td>{p.sku}</td>
                    <td>{p.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
) Sta je ovdje {products.map(p =>   <tr key={p.id}>?
Odlično pitanje — to je ključni deo React logike za prikaz liste podataka. Objasniću ti najjednostavnije moguće.

🧩 Šta znači {products.map(p => (...))}?
Zamisli da je products lista objekata, npr:

js
[
  { id: 1, sku: "ABC123", price: 100 },
  { id: 2, sku: "XYZ999", price: 200 }
]
Kada napišeš:

js
products.map(p => (
    <tr key={p.id}>
        <td>{p.sku}</td>
        <td>{p.price}</td>
    </tr>
))
to znači:

✔️ Prođi kroz svaki proizvod u listi
✔️ Za svaki proizvod napravi jedan <tr> red u tabeli
✔️ Ubaci SKU i cenu u <td> ćelije
✔️ key={p.id} služi React-u da zna koji red je koji
🔍 Ukratko:
map = napravi novu listu elemenata.

U ovom slučaju, map pravi listu <tr> redova.

Svaki red prikazuje jedan proizvod iz products.

🖼️ Vizuelno:
Ako imaš 3 proizvoda → dobićeš 3 reda u tabeli.

React to radi automatski zahvaljujući map.

Ako želiš, mogu ti i nacrtati kako izgleda rezultat ili objasniti šta je key i zašto je važan.

Odlicno
Drago mi je da ti znači — baš lepo napreduješ sa React‑om! Ako želiš, možemo zajedno proći i kroz sledeće korake: kako da dodaš dugme za brisanje, uređivanje, ili kako da prikažeš više kolona u tabeli.

Samo reci šta želiš da gradiš dalje i nastavljamo.

Kako izgleda rezultat ili objasniti šta je key i zašto je važan.
Krenimo redom — prvo ću ti pokazati kako izgleda rezultat, a zatim šta je key i zašto je bitan. Sve potpuno jednostavno.

🖼️ Kako izgleda rezultat?
Ako tvoja lista products izgleda ovako:

js
[
  { id: 1, sku: "ABC123", price: 100 },
  { id: 2, sku: "XYZ999", price: 200 }
]
onda će React napraviti ovakvu HTML tabelu:

Code
---------------------------------
| Namn | SKU     | Pris        |
---------------------------------
|      | ABC123  | 100         |
---------------------------------
|      | XYZ999  | 200         |
---------------------------------
Dakle, map prolazi kroz svaki proizvod i pravi jedan <tr> red za njega.

🔑 Šta je key i zašto je važan?
U ovom delu:

jsx
<tr key={p.id}>
key je poseban identifikator koji React koristi da zna:

koji red je koji,

šta se promenilo,

šta treba ponovo nacrtati,

šta može da ostane isto.

Zašto je to važno?
Zamisli da imaš listu od 100 proizvoda i obrišeš jedan iz sredine.
Bez key React ne zna koji je red nestao, pa bi morao da ponovo nacrta celu listu.

Sa key React odmah zna:

"aha, red sa id = 42 je nestao"

i samo taj deo ažurira.

To čini aplikaciju bržom i stabilnijom.

✔️ Ukratko:
map pravi HTML red za svaki proizvod.

key je jedinstveni ID koji pomaže React‑u da efikasno upravlja listama.

Najbolje je koristiti nešto što je zaista jedinstveno, kao što je id iz baze.

Ako želiš, mogu ti pokazati i šta se desi kada key nedostaje ili je pogrešan — React ume da izbaci upozorenje i ponašanje liste postaje čudno.

Da, pokazi.
Naravno — pokazaću ti šta se desi kada key nedostaje ili je pogrešan, i zašto to pravi probleme. Ovo je jedna od onih stvari koje deluju sitno, ali u praksi pravi veliku razliku.

🟥 1. Šta se desi kada nema key?
Ako napišeš:

jsx
{products.map(p => (
    <tr>
        <td>{p.sku}</td>
        <td>{p.price}</td>
    </tr>
))}
React će u konzoli prikazati upozorenje:

Code
Warning: Each child in a list should have a unique "key" prop.
Zašto se žali?
Zato što React ne zna koji red je koji kada se lista promeni.
Ako obrišeš jedan proizvod, React ne zna koji <tr> treba da nestane, pa može da:

pogrešno ažurira redove,

prikaže pogrešne podatke,

napravi vizuelni “skok” u tabeli,

ponovo nacrta celu listu (sporije).

🟧 2. Šta se desi kada key postoji, ali je pogrešan?
Primer lošeg key:

jsx
<tr key={index}>
Zašto je ovo loše?

Zato što index nije stabilan.
Ako obrišeš prvi proizvod, svi ostali pomeraju index:

red koji je bio index 1 → postaje index 0

red koji je bio index 2 → postaje index 1

itd.

React tada misli da su se svi redovi promenili, i može da:

prikaže pogrešne podatke u pogrešnim redovima,

izgubi fokus u input poljima,

resetuje stanje u komponentama unutar liste.

🟩 3. Kako izgleda ispravno?
Ovo je pravi način:

jsx
<tr key={p.id}>
Zašto je ovo dobro?

id je jedinstven za svaki proizvod.

Ne menja se kada se lista menja.

React tačno zna koji element je koji.

🟦 4. Vizuelni primer
Zamisli listu:

id	sku
1	A
2	B
3	C
Ako obrišeš proizvod sa id = 2:

Bez key → React ne zna koji red je nestao.
Sa key={id} → React tačno zna da treba ukloniti samo red sa id = 2.

🟣 Ukratko:
key je obavezno potreban kada renderuješ listu.

Mora biti jedinstven i stabilan.

Najbolji izbor je id iz baze.

Ako ga nema → React upozorenja i potencijalno loše ponašanje liste.

Ako želiš, mogu ti pokazati i primere gde pogrešan key pravi konkretne bugove, npr. kada imaš input polja u tabeli ili kada se redovi pomeraju.

Da li mozes da mi objasnis sledeci  kod                                                                                         export default function AdminNew() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    brand: "",
    sku: "",
    price: "",
    slug: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => nav("/admin/products"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ny produkt</h1>

      {Object.keys(form).map(key => (
        <input
          key={key}
          name={key}
          placeholder={key}
          value={form[key]}
          onChange={handleChange}
        />
      ))}

      <button>Lägg till</button>
    </form>
  );
}
Naravno — ovo je odličan primer male, ali veoma pametno napisane React forme. Razložiću ti sve potpuno jednostavno, deo po deo, tako da tačno razumeš šta se dešava i zašto.

🧩 Šta ova komponenta radi?
Ovo je stranica za dodavanje novog proizvoda.
Sadrži:

state sa svim poljima forme,

funkciju za ažuriranje polja,

funkciju za slanje forme na server,

automatsko generisanje <input> polja,

preusmeravanje nakon uspešnog dodavanja.

🔍 1. State za formu
js
const [form, setForm] = useState({
  name: "",
  description: "",
  image: "",
  brand: "",
  sku: "",
  price: "",
  slug: ""
});
Ovo je jedan objekat koji sadrži sva polja forme.

Umesto da imaš 7 različitih useState, koristiš jedan objekat — mnogo jednostavnije.

🔍 2. Funkcija za promenu polja
js
function handleChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
}
Ovo radi sledeće:

e.target.name → ime polja (npr. "name" ili "price")

e.target.value → vrednost koju je korisnik uneo

{ ...form } → kopira stari form

[e.target.name]: e.target.value → menja samo jedno polje

Znači: svaki put kada korisnik nešto upiše, ažurira se odgovarajuće polje u formi.

🔍 3. Slanje forme
js
function handleSubmit(e) {
  e.preventDefault();
preventDefault() sprečava da se stranica osveži.

Zatim:

js
fetch("http://localhost:3001/admin/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form)
})
Ovo šalje POST zahtev serveru sa JSON telom koje sadrži sve podatke iz forme.

Kada server završi:

js
.then(() => nav("/admin/products"));
→ korisnik se preusmerava nazad na listu proizvoda.

🔍 4. Automatsko generisanje input polja
Ovo je najzanimljiviji deo:

js
{Object.keys(form).map(key => (
  <input
    key={key}
    name={key}
    placeholder={key}
    value={form[key]}
    onChange={handleChange}
  />
))}
Šta se ovde dešava?
Object.keys(form) vraća listu svih polja:
["name", "description", "image", "brand", "sku", "price", "slug"]

map prolazi kroz svako polje i pravi <input> za njega.

Znači: ne moraš ručno da pišeš 7 input polja — React ih sam generiše.

Svaki <input>:

ima name koji odgovara polju u formi,

ima value iz state-a,

ima onChange koji ažurira state.

🔍 5. Dugme za slanje
js
<button>Lägg till</button>
Klik na dugme pokreće handleSubmit.

🟢 Ukratko:
Ova komponenta:

ima jedan state objekat za celu formu,

automatski generiše input polja,

ažurira form state kada korisnik kuca,

šalje podatke serveru kao JSON,

preusmerava korisnika nakon uspešnog dodavanja.

Ako želiš, mogu ti:

dodati validaciju (npr. obavezna polja),

pretvoriti inpute u <label> + <input> kombinaciju,

dodati <textarea> za description,

dodati upload slike,

ili objasniti kako backend treba da izgleda.

Ja treba da imam URL za sliku, ako vec nije dodato.
Razumem šta želiš — kada korisnik dodaje novi proizvod, polje za sliku treba da bude URL, i ako ga ne unese, treba da postoji neka podrazumevana slika.

Hajde da objasnim kako to funkcioniše u tvom kodu i kako to možeš lako rešiti.

🧩 1. Trenutno stanje u tvojoj formi
U useState imaš:

js
image: "",
To znači da je polje za URL slike prazno dok korisnik ne upiše nešto.

🟦 2. Ako želiš da postoji podrazumevana slika
Možeš odmah u state staviti default URL:

js
image: "https://example.com/default-image.jpg",
Tada će input polje već biti popunjeno tim URL‑om.

🟩 3. Ako želiš da backend dobije default sliku samo ako korisnik ništa ne unese
Najbolje je da to uradiš u handleSubmit:

js
function handleSubmit(e) {
  e.preventDefault();

  const dataToSend = {
    ...form,
    image: form.image || "https://example.com/default-image.jpg"
  };

  fetch("http://localhost:3001/admin/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataToSend)
  }).then(() => nav("/admin/products"));
}
Ovo radi sledeće:

ako form.image ima vrednost → koristi je,

ako je prazno → koristi default URL.

🟧 4. Ako želiš da korisnik mora da unese URL
Možeš dodati jednostavnu validaciju:

js
if (!form.image) {
  alert("Morate uneti URL slike");
  return;
}
🟣 Ukratko
Možeš rešiti problem na tri načina:

Rešenje	Kada se koristi
Default URL u state-u	Ako želiš da input odmah bude popunjen
Default URL u handleSubmit	Ako želiš da backend dobije sliku čak i kad korisnik ništa ne unese
Validacija	Ako želiš da korisnik mora da unese URL
Ako želiš, mogu ti pomoći da:

dodaš preview slike dok korisnik kuca,

napraviš validaciju da URL mora biti ispravan,

dodaš upload slike umesto URL‑a.

Samo reci šta želiš da uradiš dalje.

napraviš validaciju da URL mora biti ispravan
Naravno — evo jednostavnog i praktičnog načina da proveriš da li je URL ispravan pre nego što pošalješ formu.

Cilj je da sprečiš korisnika da unese nešto poput "abc" ili "slika" i da zahtevaš pravi URL (npr. https://example.com/image.jpg).

✅ 1. Najjednostavnija validacija URL‑a (preporučeno)
Možeš koristiti ugrađeni JavaScript URL objekat:

js
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
Ovo proverava da li je string validan URL format.

✅ 2. Ubaci validaciju u handleSubmit
js
function handleSubmit(e) {
  e.preventDefault();

  if (!isValidUrl(form.image)) {
    alert("URL slike nije ispravan");
    return;
  }

  fetch("http://localhost:3001/admin/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  }).then(() => nav("/admin/products"));
}
Ako URL nije validan → prekida se slanje forme i prikazuje se poruka.

🟦 3. (Opcionalno) Zahtevaj da URL bude slika
Ako želiš da URL mora da se završava na .jpg, .png, .webp, .gif itd:

js
function isImageUrl(url) {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
}
I onda:

js
if (!isValidUrl(form.image) || !isImageUrl(form.image)) {
  alert("Unesite ispravan URL slike (jpg, png, gif, webp)");
  return;
}
🟢 Ukratko
Ovim dobijaš:

proveru da li je URL validan,

proveru da li je URL slika (ako želiš),

sprečavanje slanja forme ako URL nije dobar.

Ako želiš, mogu ti dodati i:

vizuelnu poruku ispod inputa (umesto alert),

crveni okvir oko inputa kada URL nije validan,

preview slike dok korisnik kuca.

Samo reci šta želiš da dodaš.

KORAK 4 — Product details page
PDF kaže:
prikazati detalje proizvoda 
prikazati 3 slična proizvoda 
dugme “Lägg i varukorg” ne radi ništa 
pages/Product.jsx:
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${slug}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [slug]);

  if (!product) return <p>Laddar...</p>;

  return (
    <div>
      <h1>{product.name}</h1>

      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} SEK</p>

      <button>Lägg i varukorg</button>

      <h3>Liknande produkter</h3>

      <div className="grid">
        {product.similar?.map(p => (
          <Link key={p.id} to={`/products/${p.slug}`} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price} SEK</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
Napomena: backend treba da vraća similar listu — da li mozes mogu dodati i ovo?
Naravno — objasniću ti tačno šta backend treba da vrati i kako da dodaš “similar products” tako da tvoj frontend kod radi bez ikakvih izmena.

Tvoj React kod već očekuje da backend vrati objekat ovakvog oblika:

js
{
  id: 1,
  name: "Product name",
  description: "...",
  image: "...",
  price: 199,
  slug: "product-name",
  similar: [
    { id: 2, name: "...", price: 149, image: "...", slug: "..." },
    { id: 3, name: "...", price: 299, image: "...", slug: "..." },
    { id: 4, name: "...", price: 99, image: "...", slug: "..." }
  ]
}
Dakle, backend mora da doda polje similar u JSON koji vraća za jedan proizvod.

✅ Kako to dodati u backend (najjednostavniji način)
Pretpostaviću da koristiš Express + neki JSON fajl ili bazu.
Evo najjednostavnijeg primera kako backend može da vrati 3 slična proizvoda.

1. Backend ruta (Express)
js
app.get("/products/:slug", (req, res) => {
  const slug = req.params.slug;

  // Pronađi glavni proizvod
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  // Pronađi 3 slična proizvoda (npr. isti brand)
  const similar = products
    .filter(p => p.brand === product.brand && p.slug !== slug)
    .slice(0, 3);

  // Vrati proizvod + similar listu
  res.json({
    ...product,
    similar
  });
});
🧠 Kako ovo radi?
✔️ 1. Pronađeš proizvod po slug-u
products.find(...)

✔️ 2. Pronađeš slične proizvode
Najjednostavniji kriterijum je:

isti brand

ali ne isti proizvod

js
products.filter(p => p.brand === product.brand && p.slug !== slug)
✔️ 3. Uzmeš samo 3 proizvoda
js
.slice(0, 3)
✔️ 4. Vratiš JSON koji frontend očekuje
Frontend već zna da čita product.similar.

🟦 Ako nemaš brand — možeš koristiti bilo šta
Npr. proizvodi iz iste kategorije:

js
.filter(p => p.category === product.category)
Ili potpuno random 3 proizvoda:

js
const similar = products
  .filter(p => p.slug !== slug)
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);
🟢 Ukratko
Da bi tvoj React kod radio:

Backend mora da vrati objekat proizvoda koji sadrži polje similar.

similar mora biti lista od 3 proizvoda.

Svaki proizvod u listi mora imati: id, name, price, image, slug.

Frontend već sve prikazuje automatski.

Ako želiš, mogu ti:

napisati kompletan backend fajl,

dodati kategorije, brendove, random izbor,

ili ti pomoći da povežeš ovo sa bazom (Mongo, SQL, JSON fajl).

Da li da napravim posebnu komponentu za ovo ili da dodam ispod koda koji sam ti prilozio?
Odlično pitanje — i zapravo je vrlo praktično, jer ovde imaš dve ispravne opcije, ali jedna je bolja dugoročno.

🟩 Najbolja praksa: ostavi sve u istoj komponenti (Product.jsx)
Za ovaj projekat (po PDF-u koji pratiš), nije potrebno praviti posebnu komponentu za “slične proizvode”.

Zašto?

Product stranica je mala i jednostavna.

“Similar products” su deo prikaza detalja proizvoda.

Backend već vraća similar zajedno sa proizvodom.

React kod koji imaš već očekuje da se sve nalazi u istoj komponenti.


Frontend Product.jsx (tvoja komponenta za prikaz proizvoda + slični proizvodi)

Backend ruta /products/:slug (sa logikom za similar proizvode)

Sve će biti jasno, čisto i spremno za korišćenje.

✅ 1. FRONTEND — Product.jsx (finalna verzija)
jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${slug}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [slug]);

  if (!product) return <p>Laddar...</p>;

  return (
    <div>
      <h1>{product.name}</h1>

      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} SEK</p>

      <button>Lägg i varukorg</button>

      <h3>Liknande produkter</h3>

      <div className="grid">
        {product.similar?.map(p => (
          <Link key={p.id} to={`/products/${p.slug}`} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price} SEK</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
Ovaj deo je gotov — frontend samo prikazuje ono što backend pošalje.

✅ 2. BACKEND — ruta za jedan proizvod + similar proizvodi
Ovo je kompletna Express ruta koja:

pronalazi proizvod po slug-u

pronalazi 3 slična proizvoda (isti brand)

vraća sve zajedno u JSON-u

js
app.get("/products/:slug", (req, res) => {
  const slug = req.params.slug;

  // Pronađi glavni proizvod
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  // Pronađi slične proizvode (isti brand, ali ne isti proizvod)
  const similar = products
    .filter(p => p.brand === product.brand && p.slug !== slug)
    .slice(0, 3);

  // Vrati proizvod + similar listu
  res.json({
    ...product,
    similar
  });
});
🧠 Kako ovo radi?
products.find(...) → pronalazi proizvod koji korisnik gleda

filter(...) → bira proizvode sa istim brendom

slice(0, 3) → uzima samo 3 komada

res.json({...product, similar}) → frontend dobija sve u jednom objektu

Frontend onda automatski prikazuje slične proizvode jer već ima:
product.similar?.map(...)

*/