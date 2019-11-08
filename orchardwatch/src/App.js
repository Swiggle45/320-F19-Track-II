import React from 'react';
import logo from './ow-logo.png';
import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Orchards from './Components/Orchards';
import Data from './Components/Data';
import Gallery from './Components/Gallery';
import Login from './Components/Login';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      page: ''
    };
  }

  render(){
    var page = this.pageRender();
    return (
      <div className='App'>
        <div className='Header'>
          <img src={logo} alt='OrchardWatch'></img>
        </div>
        <div className='NavBar'>
          <button onClick={() => this.setState({page: 'Home'})}>Home</button>
          <button onClick={() => this.setState({page: 'About Us'})}>About Us</button>
          <button onClick={() => this.setState({page: 'Orchards'})}>Orchards</button>
          <button onClick={() => this.setState({page: 'Data'})}>Data</button>
          <button onClick={() => this.setState({page: 'Gallery'})}>Gallery</button>
          <button onClick={() => this.setState({page: 'Login'})}>Login</button>
        </div>
        <br></br>
        <div className='body'>
          {page}
        </div>
      </div>
    );
  }

  pageRender(){
    switch(this.state.page){
      case 'Home':
        return <Home/>;
      case 'About Us':
        return <AboutUs/>
      case 'Orchards':
        return <Orchards/>
      case 'Data':
        return <Data/>
      case 'Gallery':
        return <Gallery/>;
      case 'Login':
        return <Login/>;
      default:
        return <Home/>;
    }
  }

}

export default App;
