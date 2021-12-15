import React from "react";
import styled from "styled-components";

const Centered = styled.div`
  width: 320px;
  margin: 0 auto;
  margin-top: 16px;
  text-align: center;
`;

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Centered>
        {this.props.notifications.map(({ text }) => (
          <div>{text}</div>
        ))}
      </Centered>
    );
  }
}
