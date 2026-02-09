export default function MenuAndFooter() {
  return (
    <div>

      {/* MOBILNI MENI + FOOTER (prikazuje se samo < 640px) */}
      <div className="container-fluid my-4 hide-640-1024">


        {/* Shopping red – iznad accordiona */}
        <div className="footer-row shopping-row">
          <p>Shopping</p>
        </div>

        {/* Accordion */}
        <div className="accordion" id="productAccordion">

          {/* Vinterjackor */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingVinterjackor">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseVinterjackor"
                aria-expanded="true"
                aria-controls="collapseVinterjackor"
              >
                Vinterjackor
              </button>
            </h2>

            <div
              id="collapseVinterjackor"
              className="accordion-collapse collapse show"
              aria-labelledby="headingVinterjackor"
              data-bs-parent="#productAccordion"
            >
              <div className="accordion-body">
                <p>Detaljarerad beskrivning för Vinterjackor.</p>
              </div>
            </div>
          </div>

          {/* Pufferjackor */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingPufferjackor">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePufferjackor"
                aria-expanded="false"
                aria-controls="collapsePufferjackor"
              >
                Pufferjackor
              </button>
            </h2>

            <div
              id="collapsePufferjackor"
              className="accordion-collapse collapse"
              aria-labelledby="headingPufferjackor"
              data-bs-parent="#productAccordion"
            >
              <div className="accordion-body">
                <p>Detaljarerad beskrivning för Pufferjackor.</p>
              </div>
            </div>
          </div>

          {/* Kappa */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingKappa">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseKappa"
                aria-expanded="false"
                aria-controls="collapseKappa"
              >
                Kappa
              </button>
            </h2>

            <div
              id="collapseKappa"
              className="accordion-collapse collapse"
              aria-labelledby="headingKappa"
              data-bs-parent="#productAccordion"
            >
              <div className="accordion-body">
                <p>Detaljarerad beskrivning för Kappa kapute.</p>
              </div>
            </div>
          </div>

          {/* Trenchcoats */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTrenchcoats">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTrenchcoats"
                aria-expanded="false"
                aria-controls="collapseTrenchcoats"
              >
                Trenchcoats
              </button>
            </h2>

            <div
              id="collapseTrenchcoats"
              className="accordion-collapse collapse"
              aria-labelledby="headingTrenchcoats"
              data-bs-parent="#productAccordion"
            >
              <div className="accordion-body">
                <p>Detaljarerad beskrivning för Trenchcoats.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer ispod accordiona */}
        <div className="footer-row links-row">
          <p>Mina Sidor</p>
          <p>Kundtjänst</p>
        </div>
        <div className="footer-row brand-row">
          <p>Freaky Fashion</p>
        </div>
      </div>

      {/* DESKTOP FOOTER (prikazuje se >= 640px) */}
      <footer class="footer-desktop">

        <div class="footer-columns">
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
        </div>

        <div class="footer-bottom">
          <p>© Freaky Fashion</p>
        </div>

      </footer>

    </div>
  );
}
