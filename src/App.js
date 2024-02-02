import './App.css'

import { FaFacebookF, FaTwitter, FaTumblr, FaStar, FaUser, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume, FaTags } from "react-icons/fa6";
import { MdEmail, MdOutlineAccessTime } from "react-icons/md";

import logo from './image/logo.png';
import kids from './image/kids.png';
import privat from './image/private.png';
import home from './image/home.png';
import about from './image/about.webp';
import guide from './image/guide.png';
import world from './image/world.png';
import service1 from './image/service1.webp';
import service2 from './image/service2.webp';
import service from './image/service3.webp';
import gallery1 from './image/port1.png';
import gallery2 from './image/port2.png';
import gallery3 from './image/port3.png';
import gallery4 from './image/port4.png';
import gallery5 from './image/port5.png';
import gallery6 from './image/port6.png';
import pakeg1 from './image/pakeg1.png';
import pakeg2 from './image/pakeg2.png';
import pakeg3 from './image/pakeg3.png';
import team1 from './image/team01.png';
import team2 from './image/team02.png';
import team3 from './image/team03.png';
import b1 from './image/b1.png';
import b2 from './image/b2.png';
import b3 from './image/b3.png';
import b4 from './image/b4.png';
import testi from './image/testi.png';
import testi1 from './image/testi01.png';
import testi2 from './image/testi02.jpg';
import blog1 from './image/blog1.jpg';
import blog2 from './image/blog2.jpg';
import blog3 from './image/blog3.jpg';

