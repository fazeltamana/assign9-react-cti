import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="card p-6 animate-pulse space-y-4">
        <div className="h-40 bg-slate-200 rounded" />
        <div className="h-4 bg-slate-200 rounded w-1/2" />
        <div className="h-3 bg-slate-200 rounded w-full" />
        <div className="h-3 bg-slate-200 rounded w-2/3" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="card p-6 text-center space-y-4">
        <p className="text-red-500 font-semibold">
          Error loading product
        </p>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="card p-6 space-y-6">
      {/* PRODUCT */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={data.image}
          alt={data.title}
          className="h-48 w-full md:w-48 object-contain"
        />
        <div className="flex-1">
          <h2 className="text-lg font-bold">{data.title}</h2>
          <p className="text-sm text-[var(--textSecondary)] mt-2 leading-relaxed">
            {data.description}
          </p>
          <p className="mt-4 text-xl font-black text-[var(--primary)]">
            ${data.price}
          </p>
        </div>
      </div>
      {/* ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost w-full"
        >
          ← Back
        </button>
        <button
          onClick={() => navigate("/checkout")}
          className="btn btn-primary w-full"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}