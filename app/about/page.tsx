'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Sparkles, Star, Users, Award } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We curate only the finest products that meet our rigorous standards for craftsmanship and durability.',
  },
  {
    icon: Heart,
    title: 'Customer Obsessed',
    description: 'Every decision we make is centered around delivering exceptional value and service.',
  },
  {
    icon: Sparkles,
    title: 'Timeless Design',
    description: 'We believe in pieces that transcend trends and become cherished possessions.',
  },
];

const stats = [
  { value: '10K+', label: 'Happy Customers', icon: Users },
  { value: '500+', label: 'Premium Products', icon: Star },
  { value: '50+', label: 'Awards Won', icon: Award },
];

const features = [
  {
    title: 'Curated Selection',
    description: 'Every product is hand-picked by our expert team to ensure it meets our high standards.',
  },
  {
    title: 'Quality Guaranteed',
    description: 'We stand behind every product with our satisfaction guarantee.',
  },
  {
    title: 'Fast Shipping',
    description: 'Get your orders delivered quickly with our express delivery options.',
  },
  {
    title: '24/7 Support',
    description: 'Our team is always here to help you find the perfect product.',
  },
];

const pageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function AboutPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50"
    >
      <div className="bg-gradient-to-b from-white to-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-amber/10 text-brand-amber text-sm font-medium rounded-full mb-6">
              Our Story
            </span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
              About Odyssey
            </h1>
            <p className="text-brand-slate text-xl max-w-3xl mx-auto leading-relaxed">
              Your destination for curated lifestyle excellence. Discover premium products 
              handpicked to elevate your everyday experience.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20"
        >
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
              Crafted for Those Who Demand Excellence
            </h2>
            <p className="text-brand-slate leading-relaxed mb-4">
              At Odyssey, we believe that exceptional products enhance exceptional 
              lives. Our mission is to curate a collection of lifestyle items that 
              represent the pinnacle of quality, design, and craftsmanship.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              Founded with a vision to simplify the pursuit of excellence, we've done the 
              research so you don't have to. Each product in our collection is 
              selected for its outstanding qualities and ability to enrich your daily 
              experience.
            </p>
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm"
                >
                  <span className="text-sm font-medium text-brand-navy">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-brand-amber/20 to-brand-navy/10 p-8">
              <div className="w-full h-full rounded-xl bg-white shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-brand-amber/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-10 h-10 text-brand-amber" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy mb-2">
                    Premium Quality
                  </h3>
                  <p className="text-brand-slate">
                    Curated for excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <Card key={index} hover className="p-8 text-center">
              <stat.icon className="w-8 h-8 text-brand-amber mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-brand-navy mb-2">
                {stat.value}
              </div>
              <p className="text-brand-slate">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} hover className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-amber/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-brand-amber" />
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-brand-slate">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Ready to Explore?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              Discover our curated collection of premium products handpicked 
              to elevate your lifestyle.
            </p>
            <Link href="/items">
              <Button size="lg" className="bg-brand-amber hover:bg-brand-amber/90 text-brand-navy">
                Browse Collection
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}