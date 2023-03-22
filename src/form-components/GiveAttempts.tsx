import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    //This is State
    const [nbAttemptsLeft, setNbAttemptsLeft] = useState<number>(3);
    const [nbAttemptsRequested, setNbAttemptsRequested] = useState<number>(0);

    //This is Control
    function updateNbAttemptsLeft(event: React.ChangeEvent<HTMLInputElement>) {
        setNbAttemptsLeft(parseInt(event.target.value));
    }

    function updateNbAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setNbAttemptsRequested(parseInt(event.target.value));
    }

    function invalidAmount(): void {
        if (!isNaN(nbAttemptsRequested)) {
            setNbAttemptsLeft(nbAttemptsLeft + nbAttemptsRequested);
        } else {
            setNbAttemptsLeft(nbAttemptsLeft);
        }
    }

    function decreaseByOne(): void {
        setNbAttemptsLeft(nbAttemptsLeft - 1);
    }

    //This is View
    return (
        <div>
            <Form.Group controlId="formAttemptsRequested">
                <Form.Label>Number of attempts requested:</Form.Label>
                <Form.Control
                    value={nbAttemptsRequested}
                    onChange={updateNbAttemptsRequested}
                    type="number"
                />
            </Form.Group>
            <Button onClick={decreaseByOne} disabled={nbAttemptsLeft === 0}>
                use
            </Button>
            <Button onClick={invalidAmount}>gain</Button>
            <span>Number of attempts left: {nbAttemptsLeft}</span>
        </div>
    );
}
