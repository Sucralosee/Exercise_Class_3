import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react"
import { useState } from "react";

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    /** usually this will cause an inite loop so it is best to not do this incase yout code breaks Code
     * code on pages will run two times
     * once to render what we want and another is to render 
     * strict mode to find any common bugs
     */ 
    useEffect(() => {
        console.log(number);
    })
    
    return(
        <>
            <Header/>
            <main>
                <h1>ex1</h1>
                <div>infinite loop</div>
                {number}
            </main>
            <Footer/>
        </>
    )
}