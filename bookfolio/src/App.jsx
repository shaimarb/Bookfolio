import { useEffect } from "react";
import BookLayout from "./components/BookLayout.jsx";
import Cover from "./pages/Cover.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chapters = [
    { id: "cover", label: "Cover" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <BookLayout chapters={chapters}>
      <Cover id="cover" pageNumber="i" />
      <About id="about" chapter="Chapter 1" pageNumber="1" />
      <Projects id="projects" chapter="Chapter 2" pageNumber="2" />
      <Experience id="experience" chapter="Chapter 3" pageNumber="3" />
      <Contact id="contact" chapter="Final Page" pageNumber="iv" />
    </BookLayout>
  );
}
