"use client";

import type React from "react";

import { useState } from "react";
import { useStore } from "../lib/store";

export default function TrackingClient() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderFound, setOrderFound] = useState<boolean | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const getOrderById = useState((state) => state.getOrderById);

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const order = getOrderById(trackingNumber);
    setOrderFound(!!order);
    setIsSearching(false);
  };

  return (
    <div className="app">
      <div className="tracking-container">
        <div className="tracking-header">
          <h1 className="tracking-title">Track Your Order</h1>
          <p className="tracking-subtitle">
            Enter your order number or tracking number to get real-time updates
            on your shipment
          </p>
        </div>

        <form onSubmit={handleTrackOrder} className="tracking-form">
          <div className="form-group">
            <label htmlFor="tracking">Order Number / Tracking Number</label>
            <input
              type="text"
              id="tracking"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter your tracking number (e.g., NF1234567890)"
              required
              disabled={isSearching}
            />
          </div>
          <button type="submit" className="track-btn" disabled={isSearching}>
            {isSearching ? "Searching..." : "Track Order"}
          </button>
        </form>

        {orderFound !== null && (
          <div className="tracking-results">
            {orderFound ? (
              <div className="order-status">
                <h2>Order Status</h2>
                <div className="status-timeline">
                  <div className="status-step completed">
                    <div className="step-icon">✓</div>
                    <div className="step-content">
                      <h3>Order Confirmed</h3>
                      <p>
                        Your order has been confirmed and is being processed
                      </p>
                    </div>
                  </div>
                  <div className="status-step completed">
                    <div className="step-icon">✓</div>
                    <div className="step-content">
                      <h3>Processing</h3>
                      <p>Your order is being prepared for shipment</p>
                    </div>
                  </div>
                  <div className="status-step active">
                    <div className="step-icon">📦</div>
                    <div className="step-content">
                      <h3>Shipped</h3>
                      <p>Your order has been shipped and is on its way</p>
                    </div>
                  </div>
                  <div className="status-step">
                    <div className="step-icon">🚚</div>
                    <div className="step-content">
                      <h3>Out for Delivery</h3>
                      <p>Your package is out for delivery</p>
                    </div>
                  </div>
                  <div className="status-step">
                    <div className="step-icon">📍</div>
                    <div className="step-content">
                      <h3>Delivered</h3>
                      <p>Your package has been delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="no-order">
                <h2>Order Not Found</h2>
                <p>
                  We couldn't find an order with that tracking number. Please
                  check your number and try again, or contact our support team
                  for assistance.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="tracking-help">
          <h2>Need Help?</h2>
          <div className="help-grid">
            <div className="help-item">
              <h3>Where to find your tracking number?</h3>
              <p>
                Your tracking number was sent to your email after your order
                shipped. Check your inbox and spam folder for the shipping
                confirmation email.
              </p>
            </div>
            <div className="help-item">
              <h3>Shipping times</h3>
              <p>
                <strong>Standard shipping:</strong> 2-4 business days
                <br />
                <strong>Express shipping:</strong> 1-2 business days
                <br />
                <strong>Overnight shipping:</strong> Next business day
              </p>
            </div>
            <div className="help-item">
              <h3>Contact support</h3>
              <p>
                If you need additional help with your order, please contact our
                customer support team at support@nfcovers.com or call +1 (555)
                123-4567.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
