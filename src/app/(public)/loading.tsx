import ProductCardSkeleton from '@/entities/product/ui/ProductCard/ProductCardSkeleton';
import style from '@/features/HomePage/ui/HomePage.module.scss';

export default function Loading() {
  return (
    <div className={style.wrapper}>
      {Array.from({ length: 12 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
