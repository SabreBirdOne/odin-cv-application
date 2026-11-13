import InputDiv from "./InputDiv"

// { id: crypto.randomUUID(), companyName: "New Company", role: "New Role", description: "N/A", beginDate: INIT_DATE, endDate: INIT_DATE},

export default function WorkEntry ({ appState, entryData, editHandler, deleteHandler }){

    // Function Currying!
    const setEntryData = (column) => {
        return (inputValue) => {
            let edittedEntry = {...entryData};
            edittedEntry[column] = inputValue;
            editHandler(edittedEntry);
        }

    }

    const fields = [
        { 
            label: "Company Name", 
            inputType: "text", 
            data: entryData.companyName, 
            setData: setEntryData("companyName")
        },
        { 
            label: "Role", 
            inputType: "text", 
            data: entryData.role, 
            setData: setEntryData("role")
        },
        {
            label: "Description", 
            inputType: "text", 
            data: entryData.description, 
            setData: setEntryData("description")
        },
        { 
            label: "From date", 
            inputType: "date", 
            data: entryData.beginDate, 
            setData: setEntryData("beginDate")
        },
        {
            label: "To date", 
            inputType: "date", 
            data: entryData.endDate,
            setData: setEntryData("endDate")
        }
    ]

    return (
        <div className="workEntry">
            { fields.map((field) => <InputDiv key={field.label} appState={appState} {...field}/>)}
            <button 
                className="deleteEntryButton"
                style={{display: appState === 'edit' ? "inline" : "none"}}
                onClick={()=>{deleteHandler(entryData.id)}}
            >
                Delete Entry
            </button>
        </div>
    )
}