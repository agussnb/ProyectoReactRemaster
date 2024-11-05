import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null); 

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json');
                const products = await response.json();
                const productMatchesId = products.find(p => p.id === parseInt(id));
                setSelectedProduct(productMatchesId);
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
    }, [id]);

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

    if (!selectedProduct) {
        return <p>Cargando...</p>; 
    }

    return (
        <div>
            <ItemDetail key={selectedProduct.id} product={selectedProduct} />
        </div>
    );
};

export default ItemDetailContainer;
