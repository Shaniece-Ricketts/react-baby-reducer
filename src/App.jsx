// App.jsx
import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './products';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editedProduct, setEditedProduct] = useState(null);

  const addProduct = () => {
    const newProduct = { id: Date.now(), name: "New Baby Product", price: 20 };
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
  };

  const deleteProduct = (productId) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: productId });
  };

  const saveChanges = () => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: editedProduct });
    setEditedProduct(null);
  };

  const handleEdit = (product) => {
    setEditedProduct({ ...product });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1>Baby Products</h1>
      <button onClick={addProduct} className="add-product-btn">Add Product</button>
      <ul className="product-list">
        {state.products.map(product => (
          <li key={product.id} className="product-item">
            {editedProduct && editedProduct.id === product.id ? (
              <div className="product-details">
                <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} />
                <input type="number" name="price" value={editedProduct.price} onChange={handleInputChange} />
                <button onClick={saveChanges}>Save</button>
              </div>
            ) : (
              <div className="product-details">
                <span>{product.name}</span>
                <span>${product.price}</span>
              </div>
            )}
            <div className="product-actions">
              <button onClick={() => handleEdit(product)}>Edit</button>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
