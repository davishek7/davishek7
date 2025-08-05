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
import { skillLoader } from "./loaders/skill.loader";
import { certificateLoader } from "./loaders/certificate.loader";
import { educationLoader } from "./loaders/education.loader"
import { homeLoader } from "./loaders/home.loader"
import { experienceLoader } from "./loaders/experience.loader"
import { interestLoader } from "./loaders/interest.loader"
import { navLoader } from "./loaders/nav.loader";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: navLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader
      },
      {
        path: "/experience",
        element: <Experiences />,
        loader: experienceLoader
      },
      {
        path: "/education",
        element: <Educations />,
        loader: educationLoader
      },
      {
        path: "/skills",
        element: <Skills />,
        loader: skillLoader
      },
      {
        path: "/interests",
        element: <Interests />,
        loader: interestLoader
      },
      {
        path: "/certificates",
        element: <Certificates />,
        loader: certificateLoader
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
