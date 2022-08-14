import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function LicenseCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.title}</Card.Title>
        <Card.Text className="purple">Technology: {props.technologyUsed}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank"className="download-button mRight-20">
          <BiLinkExternal /> &nbsp;
          {"Apply"}
        </Button>
        <Button variant="primary" href={props.link} target="_blank"className="download-button">
          <BiLinkExternal /> &nbsp;
          {"More Info"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default LicenseCard;
