import { useContext } from "react";
import { Common_things } from "../store/store";
import { useRef } from "react";
function Login()
{
    const i = useContext(Common_things);
    const set_selected_one = i.set_selected_one;
    let name = useRef();
    let num = useRef();
    return <>
    <div className="container" style={{'textAlign':'center'}}>
        <form onSubmit={(event)=>{
                event.preventDefault();
                // console.log(name.current.value);
                if(name.current.value && num.current.value){
                alert("Submitted Successfully");
                set_selected_one("Home");
                }
                else{
                    alert("Give the detalis");
                }
            }}>
            <div className="row">
                <div className="col" style={{'textAlign':'right'}}>
                    Enter the name
                </div>
                <div className="col">
                    <input type = "text" ref={name}></input>
                </div>
            </div>
            <div className="row">
                <div className="col" style={{'textAlign':'right'}}>
                    Enter the number
                </div>
                <div className="col">
                    <input type = "number" ref={num}></input>
                </div>
            </div><br />
            <button type ="submit" className="btn btn-danger">Submit</button>
        </form>

    </div>
    </>
}
export default Login;