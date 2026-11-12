import { useState } from "react";
import { format } from "date-fns";

import WorkEntry from "./WorkEntry";

const INIT_DATE = format(new Date(), "yyyy-MM-dd"); 

let initialWorkData = [
    { id: crypto.randomUUID(), companyName: "New Company", role: "New Role", description: "N/A", beginDate: INIT_DATE, endDate: INIT_DATE},
]

export default function WorkSection ({ appState }) {
    const [workData, setWorkData] = useState(initialWorkData);

    const handleAddWorkData = () => {
        setWorkData([
            ...workData,
            { id: crypto.randomUUID(), companyName: "New Company", role: "New Role", description: "N/A", beginDate: INIT_DATE, endDate: INIT_DATE},
        ])
    }

    const handleEditWorkData = (edittedEntry) => {
        const newWorkData = workData.map((entry) => {
            if (entry.id === edittedEntry.id) return edittedEntry;
            return entry
        })
        
        setWorkData(newWorkData)
    }

    const handleDeleteWorkData = (idToDelete) => {
        const filteredWorkData = workData.filter((entry) => entry.id !== idToDelete);
        setWorkData(filteredWorkData);
    }
   
    return (
        <section className="workSection">
            <h2>Work Experience</h2>
            <button 
                onClick={handleAddWorkData}
                style={{display: appState === 'edit' ? "inline" : "none"}}
            >
                Add Entry
            </button>
            {workData.map((entryData) => 
                <WorkEntry 
                    key={entryData.id} 
                    appState={appState} 
                    entryData={entryData} 
                    editHandler={handleEditWorkData}
                    deleteHandler={handleDeleteWorkData}
                />)}
        </section>
    )
}