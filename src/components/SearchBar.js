import React, { Component } from "react";
import {
    Input,
    InputGroup,
    InputGroupText,
    Button,
  } from "reactstrap";
  

class SearchBar extends Component {
  render() {
    return (
      <div>
        <InputGroup className="country-input">
          <InputGroupText>Country</InputGroupText>
          <Input onChange={this.props.searchCity}
              type="text"
              placeholder="Search..."/>
          <Button onClick={this.props.showList}
              type="button"
              className="btn btn-light">Search</Button>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;
