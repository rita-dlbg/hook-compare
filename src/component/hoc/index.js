import React from "react";
import PowerComponent from "./powercomp";

class Hoc extends React.Component{

    render(name){
        return(
            <div>
                <h1> HOC compoent Use example</h1>
            </div>

        )
    }
}
export default PowerComponent(Hoc);