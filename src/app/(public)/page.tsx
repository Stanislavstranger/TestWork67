import HomePage from '@/features/HomePage/ui/HomePage';
import { getProducts } from '@/shared/api';

export default async function Home() {
  const data = await getProducts(12);
  return <HomePage products={data.products} />;
}
