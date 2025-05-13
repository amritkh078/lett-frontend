import React, { useEffect, useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import ProductSearchBar from './ProductSearchBar';
import ProductModal from './ProductModal';
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


      <div className="w-full max-w- mx-auto mt-10 space-y-2 px-4">
        <div className="flex items-center gap-2 font-semibold text-gray-700">
          <div className="flex-1">Article No.</div>
          <div className="flex-2">Product/Service</div>
          <div className="flex-1">In Price</div>
          <div className="flex-1">Price</div>
          <div className="flex-1">Unit</div>
          <div className="flex-1">In Stock</div>
          <div className="flex-2">Description</div>
          <div className="flex-1">Actions</div>
        </div>
        {products.map((product) => (
          <div key={product.id} className="flex border-t pt-2 items-center">
            <div className="flex-1">{product.articleNo}</div>
            <div className="flex-2 truncate whitespace-nowrap">{product.product}</div>
            <div className="flex-1">{product.inPrice}</div>
            <div className="flex-1">{product.price}</div>
            <div className="flex-1">{product.unit}</div>
            <div className="flex-1">{product.inStock ? 'True' : 'False'}</div>
            <div className="flex-2 truncate whitespace-nowrap">{product.description}</div>
            <div className="flex-1 flex space-x-2">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => openEditModal(product)}
              >
                <FiEdit />
              </button>
               <button
                className="text-red-500 hover:text-red-700"
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
