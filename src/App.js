import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";

/**
             1-Header
                -logo
                -Cart
                -Itemlist(right side)
             2-Body
                -SearchBar
                -Restaurantlist
                    -Restaurant Card
                        -Image
                        -Name
                        -Rating
                        -Cuisins
             3-Footer
                -links
                -copyrights
            **/



const Applayout= () => {
    return (
        <>
            <Header />
            <Outlet/ >
            <Footer />
        </>
        
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
                children: [{
                    path: "profile",
                    element:<Profile/>,
                }],
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>,
            },
        ]
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);