import React from 'react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Shipping Methods</h2>
              <p className="mb-4">
                We offer standard shipping and express shipping options for all orders within Bangladesh.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard Shipping: 3-5 business days</li>
                <li>Express Shipping: 1-2 business days</li>
                <li>Free shipping on orders above ৳1000</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Shipping Areas</h2>
              <p>
                We currently ship to all major cities and districts across Bangladesh. 
                Delivery times may vary based on your location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Order Processing</h2>
              <p>
                Orders are typically processed within 24 hours of placement. 
                You will receive a confirmation email with tracking information once your order ships.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Shipping Costs</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard shipping: ৳100</li>
                <li>Express shipping: ৳200</li>
                <li>Free shipping on orders above ৳1000</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h2>
              <p>
                If you have any questions about our shipping policy, please contact us at 
                <a href="mailto:info@oitijjho.com" className="text-[#FF5722] hover:underline ml-1">
                  info@oitijjho.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
