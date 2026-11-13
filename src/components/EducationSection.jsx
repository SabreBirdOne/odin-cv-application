import { useState } from "react";
import { format } from "date-fns";

import EduEntry from "./EduEntry";

const INIT_DATE = format(new Date(), "yyyy-MM-dd"); 

let initialEduData = [
    { id: crypto.randomUUID(), schoolName: "New School", studyTitle: "New Degree", beginDate: INIT_DATE, endDate: INIT_DATE},
]

export default function EducationSection ({ appState }) {
    const [eduData, setEduData] = useState(initialEduData);

    const handleAddEduData = () => {
        setEduData([
            ...eduData,
            { id: crypto.randomUUID(), schoolName: "New School", studyTitle: "New Degree", beginDate: INIT_DATE, endDate: INIT_DATE}
        ])
    }

    const handleEditEduData = (edittedEntry) => {
        const newEduData = eduData.map((entry) => {
            if (entry.id === edittedEntry.id) return edittedEntry;
            return entry
        })
        
        setEduData(newEduData)
    }

    const handleDeleteEduData = (idToDelete) => {
        const filteredEduData = eduData.filter((entry) => entry.id !== idToDelete);
        setEduData(filteredEduData);
    }
   
    return (
        <section className="educationSection">
            <h2>Education</h2>
            {eduData.map((entryData) => 
                <EduEntry 
                    key={entryData.id} 
                    appState={appState} 
                    entryData={entryData} 
                    editHandler={handleEditEduData}
                    deleteHandler={handleDeleteEduData}
                />)}
            <button 
                className="addEntryButton"
                onClick={handleAddEduData}
                style={{display: appState === 'edit' ? "inline" : "none"}}
            >
                Add Education Experience
            </button>
        </section>
    )
}