"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const cartItemsCount = useStore((state) => state.getCartItemsCount());
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
          Home
        </Link>
        <Link
          href="/catalog"
          className={`nav-link ${isActive("/catalog") ? "active" : ""}`}
        >
          catalog
        </Link>
        <Link
          href="/tracking"
          className={`nav-link ${isActive("/tracking") ? "active" : ""}`}
        >
          tracking order
        </Link>
        <Link
          href="/contact"
          className={`nav-link ${isActive("/contact") ? "active" : ""}`}
        >
          contact us
        </Link>
      </div>
      <div className="nav-center">
        <Link href="/" className="logo">
          NFCOVERS
        </Link>
      </div>
      <div className="nav-right">
        <select className="region-dropdown">
          <option>Land-Region</option>
        </select>
        <Link href="/cart" className="cart-link">
          Cart ({cartItemsCount})
        </Link>
        <Link href="/buy-now" className="buy-now-btn">
          Buy Now
        </Link>
      </div>
    </nav>
  );
}
