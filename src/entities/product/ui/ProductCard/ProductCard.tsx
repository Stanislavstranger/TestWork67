'use client';

import Image from 'next/image';

import { useSessionStore } from '@/entities/session/model/session.store';
import Button from '@/shared/ui/Button/Button';

import s from './ProductCard.module.scss';

import type { Product } from '@/shared/api/types';

export default function ProductCard({ product }: { product: Product }) {
  const isAuthed = !!useSessionStore((s) => s.token);

  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          style={{ height: 'auto' }}
          priority
        />
      </div>
      <div className={s.title}>{product.title}</div>
      <div className={s.category}>{product.category}</div>
      <div className={s.price}>${product.price.toFixed(2)}</div>
      {isAuthed && (
        <div className={s.actions}>
          <Button variant="primary" className={s.button}>
            Add to cart
          </Button>
        </div>
      )}
    </div>
  );
}
