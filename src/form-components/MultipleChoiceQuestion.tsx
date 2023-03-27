import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    //This is State
    const [choice, setChoice] = useState<string>(options[0]);

    //This is Control
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    function optionCorrect(): string {
        if (choice === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }

    //This is View
    return (
        <div>
            <Form.Group controlId="listOfAnswers">
                <Form.Label>Answer:</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{optionCorrect()}</div>
        </div>
    );
}
