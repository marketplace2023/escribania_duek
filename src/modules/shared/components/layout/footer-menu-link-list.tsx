import { Link } from "react-router-dom";

export interface FooterMenuLinkListProps {
  title: string;
  items: { text: string; uri?: string }[];
}

const FooterMenuLinkList = ({ title, items }: FooterMenuLinkListProps) => {
  return (
    <div className="w-full px-4 first-of-type:pl-0 last-of-type:pr-0">
      <p className="text-primary text-lg font-bold">{title}</p>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.uri ? <Link to={item.uri}>{item.text}</Link> : item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenuLinkList;
