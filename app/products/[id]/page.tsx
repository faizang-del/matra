import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import ProductDetailView from '@/components/ProductDetailView';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    return {
      title: 'Product Not Found | Mātra Foods',
    };
  }

  return {
    title: `${product.name} | ${product.origin} | Mātra Foods`,
    description: product.description,
    keywords: [
      product.name,
      product.origin,
      product.category,
      'Mātra Foods',
      'Single-Origin',
      'Naturally Exceptional',
      'Pure Ingredients',
      'No Additives',
    ],
    openGraph: {
      title: `${product.name} | Mātra Foods`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
