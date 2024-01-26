import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Input.css";
import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";

export function Input() {
  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Enter your Email.."
          className="input"
        />
      </InputGroup>
    </>
  );
}
