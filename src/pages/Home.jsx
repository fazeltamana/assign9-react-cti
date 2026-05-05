import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-black">
          Discover Products ✨
        </h1>
        <p className="text-muted-light dark:text-muted-dark mt-2">
          Fast, modern shopping powered by React ecosystem.
        </p>
      </div>

      <ProductList />
    </>
  );
}