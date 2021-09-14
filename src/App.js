import { useState } from "react"
import Alert from "./components/Alert";
import Header from "./components/Header"
import TextContiner from "./components/TextContiner"


function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (type, text) => {
    setAlert({
        type,
        msg: text 
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <div className="App">
      <Header />
      <Alert alert={alert}/>
      <TextContiner showAlert={showAlert}/>
    </div>
  );
}

export default App;
