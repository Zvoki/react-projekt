
// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer>
       {/* DESKTOP FOOTER */}
      <div className="footer-desktop"></div>
      <div>
        <h4>Shopping</h4>
        <p>Vinterjackor</p>
        <p>Pufferjackor</p>
        <p>Kappa</p>
        <p>Trenchcoats</p>
      </div>

      <div>
        <h4>Mina Sidor</h4>
        <p>Mitt Konto</p>
        <p>Mina Ordrar</p>
        <p>Returnpolicy</p>
      </div>

      <div>
        <h4>Kundtjänst</h4>
        <p>Kontakt</p>
        <p>Integritetspolicy</p>
      </div>

      <div>
        <h4>Freaky Fashion</h4>
        <p>© Freaky Fashion</p>
      </div>
      {/* MOBILE ACCORDION */}
      <div className="footer-mobile accordion" id="footerAccordion">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#shopping">
              Shopping
            </button>
          </h2>
          <div id="shopping" className="accordion-collapse collapse">
            <div className="accordion-body">
              <p>Vinterjackor</p>
              <p>Pufferjackor</p>
              <p>Kappa</p>
              <p>Trenchcoats</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#mina">
              Mina Sidor
            </button>
          </h2>
          <div id="mina" className="accordion-collapse collapse">
            <div className="accordion-body">
              <p>Mitt Konto</p>
              <p>Mina Ordrar</p>
              <p>Returnpolicy</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#kund">
              Kundtjänst
            </button>
          </h2>
          <div id="kund" className="accordion-collapse collapse">
            <div className="accordion-body">
              <p>Kontakt</p>
              <p>Integritetspolicy</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#freaky">
              Freaky Fashion
            </button>
          </h2>
          <div id="freaky" className="accordion-collapse collapse">
            <div className="accordion-body">
              <p>© Freaky Fashion</p>
            </div>
          </div>
        </div>

      </div>

    </footer>
   
  );
}