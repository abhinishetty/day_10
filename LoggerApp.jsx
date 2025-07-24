import React,{Component} from "react";
class LoggerApp extends Component{
    constructor (props){
        super(props);
        console.log("ChildComponent: Constructor");
        this.state={
            count:0
        };
    }
    componentDidMount(){
    console.log("ChildComponent: Component Did Mount")
}
shouldComponentUpdate(nextProps,nextState){
    console.log("ChildComponent: Should Component Update");
    return  true          
}
componentDidUpdate(prevProps,prevState,snapshot){
    console.log("ChildComponent: Component Did Update")
}
render(){
    console.log("render () method Called................")
    return(
        <div>
            <h1>React Lifecycle Demo</h1>
            <h3>Count: {this.state.count}</h3>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        </div>
    )
}
componentWillUnmount(){
    console.log("ChildComponent: Component Will Unmount")
    clearInterval(this.interval)
}

}
export default LoggerApp