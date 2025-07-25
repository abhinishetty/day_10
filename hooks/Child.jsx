import { forwardRef } from "react" //to import from parent to child
function Child(props,ref){
    return (
        <div>
            <h2>Child component</h2>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default forwardRef(Child)