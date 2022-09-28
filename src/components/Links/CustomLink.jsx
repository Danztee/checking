import { Link } from "react-router-dom";

const CustomLink = ({ href, children }) => {
  return (
    <div>
      <Link to={href}>{children}</Link>
    </div>
  );
};

export default CustomLink;
