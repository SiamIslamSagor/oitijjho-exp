import { notFound } from "next/navigation";
import { getArticleBySlug, articles } from "@/data/articles";
import ArticleDetailClient from "./ArticleDetailClient";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Get related articles (excluding current article)
  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return <ArticleDetailClient article={article} relatedArticles={relatedArticles} />;
} 