import { useState } from "react";
import data from "./data";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
        console.log(selected)
    }

    function handleMultipleSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);

        if (findIndexOfCurrentId === -1) {
            return cpyMultiple.push(getCurrentId);
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1);
        }

        setMultiple(cpyMultiple);
    }

    console.log(selected, multiple);

    return (
        <div className="acc-wrapper">
            <button>
                Enable Multi Selection
            </button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick={
                                enableMultiSelection
                                    ? () => handleSingleSelection(dataItem.id) :
                                    () => handleMultipleSelection(dataItem.id)
                            }
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="acc-content ">{dataItem.answer}</div>
                                )
                                : selected === dataItem.id && (
                                    <div className="acc-content ">{dataItem.answer}</div>
                                )}


                            { selected === dataItem.id ||
                                multiple.indexOf(dataItem.id) !== -1 ? (
                                <div className="content">{dataItem.answer}</div>
                            ) : null} 
                        </div>
                    ))
                ) : (
                    <div>No data found !</div>
                )}
            </div>
        </div>
    )
}