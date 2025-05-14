import React, { useEffect, useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import ProductSearchBar from './ProductSearchBar';
import ProductModal from './ProductModal';
import '../styles/ProductTable.css';

const ProductTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch('https://task-lett.onrender.com/pricelist')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);



  const openEditModal = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };


  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`https://task-lett.onrender.com/pricelist/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete');

      fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  return (
    <>
      <ProductSearchBar />
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productData={editingProduct}
        onUpdate={fetchProducts}
      />


      <div className="product-list-container">
      <div className="product-header">
        <div className="product-column">Article No.</div>
        <div className="product-column-2">Product/Service</div>
        <div className="product-column">In Price</div>
        <div className="product-column">Price</div>
        <div className="product-column">Unit</div>
        <div className="product-column">In Stock</div>
        <div className="product-column-2">Description</div>
        <div className="product-column">Actions</div>
      </div>
      {products.map((product) => (
        <div key={product.id} className="product-row">
          <div className="product-column">{product.articleNo}</div>
          <div className="product-column-2 product-truncate">{product.product}</div>
          <div className="product-column">{product.inPrice}</div>
          <div className="product-column">{product.price}</div>
          <div className="product-column">{product.unit}</div>
          <div className="product-column">{product.inStock ? 'True' : 'False'}</div>
          <div className="product-column-2 product-truncate">{product.description}</div>
          <div className="product-column action-buttons">
            <button
              onClick={() => openEditModal(product)}
            >
              <FiEdit />
            </button>
            <button
              onClick={() => handleDelete(product.id)}
            >
              <FiTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductTable;
