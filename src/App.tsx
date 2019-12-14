import React from 'react';
import './common.scss';
import { Container, Row, Col } from "react-bootstrap";
import PersonalCard from "./components/PersonalCard";
import DraggableSection from "./components/DraggableSection";
import LinkList from "./components/LinkList"
import PageTitle from './components/PageTitle';
import { description } from "./data";

function App() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 4, offset: 4 }}>
          <div className="content-holder">
            <PageTitle />
            <PersonalCard
              title="About me"
              content={description}
            />
            <DraggableSection></DraggableSection>
            <PersonalCard
              title="Contact"
              content={<LinkList />}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
