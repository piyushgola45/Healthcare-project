function G()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/gonorrhea/images/gonorrhea-illustration.jpg",
          name: "Gonorrhea",
          overview:
            "Gonorrhea is a sexually transmitted infection (STI) caused by the bacterium Neisseria gonorrhoeae. It can affect the genital tract, throat, and rectum.",
          symptoms:
            "1. Painful urination 2. Abnormal discharge 3. Pelvic pain 4. Sore throat.",
          causes:
            "1. Sexual contact with an infected person.",
          diagnosis:
            "1. Urine test 2. Swab tests from the affected area."
        },
        {
          img: "https://www.cdc.gov/gastroenteritis/images/norovirus.jpg",
          name: "Gastroenteritis",
          overview:
            "Gastroenteritis, commonly known as the stomach flu, is an inflammation of the stomach and intestines, often caused by viral infections.",
          symptoms:
            "1. Diarrhea 2. Vomiting 3. Abdominal pain 4. Fever.",
          causes:
            "1. Viral infections (e.g., norovirus) 2. Bacterial infections.",
          diagnosis:
            "1. Physical examination 2. Stool tests."
        },
        {
          img: "https://www.cdc.gov/gout/images/gout-illustration.jpg",
          name: "Gout",
          overview:
            "Gout is a form of arthritis characterized by sudden, severe pain, redness, and swelling in the joints, often caused by high levels of uric acid.",
          symptoms:
            "1. Intense joint pain 2. Swelling and inflammation 3. Redness.",
          causes:
            "1. High purine diet 2. Genetic factors 3. Kidney dysfunction.",
          diagnosis:
            "1. Joint fluid analysis 2. Blood tests to check uric acid levels."
        },
        {
          img: "https://www.cdc.gov/giardia/images/giardiasis.jpg",
          name: "Giardiasis",
          overview:
            "Giardiasis is an intestinal infection caused by the parasite Giardia lamblia, leading to diarrhea, abdominal pain, and nausea.",
          symptoms:
            "1. Diarrhea 2. Gas 3. Bloating 4. Fatigue.",
          causes:
            "1. Contaminated water or food 2. Poor sanitation.",
          diagnosis:
            "1. Stool tests 2. Endoscopy in chronic cases."
        },
        {
          img: "https://www.cdc.gov/gardiasis/images/gardiasis-illustration.jpg",
          name: "Gingivitis",
          overview:
            "Gingivitis is a common and mild form of gum disease that causes irritation, redness, and swelling of the gingiva (gums).",
          symptoms:
            "1. Red, swollen gums 2. Bleeding while brushing 3. Bad breath.",
          causes:
            "1. Poor oral hygiene 2. Tobacco use 3. Hormonal changes.",
          diagnosis:
            "1. Dental examination 2. Periodontal probing."
        }
      ];
      
    //   export default g_list;
      
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
export default G;