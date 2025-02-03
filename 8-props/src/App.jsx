import Greeting from "./components/Propsmain"
// import Button from "./components/Propsmain"
// import Person from "./components/Propsmain";

function App() {
  // const showAlert = () => {
  //   alert("Button clicked!");
  // };

  // const personData = [
  //   {id: "1", name: "Brijesh", age: 30, hobbies: ["reading", "painting"]},
  //   {id: "2", name: "Ravi", age: 28, hobbies: ["cooking", "dancing"]},
  // ];

  return (
    <>
    {/* <Greeting name="Brijesh"></Greeting> */}
    <Greeting name="Brijesh" age={28} />
    {/* <Greeting /> */}
    {/* <Button handleClick={showAlert} /> */}
    {/* <Person people={personData}/> */}
    </>
  )
}

export default App
