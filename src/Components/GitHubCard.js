import React from "react"
import Card from "react-bootstrap/Card"
import picture from './professa.png'
function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
            <Card.Title>Github Picture</Card.Title>
            <Card.Text>
                GitHub Picture
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard