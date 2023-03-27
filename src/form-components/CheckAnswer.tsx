import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //This is State
    const [answer, setAnswer] = useState<string>("");

    //This is Control
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function answerCorrect(): string {
        if (answer === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }

    //This is View
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>{answerCorrect()}</div>
        </div>
    );
}
