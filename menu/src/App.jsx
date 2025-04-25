import './App.css'

function App() {

  return (
    <div>
      <Pizza/>
    </div>
  )
}

function Pizza() {
    return (
      <div>
        <img src="pizzas/spinaci.jpg" alt="" />
        <h2>Pizza Spinacci</h2>
        <p>Tomtato, mozarella, spinach, and ricotta cheese</p>
      </div>
  )
}

export default App
