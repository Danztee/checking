import { CustomLink } from "../index";

const CustomNavLink = ({ href, children }) => {
  //   const [classN, setClassN] = useState("");

  return <CustomLink href={href}>{children}</CustomLink>;
};

export default CustomNavLink;
