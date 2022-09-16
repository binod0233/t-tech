import React,{useState} from 'react'

const Header = () => {
    const [darkMode,setDarkMode] = useState(false)
  return (
    <div>
        <button onClick={()=>{localStorage.setItem('darkmode',!darkMode);setDarkMode(!darkMode)}}>Moon</button>
    </div>
  )
}

export default Header