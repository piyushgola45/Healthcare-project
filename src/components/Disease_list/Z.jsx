function Z()
{
    const a_list = [
        {
          img: "https://www.example.com/images/zika-virus.jpg", // Placeholder link
          name: "Zika Virus",
          overview:
            "Zika virus is a mosquito-borne illness that can cause fever, rash, joint pain, and conjunctivitis. Infection during pregnancy can lead to serious birth defects.",
          symptoms:
            "1. Fever 2. Rash 3. Joint pain 4. Conjunctivitis (red eyes) 5. Muscle pain.",
          causes:
            "1. Infection with the Zika virus, primarily spread by Aedes mosquitoes.",
          diagnosis:
            "1. Blood tests to detect the virus or antibodies."
        },
        {
          img: "https://www.example.com/images/zanthosis.jpg", // Placeholder link
          name: "Zanthosis",
          overview:
            "Zanthosis is a rare condition characterized by yellowing of the skin and tissues due to excessive bilirubin. It can be associated with liver disorders.",
          symptoms:
            "1. Yellowing of the skin and eyes (jaundice) 2. Fatigue 3. Abdominal pain.",
          causes:
            "1. Liver dysfunction leading to bilirubin accumulation.",
          diagnosis:
            "1. Blood tests to measure liver function 2. Imaging studies."
        },
        {
          img: "https://www.example.com/images/zollinger-ellison-syndrome.jpg", // Placeholder link
          name: "Zollinger-Ellison Syndrome",
          overview:
            "Zollinger-Ellison Syndrome is a rare condition caused by gastrin-secreting tumors (gastrinomas), leading to excessive stomach acid production and recurrent peptic ulcers.",
          symptoms:
            "1. Abdominal pain 2. Diarrhea 3. Weight loss 4. Nausea.",
          causes:
            "1. Gastrinomas, which can be malignant or benign.",
          diagnosis:
            "1. Blood tests to measure gastrin levels 2. Imaging studies to locate tumors."
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
export default Z;