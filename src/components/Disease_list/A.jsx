function A()
{
    const a_list=[
        {
            img:"https://ahaliadiabetes.org/wp-content/uploads/2022/01/dsf.jpg",
            name:"Acidity",
            overview:"Acidity is one of the most common ailments that almost everyone experiences once in their lifetimes. In simple terms, it is a condition that causes excess acid production in the stomach. This not only causes discomfort in the stomach but also leads to other symptoms, such as a sour taste in the mouth, difficulty swallowing, and indigestion.",
            symptoms:`1.Heartburn 2.Regurgitation \n 3.Sour taste in the mouth .`,
            causes:"1.Food and dietary factors 2.Lifestyle factors 3.Ailments and medications 4.",
            diagnosis:"1.Upper GI endoscopy 2.pH monitoring 3.Barium swallow test (esophagram) 4.Esophageal manometry 5.Electrocardiogram (ECG)"

        },
        {
            img:"https://onemg.gumlet.io/a_ignore,w_450,h_260,c_fit,q_auto,f_auto/gcctjiedhovrdinnyabf.jpg",
            name:"Acne",
            overview:"Acne is a common condition that most of us have dealt with at some point in our lives. Acne, or acne vulgaris, is a skin condition in which the pores and hair follicles of the skin get clogged with sebum, an oily, wax-textured substance secreted from the skin glands. Though the face is the most commonly affected area, acne can occur anywhere on the body, like the chest, shoulders, and upper back.",
            symptoms:"1.Comedogenic acne (Non-inflammatory acne) 2.Non-comedogenic acne (Inflammatory acne)",
            causes:"1.Hormonal conditions 2.Genetic factors 3.Environmental factors 4.Lifestyle factors 5.Chemicals/products",
            diagnosis:"1.Testosterone total test 2.LH test 3.FSH test 4.DHEA test"
        }
        ,
        {
            name:"Addison's Disease",
            img:"https://onemg.gumlet.io/a_ignore,w_450,h_260,c_fit,q_auto,f_auto/marketing/6f4b4c2f-4e59-42a6-9ef2-d52a23676fb5.jpg",
            overview:"Addison's disease is a rare disorder characterized by inadequate production of the steroid hormones cortisol and aldosterone by the adrenal gland. Adrenal glands are located on top of your kidneys and produce many hormones for the normal functioning of the body.",
            symptoms:"1.Tiredness and fatigue  2.Loss of appetite 3.Craving for salt 4.Nausea,vomiting 5.Abdominal pain",
            causes:"1.Autoimmune thyroiditis 2.Type 1 diabetes 3.Pernicious anemia 4.Vitiligo or alopecia",
            diagonis:"1.Upper GI endoscopy 2.pH monitoring 3.Barium swallow test (esophagram) 4.Esophageal manometry 5.Electrocardiogram (ECG)"
        },
        {
            name:"Airplane Ear",
            img:"https://onemg.gumlet.io/a_ignore,w_450,h_260,c_fit,q_auto,f_auto/marketing/cc6ca064-c47b-4d42-b2ea-881c20bc50ef.jpg",
            overview:"Have you experienced ear discomfort while flying, especially while the airplane is ascending or descending? Well, this can be airplane ear which is characterized by discomfort, pain, and fullness in the ear. It is caused by sudden pressure changes during air travel.",
            symptoms:"Discomfort in the ear,Pain in the ear,Fullness in the ear,Mild to moderate hearing loss",
            causes:"At normal level, the pressure of the air is the same in the middle ear cavity and external ear canal. This equalization of pressure helps in normal functioning of the ear. ",
            diagnosis:"Otoscopy,Audiometry"
        },
        {
            name:"Allergic Conditions",
            img:"https://onemg.gumlet.io/a_ignore,w_450,h_260,c_fit,q_auto,f_auto/pf1wsqskylskmkzctql0.jpg",
            overview:"Allergies are caused when the body’s immune system responds abnormally to an external trigger known as ‘allergen’. These allergens are present in our environment but do not usually incite an immune response in other people. While in some people, the body’s immune system generates antibodies against these foreign bodies or allergens. This causes inflammation and leads to various symptoms that can range from being mild to quite severe.",
            symptoms:"Redness, itchiness, and pain in the parts of the skin exposed to the allergen. , Redness in the eyes,Puffy eyes,Excessive watering of the eyes",
            causes:"Dust,Mold,Mites,Pollen,Animal fur,Insect bites",
            diagnosis:"Prevention Of Allergy"

        },
        {
            name:"Alzheimer disease",
            img:"https://onemg.gumlet.io/a_ignore,w_450,h_260,c_fit,q_auto,f_auto/dpx3l4p0b8brtwijcqge.jpg",
            overview:"Alzheimer's disease (AD) is a slowly progressive disorder of the brain that fades away memory. It is characterized by disturbances in thinking skills, reasoning, language, and perception and, eventually, the ability to carry out simple daily tasks.",
            symptoms:"Trouble thinking of the right word,Misplaced items ,Poor judgment or it harder to make decisions,Forgetting about recent conversations or events,Hesitant to try new things ",
            causes:" Cholinergic hypothesis, Amyloid hypothesis ,Tau hypothesis",
            diagnosis:" Past medical history and current health status:, Changes in the behavior and personality of the patient, Medical tests"

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
export default A;