import React, { useState, useEffect } from 'react';
import Item from './Item';
import { toast } from 'react-toastify';

const ItemListContainer = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json');
                const products = await response.json();
                setProducts(products);
                setLoading(false);
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
                console.error('Error fetching products:', error);
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
    }, []);

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
        <div className="container mt-4">
            {products.length === 0 ? (
                'Loading products...'
            ) : (
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-3 ms-md-7 mb-4" key={product.id}>
                            <Item product={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
