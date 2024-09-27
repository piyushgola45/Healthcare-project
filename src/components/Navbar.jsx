import { useContext } from "react";
import { Common_things } from "../store/store";

function Navbar()
{
    const i = useContext(Common_things);
    const set_selected_one = i.set_selected_one;
    return <>
    <div className="container-fluid" style={{'textAlign':'center'}}>
        <div className="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="navbar-nav" >
                    <a class="nav-item nav-link active" href="#"><button className="btn btn-success"
                    onClick={()=>{
                        set_selected_one("Home");
                    }}>Home</button></a>
                    <a class="nav-item nav-link" href="#"><button className="btn btn-success">Help?</button></a>

                </div>
            </nav>
        </div>
    </div>
    </>

}

export default Navbar;