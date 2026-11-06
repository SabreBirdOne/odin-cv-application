import { useState, Fragment } from "react";
import "../styles/App.css"

function StateButton ({ appState, onClickHandler }){
    const buttonText = (appState === 'edit') ? 'Preview' : 'Edit';

    return (
        <button onClick = {onClickHandler}>
            {buttonText}
        </button>
    )
}

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

        <p>App State: {appState}</p>
        
        <section className="generalInfo">
            <h2>General Information</h2>
            
        </section>

        <section className="education">
            <h2>Education</h2>
        </section>

        <section className="workExperience">
            <h2>Work Experience</h2>
        </section> 
    </div>)
}