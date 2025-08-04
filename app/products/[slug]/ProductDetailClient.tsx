"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../../../components/CartContext";
import Link from "next/link";
import { getCurrentPricing } from "../../../data/products";
import { Product } from "../../../data/products";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("description");

  const currentPricing = getCurrentPricing(product, quantity);
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= (product.minOrder ?? 1) && newQuantity <= (product.stock ?? 0)) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: currentPricing.price,
      image: product.images?.[0] || product.image,
      category: product.category
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-[#FF5722]">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <Link href="/products" className="text-gray-700 hover:text-[#FF5722] ml-1 md:ml-2">
                  Products
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-500 ml-1 md:ml-2">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden border">
              <div className="h-full bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-orange-500/20" />
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-[#FF5722] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
            </div>
            
            {/* Thumbnail Images */}
            {product.images && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-[#FF5722]' : 'border-gray-200'
                    }`}
                  >
                    <div className="h-full bg-gray-200" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-sm text-gray-500 capitalize">
                {product.category.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </p>
            </div>

            {/* Price Section */}
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-[#FF5722]">
                  ${currentPricing.price.toFixed(2)}
                </span>
                {currentPricing.discount > 0 && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.basePrice.toFixed(2)}
                  </span>
                )}
                {currentPricing.discount > 0 && (
                  <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                    {currentPricing.discount}% OFF
                  </span>
                )}
              </div>

              {/* Quantity Pricing Table */}
              {product.quantityPricing && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Quantity Pricing</h3>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-2">
                      <span>Quantity</span>
                      <span>Unit Price</span>
                      <span>Discount</span>
                    </div>
                    {product.quantityPricing.map((pricing: any, index: number) => (
                      <div key={index} className={`grid grid-cols-3 gap-2 text-sm py-1 ${
                        quantity >= pricing.min && quantity <= pricing.max ? 'bg-[#FF5722]/10 rounded' : ''
                      }`}>
                        <span>{pricing.min}-{pricing.max === 999 ? '999+' : pricing.max}</span>
                        <span>${pricing.price.toFixed(2)}</span>
                        <span>{pricing.discount}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= (product.minOrder || 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#FF5722]"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || (product.minOrder || 1))}
                    min={product.minOrder || 1}
                    max={product.stock || 999}
                    className="w-20 h-10 text-center border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF5722]"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= (product.stock || 999)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#FF5722]"
                  >
                    +
                  </button>
                  <span className="text-sm text-gray-500">
                    Min: {product.minOrder || 1} | Stock: {product.stock || 'Unlimited'}
                  </span>
                </div>
              </div>

              {/* Total Price */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Price:</span>
                  <span className="text-2xl font-bold text-[#FF5722]">
                    ${(currentPricing.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  onClick={handleAddToCart}
                  className="w-full bg-[#FF5722] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#FF5722]/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
                <button className="w-full bg-white border-2 border-[#FF5722] text-[#FF5722] py-3 px-6 rounded-lg font-medium hover:bg-[#FF5722]/5 transition-colors">
                  Contact Supplier
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-white p-6 rounded-lg border space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Lead Time:</span>
                  <span className="ml-2 font-medium">{product.leadTime || 'Contact for details'}</span>
                </div>
                <div>
                  <span className="text-gray-500">Shipping:</span>
                  <span className="ml-2 font-medium">{product.shipping || 'Contact for details'}</span>
                </div>
              </div>
              
              {/* Features */}
              {product.features && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                  <ul className="space-y-1">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#FF5722] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg border mb-12">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "description", label: "Description" },
                { id: "specifications", label: "Specifications" },
                { id: "shipping", label: "Shipping & Returns" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? "border-[#FF5722] text-[#FF5722]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {selectedTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {selectedTab === "specifications" && product.specifications && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-600">{value as string}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === "shipping" && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Shipping Information</h3>
                  <p className="text-gray-700">{product.shipping || 'Contact us for shipping details'}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Lead Time</h3>
                  <p className="text-gray-700">{product.leadTime || 'Contact us for lead time details'}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Returns Policy</h3>
                  <p className="text-gray-700">30-day return policy for unused items in original packaging.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct: Product) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-orange-500/20" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-[#FF5722] font-bold">
                      ${relatedProduct.basePrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 