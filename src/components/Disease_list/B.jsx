function B()
{
      
      
    const a_list=[
        {
            img: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2017/8/shutterstock_328935131.jpg",
            name: "Bronchitis",
            overview:
              "Bronchitis is an inflammation of the bronchial tubes, which carry air to and from your lungs. It can be acute or chronic and often follows a respiratory infection.",
            symptoms:
              "1. Cough 2. Mucus production 3. Fatigue 4. Shortness of breath 5. Chest discomfort.",
            causes:
              "1. Viral infections 2. Bacterial infections 3. Smoking 4. Exposure to irritants like dust, fumes, vapors.",
            diagnosis:
              "1. Physical exam 2. Chest X-ray 3. Sputum tests 4. Pulmonary function tests."
          },
          {
            img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/009/9276/meningitis-meningococcus.jpg",
            name: "Bacterial Meningitis",
            overview:
              "Bacterial Meningitis is a serious infection of the protective membranes covering the brain and spinal cord. It can lead to severe complications or death if not treated promptly.",
            symptoms:
              "1. High fever 2. Stiff neck 3. Severe headache 4. Sensitivity to light 5. Confusion.",
            causes:
              "1. Bacteria such as Streptococcus pneumoniae 2. Neisseria meningitidis 3. Group B Streptococcus.",
            diagnosis:
              "1. Blood cultures 2. Imaging (CT or MRI) 3. Spinal tap (lumbar puncture) to test cerebrospinal fluid."
          },
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kWDb_pyj-1euNZrKI6w3xdciEGmJywMSPg&s",
            name: "Bell’s Palsy",
            overview:
              "Bell’s Palsy is a condition that causes sudden, temporary weakness or paralysis of the muscles on one side of the face. It is often linked to viral infections.",
            symptoms:
              "1. Sudden weakness on one side of the face 2. Drooping of the mouth 3. Loss of taste.",
            causes:
              "1. Herpes simplex virus 2. Inflammation and swelling of facial nerves.",
            diagnosis:
              "1. Physical exam 2. Electromyography (EMG) 3. Imaging tests like MRI or CT scan."
          },
          {
            img: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/burns/642x361_Burns_Types_Treatments_Third_Degree_Light_Skin.jpg?w=1155&h=758",
            name: "Burns",
            overview:
              "Burns are tissue damage resulting from heat, chemicals, electricity, sunlight, or radiation. They can range from minor to life-threatening.",
            symptoms: "1. Redness 2. Swelling 3. Blisters 4. Pain 5. Peeling skin.",
            causes:
              "1. Thermal burns (fire, hot liquids) 2. Chemical burns 3. Electrical burns 4. Radiation burns.",
            diagnosis:
              "1. Physical examination 2. Determining burn severity (1st, 2nd, 3rd degree)."
          },
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQF5aqub3M3F8ZcAI6Jrym-9U6lpqZDKmiw&s",
            name: "Beriberi",
            overview:
              "Beriberi is a disease caused by a deficiency of vitamin B1 (thiamine). It affects the heart, nerves, and muscles.",
            symptoms:
              "1. Difficulty walking 2. Loss of feeling in hands and feet 3. Paralysis 4. Confusion.",
            causes:
              "1. Thiamine deficiency due to poor diet or chronic alcoholism.",
            diagnosis: "1. Blood and urine tests to measure thiamine levels."
          },
          {
            img: "https://www.health.com/thmb/1JJVNLjXnCqt0GCf6IiBIwKti0E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-1449527392-530881506fc444b4a0821e4c84186b1f.jpg",
            name: "Boils (Furuncles)",
            overview:
              "Boils, or furuncles, are painful, pus-filled bumps that form under the skin when bacteria infect and inflame one or more hair follicles.",
            symptoms:
              "1. Red, swollen bump 2. Painful to touch 3. Filled with pus 4. Fever (in severe cases).",
            causes:
              "1. Staphylococcus aureus infection 2. Poor hygiene 3. Immune system disorders.",
            diagnosis:
              "1. Physical examination 2. Culture of pus to determine bacterial cause."
          }
    ]
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
export default B;