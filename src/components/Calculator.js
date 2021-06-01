import {useEffect,useState} from "react";

function Calculator() {
    const[bmi, setBMI] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    function inputHeight(e) {
        let h = e.target.value;
        setHeight(h);
    }
    function inputWeight(e) {
        let w = e.target.value;
        setWeight(w);
    }
    useEffect(() => {
        let bmi1 = (weight/(2*height))*100;
        setBMI(bmi1.toFixed(2));
    }, [height,weight]);
    return (
        <div className="App" id="app">
            <p id="height">Height (cm)</p>
            <input id="heightInput" type="number" onChange={inputHeight}></input>
            <p id="weight">Weight (kg)</p>
            <input id="weightInput" type="number" onChange={inputWeight}></input>
            <h3 id="calculate">BMI: {bmi}</h3>
        </div>
    );
}

export default Calculator
