import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./ViewComments.css";

function ViewComments() {
  return (
    <div className="viewPageContainer">
      <h1 className="userName">!..User Name..!</h1>
      <Button variant="primary" className="newCommentBtn">
        Block level button
      </Button>
      <br></br>
      <br></br>

      <div className="commentContainer" id="0">
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>Comment 1</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" className="editBtn">
              Edit
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ViewComments;
