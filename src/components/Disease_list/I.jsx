function I()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/ihm/images/ihm.jpg",
          name: "Influenza",
          overview:
            "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses, leading to mild to severe illness.",
          symptoms:
            "1. Fever 2. Cough 3. Sore throat 4. Body aches 5. Fatigue.",
          causes:
            "1. Influenza virus spread via respiratory droplets.",
          diagnosis:
            "1. Clinical examination 2. Rapid influenza diagnostic tests."
        },
        {
          img: "https://www.cdc.gov/impetigo/images/impetigo.jpg",
          name: "Impetigo",
          overview:
            "Impetigo is a highly contagious bacterial skin infection that mostly affects infants and children, characterized by red sores.",
          symptoms:
            "1. Red sores that can rupture, ooze, and form a yellow crust 2. Itching.",
          causes:
            "1. Bacteria (commonly Staphylococcus or Streptococcus).",
          diagnosis:
            "1. Physical examination 2. Culture of the sores."
        },
        {
          img: "https://www.cdc.gov/irritablebowelsyndrome/images/ibs.jpg",
          name: "Irritable Bowel Syndrome (IBS)",
          overview:
            "IBS is a common gastrointestinal disorder characterized by abdominal pain, bloating, and altered bowel habits.",
          symptoms:
            "1. Abdominal pain 2. Bloating 3. Diarrhea or constipation.",
          causes:
            "1. Exact cause unknown, but factors may include gut motility, diet, and stress.",
          diagnosis:
            "1. Medical history and symptoms 2. Exclusion of other conditions."
        },
        {
          img: "https://www.cdc.gov/itchy/images/itchy.jpg",
          name: "Itchy Skin (Pruritus)",
          overview:
            "Itchy skin, or pruritus, can be caused by various conditions, leading to a persistent urge to scratch.",
          symptoms:
            "1. Localized or widespread itching 2. Redness or irritation.",
          causes:
            "1. Allergic reactions 2. Dry skin 3. Skin conditions (e.g., eczema).",
          diagnosis:
            "1. Physical examination 2. Skin tests for allergies."
        },
        {
          img: "https://www.cdc.gov/infection/images/infection.jpg",
          name: "Infections",
          overview:
            "Infections are caused by pathogens such as bacteria, viruses, fungi, or parasites, leading to various symptoms depending on the type.",
          symptoms:
            "1. Varies by infection (e.g., fever, fatigue, localized pain).",
          causes:
            "1. Pathogen exposure via different routes (e.g., respiratory, gastrointestinal).",
          diagnosis:
            "1. Clinical examination 2. Laboratory tests (blood cultures, imaging)."
        }
      ];
      
    //   export default i_list;
      
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
export default I;