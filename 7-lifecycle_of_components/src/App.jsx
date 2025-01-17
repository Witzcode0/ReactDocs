import AllLifecycleExample from "./components/AllLifecycle/AllLifecycleComponent"
import { MountingClassExample, MountingFunctionExample } from "./components/Mounting/MouningLifecycleComponent"
import { UnmountingClassExample, UnmountingFunctionExample } from "./components/Unmounting/UnmountingLifecycleComponent"
import { UpdatingClassExample, UpdatingFunctionExample } from "./components/Updating/UpdatingLifecycleComponent"



function App() {

  return (
    <>
      <MountingClassExample></MountingClassExample>
      <MountingFunctionExample></MountingFunctionExample>
      <hr />
      <UpdatingClassExample></UpdatingClassExample>
      <UpdatingFunctionExample></UpdatingFunctionExample>
      <hr />
      <UnmountingClassExample></UnmountingClassExample>
      <UnmountingFunctionExample></UnmountingFunctionExample>
      <hr />
      <AllLifecycleExample></AllLifecycleExample>

    </>
  )
}

export default App
