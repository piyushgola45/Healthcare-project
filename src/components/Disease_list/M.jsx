function M()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/measles/images/measles.jpg",
          name: "Measles",
          overview:
            "Measles is a highly contagious viral infection that causes a distinctive rash and flu-like symptoms. Vaccination is key to prevention.",
          symptoms:
            "1. High fever 2. Cough 3. Runny nose 4. Red eyes 5. Rash.",
          causes:
            "1. Measles virus spread through respiratory droplets.",
          diagnosis:
            "1. Clinical evaluation 2. Blood tests to detect antibodies."
        },
        {
          img: "https://www.cdc.gov/melanoma/images/melanoma.jpg",
          name: "Melanoma",
          overview:
            "Melanoma is a serious type of skin cancer that develops from melanocytes, the cells that produce pigment. Early detection is crucial.",
          symptoms:
            "1. New or changing mole 2. Asymmetrical shape 3. Irregular borders 4. Color variation.",
          causes:
            "1. UV radiation exposure 2. Genetic factors.",
          diagnosis:
            "1. Skin examination 2. Biopsy of the suspicious lesion."
        },
        {
          img: "https://www.cdc.gov/migraine/images/migraine.jpg",
          name: "Migraine",
          overview:
            "Migraine is a neurological condition characterized by recurrent headaches, often accompanied by nausea and sensitivity to light and sound.",
          symptoms:
            "1. Intense headache 2. Nausea 3. Sensitivity to light and sound.",
          causes:
            "1. Genetic factors 2. Environmental triggers (stress, certain foods).",
          diagnosis:
            "1. Clinical evaluation 2. Exclusion of other headache types."
        },
        {
          img: "https://www.cdc.gov/mumps/images/mumps.jpg",
          name: "Mumps",
          overview:
            "Mumps is a contagious viral infection characterized by swelling of the salivary glands, leading to fever and discomfort.",
          symptoms:
            "1. Swollen salivary glands 2. Fever 3. Headache 4. Muscle pain.",
          causes:
            "1. Mumps virus spread through respiratory droplets.",
          diagnosis:
            "1. Clinical evaluation 2. Blood tests to detect antibodies."
        },
        {
          img: "https://www.cdc.gov/malaria/images/malaria.jpg",
          name: "Malaria",
          overview:
            "Malaria is a serious disease caused by parasites transmitted through the bites of infected mosquitoes, leading to fever and chills.",
          symptoms:
            "1. Fever 2. Chills 3. Sweats 4. Headaches 5. Nausea.",
          causes:
            "1. Plasmodium parasites spread by Anopheles mosquitoes.",
          diagnosis:
            "1. Blood tests to detect malaria parasites."
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
export default M;