// src/components/ProductCard.jsx
function ProductCard({ product }) {
    return (
      <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        width: '200px',
        borderRadius: '8px'
      }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '100%', height: '150px', objectFit: 'contain' }}
        />
        <h4>{product.title}</h4>
        <p><strong>${product.price}</strong></p>
      </div>
    );
  }
  
  export default ProductCard;
  