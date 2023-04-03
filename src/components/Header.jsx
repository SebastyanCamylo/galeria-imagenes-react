import Badge from "react-bootstrap/Badge";

const Header = (props) => {
  return (
    <h1 className="text-center">
      <Badge pill bg="dark">
        {props.title}
      </Badge>
    </h1>
  );
};

export default Header;
