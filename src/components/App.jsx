import { useState, Fragment } from "react";
import "../styles/App.css"
import StateButton from "./StateButton";
import GeneralInfo from "./GeneralInfo";

export default function App() {
    const [appState, setAppState] = useState('edit');
    // states: edit, view

    const handleStateButton = (e) => {
        setAppState(appState === 'edit' ? 'view' : 'edit');
    }

    return (
    <div className="app">
        <h1>ODIN PROJECT: CV Generator</h1>

        <StateButton 
            appState = {appState} 
            onClickHandler = {handleStateButton}
        />
        <GeneralInfo appState = {appState} />
        

        <section className="education">
            <h2>Education</h2>
        </section>

        <section className="workExperience">
            <h2>Work Experience</h2>
        </section> 
    </div>)
}