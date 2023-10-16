import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
export default function ChangeNotepad(props)
{
    function handleChange()
    {
        props.change(false)
    }
    return (
        <button onClick={handleChange} className="ChangeNote"> <FontAwesomeIcon icon={faRightLeft} /></button>
    )
}