import React,{Component} from "react";
class LifeCycleFirst extends Component{
    constructor (props){
        super(props);
        console.log("Constructor: Component Called...........");
        this.state={
            count:0
        };
    }
    static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps() method called............")
    return null;
}
render(){
    console.log("render () method Called................")
    return(
        <div>
            <h1>Life Cycle Methods of class</h1>
            <h3>Count: {this.state.count}</h3>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        </div>
    )
}
componentDidMount(){
    console.log("componentDidMount() called..........")
}

}
export default LifeCycleFirst;