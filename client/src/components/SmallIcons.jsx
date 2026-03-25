export default function SmallIcons() {
  const items = [
    { img: "/images/globe-americas.svg", text: "Gratis frakt och retur" },
    { img: "/images/airplane.svg", text: "Express frakt" },
    { img: "/images/shield-fill.svg", text: "Säkra betalningar" },
    { img: "/images/emoji-smile-fill.svg", text: "Nyheter varje dag" }
  ];
// SmallIcons.jsx A section with small icons and text, placed above the footer.
  return (
    <section className="small-icons-section">
      <div className="smaikoner">
        {items.map((item, i) => (
          <div className="smal" key={i}>
            <img src={item.img} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
