import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mailboxExample = {
  _id: 1,
  boxSize: "Small",
  boxholder: "Alex",
};

const MailboxForm = ({ addBox }) => {
  const [boxholder, setBoxholder] = useState(mailboxExample);
  const [boxSize, setBoxSize] = useState(mailboxExample);
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
          <input
            type="text"
            value={boxholder.boxholder}
            onChange={(event) => setBoxholder(event.target.value)}
            required
          />
        </label>
        <label>
          Select a Box Size:
          <select
            value={boxSize}
            onChange={(event) => setBoxSize(event.target.value)}
            required
          >
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default MailboxForm;
