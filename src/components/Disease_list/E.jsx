function E()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/epilepsy/images/epilepsy-brain.jpg",
          name: "Epilepsy",
          overview:
            "Epilepsy is a neurological disorder characterized by recurrent seizures, which are sudden bursts of electrical activity in the brain.",
          symptoms:
            "1. Seizures 2. Temporary confusion 3. Staring spells 4. Uncontrollable jerking movements.",
          causes:
            "1. Genetic factors 2. Brain injury 3. Stroke 4. Infections.",
          diagnosis:
            "1. Electroencephalogram (EEG) 2. MRI or CT scans 3. Blood tests."
        },
        {
          img: "https://www.cdc.gov/ehr/images/ebola.jpg",
          name: "Ebola Virus Disease",
          overview:
            "Ebola is a severe and often fatal illness in humans caused by the Ebola virus, leading to hemorrhagic fever and multiple organ failure.",
          symptoms:
            "1. Fever 2. Severe headache 3. Muscle pain 4. Vomiting 5. Diarrhea.",
          causes:
            "1. Contact with infected animals or humans.",
          diagnosis:
            "1. Blood tests 2. PCR tests 3. Serology tests."
        },
        {
          img: "https://www.cdc.gov/ehr/images/eating-disorders.jpg",
          name: "Eating Disorders",
          overview:
            "Eating disorders are mental health conditions that involve an unhealthy relationship with food, leading to severe disruptions in eating behavior.",
          symptoms:
            "1. Extreme restriction of food intake 2. Binge eating 3. Distorted body image 4. Obsession with weight.",
          causes:
            "1. Genetic factors 2. Psychological issues 3. Societal pressures.",
          diagnosis:
            "1. Clinical evaluation 2. Psychological assessment."
        },
        {
          img: "https://www.cdc.gov/ebola/images/encephalitis.jpg",
          name: "Encephalitis",
          overview:
            "Encephalitis is an inflammation of the brain, often caused by viral infections, leading to swelling and damage to brain tissue.",
          symptoms:
            "1. Fever 2. Headache 3. Confusion 4. Seizures.",
          causes:
            "1. Viral infections (e.g., herpes simplex virus) 2. Autoimmune conditions.",
          diagnosis:
            "1. MRI or CT scans 2. Lumbar puncture 3. Blood tests."
        },
        {
          img: "https://www.cdc.gov/eye/images/eye-infections.jpg",
          name: "Eye Infections",
          overview:
            "Eye infections can affect various parts of the eye, including the conjunctiva, cornea, and eyelid, leading to redness, pain, and vision issues.",
          symptoms:
            "1. Redness 2. Pain 3. Discharge 4. Blurred vision.",
          causes:
            "1. Bacterial or viral infections 2. Allergies.",
          diagnosis:
            "1. Eye examination 2. Cultures from eye discharge."
        }
      ];
      
    //   export default e_list;
      
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
export default E;