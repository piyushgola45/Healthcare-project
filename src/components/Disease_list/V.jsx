function V()
{
    const a_list = [
        {
          img: "https://www.cdc.gov/vaccines/images/vaccination.jpg",
          name: "Vaccine-Preventable Diseases",
          overview:
            "Vaccine-preventable diseases are illnesses that can be prevented through vaccination, including measles, mumps, rubella, and polio.",
          symptoms:
            "Varies by disease but may include fever, rash, and respiratory symptoms.",
          causes:
            "1. Infectious agents (viruses or bacteria) that vaccines are designed to protect against.",
          diagnosis:
            "1. Clinical evaluation and patient history 2. Laboratory tests if needed."
        },
        {
          img: "https://www.cdc.gov/von-hippel-lindau/images/von-hippel-lindau.jpg",
          name: "Von Hippel-Lindau Disease",
          overview:
            "Von Hippel-Lindau (VHL) disease is a genetic disorder characterized by the formation of tumors and cysts in multiple organs, particularly in the kidneys, pancreas, and adrenal glands.",
          symptoms:
            "1. Headaches 2. Vision problems 3. High blood pressure.",
          causes:
            "1. Genetic mutations in the VHL gene.",
          diagnosis:
            "1. Genetic testing 2. Imaging studies like MRI or CT scans."
        },
        {
          img: "https://www.cdc.gov/varicella/images/varicella.jpg",
          name: "Varicella (Chickenpox)",
          overview:
            "Varicella, commonly known as chickenpox, is a highly contagious viral infection caused by the varicella-zoster virus, leading to an itchy rash and flu-like symptoms.",
          symptoms:
            "1. Itchy rash with blisters 2. Fever 3. Fatigue.",
          causes:
            "1. Infection with the varicella-zoster virus.",
          diagnosis:
            "1. Clinical evaluation 2. History of exposure."
        },
        {
          img: "https://www.cdc.gov/vitamin-deficiency/images/vitamin-deficiency.jpg",
          name: "Vitamin Deficiency Diseases",
          overview:
            "Vitamin deficiency diseases are health issues that arise due to a lack of essential vitamins in the diet, such as scurvy (Vitamin C deficiency) and rickets (Vitamin D deficiency).",
          symptoms:
            "Varies by vitamin but may include fatigue, weakness, and specific symptoms related to the deficiency.",
          causes:
            "1. Poor diet 2. Malabsorption issues 3. Increased requirements during certain life stages.",
          diagnosis:
            "1. Blood tests to measure vitamin levels."
        },
        {
          img: "https://www.cdc.gov/vulvar-cancer/images/vulvar-cancer.jpg",
          name: "Vulvar Cancer",
          overview:
            "Vulvar cancer is a rare type of cancer that occurs on the outer surface of the female genitalia, often presenting with symptoms that can be mistaken for other conditions.",
          symptoms:
            "1. Itching or burning in the vulvar area 2. Pain 3. Changes in skin color or appearance.",
          causes:
            "1. HPV infection 2. Chronic inflammatory conditions.",
          diagnosis:
            "1. Physical examination 2. Biopsy of the vulvar tissue."
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
export default V;