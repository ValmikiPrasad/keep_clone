import React, { useState } from "react";
const CreateNote=(props)=>{
    const[info,setInfo]=useState({
        title:"",
        content:""
    })
    const inputEvent=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInfo((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        })
    }
    const addItem=()=>{
        props.notepass(info);
        setInfo({
            title:"",
        content:""
        })
    }
    const[expand,setExpand]=useState(false);
    const expandss=()=>{
        setExpand(true);
    }
    return(<>
        <div className="main_div">
            <div className="main_div1">
                <input type="text" name="title" onChange={inputEvent} value={info.title} onClick={expandss} placeholder="title"/>
                <hr/> 
                {
                    expand?
                    <textarea rows="" name="content" onChange={inputEvent} value={info.content} column="" placeholder="write a note"/>:null}
                {
                    expand?
                    <button className="btn1" onClick={addItem}>+</button>:null
                }
               
            
            </div>
        </div>
    </>
    )
}
export default CreateNote;