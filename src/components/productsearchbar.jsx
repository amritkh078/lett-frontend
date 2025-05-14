import { FiPlus, FiFileText, FiSettings } from 'react-icons/fi';
import '../styles/ProductSearchBar.css';

const ProductSearchBar = ({ onAdd }) => {
  return (
    <div className="product-searchbar-container">
      <div className="product-searchbar-inner">

        <div className="product-search-fields">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search Article No..."
              className="search-input"
            />
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search Product..."
              className="search-input"
            />
          </div>
        </div>

        <div className="product-action-buttons">
          <button onClick={onAdd} className="action-button green">
            <FiPlus />
            <span>New Product</span>
          </button>

          <button className="action-button blue">
            <FiFileText />
            <span>Print List</span>
          </button>

          <button className="action-button blue">
            <FiSettings />
            <span>Advanced Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchBar;
