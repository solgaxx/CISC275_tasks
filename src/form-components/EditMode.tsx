import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    //This is State
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    //This is Control
    function updateInEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEditMode(event.target.checked);
    }

    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function textNotInEditMode(): string {
        if (isStudent === true) {
            return userName + " is a student";
        } else {
            return userName + " is not a student";
        }
    }

    function textInEditMode(): JSX.Element {
        if (inEditMode === true) {
            return (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={updateUserName}
                        />
                    </Form.Group>
                </div>
            );
        } else {
            return <p>{textNotInEditMode()}</p>;
        }
    }

    //This is View
    return (
        <div>
            <Form.Switch
                id="in-edit-mode"
                label="In Edit Mode?"
                checked={inEditMode}
                onChange={updateInEditMode}
            />
            <div>{textInEditMode()}</div>
        </div>
    );
}
