
export default function(props) {
    const styles = {backgroundColor: props.isHeld? "#59E391" : "white" }
    return(
        <button 
            onClick={()=> (props.hold(props.id))} 
            style={styles} >{props.value}
        </button>
    )
}