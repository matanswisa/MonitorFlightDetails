import React , {Component} from 'react';
import socketIoClient from 'socket.io-client';
import './App.css';



class App extends Component {

  constructor(){
    super();
    this.state = {
      endpoint:'http://localhost:8080',
      data:null
    }
  }

  componentWillMount(){
    const socket = socketIoClient.connect(this.state.endpoint);
    socket.on('output',(dataFromServer)=>{
      console.log(dataFromServer);
      this.setState({data:dataFromServer.data});
    });
  }


  render() {
    return(
    <div className="App">
      <h1>
        {this.state.data}
      </h1>
    </div>
    );
  }
}

export default App;
