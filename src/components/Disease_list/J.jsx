function J()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/jaundice/images/jaundice.jpg",
          name: "Jaundice",
          overview:
            "Jaundice is a condition characterized by yellowing of the skin and eyes due to high levels of bilirubin in the blood, often indicating liver issues.",
          symptoms:
            "1. Yellowing of the skin and eyes 2. Dark urine 3. Pale stool 4. Fatigue.",
          causes:
            "1. Liver diseases (hepatitis, cirrhosis) 2. Hemolytic anemia 3. Blockage of bile ducts.",
          diagnosis:
            "1. Blood tests to measure bilirubin levels 2. Imaging studies (ultrasound, CT scan)."
        },
        {
          img: "https://www.cdc.gov/jointpain/images/jointpain.jpg",
          name: "Joint Pain",
          overview:
            "Joint pain can result from various conditions affecting the joints, including arthritis and injuries.",
          symptoms:
            "1. Pain in one or more joints 2. Swelling 3. Stiffness 4. Reduced range of motion.",
          causes:
            "1. Arthritis (osteoarthritis, rheumatoid arthritis) 2. Injuries 3. Infections.",
          diagnosis:
            "1. Physical examination 2. Imaging tests (X-rays, MRIs) 3. Blood tests."
        },
        {
          img: "https://www.cdc.gov/jellyfish/images/jellyfish-sting.jpg",
          name: "Jellyfish Sting",
          overview:
            "Jellyfish stings can cause painful reactions due to venom from their tentacles, leading to skin irritation and other symptoms.",
          symptoms:
            "1. Pain and burning at the sting site 2. Redness and swelling 3. Nausea in severe cases.",
          causes:
            "1. Contact with jellyfish tentacles in water.",
          diagnosis:
            "1. Physical examination of the sting area."
        },
        {
          img: "https://www.cdc.gov/julitis/images/julitis.jpg",
          name: "Juvenile Idiopathic Arthritis (JIA)",
          overview:
            "JIA is a type of arthritis that occurs in children, characterized by joint inflammation and stiffness.",
          symptoms:
            "1. Joint pain and swelling 2. Stiffness, especially in the morning 3. Fatigue.",
          causes:
            "1. Autoimmune response 2. Genetic factors.",
          diagnosis:
            "1. Physical examination 2. Blood tests for inflammatory markers."
        }
      ];
      
    //   export default j_list;
      
    return <>
        <div className="container-fluid">
            <div className="row">
                {a_list.map((item)=>(
                    <>
                    <div className="col-md-3" style={{'height':'300px', 'overflow':'auto','scrollbarColor': 'lightblue black','scrollbarWidth':'thin','marginTop':'50px','backgroundColor':'rgba(18, 18, 18, 0.836)','color':'white','borderRadius':'10px','boxShadow':'0px 0px 10px 0px black'}}>
                        <center><h3>{item.name}</h3></center>
                        <div className="row">
                            {/* <center><div className="col" style={{'backgroundImage':`url(${item.img})`,'backgroundSize':'100%','height':'100px','backgroundRepeat':'no-repeat'}}></div></center> */}
                            <center><div className="col" style={{'height':'100px'}}>
                                <img src={item.img} style={{'height':'100%','width':'100%'}}/>
                            </div></center>
                        </div>
                        <h4 id="p"> Overview</h4>
                        <p>{item.overview}</p>
                        <h4>Symptoms</h4>
                        <p>{item.symptoms}</p>
                        <h4>Cause</h4>
                        <p>{item.causes}</p>
                        <h4>Diagnosis</h4>
                        <p>{item.diagnosis}</p>
                    </div>
                    <div className="col-md"></div>
                    </>
                ))}
            </div>
        </div>
    </>
}
export default J;