const App = () => {
  return (
    <>

      {/* Header Section Start */}

      <nav>
        <div className="container">
          <div className="header d-flex">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <ul className='main_menu'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Service</a></li>
              <li><a href="">Pages</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Contact</a></li>
              <div className="btn">
                <button><a href="">Booking Now</a></button>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section End */}

      {/* Banner Section Start */}

      <div className="banner">
        <div className="content">
          <h2>Enjoy Your Dream Ice Snow Mountains</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia possimus libero esse quae.</p>
          <div className="btn d-flex">
            <a href="">OUR SERVICE</a>
            <a href="" style={{ backgroundColor: "transparent", border: "1px solid white" }}>BOOKING NOW</a>
          </div>
        </div>
      </div>

      {/* Banner Section End */}

      {/* Element Section Start */}

      <div className="spacey">
        <div className="container">
          <div className="ele d-flex">
            <div className="w-33 box">
              <div className="content d-flex">
                <div className="img">
                  <img src={kids} alt="" />
                </div>
                <div className="desc">
                  <h3><a href="">Kids Playground</a></h3>
                  <p>Lorem ipsum dolor sit amet consetetur sadipscing elit </p>
                </div>
              </div>
            </div>
            <div className="w-33 box">
              <div className="content d-flex">
                <div className="img">
                  <img src={privat} alt="" />
                </div>
                <div className="desc">
                  <h3><a href="">Private Guide</a></h3>
                  <p>Lorem ipsum dolor sit amet consetetur sadipscing elit </p>
                </div>
              </div>
            </div>
            <div className="w-33 box">
              <div className="content d-flex">
                <div className="img">
                  <img src={home} alt="" />
                </div>
                <div className="desc">
                  <h3><a href="">Home Painting</a></h3>
                  <p>Lorem ipsum dolor sit amet consetetur sadipscing elit </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Element Section End */}

      {/* About Section Start */}

      <div className="spacey">
        <div className="container">
          <div className="about d-flex">
            <div className="w-50">
              <div className="title">
                <h2>About Us</h2>
                <h3>Ravel Most Popular Place In The World</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem magnam pariatur animi impedit. Sapiente, nam cupiditate. Quis, doloremque, voluptatibus adipisci laudantium velit soluta reprehenderit sit aperiam assumenda ab perferendis quibusdam!</p>
              </div>
              <div className="icon d-flex">
                <div className="w-50">
                  <img src={guide} alt="" />
                  <h3><a href="">Best Travel Guide</a></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                </div>
                <div className="w-50">
                  <img src={world} alt="" />
                  <h3><a href="">World Class Service</a></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                </div>
              </div>
            </div>
            <div className="about_img w-50">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* About Section End */}

      {/* Service Section Start */}

      <div className="spacey">
        <div className="container">
          <div className="service">
            <div className="title text-center">
              <h2>OUR SERVICES</h2>
              <h3>What We Offer For You</h3>
            </div>
            <div className="d-flex">
              <div className="w-33 box">
                <div className="img">
                  <img src={service1} alt="" />
                </div>
                <div className="content">
                  <h3><a href="">Switzerland Sea Beach Italy Sea Beach</a></h3>
                  <p>Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur</p>
                  <div className="btn">
                    <a href="">READ MORE</a>
                  </div>
                </div>
              </div>
              <div className="w-33 box">
                <div className="img">
                  <img src={service2} alt="" />
                </div>
                <div className="content">
                  <h3><a href="">Brown Pendant Lamp The  Hanging Sun </a></h3>
                  <p>Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur</p>
                  <div className="btn">
                    <a href="">READ MORE</a>
                  </div>
                </div>
              </div>
              <div className="w-33 box">
                <div className="img">
                  <img src={service} alt="" />
                </div>
                <div className="content">
                  <h3><a href="">A man seeing sea and sky Standing on Mountain</a></h3>
                  <p>Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur</p>
                  <div className="btn">
                    <a href="">READ MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section End */}

      {/* Gallery Section Start */}

      <div className="spacey">
        <div className="container">
          <div className="gallery">
            <div className="title text-center">
              <h2>TOUR GALLERY</h2>
              <h3>Best Tourist's Shared Gallery</h3>
            </div>
            <div className="d-flex row m">
              <div className="box">
                <div className="img">
                  <img src={gallery1} alt="" />
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={gallery2} alt="" />
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={gallery3} alt="" />
                </div>
              </div>

              <div className="box">
                <div className="img">
                  <img src={gallery4} alt="" />
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={gallery5} alt="" />
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={gallery6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section End */}

      {/* Package Section Start */}

      <div className="spacey">
        <div className="container">
          <div className="package">
            <div className="title text-center">
              <h2>POPULAR PACKAGE</h2>
              <h3>The Best Of Our Packages</h3>
            </div>
            <div className="d-flex">
              <div className="w-33 box">
                <div className="img">
                  <img src={pakeg2} alt="" />
                </div>
                <div className="content">
                  <h3><a href="">Pakistan</a></h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                  <div className="btn">
                    <a href="">BOOKING NOW</a>
                  </div>
                </div>
              </div>
              <div className="w-33 box">
                <div className="img">
                  <img src={pakeg3} alt="" />
                </div>
                <div className="content">
                  <h3><a href="">Canada</a></h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                  <div className="btn">
                    <a href="">BOOKING NOW</a>
                  </div>
                </div>
              </div>
              <div className="w-33 box">
                <div className="img">
                  <img src={pakeg1} alt="" />
                </div>
                <div className="content">
                  <h3><a href="">Thailand</a></h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                  <div className="btn">
                    <a href="">BOOKING NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Package Section End */}

      {/* Team Section Start */}

      <div className='spacey'>
        <div className="container">
          <div className="team">
            <div className="title text-center">
              <h2>OUR TEAM</h2>
              <h3>Our Exclusive Team</h3>
            </div>
            <div className="d-flex">
              <div className="w-33 box">
                <div className="img">
                  <img src={team1} alt="" />
                </div>
                <div className="content text-center">
                  <h5><a href="">Stiven Finland</a></h5>
                  <span>CEO & FOUNDER</span>
                  <div className="icon d-flex">
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaTumblr /></a>
                  </div>
                </div>
              </div>
              <div className="w-33 box">
                <div className="img">
                  <img src={team2} alt="" />
                </div>
                <div className="content text-center">
                  <h5><a href="">Zerin Finland</a></h5>
                  <span>MARKETING</span>
                  <div className="icon d-flex">
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaTumblr /></a>
                  </div>
                </div>
              </div>
              <div className="w-33 box">
                <div className="img">
                  <img src={team3} alt="" />
                </div>
                <div className="content text-center">
                  <h5><a href="">Zames Sienna</a></h5>
                  <span>PHOTOGRAPHAY</span>
                  <div className="icon d-flex">
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaTumblr /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section End */}

      {/* Company Section Start */}

      <div className="company">
        <div className="container">
          <div className="box d-flex">
            <div className="img">
              <a href=""><img src={b1} alt="" /></a>
            </div>
            <div className="img">
              <a href=""><img src={b2} alt="" /></a>
            </div>
            <div className="img">
              <a href=""><img src={b3} alt="" /></a>
            </div>
            <div className="img">
              <a href=""><img src={b4} alt="" /></a>
            </div>
            <div className="img">
              <a href=""><img src={b1} alt="" /></a>
            </div>
            <div className="img">
              <a href=""><img src={b1} alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Company Section End */}

      {/* Testi Section Start */}

      <div className="bg">
        <div className="container">
          <div className="testi">
            <div className="title text-center">
              <h2>OUR TESTIMONIAL</h2>
              <h3>What Clients Say's?</h3>
            </div>
            <div className="d-flex">
              <div className="box">
                <div className="content">
                  <div className="d-flex">
                    <div className="img">
                      <img src={testi1} alt="" />
                    </div>
                    <div className="text">
                      <h2>Poral Dawson</h2>
                      <span>Manager</span>
                    </div>
                  </div>
                </div>
                <div className="desc">
                  <p>Studio practice focused on modern design, interiors and landscapes. From our inception in 2007, we have used on mode livered free text used.</p>
                </div>
                <div className="d-flex icon">
                  <div className="star d-flex item-center">
                    <FaStar style={{ marginRight: '5px', fontSize: "20px" }} />
                    <FaStar style={{ marginRight: '5px', fontSize: "20px" }} />
                    <FaStar style={{ marginRight: '5px', fontSize: "20px" }} />
                    <FaStar style={{ marginRight: '5px', fontSize: "20px" }} />
                    <FaStar style={{ marginRight: '5px', fontSize: "20px" }} />
                  </div>
                  <h3>Execllent!!</h3>
                </div>
              </div>
              <div className="box">
                <div className="content">
                  <div className="d-flex">
                    <div className="img">
                      <img src={testi2} alt="" />
                    </div>
                    <div className="text">
                      <h2>Elwin Dawson</h2>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
                <div className="desc">
                  <p>Studio practice focused on modern design, interiors and landscapes. From our inception in 2007, we have used on mode livered free text used.</p>
                </div>
                <div className="d-flex icon">
                  <div className="star d-flex item-center">
                    <FaStar style={{ marginRight: '5px', fontSize: "20px" }} />
                    <FaStar style={{ marginRight: '5px', fontSize: "20px" }} />
                    <FaStar style={{ marginRight: '5px', fontSize: "20px" }} />
                    <FaStar style={{ marginRight: '5px', fontSize: "20px" }} />
                    <FaStar style={{ marginRight: '5px', fontSize: "20px" }} />
                  </div>
                  <h3>Execllent!!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testi Section End */}

      {/* Help Section Start */}

      <div className="spacey">
        <div className="container">
          <div className="help">
            <div className="d-flex">
              <div className="box">
                <h3>How Can We Help You?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et quam sollicitudin mi tincidunt faucibussed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                <div className="text">
                  <div className="icon d-flex">
                    <p className='social text-center'><FaLocationDot /></p>
                    <div className="title">
                      <h3><a href="">Location</a></h3>
                      <span className='txt'>3rd Floor Street , USA</span>
                    </div>
                  </div>
                  <div className="icon d-flex">
                    <p className='social text-center'><FaPhoneVolume /></p>
                    <div className="title">
                      <h3><a href="">Phone</a></h3>
                      <span className='txt'>+798556778385</span>
                    </div>
                  </div>
                  <div className="icon d-flex">
                    <p className='social text-center'><MdEmail /></p>
                    <div className="title">
                      <h3><a href="">Email</a></h3>
                      <span className='txt'>info@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form">
                <div className="title">
                  <h3>Contact Us</h3>
                </div>
                <div className="field d-flex">
                  <input type="text" placeholder='Name' />
                  <input type="text" placeholder='Email' style={{ marginLeft: "25px" }} />
                </div>
                <input type="text" placeholder='Phone' />
                <textarea type="" cols="50" rows="10" placeholder='Comments/Message' />
                <div className="btn">
                  <a href="">Submit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section end */}

      {/* Blog Section Start */}

      <div className="spacey">
        <div className="container">
          <div className="blog">
            <div className="title text-center">
              <h2>OUR BLOG POST</h2>
              <h3>Latest news & updates</h3>
            </div>
            <div className="d-flex">
              <div className="box w-33">
                <div className="img">
                  <img src={blog1} alt="" />
                </div>
                <div className="content">
                  <div className="d-flex">
                    <span><a href=""><FaUser style={{ marginRight: "5px", color: "#F38906" }} />By Admin Treve</a></span>
                    <span><a href=""><FaTags style={{ marginRight: "5px", color: "#F38906" }} />Designer</a></span>
                  </div>
                  <h2><a href="">The Way To Avoid New Construction</a></h2>
                  <p>That foresee the pain and trouble that in their duty through.</p>
                  <div className="btn">
                    <a href="">READ MORE</a>
                  </div>
                </div>
              </div>
              <div className="box w-33">
                <div className="img">
                  <img src={blog2} alt="" />
                </div>
                <div className="content">
                  <div className="d-flex">
                    <span><a href=""><FaUser style={{ marginRight: "5px", color: "#F38906" }} />By Admin Treve</a></span>
                    <span><a href=""><FaTags style={{ marginRight: "5px", color: "#F38906" }} />business</a></span>
                  </div>
                  <h2><a href="">How Will you know success it shows</a></h2>
                  <p>That foresee the pain and trouble that in their duty through.</p>
                  <div className="btn">
                    <a href="">READ MORE</a>
                  </div>
                </div>
              </div>
              <div className="box w-33">
                <div className="img">
                  <img src={blog3} alt="" />
                </div>
                <div className="content">
                  <div className="d-flex">
                    <span><a href=""><FaUser style={{ marginRight: "5px", color: "#F38906" }} />By Admin Treve</a></span>
                    <span><a href=""><FaTags style={{ marginRight: "5px", color: "#F38906" }} />Marketing</a></span>
                  </div>
                  <h2><a href="">Questions business must able to answer</a></h2>
                  <p>That foresee the pain and trouble that in their duty through.</p>
                  <div className="btn">
                    <a href="">READ MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section end */}

      {/* Footer Section Start */}

      <div className="footer">
        <div className="spacey">
          <div className="container">
            <div className="d-flex">
              <div className="w-25 box">
                <h2>CONTACT US</h2>
                <p>Lorem ipsum dolor sit amet, cons elit, sed diam nonu my nibh euis motincidunt ut laoreetd</p>
                <div className="add">
                  <p><FaLocationDot style={{ marginRight: "8px" }} />1245 Rang Raod, medical, E152 95RB</p>
                  <p><FaPhoneAlt style={{ marginRight: "8px" }} />Telephone: (922) 3354 2252</p>
                  <p><MdOutlineAccessTime style={{ marginRight: "8px" }} />Time: 9.00am-4.00pm</p>
                </div>
              </div>
              <div className="w-33 box">
                <h2>OUR MENU</h2>
                <ul className='menu'>
                  <li><a href="">– About</a></li>
                  <li><a href="">– Service</a></li>
                  <li><a href="">– Team</a></li>
                  <li><a href="">– Pricing</a></li>
                  <li><a href="">– Contact</a></li>
                </ul>
              </div>
              <div className="w-33 box">
                <h2>OUR SERVICE</h2>
                <ul className='menu'>
                  <li><a href="">– Architectural Design</a></li>
                  <li><a href="">– Design & Planning</a></li>
                  <li><a href="">– Furniture & Decor</a></li>
                  <li><a href="">– Construction Design</a></li>
                  <li><a href="">– Lighting Design</a></li>
                </ul>
              </div>
              <div className="w-33 box">
                <h2>OUR GALLERY</h2>
                <ul className='menu d-flex'>
                  <li><a href=""><img src={blog1} alt="" /></a></li>
                  <li><a href=""><img src={blog2} alt="" /></a></li>
                  <li><a href=""><img src={blog3} alt="" /></a></li>
                </ul>
                <ul className='d-flex menu'>
                  <li><a href=""><img src={pakeg2} alt="" /></a></li>
                  <li><a href=""><img src={pakeg3} alt="" /></a></li>
                  <li><a href=""><img src={pakeg1} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p className='copyright'>Copyright © treve all rights reserved.</p>
        </div>
      </div>

      {/* Footer Section End */}



    </>
  )
}

export default App
