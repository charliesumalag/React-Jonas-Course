import './App.css';
import './challengeone.css';
import React from "react";
import PizzaList from './data.js';




function App() {
  return (
    // <div className="container">
    //   <Header />
    //   <Menu/>
    // </div>
    // Challenge #1: Profile Card version 1
    <ChallengeOne img='avatar.jpg' />
  )
}


// Components
function ChallengeOne(props) {
  return (
    <div className='card'>
      <Avatar img={props.img} />

      <div className='data'>
        <h1>Charlie Sumalag</h1>
        <Intro text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum libero ipsam, omnis, aut molestias nihil vitae in obcaecati soluta recusandae quibusdam quae! Maiores voluptates quidem dolores officiis ea dolore.' />
        <Skills skills={['html', 'css' ,'javascript', 'php' ,'laravel' ,'react' , 'nextjs']}/>
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <div className='avatar'>
      <img src={props.img} alt="" className='' />
    </div>
  )
}
function Intro(props) {
  return (
    <p>{props.text}</p>
  )
}
function Skills({skills}) {
  return (
    <div className='skill-list'>
      {skills.map(skills => (
        <p className='skill skillbg'>{skills}</p>
      ))}
    </div>
)
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {PizzaList.map(pizza => {
        return ( <Pizza name={pizza.name} ingredient={pizza.ingredients} photoName= {pizza.photoName} price={pizza.price} /> );
    })}
  </main>
  )
}
function Pizza(props) {
    return (
      <div>
        <img src={props.photoName} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <Footer />
      </div>
  )
}

function Header() {
  return (
    <header className='header footer'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("we're currently open!")
  // }else{
  //   alert("Sorry we're closed");
  // }

  return <footer className='footer'>{new Date().toLocaleTimeString()}. We're currently open!</footer>
}

export default App
