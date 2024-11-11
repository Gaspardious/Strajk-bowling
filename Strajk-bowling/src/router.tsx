import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home"
import Confirmation from "./Pages/Confirmation/Confirmation"
import Booking from "./Pages/Booking/Booking";




const router = createBrowserRouter ([
    {
      path: '/',
      element: <App />,
      children: [
      { path: '/', element: <Home />, index: true },
      { path: '/booking', element: <Booking />, index: true },
      { path: '/confirmation', element: <Confirmation /> },
    ]
    },
    ]);
    
    export default router;