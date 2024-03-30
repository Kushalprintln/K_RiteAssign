import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Main from './Components/Main'
import Menu from './Components/Menu'

function App() {
  const [heading, setHeading] = useState('Design Team');
  const [LoadFor, setLoadFor] = useState();

  function LoadingFor() {
    if (window.innerWidth > 1000) {
      setLoadFor('desktop')
    }
    else {
      setLoadFor('phone')
    }
  }

  function windowResize() {
    window.addEventListener("resize", LoadingFor);
  }

  useEffect(() => {
    LoadingFor();
    windowResize();
    return () => {
      window.removeEventListener("resize", LoadingFor);
    };
  },[])

  return (
    <div className={styles.app}>
      {LoadFor === 'desktop' &&  <Menu changeHeading={setHeading} />}
      <Main heading={heading} loadfor={LoadFor}/>
    </div>
  )
}

export default App
