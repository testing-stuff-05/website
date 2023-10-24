import { Nav } from "react-bootstrap";
import { Link as LinkScroll } from "react-scroll";

const navItemStyle = {
  textDecoration: "none",
  color: "inherit",
};

export default function NavbarElement(props) {
  return (
    <Nav.Item>
      <LinkScroll
        style={navItemStyle}
        to={props.reference}    
        spy={true}
        smooth={true}
        offset={-100}
        duration={0}
      >
        <Nav.Link>{props.linkText}</Nav.Link>
        {/* <span className="link-text">{props.linkText}</span> */}
      </LinkScroll>
    </Nav.Item>
  );
}
