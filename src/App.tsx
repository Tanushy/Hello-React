
import './App.css'

function Navbar() {
  return (
    <div className="bg-gray-100 p-4 mb-6 shadow-md rounded-xl">
    <nav className="flex flex-col items-center p-7 rounded-2xl">
      <h1 className="text-3xl font-bold mb-4">Aktien App</h1>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-blue-500 hover:underline">Home</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Stocks</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Portfolio</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Settings</a></li>
      </ul>
    </nav>
    </div>
  )
}

function App() {

  return (
    <>
    <header>
      <Navbar />
    </header>
      <h1>fresh start</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Tailwind Button
      </button>
    </>
  )
}

export default App
