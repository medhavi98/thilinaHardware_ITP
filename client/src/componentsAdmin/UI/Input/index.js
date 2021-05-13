import React from "react";
import { Form } from "react-bootstrap";

/**
 * @author
 * @function Input
 **/

const Input = (props) => {
  let input = null;
  switch (props.type) {
    case "select":
      input = (
        <Form.Group>
          <div className="customized-label">
            {props.label && <Form.Label>{props.label}</Form.Label>}
          </div>
          <select
            className="form-control form-control-sm"
            value={props.value}
            onChange={props.onChange}
          >
            <option value="">{props.placeholder}</option>
            {props.options.length > 0
              ? props.options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.name}
                  </option>
                ))
              : null}
          </select>
        </Form.Group>
      );
      break;
    case "text":
    default:
      input = (
        <Form.Group>
          <div style={{ float: "left" }}>
            {props.label && <Form.Label>{props.label}</Form.Label>}
          </div>
          <Form.Control
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            {...props}
          />
          <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
        </Form.Group>
      );
    case "email":
      input = (
        <Form.Group>
          <div style={{ float: "left" }}>
            {props.label && <Form.Label>{props.label}</Form.Label>}
          </div>
          <Form.Control
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            {...props}
          />
          <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
        </Form.Group>
      );
      break;
  }

  return input;
};

export default Input;
