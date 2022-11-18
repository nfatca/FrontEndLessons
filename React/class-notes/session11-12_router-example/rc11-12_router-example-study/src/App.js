import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

//? Link, NavLink ve Navigate componentleri declerative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapilan bir
//? componentlerdir. (Nav v.b)

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        //* nested routes
        <Route path="/paths" element={<Paths />}>
          <Route index element={<FullStack />} />
          {/* <Route path="fullstack" element={<FullStack />} /> */}
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
        //* Redirect islemler icin Navigate componenti kullanılabilir
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;