import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import RootLayout from "./layouts/RootLayout";
import Experiences from "./routes/Experiences";
import Educations from "./routes/Educations";
import Interests from "./routes/Interests";
import Certificates from "./routes/Certificates";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";
import { createLoader } from "./loaders/create.loader";
import { contactAction } from "./actions/contact.action";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: createLoader("nav.json"),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: createLoader("about.json")
      },
      {
        path: "/experience",
        element: <Experiences />,
        loader: createLoader("experiences.json")
      },
      {
        path: "/education",
        element: <Educations />,
        loader: createLoader("educations.json")
      },
      {
        path: "/skills",
        element: <Skills />,
        loader: createLoader("skills.json")
      },
      {
        path: "/interests",
        element: <Interests />,
        loader: createLoader("interests.json")
      },
      {
        path: "/certificates",
        element: <Certificates />,
        loader: createLoader("certificates.json")
      },
      {
        path: "/contact",
        element: <Contact />,
        action: contactAction
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
