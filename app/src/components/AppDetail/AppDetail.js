import React from 'react';
import "/Users/gan/Desktop/AIflow/app/node_modules/html5-device-mockups/dist/device-mockups.min.css"
import "./AppDetail.css";
import ShortSummary from "./shortSummary/shortSummary";
import Summary from "./summary/Summary";
import Aux from "../../HOC/aux/aux";

const AppDetail = (props) => {
    return (
        <Aux>
            <ShortSummary />
            <Summary />
        </Aux>
    )
};

export default AppDetail;