import React, { Component } from 'react'
import { Button, Container, FormControl, InputGroup,Card,Row,Col,Alert } from 'react-bootstrap';

export class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            timer:60,
        };
    }

  render() {
    const {timer} = this.state;
    return (
      <>
        <Container className={"mt-5"}>
            <Row>
                <Col md={12}>
                {(timer >= 60) ? (
                    <Card>
                        <Card.Header>
                            iType
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>iType Hız Testi</Card.Title>
                            <Card.Text>
                                Zamandan kazanmak için klavye'de hızını test et
                                <br/>
                                Doğru Kelime : 0
                                <br/>
                                Yanlış Kelime : 0
                                <hr/>
                                <Card body className={"border-dark"}>
                                    <span className={"bg-secondary text-white p-1 mx-1 my-1 rounded"} style={{
                                        fontSize:"15px",
                                        fontWeight:600,
                                        whiteSpace: "nowrap",
                                        display:"inline-block"
                                        }}>asdasdas</span>
                                </Card>
                                <hr/>
                                <Card body>
                                    <InputGroup>
                                    <FormControl placeholder={"Kelimeyi Yazınız."}/>
                                    <InputGroup className={"mt-3"}>
                                        <Button disabled={true} variant={"outline-secondary"}>30 sn.</Button>
                                        <Button variant={"outline-success ml-2"}>Yenile</Button>
                                    </InputGroup>
                                    </InputGroup>
                                </Card>
                                <hr/>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                ) : (
                    <Card>
                        <Card.Header>iType</Card.Header>
                        <Card.Body>
                            <Card.Title>iType Hız Testi Sonuçları</Card.Title>
                            <Card.Text>
                                <Alert variant={"success"}>
                                    <h4>Oyun Bitti.</h4>
                                    <br/>
                                    <font style={{fontSize:"50px"}}>60 dks.</font>
                                    <br/>
                                    Doğruluk Yüzdesi : 80%
                                    <br/>
                                    Doğru Kelime: 25
                                    <br/>
                                    Yanlış Kelime: 10
                                    <br/>
                                    <Button variant={"success mt-2"}>Yeni Oyun</Button>
                                    
                                    

                                </Alert>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default Home;