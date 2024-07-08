"use client"
import React,{ useRef,useState,useEffect } from "react";
import Image from "next/image";
import image1 from "@/public/beautiful-snowy-mountains-road-fo-1920x1080.jpg"
import image2 from "@/public/download-2.jpg"
import image3 from "@/public/download.jpg"

import image4 from "@/public/images.jpg"
import image5 from "@/public/logo.png"
import image6 from "@/public/mountain-landscape-2031539_640.jpg"

import image7 from "@/public/portfolio-1.jpg"
// import image8 from "@/public/events.png"
import image9 from "@/public/portfolio-2.jpg"
import image10 from "@/public/portfolio-3.jpg"
import "./styles.css"
import "./normalize.css"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Home() {
  return (
    <>
    {/* <!-- start header --> */}
    <header>
      <div class="parent">
        <div class="container">
          <Image  class="logo" src={image5} alt=""/>
          <div class="links">
            <span class="icon">
              <span class="line1"></span>
              <span class="line2"></span>
              <span class="line3"></span>
            </span>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#protfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          
          </div>
         
        </div>
      </div>
    

    </header>
    {/* <!-- end header --> */}
    {/* <!-- start landing Section --> */}
    <div class="landing">
      <div class="intro-text">
        <h1>Hello There</h1>
        <p>We are leon - super Creative & Minimal Agency web Template</p>
      </div>
    </div>
    {/* <!-- end landing Section --> */}

    {/* <!-- start Features --> */}
<div class="features">
  <div class="container">

      <div class="feat">
        <i class="fa-regular fa-lightbulb"></i>
        <h3>Tell Us Your idea</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero optio delectus nihil cumque voluptates tenetur nostrum blanditiis commodi quos consequatur qui, quae iusto est laboriosam. A rerum ad culpa nemo!</p>
      </div>

        <div class="feat">
          <i class="fa-solid fa-flask"></i>
          <h3>We Will Do All The Work</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero optio delectus nihil cumque voluptates tenetur nostrum blanditiis commodi quos consequatur qui, quae iusto est laboriosam. A rerum ad culpa nemo!</p>
        </div>

        <div class="feat">
          <i class="fa-solid fa-earth-americas"></i>
          <h3>Your Product Is wourld Wide</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero optio delectus nihil cumque voluptates tenetur nostrum blanditiis commodi quos consequatur qui, quae iusto est laboriosam. A rerum ad culpa nemo!</p>
        </div>

  </div>
</div>

    {/* <!-- end features --> */}

    {/* <!-- start Services  --> */}
    <div class="services" id="services">
       <div class="container container-2">
         <h2 class="special-heading">Services</h2>
         <p> don't be easy,be productive</p>
         <div class="services-content">
          <div class="col">
            <div class="srv">
              <i class="fa-solid fa-print"></i>
              <div class="text">
                <h3>Graphic Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam tempore suscipit eaque, asperiores eos aut. Fugiat expedita porro optio reprehenderit repudiandae, culpa aspernatur, harum autem sed atque odio neque?</p>
                
              </div>
            </div>
            <div class="srv">
              <i class="fa-brands fa-wordpress-simple"></i>
              <div class="text">
                <h3>Graphic Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam tempore suscipit eaque, asperiores eos aut. Fugiat expedita porro optio reprehenderit repudiandae, culpa aspernatur, harum autem sed atque odio neque?</p>

              </div>
            </div>
          </div>
          <div class="col">
            <div class="srv">
              <i class="fa-brands fa-uikit"></i>
              <div class="text">
                <h3>Graphic Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam tempore suscipit eaque, asperiores eos aut. Fugiat expedita porro optio reprehenderit repudiandae, culpa aspernatur, harum autem sed atque odio neque?</p>
                
              </div>
            </div>
            <div class="srv">
              <i class="fa-solid fa-desktop"></i>
              <div class="text">
                <h3>Graphic Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam tempore suscipit eaque, asperiores eos aut. Fugiat expedita porro optio reprehenderit repudiandae, culpa aspernatur, harum autem sed atque odio neque?</p>

              </div>
            </div>
          </div>
         
          <div class="col">
            <div class="image">
              <Image src={image9} alt="Image"/>

            </div>
            
          </div>
          
         </div>
       </div>
    </div>
   
    {/* <!-- end Services  --> */}
    {/* <!--!Start portfolio --> */}
    <div class="portfolio" id="protfolio">
      <div class="container container-2">
        <h2 class="special-heading">Portfolio</h2>
        <p>if you do it right,it will last forever</p>
        <div class="portfolio-content">
         <div class="col">
           <div class="srv">
            <Image src={image7} alt=""/>
             <div class="text">
               <h3>Graphic Design</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam tempore suscipit eaque, asperiores eos aut. Fugiat expedita porro optio reprehenderit repudiandae, culpa aspernatur, harum autem sed atque odio neque?</p>
               
             </div>
           </div>
           
         </div>
         <div class="col">
           <div class="srv">
             <Image src={image9} alt=""/>
             <div class="text">
               <h3>Graphic Design</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam tempore suscipit eaque, asperiores eos aut. Fugiat expedita porro optio reprehenderit repudiandae, culpa aspernatur, harum autem sed atque odio neque?</p>
               
             </div>
           </div>
          
         </div>
         <div class="col">
           <div class="srv">
             <Image src={image10} alt=""/>
             <div class="text">
               <h3>Graphic Design</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam tempore suscipit eaque, asperiores eos aut. Fugiat expedita porro optio reprehenderit repudiandae, culpa aspernatur, harum autem sed atque odio neque?</p>
               
             </div>
           </div>
          
         </div>
        </div>
      </div>
   </div>
    {/* <!--!end portfolio --> */}

    {/* <!-- start About --> */}
    <div class="About" id="about">
      <div class="container container-2">
        <h2 class="special-heading">About</h2>
        <p>Less is more work</p>
        <div class="About-content">
         <div class="col">
           <div class="srv">
            <div class=" image-2">
              <Image src={image9} alt=""/>
            </div>
            
             <div class="text">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates repudiandae reprehenderit totam quo dicta recusandae ipsam asperiores? Iusto ab quasi mollitia et totam exercitationem ipsam doloremque possimus a cumque!</p>
               <hr/>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam tempore suscipit eaque, asperiores eos aut. Fugiat expedita porro optio reprehenderit repudiandae, culpa aspernatur, harum autem sed atque odio neque?</p>
               
             </div>
           </div>
           
         </div>
          </div>
        </div>
      </div>
   
    {/* <!-- end About --> */}
  {/* <!-- Start Contact --> */}
  <div class="contact" id="contact">
    <div class="container">
    <h2 class="special-heading">Contact</h2>
    <p> We are born to create </p>
    <div class="info">
      <p class="label">Feel free to drop us a line at:</p>
      <a href="mailto:leonagency@gmail.com?subject=Contact" class="link">leonagency@gmail.com</a>
      <div class="social">
        <p>Find us on social networks</p>
        <i class="fa-brands fa-youtube"></i>
        <FontAwesomeIcon className="i" icon={faYoutube} />
        <FontAwesomeIcon className="i" icon={faFacebook} />
        <FontAwesomeIcon className="i" icon={faTwitter} />
        
      </div>
    </div>
    </div>
  </div>
  {/* <!-- End Contact --> */}

{/* <!--  Start Footer --> */}
<footer>&copy; 2019 - <span style={{color: "var(--main-color);"}}>Leon</span> ALL Right Reserved</footer>
{/* <!--  End Footer  --> */}
  </>
  );
}
