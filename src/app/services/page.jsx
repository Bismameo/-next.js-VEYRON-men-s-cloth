import Link from "next/link";

export const metadata = {
  title: "Services - Veyron",
  description:
    "Discover Veyron's premium services: personal styling, alterations, gift wrapping, and more.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Personal Styling",
      description:
        "Book a one-on-one session with our expert stylists to curate a wardrobe that reflects your lifestyle and personality.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.25a4.5 4.5 0 019 0v.75a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75v-.75z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Alterations & Tailoring",
      description:
        "Professional in-house tailoring to ensure every garment fits you perfectly. We offer hemming, taking in, and letting out services.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.796 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.404 12l-2.882 1.664"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Gift Wrapping",
      description:
        "Elevate your gift with our premium packaging. Available at checkout for all orders, complimentary on orders over $200.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "White-Glove Delivery",
      description:
        "Same-day delivery in select metro areas. Our couriers will deliver directly to you with a signature required.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-6.75C21.375 9.504 20.871 9 20.25 9H16.5m-9 0h9.75M4.125 9H8.25m-9 0h9.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Concierge Support",
      description:
        "Dedicated support for VIP clients. Priority access to new drops, restocks, and exclusive member-only events.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Easy Returns",
      description:
        "Hassle-free returns within 30 days. Free prepaid shipping labels and instant refunds upon inspection.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992h4.992m14.988 0h4.992v4.992M2.985 9.348h4.992m-4.992 0v4.992m14.988-4.992v4.992"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="services-page">
      {/* HEADER */}
      <section className="services-hero">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h1>Our Services</h1>
          <p className="services-hero-text">
            Premium care for every client. From personal styling to white-glove
            delivery, we ensure an exceptional experience.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="service-link">
              Learn more <span>→</span>
            </button>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need a custom order?</h2>
            <p>
              We specialize in made-to-measure garments for those who seek the
              perfect fit. Contact our atelier to begin your bespoke journey.
            </p>
            <Link href="/contact" className="black-btn">
              CONTACT US <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
