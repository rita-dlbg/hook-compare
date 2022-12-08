import React, { PureComponent } from "react";
 
class PureComponents extends PureComponent{
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   }
 
    render(){
        return (
            <div style={{margin:'50px'}}>
               <h3>Counter App using Pure component : </h3>
               <h2> {this.state.count}</h2> 
               <button onClick={this.increase}> Add</button>
 
            </div>
        )
    }
}
 
export default PureComponents;