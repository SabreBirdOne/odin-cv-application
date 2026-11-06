import { useState } from "react";
import InputDiv from "./InputDiv";

export default function GeneralInfo({ appState }){
    const [name, setName] = useState('Fiona Jarnefeldt');
    const [email, setEmail] = useState('fionaj@lineark.org');
    const [phoneNumber, setPhoneNumber] = useState('+1 (012) 345 6789');

    const fields = [
        { 
            appState: appState,
            label: "Full Name", 
            inputType: "text", 
            data: name, 
            setData: setName
        },
        { 
            appState: appState,
            label: "Email", 
            inputType: "email", 
            data: email, 
            setData: setEmail
        },
        { 
            appState: appState,
            label: "Phone", 
            inputType: "tel", 
            data: phoneNumber, 
            setData: setPhoneNumber
        },
    ]

    return (
        <section className="generalInfo">
            <h2>General Information</h2>
            { fields.map((field) => <InputDiv key={field.label} {...field}/>)}
        </section>
    )
}