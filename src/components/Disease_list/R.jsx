function R()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/rabies/images/rabies.jpg",
          name: "Rabies",
          overview:
            "Rabies is a viral disease that causes inflammation of the brain and is transmitted through the bite of an infected animal.",
          symptoms:
            "1. Fever 2. Headache 3. Confusion 4. Agitation 5. Hydrophobia.",
          causes:
            "1. Rabies virus transmitted through animal bites or scratches.",
          diagnosis:
            "1. Clinical evaluation 2. Testing of saliva or brain tissue in severe cases."
        },
        {
          img: "https://www.cdc.gov/rheumatic-fever/images/rheumatic_fever.jpg",
          name: "Rheumatic Fever",
          overview:
            "Rheumatic fever is an inflammatory disease that can develop after a streptococcal throat infection, affecting the heart, joints, skin, and brain.",
          symptoms:
            "1. Fever 2. Joint pain 3. Skin rash 4. Heart murmur.",
          causes:
            "1. Untreated streptococcal throat infection.",
          diagnosis:
            "1. Medical history 2. Physical examination 3. Blood tests for antibodies."
        },
        {
          img: "https://www.cdc.gov/ringworm/images/ringworm.jpg",
          name: "Ringworm",
          overview:
            "Ringworm is a fungal infection that affects the skin, scalp, or nails, characterized by a ring-shaped rash.",
          symptoms:
            "1. Circular, red, itchy patches on the skin 2. Hair loss in affected areas (if on the scalp).",
          causes:
            "1. Fungal infections from direct contact with infected individuals or contaminated surfaces.",
          diagnosis:
            "1. Physical examination 2. Skin scraping for fungal culture."
        },
        {
          img: "https://www.cdc.gov/respiratory-syncytial-virus/images/rsvirus.jpg",
          name: "Respiratory Syncytial Virus (RSV)",
          overview:
            "RSV is a common virus that causes respiratory infections, especially in infants and young children.",
          symptoms:
            "1. Runny nose 2. Cough 3. Fever 4. Wheezing.",
          causes:
            "1. RSV infection, spread through respiratory droplets.",
          diagnosis:
            "1. Clinical evaluation 2. Nasal swab testing for RSV."
        },
        {
          img: "https://www.cdc.gov/rickets/images/rickets.jpg",
          name: "Rickets",
          overview:
            "Rickets is a disease caused by a deficiency of vitamin D, calcium, or phosphate, leading to weak or soft bones in children.",
          symptoms:
            "1. Delayed growth 2. Pain in the spine, pelvis, and legs 3. Weak muscles.",
          causes:
            "1. Lack of vitamin D from sun exposure or diet.",
          diagnosis:
            "1. Blood tests for vitamin D and calcium levels 2. X-rays to assess bone structure."
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
export default R;