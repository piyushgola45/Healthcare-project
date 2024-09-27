function C()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/cholera/images/cholera-patients.jpg",
          name: "Cholera",
          overview:
            "Cholera is an infectious disease caused by the bacterium Vibrio cholerae, leading to severe diarrhea and dehydration. It is usually spread through contaminated water.",
          symptoms:
            "1. Watery diarrhea 2. Vomiting 3. Rapid heart rate 4. Loss of skin elasticity 5. Low blood pressure.",
          causes:
            "1. Consumption of contaminated water or food 2. Poor sanitation and hygiene.",
          diagnosis:
            "1. Stool sample analysis 2. Rapid cholera dipstick tests 3. Bacterial culture."
        },
        {
          img: "https://www.cdc.gov/covid19/images/coronavirus.jpg",
          name: "COVID-19",
          overview:
            "COVID-19 is a highly contagious viral infection caused by the SARS-CoV-2 virus. It primarily affects the respiratory system and can lead to severe illness or death.",
          symptoms:
            "1. Fever 2. Cough 3. Shortness of breath 4. Loss of taste or smell 5. Fatigue.",
          causes: "1. SARS-CoV-2 virus spread via respiratory droplets.",
          diagnosis:
            "1. PCR test 2. Rapid antigen test 3. CT scan of the chest (in severe cases)."
        },
        {
          img: "https://www.msdmanuals.com/-/media/manual/professional/images/cystitis.jpg",
          name: "Cystitis",
          overview:
            "Cystitis is inflammation of the bladder, often caused by a urinary tract infection (UTI). It is more common in women and can be painful and uncomfortable.",
          symptoms:
            "1. Burning sensation during urination 2. Frequent urge to urinate 3. Lower abdominal pain 4. Cloudy or bloody urine.",
          causes:
            "1. Bacterial infection (commonly E. coli) 2. Irritation from certain hygiene products.",
          diagnosis:
            "1. Urinalysis 2. Urine culture 3. Cystoscopy (in recurrent cases)."
        },
        {
          img: "https://www.health.harvard.edu/media/content/images/cr/cervical_cancer_sm.jpg",
          name: "Cervical Cancer",
          overview:
            "Cervical cancer occurs in the cells of the cervix and is often linked to Human Papillomavirus (HPV) infection. Early detection through screening is crucial for successful treatment.",
          symptoms:
            "1. Abnormal vaginal bleeding 2. Pelvic pain 3. Pain during intercourse 4. Unusual vaginal discharge.",
          causes: "1. HPV infection 2. Smoking 3. Weakened immune system.",
          diagnosis:
            "1. Pap smear 2. HPV testing 3. Colposcopy and biopsy."
        },
        {
          img: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2021/04/14/14/14/colon_cancer-8col.jpg",
          name: "Colon Cancer",
          overview:
            "Colon cancer, also known as colorectal cancer, affects the large intestine and is one of the most common cancers. Early detection through screening can improve outcomes.",
          symptoms:
            "1. Changes in bowel habits 2. Blood in the stool 3. Persistent abdominal pain 4. Unexplained weight loss.",
          causes:
            "1. Genetic factors 2. Poor diet (low in fiber, high in fat) 3. Smoking and alcohol use.",
          diagnosis:
            "1. Colonoscopy 2. CT colonography 3. Fecal occult blood test (FOBT)."
        },
        {
          img: "https://www.hopkinsmedicine.org/-/media/images/health/articles/carpal-tunnel-syndrome.jpg",
          name: "Carpal Tunnel Syndrome",
          overview:
            "Carpal Tunnel Syndrome is a condition caused by pressure on the median nerve in the wrist, leading to pain, numbness, and tingling in the hand and arm.",
          symptoms:
            "1. Numbness in the thumb, index, and middle fingers 2. Tingling or pain in the hand 3. Weakness in hand grip.",
          causes:
            "1. Repetitive hand movements 2. Wrist anatomy 3. Health conditions like diabetes.",
          diagnosis:
            "1. Physical examination 2. Nerve conduction study 3. Electromyography (EMG)."
        }
      ];
      
    //   export default c_list;
      
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
export default C;