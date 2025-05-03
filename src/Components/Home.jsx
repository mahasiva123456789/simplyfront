import React from 'react'
import './Home.css'
import Categoryselect from './Categoryselect';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <>
   <Header />
   <Categoryselect />
   {/* landing page background */}
    <div className='landingpage_background'></div>

    {/* top pics */}
    <div className='furniture_quotes'>
         <h1>Top Categories for You</h1>
         <p>Essential Furniture for Every Room</p>
     </div>
     <Link to='/product' style={{textDecoration:"none"}}> <div className='catagorycon'>

        <img src="https://www.woodenstreet.com/images/home-new1/icon1.jpg" alt="" />
        <img src="https://www.woodenstreet.com/images/home-new1/icon3.jpg" alt="" />
        <img src="https://www.woodenstreet.com/images/home-new1/icon4.jpg" alt="" />
        <img src="https://www.woodenstreet.com/images/home-new1/icon8.jpg" alt="" />
        <img src="https://www.woodenstreet.com/images/home-new1/icon7.jpg" alt="" />
        <img src="https://www.woodenstreet.com/images/home-new1/icon10.jpg" alt="" />
        <img src="https://www.woodenstreet.com/images/home-new1/icon8.jpg" alt="" />
        <img src="https://www.woodenstreet.com/images/home-new1/icon6.jpg" alt="" />
        <img src="https://www.woodenstreet.com/images/home-new1/icon11.jpg" alt="" />
         <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281863/icon9_vuczlk.jpg" alt="" />
         <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281858/icon11_d9gktl.jpg" alt="" />
         <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281847/icon12_t0z64t.jpg" alt="" />
         <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281839/icon8_cjwabr.jpg" alt="" />
         <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281826/icon10_w6mirt.jpg" alt="" />
         <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281815/icon4_muzgaz.jpg" alt="" />
         <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281790/icon3_at8c0q.jpg" alt="" />
         <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281757/icon1_br6tfu.jpg" alt="" />
         <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281780/icon2_vqd4p6.jpg" alt="" />

      </div> 

   
     {/*furniture filter home  */}
     <div className='furniture_quotes'>
         <h1>Elevate Your Home with Elegance</h1>
         <p>Essential Furniture for Every Room</p>
     </div>
     <div className='furniturebrand_top'>

      <div className='brandimg'><img src="	https://www.woodenstreet.com/images/home-new1/space-save-banner.jpg?v=3011" alt="" /></div>
       <div className='brandimg'><img src="	https://www.woodenstreet.com/images/home-new1/beds-banner.jpg?v=301" alt="" /></div>
      <div className='brandimg'><img src="https://www.woodenstreet.com/images/home-new1/dining-set-banner.jpg?v=301" alt="" /></div>
     </div>
     <div className='furniturebrand_top'>
       <div className='brandimg'><img src="	https://www.woodenstreet.com/images/home-new1/wfh-banner.jpg?v=301" alt="" /></div>
       <div className='brandimg'><img src="		https://www.woodenstreet.com/images/home-new1/outdoor-banner.jpg?v=3011" alt="" /></div>
       <div className='brandimg'><img src="https://www.woodenstreet.com/images/home-new1/kids-room-banner.jpg?v=3011" alt="" /></div>

      <div className='brandimg'><img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281125/beds-banner_uimuio.jpg" alt="" /></div>
       <div className='brandimg'><img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281323/outdoor-banner_desghj.jpg" alt="" /></div>
      <div className='brandimg'><img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281356/space-save-banner_zcwcmj.jpg" alt="" /></div>
     </div>
     <div className='furniturebrand_top'>
       <div className='brandimg'><img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281424/kids-room-banner_a1g0kd.jpg" alt="" /></div>
       <div className='brandimg'><img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281465/study-room-banner_pce0tm.jpg" alt="" /></div>
       <div className='brandimg'><img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746281611/dining-set-banner_zvjj4v.jpg" alt="" /></div>

     </div></Link>
  
     {/* about */}
     <div className='about-container'>
        <div className='aboutcon_left'>
        <div className='abouthead'><h1>ABOUT US</h1></div>
         <div className='aboutimg'>

         <img src="	https://furnituretrader.com.au/media/wysiwyg/HomePageImages/AnimatedCollectionsImageDesktop.gif" alt="" />

         <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746282192/AnimatedCollectionsImageDesktop_c4xs8q.gif" alt="" />

         </div>
      </div>
      <div className='aboutcon_right'>At Simply Woods, we believe that exceptional home furniture can transform any space into a haven of comfort and style. Our mission is to provide 
        you with high-quality, beautifully designed pieces that fit every lifestyle and budget.
        Founded in 2024, Simply Woods began with a simple vision to make stylish and functional furniture accessible to everyone. Our journey started with a 
        small workshop and a passion for craftsmanship. Today, we are proud to offer a diverse range of products that
        embody our commitment to quality and design excellence.</div>
    </div>
  <br />
  <div className='emibackground'>
  </div>

  <div className='furniture_quotes'>
         <h1>Reviews</h1>
         <p>EDiscover what our customers are saying!</p>
     </div>
    {/* products gif category */}
    <div className='furniturebrand_top'>

      <div className='brandimg1'><img src="	https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm5rZDF3OHUzeTdmMG55d3NjajloamhoeXR1dzZnNDZ2ZGkzdHVidyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lHnG1PgQiniysg/giphy.webp" alt="" /></div>
       <div className='brandimg1'><img src="	https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczN4ZWxocDAxMHl3eW8wc3JpYWVkZW5iaHkwdHV1aHpwdG1vZTdnOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ymtw5fjm9Nl01J2aqC/giphy.webp" alt="" /></div>
      <div className='brandimg1'><img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2dwOG96aHIwc255bWphbjVlYWdjN3N6aW1uY3VlZzBwaTlvZnpudSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YvQyE42IvYTS/giphy.webp" alt="" /></div>
      <div className='brandimg1'><img src="https://media2.giphy.com/media/XJa7zyWdNHGFTBDfZU/200.webp?cid=ecf05e47rpxqcbqamhjh13rlm959n7ufsuo5weuc0kzxejfr&ep=v1_gifs_related&rid=200.webp&ct=g" alt="" /></div>
     </div>

     <div className='reviewcon'>
      <img src="https://images.woodenstreet.de/image/cache/data%2F16653940551656867703.IMG-20220703-WA0126+%282%29-max-337.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/I/7151KKXLCrL._SL1600_.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/I/61Eoj-aagSL._SL1600_.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/I/716KM++Rz4L.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/I/71Sv+2y2JeL.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/I/61se4rskppL.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/I/718Lls2FfbL.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/I/61Eoj-aagSL._SL1600_.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/I/716KM++Rz4L.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/I/71Sv+2y2JeL.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/I/61se4rskppL.jpg" alt="" />

      <div className='brandimg1'><img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746282785/giphy_fltyub.webp" alt="" /></div>
       <div className='brandimg1'><img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746282865/giphy_f6ngqy.webp" alt="" /></div>
      <div className='brandimg1'><img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746282906/giphy_oqg88y.webp" alt="" /></div>
      <div className='brandimg1'><img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746282933/200.webp_qwivfk.webp" alt="" /></div>
     </div>

     <div className='reviewcon'>
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283089/7151KKXLCrL._SL1600__ttshse.jpg" alt="" />
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283117/61Eoj-aagSL._SL1600__mruag5.jpg" alt="" />
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283138/716KM_Rz4L_yqugc7.jpg" alt="" />
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283151/71Sv_2y2JeL_ewsyag.jpg" alt="" />
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283165/61se4rskppL_mztqkm.jpg" alt="" />
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283180/718Lls2FfbL_wct6vk.jpg" alt="" />
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283383/718Lls2FfbL_qkb0nl.jpg" alt="" />
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283402/61Eoj-aagSL._SL1600__snkpdi.jpg" alt="" />
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283424/716KM_Rz4L_kni6o5.jpg" alt="" />
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283474/71Sv_2y2JeL_jzynql.jpg" alt="" />
      <img src="https://res.cloudinary.com/dpdwvkw0m/image/upload/v1746283496/61se4rskppL_vnq4zg.jpg" alt="" />


     </div>

   <Footer />
   </>
  )
}

export default Home