import React, { useState, useEffect } from "react";
import { CardContainer, GridContainer, Img, Body, Btn2, Name, Card2, BUTTON } from "../Home/Mid_Styled";
import Navbar from "../Home/Navbar";

const ShowProduct = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [add, setAdd] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addProductToCart = (productId) => {
        const selectedProduct = products.find((product) => product._id === productId);
        setCart((prevCart) => [...prevCart, selectedProduct]);
        setAdd(add + 1);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + parseFloat(selectedProduct.price));
    };

    const getUniqueProductsInCart = () => {
        const uniqueProducts = {};
        cart.forEach((product) => {
            if (!uniqueProducts[product._id]) {
                uniqueProducts[product._id] = {
                    ...product,
                    quantity: cart.filter((p) => p._id === product._id).length,
                };
            }
        });
        return Object.values(uniqueProducts);
    };

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:7000/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            {!products.length > 0 ? <h1 style={{ textAlign: "center", marginTop: 100 }}>No Products Available</h1> :
                <CardContainer>
                    <h1 className="list">All the Products are listed here</h1>
                    <GridContainer>
                        {products.map((item) => (
                            <Card2 key={item._id} style={{ width: '18rem' }}>
                                <Img variant="top" src={item.url} style={{ height: 200 }} />
                                <Body style={{ textAlign: "center" }}>
                                    <Name>{item.name}</Name>
                                    <Name>Price: ${parseFloat(item.price).toFixed(2)}</Name>
                                    <Btn2 variant="primary" onClick={() => addProductToCart(item._id)}>
                                        Add to Cart
                                    </Btn2>
                                </Body>
                            </Card2>
                        ))}
                    </GridContainer>
                </CardContainer>}
            <CardContainer>
                <BUTTON>Cart({add} & ₹{totalPrice})</BUTTON>
                {cart.length > 0 ? (
                    <ul>
                        {getUniqueProductsInCart().map((product) => (
                            <li key={product._id}>
                                {product.name} - ${Number(product.price).toFixed(2)} - Quantity: {product.quantity}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your Cart is Empty</p>
                )}
            </CardContainer>
        </div>
    )
}

export default ShowProduct;
