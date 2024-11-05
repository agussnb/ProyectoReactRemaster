import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import Brands from "./Brands";

const BrandsContainer = () => {
  const { categoryId } = useParams();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        const products = await response.json();
        const productsWithMatchCategory = products.filter((product) => product.categoryId === Number(categoryId));
        setSelectedProducts(productsWithMatchCategory);
        setLoading(false);
        toast.dismiss();
        toast.success('Products loaded successfully!', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark'
        });
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        toast.error('Failed to load products!', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark'
        });
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) {
    return toast.info('Loading...', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark'
    });
  }

  return (
    <div className="row">
        {selectedProducts.map((product) => (
          <div className="col-md-3 ms-md-5 mb-4">
            <Brands key={product.id} data={product} />
          </div>
        ))}
    </div>
  );
}

export default BrandsContainer;
