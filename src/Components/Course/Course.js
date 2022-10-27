import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Course = () => {
    const allBooks = useLoaderData();
    console.log(allBooks)





    return (

        <div>
            <Container className='mt-5'>

                <Row >
                    <Col lg={4} sm={12}>

                        <h1 className='mb-5'>abouts all books</h1>
                        {
                            allBooks.map(e => <p key={e.id}>
                                <Link>{e.title}</Link>
                            </p>)
                        }

                    </Col>
                    <Col lg={8} sm={12} >
                        <h1 className='mb-5'>abouts all books</h1>
                        {
                            allBooks.map(e => <p key={e.id}>
                                <p>{e.title}</p>


                            </p>)
                        }
                    </Col>

                </Row>



            </Container>
        </div>
    );
};

export default Course;