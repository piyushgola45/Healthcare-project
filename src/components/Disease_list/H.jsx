function H()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/handfootmouth/images/hfmd-illustration.jpg",
          name: "Hand, Foot, and Mouth Disease",
          overview:
            "Hand, Foot, and Mouth Disease (HFMD) is a contagious viral infection common in children, characterized by sores in the mouth and a rash on the hands and feet.",
          symptoms:
            "1. Fever 2. Sore throat 3. Painful mouth sores 4. Rash on hands and feet.",
          causes:
            "1. Coxsackievirus A16 and other enteroviruses.",
          diagnosis:
            "1. Clinical examination 2. Observation of symptoms."
        },
        {
          img: "https://www.cdc.gov/hepatitis/images/hepatitis-a.jpg",
          name: "Hepatitis A",
          overview:
            "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus (HAV), often spread through contaminated food or water.",
          symptoms:
            "1. Fatigue 2. Nausea 3. Abdominal pain 4. Jaundice.",
          causes:
            "1. Contaminated food or water 2. Close contact with an infected person.",
          diagnosis:
            "1. Blood tests to detect HAV antibodies."
        },
        {
          img: "https://www.cdc.gov/hiv/images/hiv-illustration.jpg",
          name: "HIV/AIDS",
          overview:
            "HIV (Human Immunodeficiency Virus) attacks the body's immune system, potentially leading to AIDS (Acquired Immunodeficiency Syndrome) if untreated.",
          symptoms:
            "1. Fever 2. Fatigue 3. Swollen lymph nodes 4. Weight loss.",
          causes:
            "1. Unprotected sexual contact 2. Sharing needles.",
          diagnosis:
            "1. HIV antibody test 2. Viral load test."
        },
        {
          img: "https://www.cdc.gov/hypertension/images/hypertension.jpg",
          name: "Hypertension",
          overview:
            "Hypertension, or high blood pressure, is a chronic condition that can lead to serious health problems, including heart disease and stroke.",
          symptoms:
            "1. Often asymptomatic 2. Headaches 3. Shortness of breath.",
          causes:
            "1. Genetic factors 2. Poor diet 3. Lack of physical activity.",
          diagnosis:
            "1. Blood pressure measurement 2. Medical history."
        },
        {
          img: "https://www.cdc.gov/hyperthyroidism/images/hyperthyroidism.jpg",
          name: "Hyperthyroidism",
          overview:
            "Hyperthyroidism is a condition where the thyroid gland produces excessive amounts of thyroid hormones, leading to a variety of symptoms.",
          symptoms:
            "1. Weight loss 2. Rapid heartbeat 3. Increased appetite 4. Nervousness.",
          causes:
            "1. Graves' disease 2. Thyroid nodules.",
          diagnosis:
            "1. Blood tests to measure hormone levels 2. Imaging tests."
        }
      ];
      
    //   export default h_list;
      
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
export default H;