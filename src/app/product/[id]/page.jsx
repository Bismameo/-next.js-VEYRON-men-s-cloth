import { notFound } from "next/navigation";
import { products } from "../../data/products";
import ProductDetail from "../../Components/ProductDetail";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}
