'use client';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import ProductCard from '@/entities/product/ui/ProductCard/ProductCard';
import { getProducts } from '@/shared/api';
import Spinner from '@/shared/ui/Spinner/Spinner';

import style from './HomePage.module.scss';

import type { Product } from '@/shared/api/types';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts(12);
        setProducts(data.products);
      } catch (err: unknown) {
        console.error('Error fetching products:', err);
        if (isAxiosError(err) && err.response?.data?.message) {
          setError(err.response.data.message);
        } else {
          setError('Failed to fetch products.');
        }
      } finally {
        setLoading(false);
      }
    }

    void fetchProducts();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div style={{ textAlign: 'center', color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div className={style.wrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
