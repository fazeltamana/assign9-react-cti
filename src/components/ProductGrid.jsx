import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((p) => (
        <div key={p.id} className="flex">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}