import {
  Input,
  InputGroup,
  InputGroupText,
  Button,
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import "./App.scss";
import Time from "./components/CurrentTime"


function App() {
  return (
    <div className="weather-app">
      <h1 className="head-name">
        Weather APP <h1 className="time"><Time/></h1>
      </h1>

      <InputGroup className="country-input">
        <InputGroupText>Country</InputGroupText>
        <Input />
        <Button>Search</Button>
      </InputGroup>

      <CardGroup>
        <Card body>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card body>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card body>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
