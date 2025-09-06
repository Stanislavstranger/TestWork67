'use client';

import Image from 'next/image';

import { useSessionStore } from '@/entities/session/model/session.store';
import Button from '@/shared/ui/Button/Button';

import style from './ProductCard.module.scss';

import type { Product } from '@/shared/api/types';

export default function ProductCard({ product }: { product: Product }) {
  const isAuthed = !!useSessionStore((s) => s.token);

  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          style={{ height: 'auto' }}
          priority
        />
      </div>
      <div className={style.title}>{product.title}</div>
      <div className={style.category}>{product.category}</div>
      <div className={style.price}>${product.price.toFixed(2)}</div>
      {isAuthed && (
        <div className={style.actions}>
          <Button variant="primary" className={style.button}>
            Add to cart
          </Button>
        </div>
      )}
    </div>
  );
}
