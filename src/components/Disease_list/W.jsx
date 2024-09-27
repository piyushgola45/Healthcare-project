function W()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/west-nile-virus/images/west-nile-virus.jpg",
          name: "West Nile Virus",
          overview:
            "West Nile Virus is a mosquito-borne virus that can cause serious illness, particularly in people over 50 or those with weakened immune systems.",
          symptoms:
            "1. Fever 2. Headache 3. Body aches 4. Fatigue 5. Severe cases may lead to neurological symptoms.",
          causes:
            "1. Infection through mosquito bites.",
          diagnosis:
            "1. Blood tests to detect the virus or antibodies."
        },
        {
          img: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2021/06/11/20/32/wernickes-encephalopathy-8col.jpg",
          name: "Wernicke's Encephalopathy",
          overview:
            "Wernicke's encephalopathy is a neurological disorder caused by thiamine (Vitamin B1) deficiency, often associated with alcohol misuse.",
          symptoms:
            "1. Confusion 2. Ataxia (loss of coordination) 3. Ophthalmoplegia (eye movement disorders).",
          causes:
            "1. Thiamine deficiency due to poor nutrition or alcoholism.",
          diagnosis:
            "1. Clinical evaluation 2. MRI may show characteristic changes."
        },
        {
          img: "https://www.cdc.gov/worms/images/worms.jpg",
          name: "Worm Infections",
          overview:
            "Worm infections are caused by parasitic worms that can live in the intestines and other parts of the body, leading to various health issues.",
          symptoms:
            "1. Abdominal pain 2. Diarrhea 3. Weight loss 4. Fatigue.",
          causes:
            "1. Infection through contaminated food or water.",
          diagnosis:
            "1. Stool tests to identify the presence of worms."
        },
        {
          img: "https://www.cancer.org/-/media/cancer-org/images/cancer-types/whipple-disease/whipple-disease.jpg",
          name: "Whipple's Disease",
          overview:
            "Whipple's disease is a rare bacterial infection that affects the digestive system and can spread to other organs.",
          symptoms:
            "1. Weight loss 2. Diarrhea 3. Abdominal pain 4. Joint pain.",
          causes:
            "1. Infection with the bacterium Tropheryma whipplei.",
          diagnosis:
            "1. Biopsy of the small intestine 2. Blood tests."
        },
        {
          img: "https://www.cdc.gov/waterborne-diseases/images/waterborne-disease.jpg",
          name: "Waterborne Diseases",
          overview:
            "Waterborne diseases are illnesses caused by pathogens found in contaminated water, including cholera and giardiasis.",
          symptoms:
            "Varies by disease but may include diarrhea, vomiting, and abdominal pain.",
          causes:
            "1. Consumption of contaminated water.",
          diagnosis:
            "1. Stool tests 2. Water quality testing."
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
export default W;