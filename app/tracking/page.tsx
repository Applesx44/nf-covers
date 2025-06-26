import type { Metadata } from "next";
import TrackingClient from "./TrackingClient";

export const metadata: Metadata = {
  title: "Track Your Order - NFCOVERS",
  description:
    "Track your NFCOVERS order status and delivery information. Enter your tracking number to get real-time updates.",
  keywords: "order tracking, delivery status, NFCOVERS shipping",
};

export default function TrackingPage() {
  return <TrackingClient />;
}
