export default function InputDiv({ appState, label, inputType, data, setData}){    
    return (
        <div className="InputDiv">
            <label>{label}</label>
            {": "}
            <p
                style={{display: appState === 'edit' ? "none" : "inline"}}
            
            >{data}</p>
            <input 
                style={{display: appState === 'edit' ? "inline" : "none"}}
                type={inputType} 
                value={data} 
                onChange={(e) => setData(e.target.value)}
            />
        </div>
    )
}