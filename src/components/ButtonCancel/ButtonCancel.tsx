import "./ButtonCancel.css"

interface Props{
    label : string,
    parentMethod : () => void
}

export const ButtonCancel = ({ label, parentMethod } : Props) => {
    return(
        <button className="button-cancel" onClick={parentMethod}>
            {label}
        </button>
    )
}