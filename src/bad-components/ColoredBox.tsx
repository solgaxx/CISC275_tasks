import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface previewProps {
    currentColor: string;
}

interface changeColorProps {
    myChangeColor: () => void;
}

function ChangeColor(props: changeColorProps): JSX.Element {
    return <Button onClick={props.myChangeColor}>Next Color</Button>;
}

function ColorPreview(props: previewProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: props.currentColor,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const updateColor = () => setColorIndex((1 + colorIndex) % COLORS.length);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor myChangeColor={updateColor}></ChangeColor>
                <ColorPreview currentColor={COLORS[colorIndex]}></ColorPreview>
            </div>
        </div>
    );
}
