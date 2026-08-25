import Link from "next/link";

export const metadata = {
  title: "About - Veyron",
  description:
    "Learn about Veyron's story, mission, and craftsmanship in men's essentials.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content container">
          <p className="about-hero-label">The Veyron Story</p>
          <h1>
            Built for
            <br />
            <span className="italic">Modern Men.</span>
          </h1>
          <p className="about-hero-text">
            Veyron is a modern menswear brand created for men who value
            confidence, individuality and timeless style.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-intro container">
        <div className="about-intro-grid">
          <div className="about-intro-left">
            <p className="section-label">About Veyron</p>
            <h2>
              Style is not what you wear.
              <span className="block italic text-[#8c8175]">
                It&apos;s who you become.
              </span>
            </h2>
          </div>
          <div className="about-intro-right">
            <p className="text-lg leading-9 text-[#49443e]">
              Veyron was founded with a simple idea — menswear should be powerful
              without being loud. Every piece is designed to create confidence
              while maintaining a timeless and effortless aesthetic.
            </p>
            <p className="mt-6 leading-8 text-[#716b63]">
              From carefully considered silhouettes to refined details, Veyron
              represents a new approach to men&apos;s fashion. We believe great
              clothing should feel as good as it looks and remain relevant beyond
              a single season.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="about-story-grid container">
          <div className="about-story-image">
            <img
              src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1200&q=90"
              alt="Veyron collection"
            />
          </div>
          <div className="about-story-content">
            <p className="section-label">Our Story</p>
            <h2>
              Made with
              <br />
              <span className="italic">purpose.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[#5d5851]">
              <p className="leading-8">
                We believe fashion should be more than following trends. It
                should become an extension of your personality.
              </p>
              <p className="leading-8">
                That&apos;s why every Veyron collection focuses on clean lines,
                sophisticated proportions and versatile pieces designed for the
                modern wardrobe.
              </p>
              <p className="leading-8">
                Our goal is simple: create clothing that gives you the confidence
                to move through life on your own terms.
              </p>
            </div>
            <div className="mt-10 h-px w-24 bg-black" />
            <p className="mt-6 font-serif text-xl italic">
              &quot;Wear confidence. Define your own way.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="container">
          <div className="mb-16 max-w-2xl">
            <p className="section-label text-[#c7b9a8]">What We Believe</p>
            <h2 className="text-white">
              The Veyron
              <span className="italic text-[#c7b9a8]"> Standard.</span>
            </h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <span className="value-number">01</span>
              <h3>Quality</h3>
              <p>
                We believe in thoughtful design, refined details and clothing
                made to remain a part of your wardrobe for years.
              </p>
            </div>
            <div className="value-card">
              <span className="value-number">02</span>
              <h3>Confidence</h3>
              <p>
                Clothing should empower you. Every Veyron piece is designed to
                make you feel confident, composed and ready.
              </p>
            </div>
            <div className="value-card">
              <span className="value-number">03</span>
              <h3>Identity</h3>
              <p>
                Trends come and go. Personal style remains. Veyron is created
                for men who define their own identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container text-center">
          <p className="section-label text-[#514a43]">Discover Veyron</p>
          <h2>
            Dress like
            <span className="block italic">you mean it.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#5d554d]">
            Discover the latest Veyron collection and find pieces designed for
            your everyday confidence.
          </p>
          <Link href="/product" className="black-btn mt-10 inline-block">
            SHOP VEYRON <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
