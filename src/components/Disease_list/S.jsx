function S()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/syphilis/images/syphilis.jpg",
          name: "Syphilis",
          overview:
            "Syphilis is a sexually transmitted infection caused by the bacterium Treponema pallidum, which can cause serious health complications if left untreated.",
          symptoms:
            "1. Painless sore (chancre) 2. Rash 3. Fever 4. Swollen lymph nodes.",
          causes:
            "1. Sexual contact with an infected person.",
          diagnosis:
            "1. Blood tests to detect antibodies 2. Physical examination of sores."
        },
        {
          img: "https://www.cdc.gov/sarcoidosis/images/sarcoidosis.jpg",
          name: "Sarcoidosis",
          overview:
            "Sarcoidosis is an inflammatory disease characterized by the formation of granulomas (clusters of immune cells) in various organs, most commonly the lungs.",
          symptoms:
            "1. Fatigue 2. Persistent cough 3. Shortness of breath 4. Skin rashes.",
          causes:
            "1. Unknown; may be related to immune system response to environmental factors.",
          diagnosis:
            "1. Physical examination 2. Imaging tests (X-ray, CT scan) 3. Biopsy of affected tissue."
        },
        {
          img: "https://www.cdc.gov/schizophrenia/images/schizophrenia.jpg",
          name: "Schizophrenia",
          overview:
            "Schizophrenia is a severe mental disorder that affects how a person thinks, feels, and behaves, often characterized by distorted thinking and perception.",
          symptoms:
            "1. Hallucinations 2. Delusions 3. Disorganized thinking 4. Reduced motivation.",
          causes:
            "1. Combination of genetic, brain chemistry, and environmental factors.",
          diagnosis:
            "1. Clinical evaluation and psychiatric assessment."
        },
        {
          img: "https://www.cdc.gov/sickle-cell-disease/images/sickle-cell.jpg",
          name: "Sickle Cell Disease",
          overview:
            "Sickle cell disease is a genetic disorder that affects hemoglobin in red blood cells, causing them to become misshapen and leading to various complications.",
          symptoms:
            "1. Anemia 2. Pain episodes (crises) 3. Swelling in hands and feet 4. Frequent infections.",
          causes:
            "1. Genetic mutation affecting hemoglobin.",
          diagnosis:
            "1. Blood tests to check for hemoglobin S 2. Newborn screening."
        },
        {
          img: "https://www.cdc.gov/stevens-johnson-syndrome/images/sjs.jpg",
          name: "Stevens-Johnson Syndrome",
          overview:
            "Stevens-Johnson syndrome is a severe skin reaction, often caused by medications or infections, leading to painful blisters and peeling skin.",
          symptoms:
            "1. Flu-like symptoms 2. Painful red or purplish rash 3. Blisters 4. Shedding of skin.",
          causes:
            "1. Adverse drug reactions 2. Infections (such as herpes).",
          diagnosis:
            "1. Clinical evaluation 2. Skin biopsy to confirm diagnosis."
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
export default S;