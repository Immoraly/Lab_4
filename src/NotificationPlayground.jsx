import React from "react";
import styled from "styled-components";

import Notifications from "./Notifications";

const Actions = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  color: #242424;
  background: white;
  text-align: center;
`;

export default class NotificationPlayground extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Notifications
          notifications={[
            { text: "Notification placeholder" },
            { text: "Info notifications" },
            { text: "Warning! Warning!" }
          ]}
        />
        <Actions>Actions placeholder</Actions>
      </>
    );
  }
}
