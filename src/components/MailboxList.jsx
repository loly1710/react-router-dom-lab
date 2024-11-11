import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <div>
      <h1>Mailbox List</h1>
      <ul>
        {props.mailboxes.map((mailboxNow) => (
          <li className="mail-box" key={mailboxNow._id}>
            <Link to={`/mailboxes/${mailboxNow._id}`}>Mailbox {mailboxNow._id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MailboxList;
