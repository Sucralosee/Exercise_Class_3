import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree() {

    const [number, setNumber] = useState(0);

    const colors = ["red", "orange", "yellow", "green", "blue", "violet"]

    useEffect(() => {
        /**
         * 6 > colors.length = 6-1 = 5
        */
        if(number > colors.length - 1){
            //or number >= colors.length or 
            setNumber(0);
            console.log("changing number vale: " + colors[0]);
        }else{
            console.log("changing number value: " + colors[number]);
        }
    }, [number])

    return(
        <>
            <Header/>
            <main>
                <h1> Ex3 </h1>

                <button 
                    style={{backgroundColor:colors[number]}}
                    onClick={() => setNumber(number + 1)}>
                        increment number
                    </button>
                    {number}
            </main>
            <Footer/>
        </>
    )
}