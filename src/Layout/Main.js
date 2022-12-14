import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import CourseList from "../Pages/CourseList/CourseList";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="10">
            <Outlet></Outlet>
          </Col>
          <Col lg="2">
            <CourseList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
