import React from 'react'
import {Button, Form} from "react-bootstrap";

const Search = ({handleClick, getValue, value, sortPosts}) => {
    return (
        <Form className="d-flex mt-3 mb-3">
            <Form.Control
                type="text"
                placeholder="Enter post title"
                className="me-2"
                style={{ width: '100%' }}
                value={value}
                onChange={getValue}
            />
            <Button onClick={handleClick} className="me-2" variant="outline-success">X</Button>
            <Button onClick={sortPosts} className="me-2" variant="outline-success">Sort</Button>
        </Form>
    );
};

export default Search;