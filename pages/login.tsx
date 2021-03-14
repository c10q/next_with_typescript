import {Button, Card, Container, Form} from "react-bootstrap";


export default function Login() {
    return (
        <Form className="p-3">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password"/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button className="float-right" variant="dark" type="submit">
                Submit
            </Button>
        </Form>

    );
}