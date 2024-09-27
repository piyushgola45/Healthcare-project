import { useContext } from "react";
import { Common_things } from "../store/store";

function Conatct()
{
    const i = useContext(Common_things);
    const set_selected_one = i.set_selected_one;
    const selected_one = i.selected_one;
    return <>
    {(selected_one !== "Login" && selected_one!=="Contact") &&
        <div className="container-fluid">
            <div className="row">
                <div className="col-10">

                </div>
                <div className="col-1">
                    {<button className="btn" style={{'textAlign':'right','width':'100%'}}            
                    onClick={()=>{
                        set_selected_one("Contact");
                        // console.log("hello");
                    }}>Contact</button>}
                </div>
                <div className="col-1">
                    <button className="btn" style={{'textAlign':'left','width':'100%'}}
                    onClick={()=>{
                        set_selected_one("Login");
                    }}>Sign Up</button>
                </div>
            </div>
        </div>
        }
        
    </>
}
export default Conatct;