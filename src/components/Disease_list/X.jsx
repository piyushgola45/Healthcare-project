function X()
{
    const a_list = [
        {
          img: "https://www.healthline.com/hlcmsresource/images/AN_images/xeroderma-pigmentosum-1296x728-header.jpg",
          name: "Xeroderma Pigmentosum",
          overview:
            "Xeroderma Pigmentosum (XP) is a rare genetic disorder characterized by extreme sensitivity to ultraviolet (UV) rays from sunlight, leading to skin damage and an increased risk of skin cancer.",
          symptoms:
            "1. Severe sunburn after minimal sun exposure 2. Freckles on sun-exposed areas 3. Skin cancers at a young age.",
          causes:
            "1. Mutations in genes responsible for repairing UV-induced DNA damage.",
          diagnosis:
            "1. Clinical evaluation 2. Genetic testing to identify mutations."
        },
        {
          img: "https://www.cdc.gov/x-ray/images/x-ray.jpg",
          name: "X-ray Induced Cancer",
          overview:
            "X-ray induced cancer refers to cancer that may develop as a result of exposure to ionizing radiation from X-rays. The risk increases with the amount and frequency of exposure.",
          symptoms:
            "Varies based on the type of cancer but may include unexplained weight loss, fatigue, and changes in skin appearance.",
          causes:
            "1. Ionizing radiation exposure from medical imaging or environmental sources.",
          diagnosis:
            "1. Imaging studies 2. Biopsy to confirm cancer."
        },
        {
          img: "https://www.example.com/images/x-linked-agammaglobulinemia.jpg", // Placeholder link
          name: "X-Linked Agammaglobulinemia",
          overview:
            "X-Linked Agammaglobulinemia (XLA) is a genetic condition that impairs the immune system, leading to increased susceptibility to infections.",
          symptoms:
            "1. Recurrent infections 2. Low antibody levels 3. Absence of B cells.",
          causes:
            "1. Mutation in the BTK gene affecting B cell development.",
          diagnosis:
            "1. Blood tests to check immunoglobulin levels 2. Genetic testing."
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
export default X;