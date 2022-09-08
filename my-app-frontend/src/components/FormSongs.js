import React, {useState} from 'react'


function Form({addNewSong}){
    const [name, setName] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        fetch('http://localhost:9393/songs/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
  