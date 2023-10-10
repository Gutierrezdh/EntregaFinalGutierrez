import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Form from "react-bootstrap/Form";
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
        acumulador + valorActual.quantity * valorActual.price, // Corrección de "Precio" a "price"
      0
    );

  const handleChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const sendOrder = () => {
    const order = {
      name: formValues,
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
        alert("Su orden: " + id + " ha sido completada");
      }
    });
  };

  return (
    <Container>
      <h1>Cart</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name} </td> {/* Cambiado de "Nombre" a "title" */}
              <td>${item.price} </td> {/* Cambiado de "Precio" a "price" */}
              <td>{item.quantity} </td>
              <td>
                <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <button onClick={() => clear()}>Vaciar carrito</button>
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>${total()} </td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
      <h2>Ingrese datos de usuario</h2>
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
          <Form.Label>Tel</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.phone}
            type="text"
            name="phone"
            required
          />
        </Form.Group>
        <button type="submit">Comprar</button>
      </Form>
    </Container>
  );
};
