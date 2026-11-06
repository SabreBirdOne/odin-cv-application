import { useState } from "react";

export default function GeneralInfo({ appState }){
    const [name, setName] = useState('Fiona Jarnefeldt');
    const [email, setEmail] = useState('fionaj@lineark.org');
    const [phoneNumber, setPhoneNumber] = useState('+1 (012) 345 6789');

    return (
        <section className="generalInfo">
            <h2>General Information</h2>

            <p>Debug:<br />Name: {name},<br />email: {email},<br />phoneNumber: {phoneNumber}</p>
            {/* need a separate input field Component to contain and change state variables  */}
        </section>
    )
}