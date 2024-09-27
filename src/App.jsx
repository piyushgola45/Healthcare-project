import Navbar from "./components/Navbar";
import Conatct from "./components/Conatct(login)";
import Wecareforyou from "./components/Wecareforyou";
// import Facilities from "./components/Facilities";
import Facilities_list from "./components/Facilities_list";
import Lastcontentof_homepage from "./components/Lastcontentof_homepage";
import { Common_things } from "./store/store";
import { useState } from "react";
import Login from "./components/Login";
import Contact_e from "./components/Contact";
import Get_advice from "./components/Get_advice";
function App()
{
  const [selected_one,set_selected_one] = useState("Home");
  return <>
  <Common_things.Provider value={{selected_one,set_selected_one}}>
    <Conatct />
    <Navbar />
    {selected_one==="Home" &&<> <br /><br /> <Wecareforyou /></>}
    {selected_one==="Home" && <><br /><br /><br /><br /></>}
    {selected_one==="Home" && <><Get_advice /><br /><br /><br /><br /><br /> </>}
    <Facilities_list />
    <br/><br />
    {selected_one==="Home" && <Lastcontentof_homepage />}
    {selected_one === "Login" && <Login />}
    {selected_one ==="Contact" && <Contact_e />}

</Common_things.Provider>
  </>
}
export default App;