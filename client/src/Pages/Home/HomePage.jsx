import './Home.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ProductCard from '../../Components/Card/ProductCard'
import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import Toys from '../../Assets/Banner/Toys.jpg'
import Electronics from '../../Assets/Banner/Mobile-Laptop-Banner.jpg'
import Text_Books from '../../Assets/Banner/Text_Books.jpg'
import Islamic_Books from '../../Assets/Banner/Islamic_Books.jpg'
import Accessories from '../../Assets/Banner/Accessories.jpg'

const HomePage = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        getData()
        window.scroll(0, 0)
    }, [])
    const getData = async () => {
        const response = await axios.get(process.env.REACT_APP_FETCH_PRODUCT)
        setProductData(response.data);
    }

    return (
        <>
            <Container maxWidth='xl' style={{ marginTop: 90,paddingRight: 50, display: 'flex', justifyContent: "center", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", }}>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <Link to="product/type/Islamic_Books">
                                <div className="carousel-item active">
                                    <img src={Islamic_Books} className="d-block w-100" alt="Islamic_Books" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Button className='carousel-btn' variant='contained'>Islamic_Books</Button>
                                    </div>
                                </div>
                            </Link>
                            <Link to="product/type/Accessories">
                                <div className="carousel-item">
                                    <img src={Accessories} className="d-block w-100" alt="Accessories" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Button className='carousel-btn' variant='contained'>Accessories</Button>
                                    </div>
                                </div>
                            </Link>
                            <Link to="product/type/Text_Books">
                                <div className="carousel-item">
                                    <img src={Text_Books} className="d-block w-100 " alt="Text_Books" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Button className='carousel-btn' variant='contained'>Text_Books</Button>
                                    </div>
                                </div>
                            </Link>
                            <Link to="product/type/electronics">
                                <div className="carousel-item">
                                    <img src={Electronics} className="d-block w-100 " alt="Electronics" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Button className='carousel-btn' variant='contained'>Electronics</Button>
                                    </div>
                                </div>
                            </Link>
                            <Link to="product/type/Toys">
                                <div className="carousel-item">
                                    <img src={Toys} className="d-block w-100 " alt="Toys" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Button className='carousel-btn' variant='contained'>Toys</Button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </Box>

                <Container maxWidth='xl' style={{ marginTop: 90, display: "flex", flexWrap: "wrap", paddingLeft: 10,paddingBottom:20 }}>
                    {productData.map(prod => (
                        <Link to={`/Detail/${prod._id}`} key={prod._id}>
                            <ProductCard prod={prod} />
                        </Link>
                    ))}
                </Container>
            </Container>
        </ >
    )
}

export default HomePage