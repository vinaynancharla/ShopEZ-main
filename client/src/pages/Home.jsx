import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import HomeBanner from '../images/home-banner-2.png'
import Products from '../components/Products'
import Footer from '../components/Footer'
import FlashSale from '../components/FlashSale'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [bannerImg, setBannerImg] = useState();

  useEffect(()=>{
    fetchBanner();
  }, [])

  const fetchBanner = async() =>{
    await axios.get('http://localhost:6001/fetch-banner').then(
      (response)=>{
        setBannerImg(response.data);
      }
    )
  }

  return (
    <div className="HomePage">
      <div className="home-banner">
        {bannerImg ?
          <img src={bannerImg} alt="" />
        :
        ""}
      </div>

      <div className="home-categories-container">

        <div className="home-category-card" onClick={()=>navigate('/category/Fashion')}>
          <img src="https://www.shutterstock.com/image-vector/clothes-bags-high-heels-shopping-260nw-1539636698.jpg" alt="" />
          <h5>Fashion</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Electronics')}>
          <img src="https://5.imimg.com/data5/ANDROID/Default/2023/1/SE/QC/NG/63182719/product-jpeg-500x500.jpg" alt="" />
          <h5>Electronics</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/mobiles')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUW7v1WFJL9Ylax9a4vazyKXwG-ktSinI4Rd7qi7MkhMr79UlIyyrNkbiK0Cz5u6WYw&usqp=CAU" alt="" />
          <h5>Mobiles</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Groceries')}>
          <img src="https://media.istockphoto.com/id/1449032425/photo/shopping-bag-full-of-healthy-food-on-blue.jpg?s=612x612&w=0&k=20&c=856XpqRgq8Bj9Mr28VzAdW-iTyHEj_dW01m6SPPHsOU=" alt="" />
          <h5>Groceries</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Sports-Equipment')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sport_balls.svg/800px-Sport_balls.svg.png" alt="" />
          <h5>Sports Equipments</h5>
        </div>

      </div>


      <div id='products-body'></div>
      <Products category = 'all'  />


      <Footer />
    </div>
  )
}

export default Home