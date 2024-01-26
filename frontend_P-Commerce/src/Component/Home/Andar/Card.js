import { Button } from "@mui/material";
import { Card } from "react-bootstrap";
import { Input } from "./Input";
import "./card.css";

export default function Sabkuch() {
  return (
    <div className="top">
      {/* <div className="carousel">
        <img src="https://alumni.mnit.ac.in/assets/images/alumniaffairs.JPG" alt="alumni" />
      </div> */}
      <Card className="GFL-card">
        <Card.Body className="GFL-body">
          <Card.Title className="GFL-title">
            Join MNIT JAA
          </Card.Title>
          <Button
            className="GFL"
            variant="primary"
            style={{ backgroundColor: "#0d6efd" }}
          ><a href="" className="text-hai">
            CONNECT WITH GOOGLE
          </a>            
          </Button>
          <Button
            className="GFL"
            variant="primary"
            style={{ backgroundColor: "#0dcaf0", color: "black" }}
          > <a href="https://www.facebook.com/yourwebsite" className="text-hai">
            CONNECT WITH FACEBOOK
          </a>            
          </Button>
          <Button
            className="GFL"
            variant="primary"
            style={{ backgroundColor: "#ffc107", color: "black" }}
          ><a href="https://www.linkedin.com/feed/"  className="text-hai">
            CONNECT WITH LINKEDIN
          </a>            
          </Button>
          <Input />
        </Card.Body>
      </Card>
    </div>
  );
}
