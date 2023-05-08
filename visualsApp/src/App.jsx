import './App.css'
import logo from './assets/ironhack-logo-xs.png' 
import menu from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

function App() {

return<div className='app'> 
<nav className='nav-bar'>
<img src={logo} alt='logo' />
<img src={menu} alt='menu'/>
</nav>
<header className='header'>
<h1>Say hello to <br></br> ReactJS</h1>
<br>
</br>
<p>You will learn how to <br></br>use the most popular frontend library<br>
</br>
and become a super Ninja developer. </p>
<br></br>
<a>Awesome!</a>
</header>


<footer>
  <div className='service-box'>
    <article>
      <img src={icon1} alt='icon1' />
      <h3>Declarative</h3>
      <p>React makes it painless to  create interactive UIs.</p>
    </article>
    <article>
      <img src={icon2} alt='icon2' />
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state.</p>
    </article>
    <article>
      <img src={icon3} alt='icon1' />
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the components.</p>
    </article>
    <article>
      <img   src={icon4} alt='icon1' />
      <h3>JSX</h3>
      <p>Statically-typed designed to run on modern browsers.</p>
    </article>
  </div>
</footer>
</div>
}


export default App
