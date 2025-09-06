import style from './ProductCardSkeleton.module.scss';

export default function ProductCardSkeleton() {
  return (
    <div className={style.skeletonCard}>
      <div className={style.skeletonImage} />
      <div className={style.skeletonTitle} />
      <div className={style.skeletonCategory} />
      <div className={style.skeletonPrice} />
      <div className={style.skeletonButton} />
    </div>
  );
}
