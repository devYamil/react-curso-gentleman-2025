import "./ButtonPS.css"

interface Props {
    label : string,
    parentMethod : () => void
}

export const ButtonPS = ({ label, parentMethod} : Props) => {
    return(
        <button className="button-personalizado" onClick={ parentMethod }>
            {label}
        </button>
    )
}