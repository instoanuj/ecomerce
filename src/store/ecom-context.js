import React from "react";

const Econtext = React.createContext({
    SingleProduct: [],
    cart: [],
    totalAmount: 0,
    onShowCart: () => { },
    onRemoveProd: (id) => { },
    onShowDetails: item => { },
    token: "",
    email: '',
    isLogedin: false,
    login: (token) => { },
    logout: () => { },
})
export default Econtext;