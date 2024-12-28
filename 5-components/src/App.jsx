import GreetingClass from "./components/ClassBase"
import Bike from "./components/ClassConstructor"
import CompInComp from "./components/Compincomp"
import GreetingFunc from "./components/FunctionBase"



function App() {

  return (
    <>
      <GreetingFunc firstname="brijesh" lastname="gondaliya" />
      <GreetingClass name="brijesh" />
      <CompInComp />
      <Bike name="KTM"></Bike>
    </>
  )
}

export default App
