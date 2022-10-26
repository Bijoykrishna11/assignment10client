import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Course = () => {
    const allBooks = useLoaderData();
    console.log(allBooks)
    return (
        <div>
            <Container className='mt-5'>

                <Row>
                    <Col lg={4} sm={12}>qqqq</Col>









                    <Col lg={8} sm={12} >
                        ssss
                    </Col>

                </Row>



            </Container>
        </div>
    );
};

export default Course;