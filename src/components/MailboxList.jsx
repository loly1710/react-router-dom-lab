import { Link } from "react-router-dom";
//import './MailboxList.css';

const MailboxList = (props) => {
  return (
    <div>
      <h2>Mailbox List</h2>
      <ul>
        {props.mailboxes.map((mailboxNow) => (
          <li key={mailboxNow.name}>
            <Link to={`/mailboxes/${mailboxNow._id}`}>{mailboxNow.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MailboxList;
