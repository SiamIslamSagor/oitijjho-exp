import CheckoutClient from "./CheckoutClient";
import ProtectedRoute from "../../components/ProtectedRoute";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout - Oitijjho",
  description: "Complete your order with cash on delivery. Secure checkout for authentic Bangladeshi products.",
};

export default function CheckoutPage() {
  return (
    <ProtectedRoute>
      <CheckoutClient />
    </ProtectedRoute>
  );
} 