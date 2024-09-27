function F()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/flu/images/flu-illustration.jpg",
          name: "Flu (Influenza)",
          overview:
            "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses. It can lead to severe illness and life-threatening complications.",
          symptoms:
            "1. Fever 2. Chills 3. Cough 4. Sore throat 5. Body aches.",
          causes:
            "1. Influenza viruses A, B, C, and D.",
          diagnosis:
            "1. Rapid influenza diagnostic tests (RIDTs) 2. PCR tests."
        },
        {
          img: "https://www.cdc.gov/fungal/images/fungal-infections.jpg",
          name: "Fungal Infections",
          overview:
            "Fungal infections are caused by fungi that invade the body, leading to a variety of illnesses, from mild skin infections to serious systemic diseases.",
          symptoms:
            "1. Rash 2. Itching 3. Discoloration of nails 4. Respiratory issues.",
          causes:
            "1. Exposure to fungi in the environment 2. Compromised immune system.",
          diagnosis:
            "1. Physical examination 2. Fungal cultures 3. Biopsy."
        },
        {
          img: "https://www.cdc.gov/foodborne/images/foodborne-illness.jpg",
          name: "Foodborne Illness",
          overview:
            "Foodborne illness, or food poisoning, is caused by consuming contaminated food or beverages, leading to gastrointestinal issues.",
          symptoms:
            "1. Nausea 2. Vomiting 3. Diarrhea 4. Abdominal pain.",
          causes:
            "1. Bacteria (e.g., Salmonella) 2. Viruses (e.g., Norovirus) 3. Parasites.",
          diagnosis:
            "1. Stool tests 2. Food samples."
        },
        {
          img: "https://www.cdc.gov/fever/images/fever-illustration.jpg",
          name: "Fever",
          overview:
            "Fever is an increase in body temperature, often as a response to infection, inflammation, or other medical conditions.",
          symptoms:
            "1. Elevated body temperature 2. Chills 3. Sweating 4. Headache.",
          causes:
            "1. Infections 2. Inflammatory conditions 3. Heat exhaustion.",
          diagnosis:
            "1. Physical examination 2. Blood tests."
        },
        {
          img: "https://www.cdc.gov/fas/images/fetal-alcohol-syndrome.jpg",
          name: "Fetal Alcohol Syndrome",
          overview:
            "Fetal Alcohol Syndrome (FAS) is a condition in a child that results from alcohol exposure during the mother’s pregnancy, causing developmental issues.",
          symptoms:
            "1. Distinctive facial features 2. Growth deficiencies 3. Learning disabilities.",
          causes:
            "1. Alcohol consumption during pregnancy.",
          diagnosis:
            "1. Clinical evaluation 2. Assessment of developmental history."
        }
      ];
      
    //   export default f_list;
      
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
export default F;