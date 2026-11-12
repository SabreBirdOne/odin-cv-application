import InputDiv from "./InputDiv"

export default function EduEntry ({ appState, entryData, editHandler, deleteHandler }){

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
            label: "School Name", 
            inputType: "text", 
            data: entryData.schoolName, 
            setData: setEntryData("schoolName")
        },
        { 
            label: "Title of Study", 
            inputType: "text", 
            data: entryData.studyTitle, 
            setData: setEntryData("studyTitle")
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
        <div className="eduEntry">
            { fields.map((field) => <InputDiv key={field.label} appState={appState} {...field}/>)}
            <button 
                style={{display: appState === 'edit' ? "inline" : "none"}}
                onClick={()=>{deleteHandler(entryData.id)}}
            >
                Delete Entry
            </button>
        </div>
    )
}