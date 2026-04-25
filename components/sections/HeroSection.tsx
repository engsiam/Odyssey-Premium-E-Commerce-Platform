"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fetchProducts } from "@/lib/productService";
import Image from "next/image";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroSection() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-cream" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <div className="h-16 w-48 bg-gray-200 rounded animate-pulse" />
              <div className="h-16 w-48 bg-gray-200 rounded animate-pulse" />
              <div className="h-16 w-48 bg-brand-amber/20 rounded animate-pulse" />
              <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
              <div className="h-12 w-32 bg-brand-navy/10 rounded animate-pulse" />
            </div>
            <div className="flex justify-center">
              <div className="relative max-w-md mx-auto lg:ml-auto">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-amber/10 rounded-full blur-3xl" />
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
                  <div className="p-6">
                    <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-5 w-40 bg-gray-200 rounded animate-pulse mb-1" />
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!products[0]) {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-cream" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-navy leading-[1.05]">
                Discover.
              </h1>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-navy leading-[1.05]">
                Desire.
              </h1>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-amber leading-[1.05]">
                Own.
              </h1>
              <p className="text-lg text-brand-slate max-w-md leading-relaxed">
                Curated lifestyle products for those who seek excellence.
              </p>
              <Link href="/items">
                <Button variant="primary" size="lg">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-cream">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A0E1A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6H6V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 max-w-xl"
          >
            <motion.h1
              variants={wordVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-navy leading-[1.05]"
            >
              Discover.
            </motion.h1>

            <motion.h1
              variants={wordVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-navy leading-[1.05]"
            >
              Desire.
            </motion.h1>

            <motion.h1
              variants={wordVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-amber leading-[1.05]"
            >
              Own.
            </motion.h1>

            <motion.p
              variants={wordVariants}
              className="text-lg text-brand-slate max-w-md leading-relaxed"
            >
              Curated lifestyle products for those who seek excellence. Every
              piece tells a story of quality, design, and purpose.
            </motion.p>

            <motion.div
              variants={wordVariants}
              className="flex items-center gap-6 flex-wrap"
            >
              <Link href="/items">
                <Button
                  variant="primary"
                  size="lg"
                  className="hover:shadow-lg hover:scale-[1.03] transition-all"
                >
                  Shop Now
                </Button>
              </Link>

              <Link
                href="#features"
                className="text-brand-slate hover:text-brand-navy transition"
              >
                Learn More →
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block mt-10 lg:mt-0 relative z-10"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative max-w-md mx-auto lg:ml-auto z-20"
            >
              {/* Glow */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-amber/20 rounded-full blur-3xl -z-10" />

              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(10,14,26,0.15)] overflow-hidden border border-gray-100 z-10">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={products[0]?.imageUrl}
                    alt={products[0]?.title}
                    fill
                    priority
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                    className="object-cover object-[center_10%]"
                  />
                </div>

                <div className="p-6 bg-white relative z-10">
                  <p className="text-xs text-amber-600 font-medium uppercase tracking-wide mb-1">
                    Featured
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-1 min-h-[1.5rem] font-display">
                    {products[0]?.title || 'No Title'}
                  </h3>

                  <p className="text-lg font-bold text-gray-900">
                    ${products[0]?.price || 0}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
