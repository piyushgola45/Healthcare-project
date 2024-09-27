import { useContext, useState } from "react";
import { Common_things } from "../store/store";
import A from "./Disease_list/A";
import B from "./Disease_list/B";
import C from "./Disease_list/C";
import D from "./Disease_list/D";
import E from "./Disease_list/E";
import F from "./Disease_list/F";
import G from "./Disease_list/G";
import H from "./Disease_list/H";
import I from "./Disease_list/I";
import J from "./Disease_list/J";
import K from "./Disease_list/K";
import L from "./Disease_list/L";
import M from "./Disease_list/M";
import N from "./Disease_list/N";
import O from "./Disease_list/O";
import P from "./Disease_list/P";
import Q from "./Disease_list/Q";
import R from "./Disease_list/R";
import S from "./Disease_list/S";
import T from "./Disease_list/T";
import U from "./Disease_list/U";
import V from "./Disease_list/V";
import W from "./Disease_list/W";
import X from "./Disease_list/X";
import Y from "./Disease_list/Y";
import Z from "./Disease_list/Z";
function Disease()
{
    const i = useContext(Common_things);
    const selected_one = i.selected_one;
    const set_selected_one = i.set_selected_one;
    let disease_alphabets_arra = [
        {
            name:"A",
            component:<A />
        },
        {
            name:"B",
            component:<B />

        },
        {
            name:"C",
            component:<C />

        },
        {
            name:"D",
            component:<D />

        },
        {
            name:"E",
            component:<E />

        },
        {
            name:"F",
            component:<F />

        },
        {
            name:"G",
            component:<G />

        },
        {
            name:"H",
            component:<H />

        },
        {
            name:"I",
            component:<I />

        },
        {
            name:"J",
            component:<J />

        },
        {
            name:"K",
            component:<K />

        },
        {
            name:"L",
            component:<L />

        },
        {
            name:"M",
            component:<M />

        },
        {
            name:"N",
            component:<N />

        },
        {
            name:"O",
            component:<O />

        },
        {
            name:"P",
            component:<P />

        },
        {
            name:"Q",
            component:<Q />

        },
        {
            name:"R",
            component:<R />

        },
        {
            name:"S",
            component:<S />

        },
        {
            name:"T",
            component:<T />

        },
        {
            name:"U",
            component:<U />

        },
        {
            name:"V",
            component:<V />

        },
        {
            name:"W",
            component:<W />

        },
        {
            name:"X",
            component:<X />

        },
        {
            name:"Y",
            component:<Y />

        },
        {
            name:"Z",
            component:<Z />

        },

    ]
    const [disease_ke_andar,set_disease_ke_andar] = useState("Disease");
    return <>
    {disease_ke_andar==="Disease" && 
        <div className="container">
            <div className="row">
                <h1 style={{'textAlign':'center'}}>Choose Starting Alphabet of Disease</h1>
                {disease_alphabets_arra.map((item)=>(
                    <div className="col-sm-2" style={{'marginTop':'30px'}}>
                        <button className="btn btn-secondary" style={{'width':'50%'}} onClick={()=>{
                            set_disease_ke_andar(item.name);
                        }}>{item.name}</button>
                    </div>
                ))}
            </div>
        </div>
        
    }

    {disease_alphabets_arra.map((item)=>(
        (disease_ke_andar==item.name && 
            <div className="container">
                <h1 style={{'textAlign':'center'}} ><button className="btn btn-success" onClick={()=>{
                set_disease_ke_andar("Disease");
                }}>Show Disease Alphabets</button></h1>
                {item.component}
            </div>
        )
    ))}
    </>
}
export default Disease;