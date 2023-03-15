import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface previewProps {
    currentPosition: number;
}

interface shoveBoxProps {
    myMoveBox: () => void;
}

function ShoveBoxButton(props: shoveBoxProps) {
    return (
        //<Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
        <Button onClick={props.myMoveBox}>Shove the Box</Button>
    );
}

function MoveableBox(props: previewProps): JSX.Element {
    //const [position, setPosition] = useState<number>(10);
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                //marginLeft: position + "px"
                marginLeft: props.currentPosition + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    const updatePosition = () => setPosition(4 + position);
    //const box = MoveableBox();

    return (
        <div>
            <h3>Shove Box</h3>
            {/*<span>The box is at: {box.position}</span>*/}
            <span>The box is at: {position}</span>
            <div>
                {/*<ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
    {box}*/}
                <ShoveBoxButton myMoveBox={updatePosition}></ShoveBoxButton>
                <MoveableBox currentPosition={position}></MoveableBox>
            </div>
        </div>
    );
}
