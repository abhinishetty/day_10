import React,{Component} from "react";
import LoggerApp from "./LoggerApp";
class ChildComponent extends Component{
    constructor (props){
        super(props);
       
        this.state={
           showChild:true
        }
    }
    toggleChild=()=>{
        this.setState({showChild: !this.state.showChild})
    };
    render(){
        return(
            <div>
                <button onClick={this.toggleChild}>Toggle Child Component</button>
                {this.state.showChild&& <LoggerApp/>}
            </div>
        )
    }
}
export default ChildComponent