import logo from './logo.svg';
import './App.css';
import Routers from './Routers';
import { useEffect , useState } from 'react';



function App() {
  const [products, setProducts]   = useState([]);
  useEffect(()=> {
    const getProducts = async () => {
const response = await fetch('http://localhost:3001/products');
const data =await response.json();
setProducts(data);
    }
  getProducts();
  }

  ,[])
  const addProduct = async (item) => {
   await fetch('http://localhost:3001/products',
    {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
   setProducts([
     ...products,
     item
   ]);
  }
  const removeProduct = async (id) => {
    let confirmRemove = window.confirm('Are You Suar?');
    if(confirmRemove){
      await fetch(`http://localhost:3001/products/${id}`, {
        method : 'DELETE'
      });
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
  }
}
const editProduct = async (product) => {
const response =    await fetch (`http://localhost:3001/products/${product.id}`,{
    method :'PUT',

    headers: {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(product)
  });
  const data = await response.json()
  console.log(data)
  const newProduct = products.map(x=>(x.id === data.id ? product : x));
  setProducts(newProduct)
}
  return (
    <div className="App">
    <Routers products = {products} onAdd ={addProduct} onRemove={removeProduct} onEdit={editProduct} />
    </div>
  );
}

export default App;
