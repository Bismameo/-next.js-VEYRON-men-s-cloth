export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="brand">
          <h2>VEYRON</h2>
          <span>MEN&apos;S ESSENTIALS</span>
        </div>

        <p className="season">NEW SEASON 2026</p>

        <h1>
          DEFINE
          <br />
          YOUR STYLE
        </h1>

        <div className="hero-line" />

        <p className="hero-description">
          Modern essentials designed for the confident man.
        </p>

        <div className="hero-actions">
          <a href="/product" className="black-btn">
            SHOP COLLECTION
            <span>→</span>
          </a>
          <a href="/about" className="hero-outline-btn">
            OUR STORY
          </a>
        </div>
      </div>
    </section>
  );
}