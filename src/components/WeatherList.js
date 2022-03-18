import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

function WeatherList(props) {
  return (
    <Card>
      <CardImg alt="images" src={props.iconImg} top width="50%"/>
      <CardBody>
        <CardTitle tag="h5">{props.text}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.date}
        </CardSubtitle>
        <CardText>Max Temp: {props.maxTemp} °C</CardText>
        <CardText>Min Temp: {props.minTemp} °C</CardText>
      </CardBody>
    </Card>
  );
}

export default WeatherList;
