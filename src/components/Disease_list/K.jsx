function K()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/kleptomania/images/kleptomania.jpg",
          name: "Kleptomania",
          overview:
            "Kleptomania is a psychological disorder characterized by an uncontrollable urge to steal items, often without the need for them.",
          symptoms:
            "1. Recurrent urges to steal items 2. Feelings of tension before stealing 3. Guilt or remorse after stealing.",
          causes:
            "1. Genetic factors 2. Emotional trauma 3. Other mental health disorders.",
          diagnosis:
            "1. Psychological evaluation 2. Assessment of stealing behavior."
        },
        {
          img: "https://www.cdc.gov/keratitis/images/keratitis.jpg",
          name: "Keratitis",
          overview:
            "Keratitis is inflammation of the cornea, often due to infection or injury, leading to vision problems.",
          symptoms:
            "1. Eye pain 2. Redness 3. Blurred vision 4. Sensitivity to light.",
          causes:
            "1. Bacterial or viral infections 2. Fungal infections 3. Eye injuries.",
          diagnosis:
            "1. Eye examination 2. Culture of eye discharge."
        },
        {
          img: "https://www.cdc.gov/kidney/images/kidneydisease.jpg",
          name: "Kidney Disease",
          overview:
            "Kidney disease refers to various conditions affecting kidney function, leading to waste buildup in the body.",
          symptoms:
            "1. Fatigue 2. Swelling in the legs and ankles 3. Changes in urination.",
          causes:
            "1. Diabetes 2. Hypertension 3. Genetic factors.",
          diagnosis:
            "1. Blood tests (creatinine, BUN) 2. Urinalysis 3. Imaging studies."
        },
        {
          img: "https://www.cdc.gov/kids/images/kids.jpg",
          name: "Kawasaki Disease",
          overview:
            "Kawasaki disease is a rare childhood illness causing inflammation in blood vessels, particularly affecting the coronary arteries.",
          symptoms:
            "1. High fever 2. Rash 3. Swollen lymph nodes 4. Red eyes.",
          causes:
            "1. Exact cause unknown, but may involve an autoimmune response.",
          diagnosis:
            "1. Clinical examination 2. Blood tests and echocardiogram."
        }
      ];
      
    //   export default k_list;
      
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
export default K;