import React from "react";
import Button from "@material-ui/core/Button/index";
import TextField from "@material-ui/core/TextField/index";

export const Form = (props) => {
    return (
        <Form onSubmit={() => {}}>
            <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
             />
            <TextField
                id="password"
                name="password"
                label="Password"
                fullWidth
                type="password"
            />
            <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
            >
                Submit
            </Button>
        </Form>
    );
};
