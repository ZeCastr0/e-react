import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CamisetaSantaCruz from "../imgs/camisa santacruz.png.png"

export default function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CamisetaSantaCruz} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <AddInCart />
      </Card.Body>
    </Card>
  );
}
