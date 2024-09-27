function T()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/tuberculosis/images/tuberculosis.jpg",
          name: "Tuberculosis (TB)",
          overview:
            "Tuberculosis is a contagious bacterial infection caused by Mycobacterium tuberculosis, primarily affecting the lungs but can also affect other parts of the body.",
          symptoms:
            "1. Persistent cough 2. Chest pain 3. Coughing up blood 4. Fever and night sweats.",
          causes:
            "1. Airborne transmission through droplets from an infected person.",
          diagnosis:
            "1. Skin test (Mantoux test) 2. Blood tests 3. Chest X-ray."
        },
        {
          img: "https://www.cdc.gov/tetanus/images/tetanus.jpg",
          name: "Tetanus",
          overview:
            "Tetanus is a serious bacterial infection caused by Clostridium tetani, leading to painful muscle stiffness and spasms.",
          symptoms:
            "1. Stiffness of the jaw (lockjaw) 2. Muscle spasms 3. Difficulty swallowing 4. Fever.",
          causes:
            "1. Infection through wounds contaminated with soil or animal feces.",
          diagnosis:
            "1. Clinical evaluation and medical history."
        },
        {
          img: "https://www.cdc.gov/tachycardia/images/tachycardia.jpg",
          name: "Tachycardia",
          overview:
            "Tachycardia is a condition characterized by an abnormally fast heart rate, which can lead to various cardiovascular problems.",
          symptoms:
            "1. Palpitations 2. Dizziness 3. Shortness of breath 4. Chest pain.",
          causes:
            "1. Stress, anxiety, or panic attacks 2. Heart conditions 3. Hyperthyroidism.",
          diagnosis:
            "1. Electrocardiogram (ECG) 2. Holter monitor test."
        },
        {
          img: "https://www.cdc.gov/tinnitus/images/tinnitus.jpg",
          name: "Tinnitus",
          overview:
            "Tinnitus is the perception of noise or ringing in the ears, often associated with hearing loss or ear injury.",
          symptoms:
            "1. Ringing, buzzing, or hissing sounds in one or both ears 2. Hearing loss.",
          causes:
            "1. Exposure to loud noises 2. Earwax blockage 3. Age-related hearing loss.",
          diagnosis:
            "1. Hearing examination 2. Imaging tests if needed."
        },
        {
          img: "https://www.cdc.gov/tongue-tie/images/tongue-tie.jpg",
          name: "Tongue Tie (Ankyloglossia)",
          overview:
            "Tongue tie is a condition where the thin piece of tissue connecting the tongue to the floor of the mouth is too short, which can affect speech and feeding.",
          symptoms:
            "1. Difficulty sticking the tongue out 2. Speech difficulties 3. Problems breastfeeding in infants.",
          causes:
            "1. Congenital condition present at birth.",
          diagnosis:
            "1. Clinical evaluation of the tongue's mobility."
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
export default T;