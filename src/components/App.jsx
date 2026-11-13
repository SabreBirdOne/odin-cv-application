import { useState, Fragment } from "react";
import "../styles/App.css";
import "../styles/Sections.css";
import "../styles/InputDiv.css";

import StateButton from "./StateButton";
import GeneralInfo from "./GeneralInfo";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";

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
        <EducationSection appState = {appState} />
        <WorkSection appState = {appState} />

    </div>)
}