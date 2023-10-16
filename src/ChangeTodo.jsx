import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
export default function ChangeTodo(props)
{
    function handleChange()
    {
        props.change(true)
    }
    return (
        <button onClick={handleChange} className="ChangeNote"> <FontAwesomeIcon icon={faRightLeft} /></button>
    )
}