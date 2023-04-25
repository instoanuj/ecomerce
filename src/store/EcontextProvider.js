import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import Econtext from "./ecom-context";
const EcontextProvider = (props) => {
    const [totalAmount, setTotalAmount] = useState(0);
    const [SingleProduct, setSingleProduct] = useState([])
    const nemail=JSON.parse(localStorage.getItem("email"))

    const newemail=nemail.replace("@","").replace(".","")

    //Storing token, email to localStorage
    const item = localStorage.getItem('token');
    let intialToken = JSON.parse(item);
    const now = new Date();
    if (intialToken !== null && now.getTime() > intialToken.expiry) {
        localStorage.removeItem('token')
        intialToken.idToken = null;
        intialToken.emailId = null

    }

    const [token, setToken] = useState(item || null);
    const [email, setEmail] = useState(intialToken ? intialToken.emailId : '')
    const [cart, setCart] = useState([]);
    const userLoggedIn = !!token;

    const OnRemoveHandler = async (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        const productindex = cart.findIndex(item => item.id === id)
        const product = cart[productindex]
        setCart(updatedCart);
        setTotalAmount(preAmount => preAmount - product.price * product.amount)
        try {
            const response = await axios.delete(`https://autrh-b6242-default-rtdb.firebaseio.com/${newemail}/${id}.json`)
        } catch (error) {
            alert(error.message)
        }
    }


    const onShowDetailshandler = (product) => {
        setSingleProduct(product)
    }

    const loginHandler = (token, email) => {
        const item = {
            emailId: email,
            idToken: token,
            expiry: new Date().getTime() + 10 * 60000
        }
        setEmail(email)
        setToken(token)
        localStorage.setItem('token', JSON.stringify(item))
    }

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    const onShowCart = useCallback(async () => {
        try {
            const response = await axios.get(`https://autrh-b6242-default-rtdb.firebaseio.com/${newemail}.json`)
            const loadArr = [];
            for (const key in response.data) {
                loadArr.push({
                    id: key,
                    title: response.data[key].title,
                    imageUrl: response.data[key].imageUrl,
                    price: response.data[key].price,
                    amount: response.data[key].amount
                })
            }
            setCart(loadArr)
            const updatedAmount = loadArr.reduce((currentValue, product) => {
                return currentValue += product.price * product.amount;
            }, 0)
            setTotalAmount(updatedAmount)

        }
        catch (error) {
           
        }
    }, [email])

    useEffect(() => {
        onShowCart()
    }, [onShowCart]);

    const eContext = {
        SingleProduct: SingleProduct,
        totalAmount: totalAmount,
        onRemoveProd: OnRemoveHandler,
        onShowDetails: onShowDetailshandler,
        email: email,
        token: token,
        isLogedin: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        cart: cart,
        onShowCart: onShowCart
    }
    return (
        < Econtext.Provider value={eContext}>{props.children}</Econtext.Provider>
    )

}
export default EcontextProvider;