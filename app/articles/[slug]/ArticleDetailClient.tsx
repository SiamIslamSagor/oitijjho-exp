"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Article } from "@/data/articles";

interface ArticleDetailClientProps {
  article: Article;
  relatedArticles: Article[];
}

export default function ArticleDetailClient({ article, relatedArticles }: ArticleDetailClientProps) {
  // Convert plain text content to paragraphs
  const contentParagraphs = article.content.split('\n\n').filter(paragraph => paragraph.trim());

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50 z-[-1]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <motion.nav 
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link href="/articles" className="hover:text-[#FF5722] transition-colors">
                    Articles
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">{article.title}</li>
              </ol>
            </motion.nav>

            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="mb-6">
                <span className="bg-[#FF5722] text-white px-4 py-2 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">{article.author}</p>
                    <p className="text-sm">{article.authorTitle}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {article.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              {/* Featured Image */}
              <div className="mb-12">
                <div className="h-64 md:h-96 bg-gradient-to-br from-orange-300/20 to-orange-500/20 rounded-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 to-orange-500/30 rounded-2xl" />
                </div>
              </div>

              {/* Article Content */}
              <div className="article-content space-y-6">
                {contentParagraphs.map((paragraph, index) => {
                  // Check if paragraph is a heading (starts with a word and ends without period)
                  const isHeading = /^[A-Z][^.!?]*$/.test(paragraph.trim()) && paragraph.length < 100;
                  
                  if (isHeading) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph}
                      </h2>
                    );
                  }
                  
                  // Check if paragraph contains bullet points
                  if (paragraph.includes('•')) {
                    const parts = paragraph.split('•');
                    const title = parts[0].trim();
                    const items = parts.slice(1).map(item => item.trim()).filter(item => item);
                    
                    return (
                      <div key={index} className="mt-6">
                        {title && <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>}
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </motion.div>

            {/* Article Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{article.author}</p>
                    <p className="text-sm text-gray-600">{article.authorTitle}</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 text-gray-600 hover:text-[#FF5722] transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    Share
                  </button>
                  <button className="flex items-center px-4 py-2 text-gray-600 hover:text-[#FF5722] transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    Like
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Stories
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Continue exploring the rich heritage of Bangladesh through these related stories.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.article
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href={`/articles/${relatedArticle.slug}`}>
                    <div className="h-48 bg-gradient-to-br from-orange-300/20 to-orange-500/20 relative rounded-t-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 to-orange-500/30 rounded-t-xl" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#FF5722] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{relatedArticle.date}</span>
                        <span className="mx-2">•</span>
                        <span>{relatedArticle.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[#FF5722] transition-colors duration-300">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="text-[#FF5722] font-medium hover:text-[#FF9800] transition-colors duration-300 flex items-center">
                        Read More
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center mt-12"
            >
              <Link 
                href="/articles"
                className="inline-flex items-center px-8 py-4 bg-white text-[#FF5722] font-medium rounded-lg border-2 border-[#FF5722] hover:bg-[#FF5722] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View All Articles
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 