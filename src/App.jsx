// src/App.jsx
import { useState } from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";

import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import NavBar from "./components/NavBar";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailBox) => {
    newMailBox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailBox]);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <h1>Mailbox List</h1>
      <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h2>Page not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
