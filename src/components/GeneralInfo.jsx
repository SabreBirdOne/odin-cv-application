import "../styles/Sections.css"

import { useState } from "react";
import InputDiv from "./InputDiv";

export default function GeneralInfo({ appState }){
    const [name, setName] = useState('Fiona Jarnefeldt');
    const [email, setEmail] = useState('fionaj@lineark.org');
    const [phoneNumber, setPhoneNumber] = useState('+1 (012) 345 6789');

    const fields = [
        { 
            label: "Full Name", 
            inputType: "text", 
            data: name, 
            setData: setName
        },
        { 
            label: "Email", 
            inputType: "email", 
            data: email, 
            setData: setEmail
        },
        { 
            label: "Phone", 
            inputType: "tel", 
            data: phoneNumber, 
            setData: setPhoneNumber
        },
    ]
    return (
        <section className="generalInfo">
            <h2>General Information</h2>
            <div className="generalInfoDiv">
                { fields.map((field) => <InputDiv key={field.label} appState={appState} {...field}/>)}
            </div>
            
        </section>
    )
}