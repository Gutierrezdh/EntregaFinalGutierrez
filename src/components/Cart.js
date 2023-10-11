import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { items, removeItem, clear } = useContext(CartContext);

  const total = () =>
    items.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price,
      0
    );

  const handleChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const sendOrder = (ev) => {
    ev.preventDefault();
    const order = {
      name: formValues.name,
      items,
      total: total(),
      
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        setFormValues({
          name: "",
          phone: "",
          email: "",
        });
        clear();
        alert("Su compra con el codigo " + id + " ha sido realizada con exito");
      }
    });
  };

  
  return (
    <Container>
      <h1>Mi Carrito</h1>
      {items.length === 0 ? (
        <div>
          <p>El carrito está vacío</p>
        </div>
      ) : (
        items.map((item, index) => (
          <Card key={item.id} className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src={item.img} alt={item.name} style={{ maxWidth: "100px" }} />
                </div>
                <div>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <strong>Precio: ${item.price}</strong>
                  </Card.Text>
                  <Card.Text>Cantidad: {item.quantity}</Card.Text>
                  <Button onClick={() => removeItem(item.id)} variant="danger">
                    Eliminar producto
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
      <div className="mt-3">
        <strong>Total: ${total()}</strong>
      </div>
      <Button
        onClick={clear}
        variant="danger"
        className={`mt-3 ${items.length === 0 ? "disabled" : ""}`}
        disabled={items.length === 0}
      >
        Vaciar carrito
</Button>
{items.length > 0 && (
  <div>
    <h2 className="mt-4">Mis datos</h2>
    <Form onSubmit={sendOrder}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formValues.name}
          type="text"
          name="name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formValues.email}
          type="email"
          name="email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formValues.phone}
          type="text"
          name="phone"
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Comprar
      </Button>
    </Form>
  </div>
)}
</Container>
  );
};