function O()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/osteoarthritis/images/osteoarthritis.jpg",
          name: "Osteoarthritis",
          overview:
            "Osteoarthritis is a degenerative joint disease that occurs when the cartilage that cushions the joints wears down over time.",
          symptoms:
            "1. Pain in joints 2. Stiffness 3. Swelling 4. Reduced flexibility.",
          causes:
            "1. Age 2. Joint injury 3. Obesity 4. Genetics.",
          diagnosis:
            "1. Physical examination 2. X-rays 3. MRI."
        },
        {
          img: "https://www.cdc.gov/obesity/images/obesity.jpg",
          name: "Obesity",
          overview:
            "Obesity is a complex disease characterized by excessive body fat, which increases the risk of various health problems.",
          symptoms:
            "1. Increased body weight 2. Fatigue 3. Difficulty in physical activities.",
          causes:
            "1. Poor diet 2. Lack of physical activity 3. Genetics 4. Hormonal imbalances.",
          diagnosis:
            "1. Body Mass Index (BMI) calculation 2. Clinical evaluation."
        },
        {
          img: "https://www.cdc.gov/otitis/media/images/otitis_media.jpg",
          name: "Otitis Media",
          overview:
            "Otitis media is an infection or inflammation of the middle ear, commonly seen in children.",
          symptoms:
            "1. Ear pain 2. Hearing loss 3. Fluid drainage from the ear.",
          causes:
            "1. Bacterial or viral infections 2. Allergies.",
          diagnosis:
            "1. Physical examination 2. Otoscopy (ear examination)."
        },
        {
          img: "https://www.cdc.gov/osteoporosis/images/osteoporosis.jpg",
          name: "Osteoporosis",
          overview:
            "Osteoporosis is a condition characterized by weak and brittle bones, increasing the risk of fractures.",
          symptoms:
            "1. Bone fractures 2. Loss of height 3. Stooped posture.",
          causes:
            "1. Aging 2. Hormonal changes 3. Nutritional deficiencies.",
          diagnosis:
            "1. Bone density test 2. X-rays."
        },
        {
          img: "https://www.cdc.gov/oralhealth/images/oral_cancer.jpg",
          name: "Oral Cancer",
          overview:
            "Oral cancer occurs in the tissues of the mouth and can affect the lips, gums, tongue, and cheeks.",
          symptoms:
            "1. Sores or lumps in the mouth 2. Difficulty swallowing 3. Unexplained bleeding.",
          causes:
            "1. Tobacco use 2. Alcohol consumption 3. HPV infection.",
          diagnosis:
            "1. Physical examination 2. Biopsy of suspicious lesions."
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
export default O;