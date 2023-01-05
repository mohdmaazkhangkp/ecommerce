import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import ProductContextProvider from './ProductContextProvider';
import CartContextProvider from './CartContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <CartContextProvider>
        <ProductContextProvider>
        <App />
        </ProductContextProvider>
    </CartContextProvider>
    </BrowserRouter>
);
