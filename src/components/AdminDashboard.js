// src/components/AdminDashboard.js
import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Orders" id="order-dropdown">
              <NavDropdown.Item as={Link} to="/orders">Order List</NavDropdown.Item>
              {/* Add more order-related links if needed */}
            </NavDropdown>
            <NavDropdown title="Payments" id="payment-dropdown">
              <NavDropdown.Item as={Link} to="/payments">Payment List</NavDropdown.Item>
              {/* Add more payment-related links if needed */}
            </NavDropdown>
            <NavDropdown title="Reviews" id="review-dropdown">
              <NavDropdown.Item as={Link} to="/reviews">Review List</NavDropdown.Item>
              {/* Add more review-related links if needed */}
            </NavDropdown>
            <NavDropdown title="Categories" id="category-dropdown">
              <NavDropdown.Item as={Link} to="/categories">Category List</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/add-category">Add Category</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/update-category">Update Category</NavDropdown.Item>
              {/* Add more category-related links if needed */}
            </NavDropdown>
            <NavDropdown title="Products" id="product-dropdown">
              <NavDropdown.Item as={Link} to="/productList">ProductList</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/remove-product">Remove Product</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/addproduct">Addproduct</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/update-product">Update Product</NavDropdown.Item>
              {/* Add more product-related links if needed */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Orders Overview</Card.Title>
              <Card.Text>
                View and manage all orders.
              </Card.Text>
              <Card.Link as={Link} to="/orders">Go to Orders</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Payments Overview</Card.Title>
              <Card.Text>
                View and manage all payments.
              </Card.Text>
              <Card.Link as={Link} to="/payments">Go to Payments</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Reviews Overview</Card.Title>
              <Card.Text>
                View and manage all reviews.
              </Card.Text>
              <Card.Link as={Link} to="/reviews">Go to Reviews</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Categories Management</Card.Title>
              <Card.Text>
                Manage product categories.
              </Card.Text>
              <Card.Link as={Link} to="/categories">Go to Categories</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Products Management</Card.Title>
              <Card.Text>
                Manage products in the store.
              </Card.Text>
              <Card.Link as={Link} to="/get-product-by-id">Get Product By ID</Card.Link>
              <Card.Link as={Link} to="/remove-product">Remove Product</Card.Link>
              <Card.Link as={Link} to="/update-product-form">Update Product Form</Card.Link>
              <Card.Link as={Link} to="/update-product">Update Product</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
