function P()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/pneumonia/images/pneumonia.jpg",
          name: "Pneumonia",
          overview:
            "Pneumonia is an infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus.",
          symptoms:
            "1. Cough 2. Fever 3. Difficulty breathing 4. Chest pain.",
          causes:
            "1. Bacterial infections 2. Viral infections 3. Fungal infections.",
          diagnosis:
            "1. Physical examination 2. Chest X-ray 3. Sputum test."
        },
        {
          img: "https://www.cdc.gov/pelvicinflammatorydisease/images/pid.jpg",
          name: "Pelvic Inflammatory Disease (PID)",
          overview:
            "PID is an infection of the female reproductive organs, often caused by sexually transmitted bacteria.",
          symptoms:
            "1. Lower abdominal pain 2. Unusual vaginal discharge 3. Painful intercourse.",
          causes:
            "1. Sexually transmitted infections (STIs) 2. Bacterial infections.",
          diagnosis:
            "1. Pelvic exam 2. Ultrasound 3. Laparoscopy."
        },
        {
          img: "https://www.cdc.gov/polio/images/polio.jpg",
          name: "Polio",
          overview:
            "Polio, or poliomyelitis, is a viral disease that can cause paralysis and is preventable through vaccination.",
          symptoms:
            "1. Fever 2. Fatigue 3. Headache 4. Muscle weakness.",
          causes:
            "1. Poliovirus infection.",
          diagnosis:
            "1. Clinical evaluation 2. Stool tests to detect the virus."
        },
        {
          img: "https://www.cdc.gov/psoriasis/images/psoriasis.jpg",
          name: "Psoriasis",
          overview:
            "Psoriasis is a chronic autoimmune condition that leads to the rapid buildup of skin cells, causing scaling on the skin's surface.",
          symptoms:
            "1. Red patches of skin 2. Itching and burning 3. Thickened, pitted, or ridged nails.",
          causes:
            "1. Genetic factors 2. Immune system dysfunction.",
          diagnosis:
            "1. Physical examination 2. Skin biopsy in uncertain cases."
        },
        {
          img: "https://www.cdc.gov/pancreatitis/images/pancreatitis.jpg",
          name: "Pancreatitis",
          overview:
            "Pancreatitis is inflammation of the pancreas that can occur suddenly (acute) or develop over time (chronic).",
          symptoms:
            "1. Abdominal pain 2. Nausea 3. Vomiting 4. Fever.",
          causes:
            "1. Gallstones 2. Chronic and excessive alcohol consumption 3. Certain medications.",
          diagnosis:
            "1. Blood tests 2. Imaging studies (CT scan or ultrasound)."
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
export default P;