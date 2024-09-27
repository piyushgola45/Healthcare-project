function U()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/ulcerative-colitis/images/ulcerative-colitis.jpg",
          name: "Ulcerative Colitis",
          overview:
            "Ulcerative colitis is a chronic inflammatory bowel disease that causes inflammation and ulcers in the digestive tract, primarily affecting the colon.",
          symptoms:
            "1. Abdominal pain 2. Diarrhea (often with blood) 3. Weight loss 4. Fatigue.",
          causes:
            "1. The exact cause is unknown; may involve an immune system response.",
          diagnosis:
            "1. Colonoscopy 2. Biopsy of the colon 3. Blood tests."
        },
        {
          img: "https://www.cdc.gov/urinary-tract-infection/images/uti.jpg",
          name: "Urinary Tract Infection (UTI)",
          overview:
            "A urinary tract infection is an infection in any part of the urinary system, including the bladder and kidneys, often caused by bacteria.",
          symptoms:
            "1. Burning sensation during urination 2. Frequent urge to urinate 3. Cloudy or strong-smelling urine.",
          causes:
            "1. Bacterial infection (commonly E. coli) 2. Poor hygiene.",
          diagnosis:
            "1. Urinalysis 2. Urine culture."
        },
        {
          img: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2022/01/11/16/43/ulcers-3col.jpg",
          name: "Ulcers",
          overview:
            "Ulcers are sores that can develop on the lining of the stomach (gastric ulcers), small intestine (duodenal ulcers), or esophagus, often caused by H. pylori bacteria or long-term use of NSAIDs.",
          symptoms:
            "1. Burning stomach pain 2. Bloating 3. Nausea 4. Weight loss.",
          causes:
            "1. Infection with H. pylori 2. Prolonged use of nonsteroidal anti-inflammatory drugs (NSAIDs).",
          diagnosis:
            "1. Endoscopy 2. Upper GI series 3. Tests for H. pylori."
        },
        {
          img: "https://www.cdc.gov/uterine-cancer/images/uterine-cancer.jpg",
          name: "Uterine Cancer",
          overview:
            "Uterine cancer, or endometrial cancer, occurs in the lining of the uterus and is the most common cancer of the female reproductive system.",
          symptoms:
            "1. Abnormal vaginal bleeding 2. Pelvic pain 3. Unusual discharge.",
          causes:
            "1. Hormonal imbalances 2. Obesity 3. Family history.",
          diagnosis:
            "1. Pelvic exam 2. Ultrasound 3. Biopsy of the uterine lining."
        },
        {
          img: "https://www.cdc.gov/urticaria/images/urticaria.jpg",
          name: "Urticaria (Hives)",
          overview:
            "Urticaria, commonly known as hives, is a skin condition characterized by raised, itchy welts caused by an allergic reaction.",
          symptoms:
            "1. Raised red or skin-colored welts 2. Itching 3. Swelling.",
          causes:
            "1. Allergens (foods, medications) 2. Infections 3. Stress.",
          diagnosis:
            "1. Clinical evaluation 2. Allergy testing if needed."
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
export default U;