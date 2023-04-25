import React from "react";
import WelCome from "./WelCome";

const Root = (props) => {
    return (<>
        <WelCome />
        <main>
            {props.children}
        </main>
    </>
    )
}
export default Root;