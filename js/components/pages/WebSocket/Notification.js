import React, { Component } from "react";
import SockJsClient from 'react-stomp';

 
class Notification extends Component {
  constructor(props) {

        console.log('con');
        super(props);

   }



  render() {
        return (
         <SockJsClient
           url = 'http://localhost:8888/zengcode-websocket/'
           topics={['/topic/greetings']}
           onConnect={console.log("Connection established!")}
           onDisconnect={console.log("Disconnected!")}
           onMessage={() => this.update()}
           debug= {true}
         />
        );
  }
}

export default Notification;