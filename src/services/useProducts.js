import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../features/products/productsAPI";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};