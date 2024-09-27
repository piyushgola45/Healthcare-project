function Y()
{
    const a_list = [
        {
          img: "https://www.example.com/images/yaws.jpg", // Placeholder link
          name: "Yaws",
          overview:
            "Yaws is a chronic bacterial infection caused by Treponema pallidum pertenue, affecting the skin, bones, and joints, primarily in tropical regions.",
          symptoms:
            "1. Painless skin ulcers 2. Bone pain 3. Swelling of lymph nodes.",
          causes:
            "1. Direct contact with the skin of an infected person.",
          diagnosis:
            "1. Clinical examination 2. Serological tests."
        },
        {
          img: "https://www.example.com/images/yellow-fever.jpg", // Placeholder link
          name: "Yellow Fever",
          overview:
            "Yellow fever is a viral infection transmitted by mosquitoes, characterized by fever, chills, loss of appetite, and in severe cases, liver damage.",
          symptoms:
            "1. Fever 2. Chills 3. Loss of appetite 4. Muscle pain 5. Jaundice.",
          causes:
            "1. Infection with the yellow fever virus.",
          diagnosis:
            "1. Clinical evaluation 2. Blood tests to detect the virus."
        },
        {
          img: "https://www.example.com/images/yolk-sac-tumor.jpg", // Placeholder link
          name: "Yolk Sac Tumor",
          overview:
            "Yolk sac tumor is a type of germ cell tumor that can occur in the ovaries or testes, primarily affecting children.",
          symptoms:
            "1. Abdominal mass 2. Pain 3. Elevated alpha-fetoprotein levels.",
          causes:
            "1. Unknown, but related to abnormal germ cell development.",
          diagnosis:
            "1. Imaging studies 2. Biopsy to confirm the tumor type."
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
export default Y;