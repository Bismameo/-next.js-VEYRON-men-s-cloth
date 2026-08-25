import Navbar from "./components/navbar";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#111111]">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#111111]">
        {/* Background Image */}
        <img
          src="/images/about-hero.jpg"
          alt="Veyron Menswear"
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.45em] text-[#e8dfd2]">
              The Veyron Story
            </p>

            <h1 className="font-serif text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              Built for
              <br />
              <span className="italic text-[#d8c9b8]">
                Modern Men.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Veyron is a modern menswear brand created for men who value
              confidence, individuality and timeless style.
            </p>

            <a
              href="/shop"
              className="mt-10 inline-block border border-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] transition duration-300 hover:bg-white hover:text-black"
            >
              Explore Collection
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <div className="h-12 w-px bg-white/40" />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-[#f5f0e8] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#777067]">
              About Veyron
            </p>

            <h2 className="max-w-xl font-serif text-5xl leading-tight sm:text-6xl">
              Style is not what you wear.
              <span className="block italic text-[#8c8175]">
                It's who you become.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-lg leading-9 text-[#49443e]">
              Veyron was founded with a simple idea — menswear should be
              powerful without being loud. Every piece is designed to create
              confidence while maintaining a timeless and effortless aesthetic.
            </p>

            <p className="mt-6 leading-8 text-[#716b63]">
              From carefully considered silhouettes to refined details, Veyron
              represents a new approach to men's fashion. We believe great
              clothing should feel as good as it looks and remain relevant
              beyond a single season.
            </p>
          </div>
        </div>
      </section>

      {/* ================= IMAGE + STORY ================= */}
      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="/images/about-story.jpg"
              alt="Veyron collection"
              className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="lg:px-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#8b8176]">
              Our Story
            </p>

            <h2 className="font-serif text-5xl leading-tight sm:text-6xl">
              Made with
              <br />
              <span className="italic">purpose.</span>
            </h2>

            <div className="mt-8 space-y-5 text-[#5d5851]">
              <p className="leading-8">
                We believe fashion should be more than following trends.
                It should become an extension of your personality.
              </p>

              <p className="leading-8">
                That's why every Veyron collection focuses on clean lines,
                sophisticated proportions and versatile pieces designed for
                the modern wardrobe.
              </p>

              <p className="leading-8">
                Our goal is simple: create clothing that gives you the
                confidence to move through life on your own terms.
              </p>
            </div>

            <div className="mt-10 h-px w-24 bg-black" />

            <p className="mt-6 font-serif text-xl italic">
              "Wear confidence. Define your own way."
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-[#111111] px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-16 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#c7b9a8]">
              What We Believe
            </p>

            <h2 className="font-serif text-5xl sm:text-6xl">
              The Veyron
              <span className="italic text-[#c7b9a8]"> Standard.</span>
            </h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-3">
            
            {/* Value 1 */}
            <div className="border-b border-white/15 p-8 md:border-b-0 md:border-r md:p-12">
              <span className="font-serif text-5xl text-[#c7b9a8]">
                01
              </span>

              <h3 className="mt-10 text-2xl font-medium">
                Quality
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                We believe in thoughtful design, refined details and clothing
                made to remain a part of your wardrobe for years.
              </p>
            </div>

            {/* Value 2 */}
            <div className="border-b border-white/15 p-8 md:border-b-0 md:border-r md:p-12">
              <span className="font-serif text-5xl text-[#c7b9a8]">
                02
              </span>

              <h3 className="mt-10 text-2xl font-medium">
                Confidence
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                Clothing should empower you. Every Veyron piece is designed to
                make you feel confident, composed and ready.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 md:p-12">
              <span className="font-serif text-5xl text-[#c7b9a8]">
                03
              </span>

              <h3 className="mt-10 text-2xl font-medium">
                Identity
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                Trends come and go. Personal style remains. Veyron is created
                for men who define their own identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE COLLAGE ================= */}
      <section className="bg-[#f5f0e8] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#82796f]">
              The Veyron Aesthetic
            </p>

            <h2 className="mt-5 font-serif text-5xl sm:text-6xl">
              Timeless.
              <span className="italic text-[#8d8175]"> Refined.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            
            <div className="overflow-hidden">
              <img
                src="/images/about-fashion-1.jpg"
                alt="Veyron menswear"
                className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden">
                <img
                  src="/images/about-fashion-2.jpg"
                  alt="Veyron men's fashion"
                  className="h-[290px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden">
                <img
                  src="/images/about-fashion-3.jpg"
                  alt="Veyron clothing"
                  className="h-[290px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-[#d8d0c5] bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 md:grid-cols-4">
          
          <div className="text-center">
            <h3 className="font-serif text-4xl sm:text-5xl">
              01
            </h3>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#777067]">
              Vision
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-4xl sm:text-5xl">
              100%
            </h3>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#777067]">
              Commitment
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-4xl sm:text-5xl">
              ∞
            </h3>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#777067]">
              Possibilities
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-4xl sm:text-5xl">
              V
            </h3>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#777067]">
              Veyron
            </p>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#d8c9b8] px-6 py-28 text-center sm:py-36">
        <div className="relative z-10 mx-auto max-w-4xl">
          
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#514a43]">
            Discover Veyron
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-7xl">
            Dress like
            <span className="block italic">
              you mean it.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#5d554d]">
            Discover the latest Veyron collection and find pieces designed
            for your everyday confidence.
          </p>

          <a
            href="/shop"
            className="mt-10 inline-block bg-[#111111] px-10 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-[#292521]"
          >
            Shop Veyron
          </a>
        </div>
      </section>

      {/* ================= FOOTER BRAND MARK ================= */}
      <footer className="bg-[#111111] px-6 py-12 text-center text-white">
        <h3 className="font-serif text-4xl tracking-[0.25em]">
          VEYRON
        </h3>

        <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-white/40">
          Modern Menswear
        </p>

      </footer>
    </div>
  );
}