
import React, { useEffect, useState } from 'react';
import '../styles/Modal.css';

const ProductModal = ({ isOpen, onClose, productData, onUpdate }) => {
  const [formData, setFormData] = useState({
    articleNo: '',
    product: '',
    inPrice: '',
    price: '',
    unit: '',
    inStock: '',
    description: ''
  });

  useEffect(() => {
    if (productData) {
      setFormData({
        articleNo: productData.articleNo || '',
        product: productData.product || '',
        inPrice: productData.inPrice || '',
        price: productData.price || '',
        unit: productData.unit || '',
        inStock: !!productData.inStock,
        description: productData.description || '',
      });
    } else {
      setFormData({
        articleNo: '',
        product: '',
        inPrice: '',
        price: '',
        unit: '',
        inStock: false,
        description: '',
      });
    }
  }, [productData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://task-lett.onrender.com/pricelist/${productData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const updatedProduct = await response.json();
      console.log('Updated:', updatedProduct);

      if (onUpdate) onUpdate();
      onClose();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };



  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-heading">{productData ? 'Edit Product' : 'Add New Product'}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {['articleNo', 'product', 'inPrice', 'price', 'unit', 'inStock', 'description'].map((field) =>
            field !== 'description' ? (
              <input
                key={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="form-input"
              />
            ) : (
              <textarea
                key={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder="Description"
                className="form-textarea"
                rows="3"
              />
            )
          )}
          <div className="button-container">
            <button
              type="button"
              onClick={onClose}
              className="button-cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button-save"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
