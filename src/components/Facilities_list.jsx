import { FaDownload } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa";
import { LiaBedSolid } from "react-icons/lia";
import { LiaHospitalSolid } from "react-icons/lia";
import { FaCartArrowDown } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaVirusCovid } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { FaBacteria } from "react-icons/fa";
import { useContext } from "react";
import { Common_things } from "../store/store";
import E_OPD from "./e-OPD";
import Blood_Avalaibility from "./Blood_Avalaibility";
import Lab_Report from "./Lab_Report";
import Payment from "./Payment";
import Self_Check from "./Self_Check";
import Available_Beds from "./Available_Beds";
import Near_By_Hospitals from "./Near_By_Hospitals";
import Shopping from "./Shopping";
import Ambulance from "./Ambulance";
import Covid_Virus from "./Covid_Virus";
import Organ_Transplant from "./Organ_Transplant";
import Disease from "./Disease";

function Facilities_list()
{
    const array_of_facilities = [
        // {
        //     name:<E_OPD />,
        //     icon:<FaDownload />,
        //     title:"E-OPD"
        // },
        // {
        //     name:<Blood_Avalaibility />,
        //     icon:<FaDroplet />,
        //     title:"Blood-Avalaibility"
        // },
        // {
        //     name:<Lab_Report />,
        //     icon:<BiSolidReport />,
        //     title:"Lab-Report"
        // },
        // {
        //     name:<Payment />,
        //     icon:<MdPayment />,
        //     title:"Payment"
        // },
        // {
        //     name:<Self_Check />,
        //     icon:<FaStethoscope />,
        //     title:"Self-Check"
        // },
        // {
        //     name:<Available_Beds />,
        //     icon:<LiaBedSolid />,
        //     title:"Available-Beds"
        // },
        {
            name:<Near_By_Hospitals />,
            icon:<LiaHospitalSolid />,
            title:"Near-By-Hospitals"
        },
        {
            name:<Shopping />,
            icon:<FaCartArrowDown />,
            title:"Shopping"
        },
        // {
        //     name:<Ambulance />,
        //     icon:<FaAmbulance />,
        //     title:"Ambulance"
        // },
        // {
        //     name:<Covid_Virus />,
        //     icon:<FaVirusCovid />,
        //     title:"Covid-Virus"
        // },
        // {
        //     name:<Organ_Transplant />,
        //     icon:<FaHeartbeat />,
        //     title:"Organ-Transplant"
        // },
        {
            name:<Disease />,
            icon:<FaBacteria />,
            title:"Disease"
        }

    ]


    
    
    const i = useContext(Common_things);
    const set_selected_one = i.set_selected_one;
    const selected_one = i.selected_one;
    return <>
    {selected_one==="Home" && 
        <div className="container" style={{'textAlign':'center'}}>
            <h1>Other Facilities</h1>
            <div className="row">
                {array_of_facilities.map((item)=>(
                    <div className="col-sm-4" style={{'paddingTop':'50px'}}>
                        <button className="btn" style={{'fontSize':'40px','fontWeight':'700'}}
                        onClick={()=>{
                            set_selected_one(item.title)
                        }}>
                            {item.icon}
                            <br />
                            <p style={{'fontSize':'15px'}}>{item.title}</p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    }   

    {array_of_facilities.map((item)=>(
        (selected_one===item.title && item.name)
    ))}

    </>
}
export default Facilities_list;