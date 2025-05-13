import { FiSearch } from 'react-icons/fi';
import ProductSearchBar from './productsearchbar';

const product = {
    articleNo: '1234567890',
    name: 'This is a test product with fifty characters this!',
    inPrice: 900500,
    price: 1500800,
    unit: 'kilometers/hour',
    inStock: 2500600,
    description: 'This is the description with fifty characters this'
};

function ProductTable() {
    return (
        <>
            <ProductSearchBar />

            <div
                style={{
                    width: '90%',
                    maxWidth: '1200px',
                    margin: '20px auto',
                    backgroundColor: '#fff',
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                    padding: '20px'
                }}
            >
                <div style={{ display: 'flex', fontWeight: 'bold', marginBottom: '10px' }}>
                    <div style={{ flex: 1 }}>Article No.</div>
                    <div style={{ flex: 2 }}>Product/Service</div>
                    <div style={{ flex: 1 }}>In Price</div>
                    <div style={{ flex: 1 }}>Price</div>
                    <div style={{ flex: 1 }}>Unit</div>
                    <div style={{ flex: 1 }}>In Stock</div>
                    <div style={{ flex: 2 }}>Description</div>
                </div>
                <div style={{ display: 'flex', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                    <div style={{ flex: 1 }}>{product.articleNo}</div>
                    <div style={{ flex: 2 }}>{product.name}</div>
                    <div style={{ flex: 1 }}>{product.inPrice}</div>
                    <div style={{ flex: 1 }}>{product.price}</div>
                    <div style={{ flex: 1 }}>{product.unit}</div>
                    <div style={{ flex: 1 }}>{product.inStock}</div>
                    <div style={{ flex: 2 }}>{product.description}</div>
                </div>
            </div>
        </>
    );
}

export default ProductTable;
