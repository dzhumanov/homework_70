import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import ContactForm from "./containers/ContactForm/ContactForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-new" element={<ContactForm />} />
        <Route path="edit/:id" element={<ContactForm />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
