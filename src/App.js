import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CompHeader from "./components/Header";
import CompCard from "./components/Card";
import CompFooter from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function App() {
  return (
    <div>
      <Stack gap={3}>
        <CompHeader title="Galería de Imágenes con React" />
        <Container>
          <Row>
            <Col>
              <CompCard
                imgUrl="https://cdn.pixabay.com/photo/2023/03/25/16/02/hummingbird-7876355_1280.jpg"
                title="Colibri"
                text="Los colibríes pertenecen al orden de los Apodiformes y a la familia Trochilidae. Son aves que se caracterizan por su pequeño tamaño , van desde los 5 cm hasta los 20 cm. Existen alrededor de 330 especies de colibríes"
                webUrl="https://pixabay.com/es/photos/colibr%c3%ad-p%c3%a1jaro-alas-fauna-silvestre-7876355/"
              />
            </Col>
            <Col>
              <CompCard
                imgUrl="https://cdn.pixabay.com/photo/2023/03/04/07/41/swan-7829092_1280.jpg"
                title="Cisne"
                text="Ave palmípeda, de plumaje blanco, cabeza pequeña, pico de igual ancho en toda su extensión y de color anaranjado, y en los bordes y el tubérculo de la base negro, y de cuello muy largo y flexible, patas cortas y alas grandes."
                webUrl="https://es.wikipedia.org/wiki/Cisne"
              />
            </Col>
            <Col>
              <CompCard
                imgUrl="https://cdn.pixabay.com/photo/2023/03/25/21/48/cat-7876974_1280.jpg"
                title="Gato"
                text="Posee un pelaje suave y lanoso con una apariencia brillante, mantenida con una constante limpieza con la lengua. Su cuerpo es flexible, ligero, musculoso y compacto. Las patas delanteras tienen cinco dígitos. "
                webUrl="https://inaturalist.mma.gob.cl/taxa/118552-Felis-catus"
              />
            </Col>
            <Col>
              <CompCard
                imgUrl="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png"
                title="Silueta Gatos"
                text="Mamífero de la familia de los félidos, digitígrado, doméstico, de unos 50 cm de largo desde la cabeza hasta el arranque de la cola, que por sí sola mide unos 20 cm, de cabeza redonda, lengua muy áspera, patas cortas y generalmente pelaje suave y espeso."
                webUrl="https://pixabay.com/es/photos/gato-ojos-de-gato-ojos-azules-1285634/"
              />
            </Col>
          </Row>
        </Container>
        <CompFooter />
      </Stack>
    </div>
  );
}

export default App;
