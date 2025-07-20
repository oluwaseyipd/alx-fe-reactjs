import { useState } from 'react'
import reactLogo from './assets/react.svg'  // optional, not used here
import viteLogo from '/vite.svg'            // optional, not used here
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0) // Not used anywhere — can be removed if not needed

  return (
    <>
      <div className="App">
        <h1>User Profile Example</h1>
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
        />
      </div>

      <Header />
      <MainContent />
      <Counter />
      <Footer />
      <WelcomeMessage />
    </>
  )
}

export default App;
