import React, { memo, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom'

function ProjectCards(props) {
  const { push } = useHistory();
  const [childId, setChildId] = useState(null);
  const { showContent, description, lessDescription, uniqueId, childContent } = props

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.title}</Card.Title>
        <Card.Text className="purple">Technology: {props.technologyUsed}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }} id={`a${uniqueId}`}>
          {showContent && childContent && childId === uniqueId ? description: lessDescription}
        </Card.Text>
        <Button variant="primary" onClick={() => push('/contact')} className="download-button mRight-20">
          {"Apply"}
        </Button>
        <Button variant="primary" className="download-button" id={uniqueId} onClick={(e)=> {props.showMoreContent(e, uniqueId);setChildId(uniqueId);}}>
          {"More Info"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default memo(ProjectCards);