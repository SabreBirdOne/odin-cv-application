export default function StateButton ({ appState, onClickHandler }){
    const buttonText = (appState === 'edit') ? 'Preview' : 'Edit';

    return (
        <button onClick = {onClickHandler}>
            {buttonText}
        </button>
    )
}