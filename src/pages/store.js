import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productStore';
import ProductCard from '../components/productCard';
function Store() {
    return (
        <>
            <h1 align="center" className='p-3'>  Welcome to the store</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, id) => (
                    <Col align="center" key={id}>
                        <ProductCard product={product}/>
                    </Col>
                ))}



            </Row>

        </>

    )
}

export default Store;