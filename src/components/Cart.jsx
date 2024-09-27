import { CiStar } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
function Cart({shopping_items})
{
    return <>
        <div className="row">
                {shopping_items.map((item)=>(
                    <>
                    <button className="btn col-md-2" style={{'textAlign':'center','boxShadow':'0px 0px 10px 0px','marginTop':'50px'}}>
                        <div className="row">
                            {/* <div className="col-1"></div> */}
                            <div className="col-7" style={{'height':'100px'}}>
                                <img src={item.img} style={{'border':'0px solid black' ,'width':'100%','height':'100%'}} />
                            </div>
                            <div className="col-5">
                                
                            </div>
                        </div>
                        <h6>{item.title}</h6>
                        <br />
                        <div className="row">
                            <div className="col">
                            <span><h4 style={{'backgroundColor':'green','borderRadius':'5px','color':'white'}}>₹ {item.mrp}</h4></span>
                            </div>
                            <div className="col">
                                <span style={{'backgroundColor':'white'}}>{item.rating}<CiStar /></span>
                            </div>
                        </div>
                    </button>
                    <div className="col-1" style={{'marginTop':'50px'}}></div>
                    <br />
                    </>
                    
                    ))}
            </div>
    </>
}
export default Cart;