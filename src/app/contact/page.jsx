import ContactForm from "../Components/ContactForm";

export const metadata = {
  title: "Contact - Veyron",
  description: "Get in touch with Veyron customer support.",
};

export default function ContactPage() {

  return (
    <main className="contact-page">
      {/* HEADER */}
      <section className="contact-hero">
        <div className="container">
          <p className="section-label">Get In Touch</p>
          <h1>Contact Us</h1>
          <p className="contact-hero-text">
            We&apos;d love to hear from you. Send us a message or visit our store.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-main container">
        <div className="contact-grid">
          {/* INFO */}
          <div className="contact-info">
            <h2>Reach Out</h2>
            <p>
              Our customer service team is available Monday through Friday, 9am -
              6pm EST. Reach out with any questions about your order, sizing, or
              styling advice.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <span>hello@veyron.com</span>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <strong>Phone</strong>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <strong>Address</strong>
                  <span>123 Fashion Street, New York, NY 10001</span>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <strong>Hours</strong>
                  <span>Mon - Fri: 9am - 6pm EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
