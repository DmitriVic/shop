import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { Home } from './Pages/Home'
import { Authorization } from './Pages/Authorization'
import { Layout } from './Layout';


// const router = createBrowserRouter(createRoutesFromElements(
// 	<Route path="/" element={<Layout/>}>
// 				<Route index element={<Home/>}/>
// 				<Route path="/authorization" element={<Authorization/>}/>
// 	</Route>
// ))
const router = createBrowserRouter(
	createRoutesFromElements(
	  <Route
		 path="/"
		 element={<Layout/> }

	  >

			<Route index element={<Home />} />
			<Route
			  path="authorization"
			  element={<Authorization />}
			
			/>
			
		 </Route>

	)
 );

function App() {
 

  return (
    < >
      <RouterProvider router={router}/>
    </>
  )
}

export default App


