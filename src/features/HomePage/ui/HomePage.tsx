'use client';

import ProductCard from '@/entities/product/ui/ProductCard/ProductCard';

import style from './HomePage.module.scss';

import type { Product } from '@/shared/api/types';

export default function HomePage({ products }: { products: Product[] }) {
  return (
    <div className={style.wrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
