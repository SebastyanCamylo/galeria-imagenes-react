import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Footer = () => {
  return (
    <div>
      <Alert className="text-center" variant="danger">
        <Button variant="outline-primary">
          Presiona aqui para mas informacion
        </Button>{" "}
      </Alert>
    </div>
  );
};

export default Footer;
