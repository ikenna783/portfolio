import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path="/" component={Navigation} />
        <Route exact path="/portfolio" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

class Navigation extends Component {
  render() {
    function showMenu() {
      let mobile = document.getElementById('mobile-links');
      if (mobile.style.display === 'none') {
        mobile.style.display = 'block';
      } else {
        mobile.style.display = 'none';
      }
    };
    return (
      <div>
        <div className="container text-center navigation hidden-sm hidden-xs">
        <ul className="links">
          <li><Link to="/portfolio">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="container hamburger-menu hidden-md hidden-lg hidden-xl">
        <div id="navicon" onClick={showMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="container text-center navigation hidden-md hidden-lg hidden-xl">
        <ul id="mobile-links">
          <li><Link to="/portfolio" onClick={showMenu}>Home</Link></li>
          <li><Link to="/skills" onClick={showMenu}>Skills</Link></li>
          <li><Link to="/work" onClick={showMenu}>Work</Link></li>
          <li><Link to="/contact" onClick={showMenu}>Contact</Link></li>
        </ul>
      </div>
    </div>
    )
  }
};

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container name text-center">
          <h1>Ikenna Obichukwu</h1>
        </div>
        <div className="container text-center">
          <img src="https://media.licdn.com/dms/image/C4D03AQGcZ380lHHLcg/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=K6iu7cAHmHCDwMOQBsh8YvP1z7s3ErCJUfS78y2BfP0" alt="" className="profile-img"/>
        </div>
        <div className="container intro-heading text-center">
          <p>Hi, my name is Ikenna and {"I'm"} a Front End Developer based in London.</p>
        </div>
      </div>
    )
  }
};

class Skills extends Component {
  render() {
    return (
      <div>
      <div className="container intro-heading text-center">
        <p>As a Front End Developer, I have worked on various projects using the technologies listed below.</p>
      </div>
      <div className="container skills-section text-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt=""/>
        <img src="http://www.idlewilddigital.com/sites/default/files/css3.png" alt=""/>
        <img src="http://pluspng.com/img-png/javascript-vector-png-java-script-js-logo-format-ai-213.png" alt="" id="js-logo"/>
        <img src="https://i1.wp.com/jfdi.info/wp-content/uploads/bootstrap.png?ssl=1" alt="" id="bootstrap-logo"/>
          <img src="https://www.essitco.com/wp-content/uploads/2017/05/react.png" alt=""/>
        <img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" alt="" id="git-logo"/>
      </div>
      </div>
    )
  }
};

class Work extends Component {
  render() {
    return (
      <div>
        <div className="container intro-heading text-center">
          <p>Here are some examples of my work.</p>
        </div>
        <div className="container projects text-center">
          <div className="a col-lg-3 col-md-6">
            <a href="https://ikenna783.github.io/WordCount/" target="blank"><img src={require('./img/Writing.jpg')} alt="" /></a><p>Word Counter</p>
          </div>
          {/*<div className="a col-lg-3 col-md-6">
            <a href="https://ikenna783.github.io/Calculator/" target="blank"><img src={require('./img/Calculator.jpg')} alt="" /></a><p>Calculator</p>
          </div>*/}
          <div className="a col-lg-3 col-md-6">
            <a href="https://ikenna783.github.io/TodoList/" target="blank"><img src={require('./img/pen-paper.png')} alt="" /></a><p>Todo List</p>
          </div>
          <div className="a col-lg-3 col-md-6">
            <a href="https://ikenna783.github.io/Phonepage/" target="blank"><img src={require('./img/Gold-iPhone.png')} alt="" /></a><p>Phone Page</p>
          </div>
          <div className="a col-lg-3 col-md-6">
            <a href="https://portal.teacherhq.co.uk/" target="blank"><img src={require('./img/TeacherHQ.jpg')} alt=""/></a><p>TeacherHQ Website</p>
          </div>
          {/*<div className="a col-lg-3 col-md-6">
            <a href="https://www.investcloud.com/Membership/Apps/v4IcHomePage_WF_App.aspx?ReturnURL=%2f#!/w/v4ichomepagewfapp?s=v4homeholderapp" target="blank"><img src={require('./img/InvestCloud.jpg')} alt=""/></a><p>Portals</p>
          </div>*/}
          {/*<div className="a col-lg-3 col-md-6">
            <a href="http://www.ikstellar.com" target="blank"><img src={require('./img/Stellar-Logo.jpg')} alt="" /></a><p>Blog</p>
          </div>*/}
          {/*<div className="a col-lg-3 col-md-6">
            <img src={require('')} alt="" /><p>Astra</p>
          </div>*/}
        </div>
      </div>
    )
  }
};

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <img src="https://media.licdn.com/dms/image/C4D03AQGcZ380lHHLcg/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=K6iu7cAHmHCDwMOQBsh8YvP1z7s3ErCJUfS78y2BfP0" alt="" className="profile-img"/>
        </div>
        <div className="container contact-details">
          <p><i>Mobile</i>: {"07861073043"}</p>
          <p><i>Email</i>: {"Ikenna.ogbo@hotmail.com"}</p>
          <p><i><a href="https://www.linkedin.com/in/ikenna-obichukwu-359b5bb6/" target="blank">LinkedIn</a></i></p>
        </div>
      </div>
    )
  }
};

render(<App />, document.getElementById('root'));
