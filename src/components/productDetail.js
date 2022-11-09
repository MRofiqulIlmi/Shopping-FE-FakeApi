import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {GetProductDetail} from '../APIfetch/productFetch';
import { Card, Col, Row, Typography, Rate, Tag } from 'antd';


const {Title, Text} = Typography;

function AppProductDetail() {

    const [productData, setProductData] = useState([]);
    const [productLoading, setProductLoading] = useState(true);

    GetProductDetail(setProductData,setProductLoading);

    console.log("productData Detail");
    console.log(productData);
    

    const par = useParams()
    const choosenImageProduct = productData.filter((data) => {return data.id == par.productId}).map(data => (data.image))[0];
    const choosenTitleProduct = productData.filter((data) => {return data.id == par.productId}).map(data => (data.title))[0];
    const choosenRateProduct = productData.filter((data) => {return data.id == par.productId}).map(data => (data.rating.rate))[0];
    const choosenCountRateProduct = productData.filter((data) => {return data.id == par.productId}).map(data => (data.rating.count))[0];
    const choosenCategoryProduct = productData.filter((data) => {return data.id == par.productId}).map(data => (data.category))[0];
    const choosenDescriptionProduct = productData.filter((data) => {return data.id == par.productId}).map(data => (data.description))[0];
    const choosenPriceProduct = productData.filter((data) => {return data.id == par.productId}).map(data => (data.price))[0];

    console.log(par);

    console.log(choosenRateProduct);
    

    return ( 
        <div className='container-fluid'>
            <div className='productDetailHolder'>
            
    
    <Row>
        <Col span={8} className="pDimg">
            <Card 
            style={{
                height: 300
            }}
            
            cover={<img src={choosenImageProduct} height={300}/>} />
        </Col>
        <Col span={16}>
            <Title level={2}>{choosenTitleProduct}</Title>
            <Text type='secondary'>{choosenCategoryProduct}</Text>
            <br />
            <Rate disabled value={choosenRateProduct} allowHalf/>
            <br />
            <Text style={{fontSize:20,color:"#fbdc17"}} type='default' strong>{choosenRateProduct} | {choosenCountRateProduct} Review</Text>
            <br />
            <Text type='secondary'>{choosenDescriptionProduct}</Text>
            <br />
            <div className='priceHolder'>
            <Text style={{fontSize:30, color: "white"}} type='default' strong>$ {choosenPriceProduct}</Text>
            </div>
        </Col>
    </Row>
    </div>
    </div>
    );
}

export default AppProductDetail;