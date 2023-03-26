import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const COLORS = [
    "orange",
    "brown",
    "yellow",
    "cyan",
    "magenta",
    "purple",
    "green",
    "blue"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    //This is State
    const [chosenColor, setChosenColor] = useState<string>(DEFAULT_COLOR);

    //This is Control
    function updateChosenColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    //This is View
    return (
        <div>
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateChosenColor}
                id="color-check-orange"
                label="Orange"
                value="orange"
                checked={chosenColor === "orange"}
                style={{ backgroundColor: "orange" }}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateChosenColor}
                id="color-check-brown"
                label="Brown"
                value="brown"
                checked={chosenColor === "brown"}
                style={{ backgroundColor: "brown" }}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateChosenColor}
                id="color-check-yellow"
                label="Yellow"
                value="yellow"
                checked={chosenColor === "yellow"}
                style={{ backgroundColor: "yellow" }}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateChosenColor}
                id="color-check-cyan"
                label="Cyan"
                value="cyan"
                checked={chosenColor === "cyan"}
                style={{ backgroundColor: "cyan" }}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateChosenColor}
                id="color-check-magenta"
                label="Magenta"
                value="magenta"
                checked={chosenColor === "magenta"}
                style={{ backgroundColor: "magenta" }}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateChosenColor}
                id="color-check-purple"
                label="Purple"
                value="purple"
                checked={chosenColor === "purple"}
                style={{ backgroundColor: "purple" }}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateChosenColor}
                id="color-check-green"
                label="Green"
                value="green"
                checked={chosenColor === "green"}
                style={{ backgroundColor: "green" }}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateChosenColor}
                id="color-check-blue"
                label="Blue"
                value="blue"
                checked={chosenColor === "blue"}
                style={{ backgroundColor: "blue" }}
            />
            <div>You have chosen: </div>
            <span
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                {chosenColor}.
            </span>
        </div>
    );
}
