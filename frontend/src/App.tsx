import Loading from './components/Loading.tsx';
import router from './routes.ts'

import {
  RouterProvider,
} from "react-router";

function App() {

  return (
    <>
      <RouterProvider router={router}/>
      <Loading/>
    </>
  )
}

export default App
