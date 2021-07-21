export function FormInput(props) {
    return (
        <div className={props.className}>
            <label for={props.forAndName} id={props.labelId}>{props.labelName}</label>
            <input type={props.type} id={props.inputId} name={props.forAndName} autocomplete={props.autocomplete} readonly={props.readonly} required={props.required}></input>
        </div>
    )
}