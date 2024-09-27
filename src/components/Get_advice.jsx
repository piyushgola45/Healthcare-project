import { useContext, useState } from "react";
import { Common_things } from "../store/store";
import { useRef } from "react";
function Get_advice() {
    let bp = useRef();
    let sugar = useRef();
    let weight = useRef();
    let height = useRef();
    function calculateBMI(weight, height) {
        return weight / ((height / 100) ** 2); // Convert height to meters
    }
    
    const [s,sets] = useState("");
    const get_advice_result = () => {
        // console.log(bp.current.value);
        let suggestions ="";
        if (bp.current.value && sugar.current.value && weight.current.value && height.current.value) {
            if (bp.current.value >= 130 && bp.current.value <= 139) {
                suggestions += "Your blood pressure is slightly elevated. Increase intake of fruits and vegetables for better blood pressure control.\n";
            } else if (bp.current.value >= 140) {
                suggestions += "Your blood pressure is high. Please consult a doctor for proper medication and dietary recommendations.\n";
            } else if (bp.current.value < 90) {
                suggestions += "Your blood pressure is low. Ensure you are well-hydrated and consume adequate electrolytes.\n";
            }

            if (sugar.current.value >= 140) {
                suggestions += "Your sugar level is high. Limit intake of sugary foods and beverages, and focus on complex carbohydrates.\n";
            } else if (sugar.current.value <= 70) {
                suggestions += "Your sugar level is low. Consume small snacks with carbohydrates and proteins to raise blood sugar levels.\n";
            }

            const bmi = calculateBMI(weight.current.value, height.current.value);
            if (bmi >= 25) {
                suggestions += "Your BMI indicates you are overweight. Increase physical activity and consider reducing calorie intake.\n";
            } else if (bmi < 18.5) {
                suggestions += "Your BMI indicates you are underweight. Focus on consuming nutrient-dense foods and consider strength training exercises.\n";
            }


            if (suggestions == "") {
                suggestions = "Your health seems to be good. Keep up the good work!\n";
            }
            suggestions += "Ensure you consume an adequate amount of protein for muscle repair and growth.\n";
            suggestions += "Include calcium-rich foods such as milk, yogurt, cheese, spinach, and almonds in your diet for strong bones and teeth.\n";
            bp.current.value = "";
            sugar.current.value = "";
            weight.current.value = "";
            height.current.value = "";
            sets(suggestions);
            setadvice("suggestions");
        }
        else {
            alert("Enter ALL Details");
        }
    }
    const [advice, setadvice] = useState("No");
    return <>
        {advice == "No" &&
            <div className="container">
                <div className="row">
                    {/* <div className="col-4"></div> */}
                    <center><div className="col-md-4">
                        <div className="card" style={{ 'width': '100%' }} >
                            <div className="card-body" style={{ 'backgroundImage': "url('https://i.pinimg.com/originals/b8/23/e3/b823e38cc01fdb9278b6f7faa2feda6d.gif')", 'backgroundRepeat': 'no-repeat', 'backgroundSize': '100%',  }}>
                                <p className="card-text">
                                    <br /><br />
                                </p>
                                <center><button className="btn btn-dark" style={{ 'opacity': '0.7' }} onClick={() => {
                                    setadvice("Yes");
                                }}>Get Advice</button></center>
                                <br /><br /><br />
                            </div>
                        </div>

                    </div></center>
                </div>
            </div>
        }



        {advice == "Yes" &&
            <div className="container">
                <div className="row">
                    {/* <div className="col-4"></div> */}
                    <center><div className="col-md-4" style={{ 'backgroundColor': 'lightblue', 'borderRadius': '10px', 'backgroundRepeat': 'no-repeat', 'backgroundSize': '100%' ,'overflowX':'hidden','height':'250px'
                    }}>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            get_advice_result();
                        }}>
                            <center><h5>Enter your health details</h5></center>
                            <br />
                            <h6>Enter you Blood Pressure(mmHg)</h6>
                            <input type="text" ref={bp}></input>
                            <br /> <br />
                            <h6>Enter you sugar level(mg/dL)</h6>
                            <input type="text" ref={sugar}></input>
                            <br /> <br />
                            <h6>Enter your weight(in kg)</h6>
                            <input type="text" ref={weight}></input>
                            <br /> <br />
                            <h6>Enter your height(in cm)</h6>
                            <input type="text" ref={height}></input>
                            <br /> <br />
                            <center><button type="submit" className="btn btn-danger">Submit</button></center>
                            <br /><br />
                        </form>
                    </div></center>
                </div>
            </div>
        }


        {
            advice=="suggestions" && 
            <div className="container">
                <div className="row">
                    {/* <div className="col-4"></div> */}
                    <center><div className="col-md-4" style={{'color':'blue','fontWeight':'600','textAlign':'center',}}>
                        {s}
                        <br /><br />
                        <center><button className="btn btn-danger" onClick={()=>{
                            setadvice("No");
                        }}>Get advice again</button></center>
                    </div></center>
                </div>
            </div>
        }
    </>
}
export default Get_advice;