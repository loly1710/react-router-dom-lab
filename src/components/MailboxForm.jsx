import { useState } from "react";
import { useNavigate } from "react-router-dom";


const MailboxForm = ({ addBox }) => {
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox({ boxholder, boxSize });
    navigate("/mailboxes");
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Boxholder:
        </label>
        <input
          type="text"
          onChange={(event) => setBoxholder(event.target.value)}
          required
        />
        <label>
          Select a Box Size:
        </label>
        <select
          onChange={(event) => setBoxSize(event.target.value)}
          required
        >
          <option value="">Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default MailboxForm;
