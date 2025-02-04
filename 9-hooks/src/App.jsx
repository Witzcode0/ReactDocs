// import Counter from "./components/UseState/UseStateMain"

import Navbar from "./components/UseContext/Navbar";
import { ThemeProvider } from "./components/UseContext/ThemeContextMain";

import "./styles.css";

// import DocumentTitleUpdater from "./components/UseEffect/DocumentTitleUpdater"
// import FilteredDataComponent from "./components/UseEffect/FilteredDataComponent"
// import MouseTracker from "./components/UseEffect/MouseTracker"
// import TimerComponent from "./components/UseEffect/TimerComponent"
// import FetchDataComponent from "./components/UseEffect/UseEffectMain"
// import WindowResizeTracker from "./components/UseEffect/WindowResizeTracker"




function App() {

  return (
    <>
    {/* useState */}
     {/* <Counter /> */}

    {/* useEffect */}
     {/* <FetchDataComponent /> */}
     {/* <DocumentTitleUpdater /> */}
     {/* <WindowResizeTracker /> */}
     {/* <TimerComponent /> */}
     {/* <FilteredDataComponent /> */}
     {/* <MouseTracker /> */}

     {/* useContext */}
     <ThemeProvider>
       <Navbar />
     </ThemeProvider>
     
   
    </>
  )
}

export default App
