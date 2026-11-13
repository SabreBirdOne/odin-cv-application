export default function StateButton ({ appState, onClickHandler }){
    const buttonText = (appState === 'edit') ? 'Preview Application' : 'Edit Application';

    return (
        <button className="stateButton" onClick = {onClickHandler}>
            {buttonText}
        </button>
    )
}