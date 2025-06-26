"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/store";
import { useStore } from "@/lib/store";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link href={`/product/${product.id}`} className="product-card">
      <div className="product-card-image">
        {product.originalPrice && <div className="sale-badge">Sale</div>}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={400}
          className="product-image"
        />
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-description">{product.description}</p>
        <div className="product-card-rating">
          <div className="stars">{"★".repeat(Math.floor(product.rating))}</div>
          <span className="review-count">({product.reviews} Reviews)</span>
        </div>
        <div className="product-card-price">
          {product.originalPrice && (
            <span className="original-price">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="current-price">${product.price.toFixed(2)}</span>
        </div>
        <div className="product-card-actions">
          <button
            onClick={handleAddToCart}
            className="add-to-cart-btn"
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </Link>
  );
}
