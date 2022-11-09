import React, {useState, useEffect} from 'react';
import { Card,Col, Row } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {GetProductDetail} from '../APIfetch/productFetch';

const {Meta} = Card;
    

function AppProducts() {
    
    const [productData, setProductData] = useState([]);
    const [productLoading, setProductLoading] = useState(true);
    
    GetProductDetail(setProductData, setProductLoading);
    
    
    console.log("a");
    console.log(productData);
    console.log(productLoading);

    // const[loading, setLoading] = useState(false);
    // const[data, setData] = useState([]);

    // useEffect(()=>{
    //     setLoading(true);
    //     axios({
    //         method:"GET",
    //         url:'https://fakestoreapi.com/products'
    //     }).then(
    //         res => {
    //             // console.log(res.data)
    //             setData(res.data)
    //         }
    //     ).catch((e) => console.log(e))
    //     .finally(() => setLoading(false));
    // },[]);

    return ( 
        <div className='container-fluid'>
            <div className='productHolder'>
                {productLoading && (
                    <div>
                        {" "}
                        <h1>Loading . . .</h1>
                    </div>
                )}
                
                
                <Row gutter={[16,16]} style={{
                                justifyContent: 'center',
                                }}>
                {productData.map((product) => (
                
                <div className='cardHolder' key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                            
                            <Card
                                hoverable
                                style={{
                                width: 240,
                                height: 390
                                }}
                                cover={<img alt="example" src={product.image} width={150} height={300}/>}
                            >
                                <Meta title={product.title} description={`$ ${product.price}`} />
                            </Card>
                        </Col>
                    </Link>

                </div>
                


                ))}
                </Row>
                
            
            </div>
                
        </div>
    );
}

export default AppProducts;