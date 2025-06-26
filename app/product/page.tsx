"use client";

import { useParams } from "next/navigation";
import { useStore } from "../lib/store";
import Image from "next/image";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;

  const products = useStore((state) => state.products);
  const addToCart = useStore((state) => state.addToCart);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="app">
        <div className="not-found">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="app">
      {/* Main Product Section */}
      <div className="product-container">
        <div className="product-images">
          <div className="thumbnail-list">
            <div className="thumbnail">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Product thumbnail"
                width={60}
                height={60}
              />
            </div>
            <div className="thumbnail">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Product thumbnail"
                width={60}
                height={60}
              />
            </div>
            <div className="thumbnail">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Product thumbnail"
                width={60}
                height={60}
              />
            </div>
            <div className="thumbnail">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Product thumbnail"
                width={60}
                height={60}
              />
            </div>
            <div className="thumbnail">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Product thumbnail"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="main-image">
            {product.originalPrice && <div className="sale-badge">Sale</div>}
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Main product image"
              width={300}
              height={400}
            />
            <div className="image-dimensions">403.5 x 680.13</div>
          </div>
        </div>

        <div className="product-details">
          {product.originalPrice && <div className="sale-tag">Sale</div>}
          <h1 className="product-title">{product.name}</h1>
          <p className="product-subtitle">Phone Case</p>

          <div className="rating">
            <div className="stars">
              <span>★★★★★</span>
            </div>
            <span className="review-count">{product.reviews} Reviews</span>
          </div>

          <div className="price">
            {product.originalPrice && (
              <span className="original-price">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="sale-price">${product.price.toFixed(2)}</span>
          </div>

          <div className="payment-info">
            <span>
              4 interest-free payments of ${(product.price / 4).toFixed(2)}.
            </span>
            <span className="learn-more">Learn More</span>
          </div>

          <div className="variant-selection">
            <div className="variant-option">
              <div className="variant-icon">📱</div>
              <div className="variant-text">
                <div>1 Abdeckung hinzufügen</div>
              </div>
            </div>
            <div className="variant-option active">
              <div className="variant-icon">📱</div>
              <div className="variant-text">
                <div>Glas für Kamera</div>
                <div className="variant-subtitle">2 hinzufügen (1% sparen)</div>
              </div>
            </div>
            <div className="variant-option">
              <div className="variant-icon">📱</div>
              <div className="variant-text">
                <div>3 Hüllen Familie</div>
                <div className="variant-subtitle">3 hinzufügen (8% sparen)</div>
              </div>
            </div>
            <div className="variant-option">
              <div className="variant-icon">📱</div>
              <div className="variant-text">
                <div>4 Hüllen Familie</div>
                <div className="variant-subtitle">
                  4 hinzufügen (12% sparen)
                </div>
              </div>
            </div>
          </div>

          <div className="quantity-section">
            <label>Anzahl</label>
            <select className="quantity-dropdown">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="shipping-options">
            <div className="shipping-option">
              <input type="radio" id="standard" name="shipping" />
              <label htmlFor="standard">
                <div>Standard</div>
                <div className="shipping-time">2-4 Werktage</div>
              </label>
            </div>
            <div className="shipping-option">
              <input type="radio" id="express" name="shipping" />
              <label htmlFor="express">
                <div>Express</div>
                <div className="shipping-time">1-2 Werktage</div>
              </label>
            </div>
            <div className="shipping-option">
              <input type="radio" id="overnight" name="shipping" />
              <label htmlFor="overnight">
                <div>Overnight</div>
                <div className="shipping-time">1 Werktag</div>
              </label>
            </div>
          </div>

          <div className="expandable-sections">
            <details className="expandable-section">
              <summary>WIE ES FUNKTIONIERT</summary>
              <div className="section-content">
                Content about how it works...
              </div>
            </details>
            <details className="expandable-section">
              <summary>VERSANDPOLITIK</summary>
              <div className="section-content">Shipping policy content...</div>
            </details>
            <details className="expandable-section">
              <summary>WAS IST ENTHALTEN?</summary>
              <div className="section-content">What's included content...</div>
            </details>
          </div>
        </div>
      </div>

      {/* Bottom Protection Banner */}
      <div className="protection-banner">
        <div className="protection-text">
          <span>🛡️ 100% Protection</span>
          <span>🛡️ 100% Protection</span>
          <span>⚡ 100% Protection</span>
          <span>⭐ 100% Protection</span>
          <span>🛡️ 100% Protection</span>
          <span>⚡ 100% Protection</span>
          <span>⭐ 100% Protection</span>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="comparison-section">
        <h2 className="comparison-title">NFCOVERS™ vs Others</h2>
        <div className="comparison-table">
          <div className="table-header">
            <div className="header-cell"></div>
            <div className="header-cell">
              <div className="brand-highlight">Keyform™</div>
            </div>
            <div className="header-cell">Phone Cover</div>
          </div>
          <div className="table-row">
            <div className="feature-cell">Andere Farbe</div>
            <div className="check-cell">
              <div className="check-icon">✓</div>
            </div>
            <div className="check-cell">
              <div className="check-icon">✓</div>
            </div>
          </div>
          <div className="table-row">
            <div className="feature-cell">Innovative Technologie</div>
            <div className="check-cell">
              <div className="check-icon">✓</div>
            </div>
            <div className="check-cell">
              <div className="check-icon">✓</div>
            </div>
          </div>
          <div className="table-row">
            <div className="feature-cell">Verbesserte Funktionalität</div>
            <div className="check-cell">
              <div className="check-icon">✓</div>
            </div>
            <div className="check-cell">
              <div className="check-icon">✓</div>
            </div>
          </div>
          <div className="table-row">
            <div className="feature-cell">Personalisierungsoptionen</div>
            <div className="check-cell">
              <div className="check-icon">✓</div>
            </div>
            <div className="check-cell">
              <div className="check-icon">✓</div>
            </div>
          </div>
          <div className="table-row">
            <div className="feature-cell">Nachhaltigkeit und Qualität</div>
            <div className="check-cell">
              <div className="check-icon">✓</div>
            </div>
            <div className="check-cell">
              <div className="check-icon">✓</div>
            </div>
          </div>
        </div>
      </div>

      {/* Personalization Section */}
      <div className="personalization-section">
        <div className="personalization-content">
          <h2 className="personalization-title">
            Personalization in your hands
          </h2>
          <p className="personalization-text">
            Bringen Sie Ihre einzigartigen Stil mit unserer revolutionären
            Handyhülle zum Ausdruck. Ändern Sie das Bild, die Farbe oder Anzeige
            eines Tages mit einem einzigen Fingertipp mit Keyform und
            Personalisierung Optionen zum Ausdruck bringen. Machen Sie Ihr
            Telefon zu einem Spiegelbild Ihrer Persönlichkeit.
          </p>
        </div>
        <div className="personalization-image">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Personalization phones"
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <div className="video-controls">
          <button className="video-nav-btn">1M</button>
          <div className="video-player">
            <div className="play-button">
              <div className="play-icon">▶</div>
            </div>
          </div>
          <button className="video-nav-btn">1M</button>
        </div>
        <div className="video-info">
          <h3 className="video-title">NFCOVERS™ DIGITAL</h3>
          <div className="video-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>

      {/* Promise Section */}
      <div className="promise-section">
        <h2 className="promise-title">Unser Versprechen an Sie</h2>
        <p className="promise-text">
          Wir sind bestrebt, Ihnen nur Anfang bis Ende ein außergewöhnliches
          Erlebnis zu bieten. Das bedeutet Sie erwarten, wenn Sie sich für uns
          entscheiden: Qualitätssicherung, Kundenzufriedenheit, Innovation und
          Nachhaltigkeit in jedem Aspekt unserer Produkte und Dienstleistungen.
        </p>
        <button className="promise-btn">Buy Now</button>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-block keyform-block">
          <div className="feature-content">
            <h2 className="keyform-title">Keyform™</h2>
            <div className="feature-phone-image">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Purple phone"
                width={200}
                height={300}
              />
            </div>
          </div>
          <div className="feature-text-content">
            <h3 className="feature-subtitle">Endless possibilities</h3>
            <p className="feature-description">
              NFCOVERS™ nutzt für Smartphone zu einem personalisierten
              Erlebnis. Ändern Sie das Bild, Logo und viel Liebe und ein weniger
              das Smartphone zu einem das andere Aspekt Ihres Telefons mit nur
              einem Fingertipp. Machen Sie Ihr Telefon zu einem Spiegelbild
              Ihrer Persönlichkeit.
            </p>
          </div>
        </div>

        <div className="feature-block unique-block">
          <div className="feature-text-content">
            <h3 className="feature-subtitle">Einzigartig wie du</h3>
            <p className="feature-description">
              NFCOVERS™ ist ein innovatives Wearables, das personalisierte
              Designelemente in einer einzigen Hülle bietet. Jeder Technologie
              können Sie Ihren Stil und Ihre Persönlichkeit zum Ausdruck bringen
              und gleichzeitig Ihr Telefon vor Schäden zu schützen. Entdecken
              Sie die Zukunft der personalisierten Handyhüllen.
            </p>
          </div>
          <div className="feature-content">
            <div className="feature-phone-image">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Purple phone"
                width={200}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="feature-block eink-block">
          <div className="feature-content full-width">
            <h3 className="feature-subtitle">
              Energiesparende E-Ink: langlebige, elegante Handyhülle
            </h3>
            <p className="feature-description">
              NFCOVERS™ ist ein innovatives Wearables, das personalisierte
              Designelemente in einer einzigen Hülle bietet. Jeder Technologie
              können Sie Ihren Stil und Ihre Persönlichkeit zum Ausdruck bringen
              und gleichzeitig Ihr Telefon vor Schäden zu schützen. Entdecken
              Sie die Zukunft der personalisierten Handyhüllen. Die
              E-Ink-Technologie verbraucht minimalen Strom und bietet eine
              elegante, langlebige Lösung für Ihr Smartphone. Erleben Sie die
              perfekte Kombination aus Stil, Funktionalität und Nachhaltigkeit.
              Wechseln Sie mühelos zwischen verschiedenen Designs und machen Sie
              Ihr Telefon zu einem einzigartigen Ausdruck Ihrer Persönlichkeit.
            </p>
            <div className="eink-image">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="E-ink technology"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2 className="contact-title">Contact us</h2>
        <p className="contact-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5}></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">
            SUBMIT
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">FAQ'S</h2>
        <div className="faq-grid">
          <details className="faq-item">
            <summary>WIE ES FUNKTIONIERT</summary>
            <div className="faq-content">Information about how it works...</div>
          </details>
          <details className="faq-item">
            <summary>WIE ES FUNKTIONIERT</summary>
            <div className="faq-content">Information about how it works...</div>
          </details>
          <details className="faq-item">
            <summary>VERSANDPOLITIK</summary>
            <div className="faq-content">Shipping policy information...</div>
          </details>
          <details className="faq-item">
            <summary>VERSANDPOLITIK</summary>
            <div className="faq-content">Shipping policy information...</div>
          </details>
          <details className="faq-item">
            <summary>WAS IST ENTHALTEN?</summary>
            <div className="faq-content">What's included information...</div>
          </details>
          <details className="faq-item">
            <summary>WAS IST ENTHALTEN?</summary>
            <div className="faq-content">What's included information...</div>
          </details>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="reviews-section">
        <h2 className="reviews-title">Kommentare der Käufer</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-image">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Customer review"
                width={300}
                height={200}
              />
            </div>
            <div className="review-content">
              <h4 className="reviewer-name">Shopper</h4>
              <p className="review-text">
                "Ich bin absolut begeistert von meiner NFCOVERS Hülle! Die
                Qualität ist erstklassig und die Personalisierungsmöglichkeiten
                sind endlos."
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="review-image">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Customer review"
                width={300}
                height={200}
              />
            </div>
            <div className="review-content">
              <h4 className="reviewer-name">Shopper</h4>
              <p className="review-text">
                "Die E-Ink Technologie ist revolutionär. Mein Telefon sieht
                jeden Tag anders aus und der Akku hält viel länger."
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="review-image">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Customer review"
                width={300}
                height={200}
              />
            </div>
            <div className="review-content">
              <h4 className="reviewer-name">Shopper</h4>
              <p className="review-text">
                "Perfekte Kombination aus Stil und Funktionalität. Kann ich
                jedem empfehlen, der sein Telefon personalisieren möchte."
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="review-image">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Customer review"
                width={300}
                height={200}
              />
            </div>
            <div className="review-content">
              <h4 className="reviewer-name">Shopper</h4>
              <p className="review-text">
                "Ausgezeichneter Kundenservice und schnelle Lieferung. Die Hülle
                übertrifft alle meine Erwartungen."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">NFCOVERS</div>
          <nav className="footer-nav">
            <a href="#" className="footer-link">
              Home
            </a>
            <a href="#" className="footer-link">
              catalog
            </a>
            <a href="#" className="footer-link">
              testing order
            </a>
            <a href="#" className="footer-link">
              contact us
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© 2024 NFCOVERS™. All rights reserved.</p>
          <div className="payment-icons">
            <span>💳</span>
            <span>💳</span>
            <span>💳</span>
            <span>💳</span>
            <span>💳</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
