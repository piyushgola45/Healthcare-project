function N()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/norovirus/images/norovirus.jpg",
          name: "Norovirus",
          overview:
            "Norovirus is a highly contagious virus that causes gastroenteritis, leading to inflammation of the stomach and intestines.",
          symptoms:
            "1. Nausea 2. Vomiting 3. Diarrhea 4. Stomach cramps 5. Fever.",
          causes:
            "1. Consumption of contaminated food or water 2. Close contact with infected individuals.",
          diagnosis:
            "1. Clinical evaluation 2. Stool tests to detect the virus."
        },
        {
          img: "https://www.cdc.gov/necrotizingfasciitis/images/necrotizingfasciitis.jpg",
          name: "Necrotizing Fasciitis",
          overview:
            "Necrotizing fasciitis is a severe bacterial infection that destroys skin, fat, and other soft tissues, often referred to as flesh-eating disease.",
          symptoms:
            "1. Severe pain and swelling 2. Red or swollen area of skin 3. Fever 4. Rapidly spreading infection.",
          causes:
            "1. Bacteria such as Streptococcus and Staphylococcus.",
          diagnosis:
            "1. Clinical evaluation 2. Imaging studies (CT or MRI) 3. Tissue biopsy."
        },
        {
          img: "https://www.cdc.gov/nasalpolyps/images/nasalpolyps.jpg",
          name: "Nasal Polyps",
          overview:
            "Nasal polyps are noncancerous growths in the nasal passages or sinuses that can cause breathing difficulties and other symptoms.",
          symptoms:
            "1. Nasal congestion 2. Loss of smell 3. Runny nose 4. Facial pain.",
          causes:
            "1. Chronic inflammation from conditions like asthma or allergies.",
          diagnosis:
            "1. Nasal examination 2. Imaging studies (CT scan)."
        },
        {
          img: "https://www.cdc.gov/nutrition/images/nutritionaldeficiency.jpg",
          name: "Nutritional Deficiency",
          overview:
            "Nutritional deficiencies occur when the body lacks essential nutrients, leading to various health issues depending on the nutrient involved.",
          symptoms:
            "1. Fatigue 2. Weakness 3. Anemia 4. Poor immune function.",
          causes:
            "1. Poor diet 2. Malabsorption disorders.",
          diagnosis:
            "1. Blood tests to measure nutrient levels."
        },
        {
          img: "https://www.cdc.gov/nephritis/images/nephritis.jpg",
          name: "Nephritis",
          overview:
            "Nephritis is inflammation of the kidneys, which can lead to kidney damage and impaired function.",
          symptoms:
            "1. Swelling (edema) 2. High blood pressure 3. Blood in urine 4. Pain in the back or side.",
          causes:
            "1. Autoimmune diseases 2. Infections 3. Certain medications.",
          diagnosis:
            "1. Urinalysis 2. Blood tests 3. Imaging studies."
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
export default N;