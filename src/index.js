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
        <Route path="/my-portfolio" component={Portfolio} />
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
          <li><Link to="/my-portfolio">Portfolio</Link></li>
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
          <li><Link to="/my-portfolio" onClick={showMenu}>Portfolio</Link></li>
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
        <div className="container-fluid intro-section">
          <h1>Ikenna Obichukwu</h1>
          <div className="container text-center">
            <img src="https://media.licdn.com/dms/image/C4D03AQGcZ380lHHLcg/profile-displayphoto-shrink_200_200/0?e=1561593600&v=beta&t=K5Kkc2MhpzeEmNc9Gj0bHDVj6YA39amWTfsk9pVjSa8" alt="" className="profile-img"/>
          </div>
          <div className="container intro-heading text-center">
            <p>Hello, my name is Ikenna and {"I'm"} a Front End Developer based in London.</p>
          </div>
        </div>
        <div className="container-fluid skills-section text-center">
          <div className="container intro-heading text-center">
            <p>As a Front End Developer, I have worked on a great number of projects in various industries and have a good understanding of HTML, CSS, Bootstrap, JavaScript, ReactJS & GIT.</p>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt=""/>
          <img src="http://www.idlewilddigital.com/sites/default/files/css3.png" alt=""/>
          <img src="http://pluspng.com/img-png/javascript-vector-png-java-script-js-logo-format-ai-213.png" alt="" id="js-logo"/>
          <img src="https://servoy.com/wp-content/uploads/icon-bootstrap.png" alt="" id="bootstrap-logo"/>
          <img src="https://www.essitco.com/wp-content/uploads/2017/05/react.png" alt=""/>
          <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" id="git-logo"/>
        </div>
        <div className="container-fluid contact-section text-center">
          <div className="container contact-details">
            <p><i>Mobile</i>: {"07861073043"}</p>
            <p><i>Email</i>: {"ikenna.ogbo@hotmail.com"}</p>
            <p id="linkedin-btn"><i><a href="https://www.linkedin.com/in/ikenna-obichukwu-359b5bb6/" target="blank">LinkedIn</a></i></p>
          </div>
        </div>
      </div>
    )
  }
};

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-page">
        <div className="container portfolio-heading text-center">
          <p>Here are some examples of my work ranging from personal projects to professional work.</p>
        </div>
        <div className="portfolio-sections">
          <a href="https://ikenna783.github.io/Todolist/" target="blank"><img src={require('./img/TodoList-ScreenShot.png')} alt="" className="screen-shots"/></a>
          <div className="container project-desciption text-center">
            <p>This Todolist app is one of my personal projects built using React. It allows you to manually add a list of items, delete each item, delete selected items or delete all.</p>
          </div>
        </div>
        <div className="portfolio-sections">
          <a href="https://ikenna783.github.io/Phonepage/" target="blank"><img src={require('./img/PhonePage-ScreenShot.png')} alt="" className="screen-shots"/></a>
          <div className="container project-desciption text-center">
            <p>Phone selection user interface with option to change iPhone color choice and capacity.</p>
          </div>
        </div>
        <div className="portfolio-sections">
          <a href="https://portal.teacherhq.co.uk/" target="blank"><img src={require('./img/TeacherHQ-ScreenShot.png')} alt="" className="screen-shots"/></a>
          <div className="container project-desciption text-center">
            <p>Here is some work I did on the user interface for the TeacherHQ Company Website.</p>
          </div>
        </div>
        <div className="portfolio-sections">
          <a href="https://www.investcloud.com" target="blank"><img src={require('./img/InvestCloud-ScreenShot.png')} alt="" className="screen-shots"/></a>
          <div className="container project-desciption text-center">
            <p>At InvestCloud, I worked mainly on the internal platforms. My tasks involved styling the user interface, software testing and data visualization using JavaScript & React.js</p>
          </div>
        </div>
        <div className="portfolio-sections">
          <a href="http://fincode.co.uk/" target="blank"><img src={require('./img/FinCode-ScreenShot.png')} alt="" className="screen-shots"/></a>
          <div className="container project-desciption text-center">
            <p>At FinCode, {"I'm"} currently working on the user interfaces for internal platforms. I also work with JavaScript and React.js for data visualization and also for building single page applications for each software product.</p>
          </div>
        </div>
      </div>
    )
  }
};

render(<App />, document.getElementById('root'));
