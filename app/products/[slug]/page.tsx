import { getProductBySlug, getFeaturedProducts, products, Product } from "../../../data/products";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    return products.map((product: Product) => ({
      slug: product.slug,
    }))
  }

// Generate metadata for SEO
/* export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.'
    };
  }
  
  return {
    title: `${product.name} - Oitijjho`,
    description: product.description || `Discover ${product.name}, a beautiful handcrafted item from Bangladesh.`,
    keywords: `${product.name}, ${product.category}, Bangladesh, handcrafted, traditional`,
    openGraph: {
      title: product.name,
      description: product.description || `Discover ${product.name}, a beautiful handcrafted item from Bangladesh.`,
      type: 'website',
      images: product.images ? product.images.map(img => ({ url: img })) : [{ url: product.image }],
    },
  };
} */

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Get product data on the server
  const product = getProductBySlug(slug);
  
  // Return 404 if product not found
  if (!product) {
    notFound();
  }
  
  // Get related products on the server
  const relatedProducts = getFeaturedProducts().slice(0, 4);
  
  return (
    <ProductDetailClient 
      product={product} 
      relatedProducts={relatedProducts}
    />
  );
} 