"use client";

import { useStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function HomePage() {
  const products = useStore((state) => state.products);

  return (
    <div className="app">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">The Future of Phone Protection</h1>
          <p className="hero-subtitle">
            Revolutionary E-Ink technology meets premium design. Personalize
            your phone case like never before.
          </p>
          <div className="hero-actions">
            <button className="hero-btn primary">Shop Now</button>
            <button className="hero-btn secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/placeholder.svg?height=500&width=400"
            alt="NFCOVERS Hero"
            width={400}
            height={500}
          />
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Discover our complete range of revolutionary phone cases
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="home-features-section">
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🔋</div>
            <h3>Energy Efficient</h3>
            <p>E-Ink technology uses minimal power for maximum display time</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎨</div>
            <h3>Endless Customization</h3>
            <p>Change your phone's look with a simple tap</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <h3>Premium Protection</h3>
            <p>Military-grade protection meets elegant design</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌱</div>
            <h3>Sustainable</h3>
            <p>Eco-friendly materials and long-lasting technology</p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Phone?</h2>
          <p className="cta-text">
            Join thousands of satisfied customers who have revolutionized their
            phone experience
          </p>
          <button className="cta-btn">Shop All Products</button>
        </div>
      </section>
    </div>
  );
}
