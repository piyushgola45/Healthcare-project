function L()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/lupus/images/lupus.jpg",
          name: "Lupus",
          overview:
            "Lupus is an autoimmune disease that occurs when the body's immune system attacks its own tissues, causing widespread inflammation and damage.",
          symptoms:
            "1. Fatigue 2. Joint pain 3. Skin rashes 4. Fever 5. Kidney problems.",
          causes:
            "1. Genetic factors 2. Environmental triggers 3. Hormonal factors.",
          diagnosis:
            "1. Blood tests (ANA test) 2. Clinical evaluation 3. Urinalysis."
        },
        {
          img: "https://www.cdc.gov/liver/images/liverdisease.jpg",
          name: "Liver Disease",
          overview:
            "Liver disease refers to various conditions that damage the liver, impairing its ability to function properly.",
          symptoms:
            "1. Jaundice 2. Fatigue 3. Abdominal pain 4. Swelling in the legs.",
          causes:
            "1. Alcohol abuse 2. Viral hepatitis 3. Fatty liver disease.",
          diagnosis:
            "1. Blood tests (liver function tests) 2. Imaging studies (ultrasound, CT scan)."
        },
        {
          img: "https://www.cdc.gov/laryngitis/images/laryngitis.jpg",
          name: "Laryngitis",
          overview:
            "Laryngitis is inflammation of the voice box (larynx) usually due to infection, overuse, or irritation.",
          symptoms:
            "1. Hoarseness 2. Loss of voice 3. Sore throat 4. Dry cough.",
          causes:
            "1. Viral infections 2. Overuse of the voice 3. Smoking.",
          diagnosis:
            "1. Physical examination 2. Laryngoscopy."
        },
        {
          img: "https://www.cdc.gov/lung/images/lungdisease.jpg",
          name: "Lung Disease",
          overview:
            "Lung disease encompasses a variety of conditions that affect lung function, leading to breathing difficulties.",
          symptoms:
            "1. Shortness of breath 2. Chronic cough 3. Chest pain.",
          causes:
            "1. Smoking 2. Environmental pollutants 3. Genetic factors.",
          diagnosis:
            "1. Pulmonary function tests 2. Imaging studies (X-ray, CT scan)."
        },
        {
          img: "https://www.cdc.gov/lactose/images/lactoseintolerance.jpg",
          name: "Lactose Intolerance",
          overview:
            "Lactose intolerance is the inability to digest lactose, a sugar found in milk and dairy products, leading to gastrointestinal symptoms.",
          symptoms:
            "1. Bloating 2. Diarrhea 3. Gas 4. Stomach cramps.",
          causes:
            "1. Low levels of lactase enzyme 2. Genetic factors.",
          diagnosis:
            "1. Lactose tolerance test 2. Hydrogen breath test."
        }
      ];
      
    //   export default a_list;
      
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
export default L;