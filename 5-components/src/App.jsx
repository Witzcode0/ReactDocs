import GreetingClass from "./components/ClassBase"
import CompInComp from "./components/Compincomp"
import GreetingFunc from "./components/FunctionBase"


function App() {

  return (
    <>
      <GreetingFunc firstname="brijesh" lastname="gondaliya" />
      <GreetingClass name="brijesh" />
      <CompInComp />
    </>
  )
}

export default App
