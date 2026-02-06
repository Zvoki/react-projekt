// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="hero-image">
        <img src="/images/hero.jpg" alt="Freaky Fashion" />
      </div>
    </section>
  );
}