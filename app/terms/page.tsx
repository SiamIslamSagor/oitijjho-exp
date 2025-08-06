"use client";

import { motion } from "framer-motion";

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Terms & Conditions
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Please read these terms and conditions carefully before using our
            services. Last updated: {new Date().toLocaleDateString()}
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
            {/* Terms of Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  Welcome to Oitijjho Express. By accessing and using our
                  website and services, you accept and agree to be bound by the
                  terms and provision of this agreement.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    1. Acceptance of Terms
                  </h3>
                  <p>
                    By accessing and using this website, you accept and agree to
                    be bound by the terms and provision of this agreement. If
                    you do not agree to abide by the above, please do not use
                    this service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    2. Use License
                  </h3>
                  <p>
                    Permission is granted to temporarily download one copy of
                    the materials (information or software) on Oitijjho
                    Express's website for personal, non-commercial transitory
                    viewing only. This is the grant of a license, not a transfer
                    of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>
                      Use the materials for any commercial purpose or for any
                      public display
                    </li>
                    <li>
                      Attempt to reverse engineer any software contained on the
                      website
                    </li>
                    <li>
                      Remove any copyright or other proprietary notations from
                      the materials
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    3. Disclaimer
                  </h3>
                  <p>
                    The materials on Oitijjho Express's website are provided on
                    an 'as is' basis. Oitijjho Express makes no warranties,
                    expressed or implied, and hereby disclaims and negates all
                    other warranties including without limitation, implied
                    warranties or conditions of merchantability, fitness for a
                    particular purpose, or non-infringement of intellectual
                    property or other violation of rights.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Privacy Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  Your privacy is important to us. This privacy policy explains
                  how we collect, use, and protect your personal information.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Information We Collect
                  </h3>
                  <p>
                    We collect information you provide directly to us, such as
                    when you create an account, make a purchase, or contact us
                    for support. This may include:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
                    <li>Name and contact information</li>
                    <li>Billing and shipping addresses</li>
                    <li>Payment information</li>
                    <li>Order history and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How We Use Your Information
                  </h3>
                  <p>
                    We use the information we collect to process your orders,
                    communicate with you about your orders, send you marketing
                    materials (with your consent), and improve our services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Shipping & Returns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Shipping & Returns
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Shipping Policy
                  </h3>
                  <p>
                    We offer shipping to most locations worldwide. Shipping
                    times and costs vary depending on your location and the
                    shipping method you choose. All orders are processed within
                    1-2 business days.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Return Policy
                  </h3>
                  <p>
                    We accept returns within 30 days of delivery for most items.
                    Items must be in their original condition and packaging.
                    Some items may not be eligible for return due to their
                    nature (e.g., custom orders, perishable items).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Refund Process
                  </h3>
                  <p>
                    Once we receive your returned item, we will inspect it and
                    notify you of the refund status. If approved, your refund
                    will be processed within 5-7 business days to your original
                    payment method.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Payment Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Payment Terms
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Accepted Payment Methods
                  </h3>
                  <p>
                    We accept various payment methods including credit cards,
                    debit cards, bank transfers, and digital wallets. All
                    payments are processed securely through our trusted payment
                    partners.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Pricing and Currency
                  </h3>
                  <p>
                    All prices are displayed in Bangladeshi Taka (BDT) unless
                    otherwise stated. Prices are subject to change without
                    notice. We reserve the right to modify or discontinue any
                    product at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Taxes and Duties
                  </h3>
                  <p>
                    Prices do not include applicable taxes, duties, or shipping
                    charges. These additional costs will be calculated and
                    displayed during checkout.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Intellectual Property
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  All content on this website, including text, graphics, logos,
                  images, and software, is the property of Oitijjho Express and
                  is protected by copyright and other intellectual property
                  laws.
                </p>

                <p>
                  You may not reproduce, distribute, or create derivative works
                  from any content on this website without our express written
                  permission.
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Limitation of Liability
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  In no event shall Oitijjho Express or its suppliers be liable
                  for any damages (including, without limitation, damages for
                  loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on
                  our website.
                </p>

                <p>
                  Our total liability to you for any claims arising from the use
                  of our services shall not exceed the amount you paid for the
                  specific product or service giving rise to the claim.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  If you have any questions about these terms and conditions,
                  please contact us:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> support@oitijjhoexpress.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +880 1234-567890
                    </p>
                    <p>
                      <strong>Address:</strong> Dhaka, Bangladesh
                    </p>
                    <p>
                      <strong>Business Hours:</strong> Monday - Friday, 9:00 AM
                      - 6:00 PM (GMT+6)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 text-center">
                These terms and conditions are effective as of{" "}
                {new Date().toLocaleDateString()}. We reserve the right to
                update these terms at any time. Please check this page
                periodically for changes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
