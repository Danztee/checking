import { Link } from "react-router-dom";

const CustomLink = ({ href, children, onClick }) => {
  return (
    <div>
      <Link to={href} onClick={onClick}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
