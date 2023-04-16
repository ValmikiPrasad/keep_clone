import React, { useState } from "react";
import Header from "./Header";
import "./index.css";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
const App=()=>{
    const[addData,setAddData]=useState([]);
    const addNote=(dataaa)=>{
        // alert("im clicked")
     setAddData((preval)=>{
            return[
                ...preval,dataaa
            ]
        })
    }
    const onDelete=(id)=>{
    setAddData((oldData)=>{
        return oldData.filter((elem,index)=>{
            return id!==index;
        })
    })
    }
    return(
        <>
        <Header/>
        <CreateNote notepass={addNote}/>
        {
            addData.map((value,index)=>{
                return <Notes key={index}
                id={index}
                title={value.title}
                content={value.content}
                onSelect={onDelete}
                />
            })
        }
        <Footer/>
        </>
    )
}
export default App;