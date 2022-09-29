import { CustomLink } from "../index";

const CustomNavLink = ({ href, children, onClick }) => {
  //   const [classN, setClassN] = useState("");

  return (
    <CustomLink href={href} onClick={onClick}>
      {children}
    </CustomLink>
  );
};

export default CustomNavLink;
