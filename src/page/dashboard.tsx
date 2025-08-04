import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const Dashboard = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const products: Product[] = data.map((product: any) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
        }));
        setProductList(products);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-[100px] h-[100px] border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto mt-[300px]"></div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <div className="w-full p-4 bg-white">
              <div className="card-body">
                <h2 className="card-title font-bold">
                  Welcome to the Dashboard
                </h2>
                <p className="text-gray-600 text-[11px] mb-4">
                  Here you can see the list of products.
                </p>

                {error ? (
                  <div className="text-red-500">{error}</div>
                ) : productList.length === 0 ? (
                  <div className="text-gray-500">No Products found.</div>
                ) : (
                  <div className="grid grid-cols-4">
                    {productList.map((product) => (
                      <div
                        className="flex gap-3 items-center mb-[50px]"
                        key={product.id}
                      >
                        <div className="card  pt-4 shadow-2xl">
                          <img
                            className="w-full h-16 object-contain"
                            src={product.image}
                            alt={product.title}
                          />
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 truncate overflow-hidden whitespace-nowrap w-65">
                              {product.title}
                            </h3>
                            <p className="text-gray-600 text-[12px] mt-1 truncate overflow-hidden whitespace-nowrap w-65">
                              {product.description}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                              <span className="text-blue-600 font-bold text-lg">
                                ₹{product.price}
                              </span>
                              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;