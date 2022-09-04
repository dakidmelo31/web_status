import { useState, useRef, useEffect } from "react";
import {Jumbotron, Container, Button} from 'react-bootstrap';
import { useSwipeable } from "react-swipeable";
import anime from 'animejs/lib/anime.es.js';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import './App.css';
import { map } from "jquery";

var toggle = false;
var status = true;

const rightSwitch = ()=>{
  alert("move to right");
}

const leftSwitch = ()=>{
  alert("move to left");
}

let replyOpened = false;
const openReply = (valu) =>{
  alert("clicked")
//   replyOpened = !replyOpened;
// if(replyOpened){
//   anime({
//     targets: ".replyForm",
//     translateY: -200,
//     duration: 2000,
//   })
// }
// else{
//   anime({
//     targets: ".replyForm",
//     translateY: 0,
//     duration: 2000,
//   })
  
// }

}



// const [statusData, updateData] = useState();
const toggleStatus= (value)=>{
  status = !status;
  var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 2000
  })


if(status){
    anime({
      targets: ".status-jumbotron, #hideToggle",
      translateX: -400,
      opacity: 0.0,
      translateY: -400,
      duration: 1200,
    });

  }
  else{
    anime({
      targets: ".status-jumbotron, #hideToggle",
      opacity: 1.0,
      translateX: 0,
      translateY: 0,
      duration: 1600,
    })

  }
};

const toggleMenu =(event, val)=>{
  event.preventDefault();
  toggle = !toggle;
  if(toggle){
    anime({
      targets: ".navbar-vertical a",
      translateX: 10,

      duration: 1500,
      delay: anime.stagger(100)
    });
    anime({
      targets: ".navbar-vertical",
      translateX: 160
    });

  }
  else{
    anime({
      targets: ".navbar-vertical",
      translateX: -160
    });    
    anime({
      targets: ".navbar-vertical a",
      translateX: -100,
      duration: 1500,
      delay: anime.stagger(100)
    });
  }
}
var another = "another change to code";
var currentIndex = 0;
const openStatus = (event,number)=>{
  event.preventDefault();

  alert(number)
  // const test = anime({
  //   targets: "#toggle",
  //   translateX: 250
  // });
  };

  const list = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
const count = [ image1, image2, image3];
  const handleSwipe = (details) =>{
    alert(details);
  }
  anime({
    targets: ".swipeUp",
    translateY: 50,
  delay: function(el, i) { return i * 100; },
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine' })
function App() {

    
  return (
    <div className='page main'>
      <div className='col-12 bg-blue p-4 text-big'>


<div className="status-jumbotron" >

  <div className="replyForm">
    <input className="replyInput" type="text" />
  </div>
  
<div className="mainStatuses">
{count.map((e, index)=>{
  let secondClass = "screen" + index;
    return   <img className={"screen " + secondClass} src={e} />
    

  })}
</div>
<div className="count" id="thumb-count">
{count.map((e,i)=>{
  if(currentIndex == i){
    return <div className="currentThumb status-thumbs"></div>;
  }
  return <div className="status-thumbs"></div>
})}</div>

<div className="swipeUp" onClick={openReply}>
  <i className="fas fa-chevron-up"onClick={openReply}></i>
  <span onClick={openReply}>Reply</span>
</div>
  <div className="controls">
    <div className="left-control" onClick={leftSwitch}></div>
    <div className="right-control" onClick={rightSwitch}></div>
  </div>
</div>


        <a href="#" id="toggle" onClick={event => toggleMenu(event, toggle)}>
        <i className="fas fa-bars"></i>
        </a>
        <a href="#" id="hideToggle" onClick={event => toggleStatus(event,-1)}>
        <i className="fas fa-close"></i>
        </a>

        <div className="navBar navbar-vertical">
          <a href="#" className="active-btn">Home</a>
          <a href="#">titles</a>
          <a href="#">Status</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
        </div>

        <div className="main">
          <form>
            <div className="search-form">
              <input type="search" required placeholder="Search" /> 
            </div>
          </form>
          
              <div className="filters">
                <a href="#" id="filter">
                <i class="fas fa-filter"></i>
                </a>
              </div>


              <div className="status-thumbnails d-flex flex-wrap">

                <div className="thumbnails">

                  



                {list.map((e) =>{
                  return <div className="thumb" onClick={event =>toggleStatus(event, Math.floor(Math.random() * 10))} >
                    <img src={e} />
                    <div className="thumb-body">
                      <p className="thumb-title">Business Name</p>
                      <div className="profile-row">
                      <img src={image2} className="profile" />
                      <div>{Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)}</div>
                      </div>                    </div>
                  </div>
                  })}
                  
                
                  


                  
                </div>

              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
