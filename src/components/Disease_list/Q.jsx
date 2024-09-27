function Q()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/qfever/images/qfever.jpg",
          name: "Q Fever",
          overview:
            "Q Fever is a bacterial infection caused by Coxiella burnetii, primarily affecting livestock but can be transmitted to humans.",
          symptoms:
            "1. Fever 2. Headache 3. Muscle pain 4. Fatigue 5. Chills.",
          causes:
            "1. Inhalation of contaminated aerosols from livestock 2. Consuming unpasteurized dairy products.",
          diagnosis:
            "1. Serological tests 2. PCR testing to detect bacterial DNA."
        },
        {
          img: "https://www.ncbi.nlm.nih.gov/books/NBK13675/bin/Qfever.jpg",
          name: "Quinsy (Peritonsillar Abscess)",
          overview:
            "Quinsy is a complication of tonsillitis that results in a painful collection of pus behind the tonsil.",
          symptoms:
            "1. Severe sore throat 2. Difficulty swallowing 3. Fever 4. Swelling on one side of the throat.",
          causes:
            "1. Bacterial infections (commonly Streptococcus) leading to tonsillitis.",
          diagnosis:
            "1. Physical examination 2. Throat culture to identify the bacteria."
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
export default Q;