import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { useState } from "react";
import { AddUser, updateUser } from "./utils/function";
import { ToastContainer } from "react-toastify";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};
function App() {
  const [info, setInfo] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      updateUser(info);
    } else {
      AddUser(info);
    }
    setInfo(initialValues);
  };

  const editUser = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <Contacts editUser={editUser} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
