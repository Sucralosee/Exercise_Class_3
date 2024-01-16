import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function ExampleFour() {
    
    //number is a variable on the left side that is used to display or grab value from useState
    //setNumber is used to update the useState
    const [number, setNumber] = useState(0); //intially starts number starts at 0
    const [color, setColor] = useState("gray"); //color starts at string of gray

    const [trigger, setTrigger] = useState(false); //boolean set to false

    const HandleChange = () => {
        if(number > 2){ //
            setColor("orange"); 
        }
        console.log(number);
    }
 
    useEffect(() => {
        var interval;

        if(trigger){ //this is default true 
            interval = setInterval(() => {
                HandleChange();
                setTrigger(false);
            }, 300) //after 3 seconds (3000) then it will do the conosole log
        } 

        console.log(number);
        console.log(trigger);

        return () => clearInterval(interval); //clearing the interval so it doesnt get into a loop
    }, [trigger]) 

    return(
        <>
            <Header/>
            <main>
                <button onClick={() => { //increase the number by 1 from 0 
                    setNumber(number + 1)
                    setTrigger(true) //changes the boolean from false to true
                }}> 
                    AddNumber 
                </button>
                <h1 style={{color: color}}>Changing the text color</h1>

                { //these check number > 1 if true it shows if false then nothing
                    number > 1 && <div style={{
                        backgroundColor:`${color}`, //could also just be color
                        lineHeight: 10, 
                        }}>
                            box
                        </div>
                }
            </main>
            <Footer/>
        </>
    )
}