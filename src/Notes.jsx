import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Notes=(props)=>{
    const deleteItem=()=>{
        props.onSelect(props.id);
    }
    return(
        <>
            <div className="notes">
                <h3>{props.title}</h3>
                <br/>
                
                <p>{props.content}</p>
                {/* <button className="btn2" onClick={()=>{
                    props.onSelect(props.id)
                }}> */}
                <button className="btn2" onClick={deleteItem}>
                    <DeleteOutlineIcon/>
                </button>
            </div>
        </>
    )
}
export default Notes;