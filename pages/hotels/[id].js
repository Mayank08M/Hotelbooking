import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import h1 from '../../public/images/h1.jpg'
import h2 from '../../public/images/h2.jpg'
import h3 from '../../public/images/h3.jpg'
import h4 from '../../public/images/h4.jpg'
import h5 from '../../public/images/h5.jpg'
import h6 from '../../public/images/h6.jpg'
import h7 from '../../public/images/h7.jpg'
import h8 from '../../public/images/h8.jpg'
import h9 from '../../public/images/h9.jpg'
import h10 from '../../public/images/h10.jpg'

const baseURL = 'http://localhost:8000'

const Hoteldetail = () => {
    const [details, setDetails] = useState()
    const router = useRouter();
    useEffect(() => {
        axios.get(`${baseURL}/hotels/${router.query.id}`)
          .then((response) => {
            setDetails(response.data);
          })
          .catch((error) => {
            console.error('Error fetching hotel details:', error);
            // Handle error state or display error message to the user
          });
      }, []);

  return (
    <>
    <div>
            <div class="post-wrap my-5">
        <div class="container">

            <div class="row mt-4 g-md-5">
                <main class="post-grid col-md-9">
                    
                    <div class="row" key={details?.id}>
                        <article class="property">
                            <div class="row flex-column">
                                {/* <div class="col-md-12">
                                    <div class="swiper product-large-slider">
                                        <div class="swiper-wrapper">

                                            <div class="swiper-slide">
                                                <img src={h1} alt="Hotel-Image1" class="img-fluid"/>
                                            </div>
                                            <div class="swiper-slide">
                                                <img src={h2} alt="Hotel-Image2" class="img-fluid"/>
                                            </div>
                                            <div class="swiper-slide">
                                                <img src={h3} alt="Hotel-Image3"
                                                    class="thumb-image img-fluid"/>
                                            </div>
                                            <div class="swiper-slide">
                                                <img src={h4} alt="Hotel-Image4" class="img-fluid"/>
                                            </div>
                                            <div class="swiper-slide">
                                                <img src={h5} alt="Hotel-Image5" class="img-fluid"/>
                                            </div>

                                        </div>
                                    </div>
                                </div> */}
                                {/* <div class="col-md-12 mt-2">
                                    <div thumbsSlider="" class="swiper product-thumbnail-slider">
                                        <div class="swiper-wrapper">

                                            <div class="swiper-slide">
                                                <img src={h6} alt="image1" class="thumb-image img-fluid"/>
                                            </div>
                                            <div class="swiper-slide">
                                                <img src={h7} alt="image2" class="thumb-image img-fluid"/>
                                            </div>
                                            <div class="swiper-slide">
                                                <img src={h8} alt="image3" class="thumb-image img-fluid"/>
                                            </div>
                                            <div class="swiper-slide">
                                                <img src={h9} alt="image4" class="thumb-image img-fluid"/>
                                            </div>
                                            <div class="swiper-slide">
                                                <img src={h10} alt="image5" class="thumb-image img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>

                            <div class="post-content py-5">

                                <div class="room-type d-flex justify-content-between my-5">
                                    <h3 class="fs-2 mb-4">{details?.name}</h3>
                                    
                                        <div>
                                        
                                            <p class="pe-2"><strong>Price:</strong></p>
                                            <p class="price"><strong>{details?.price}₹</strong> /Pernight</p>
                                            
                                            </div>
                                    


                                </div>
                                <hr/>
                                <div class="overview my-5">
                                    <h3 class="fs-2 mb-4">Room Overview</h3>

                                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-1">
                                        <div class="col d-flex align-items-start">
                                            <iconify-icon icon="fluent:bed-24-regular"
                                                class="property-icon border p-3"></iconify-icon>
                                            <div class="ms-4">
                                                <h5 class="fw-bold mt-2 fs-5 text-body-emphasis">Bed</h5>
                                                <p>{details?.bed}</p>
                                            </div>
                                        </div>
                                        <div class="col d-flex align-items-start">
                                            <iconify-icon icon="material-symbols:shower-outline"
                                                class="property-icon border p-3"></iconify-icon>
                                            <div class="ms-4">
                                                <h5 class="fw-bold mt-2 fs-5 text-body-emphasis">Bath</h5>
                                                <p>2</p>
                                            </div>
                                        </div>
                                        <div class="col d-flex align-items-start">
                                            <iconify-icon icon="fluent:person-16-regular"
                                                class="property-icon border p-3"></iconify-icon>
                                            <div class="ms-4">
                                                <h5 class="fw-bold mt-2 fs-5 text-body-emphasis">Person</h5>
                                                <p>{details?.person}</p>
                                            </div>
                                        </div>
                                        <div class="col d-flex align-items-start">
                                            <iconify-icon icon="bi:wifi"
                                                class="property-icon border p-3"></iconify-icon>
                                            <div class="ms-4">
                                                <h5 class="fw-bold mt-2 fs-5 text-body-emphasis">WiFi</h5>
                                                <p>Free</p>
                                            </div>
                                        </div>
                                        <div class="col d-flex align-items-start">
                                            <iconify-icon icon="material-symbols:ac-unit"
                                                class="property-icon border p-3"></iconify-icon>
                                            <div class="ms-4">
                                                <h5 class="fw-bold mt-2 fs-5 text-body-emphasis">Air Conditioner</h5>
                                                <p>{details?.AC}</p>
                                            </div>
                                        </div>
                                        <div class="col d-flex align-items-start">
                                            <iconify-icon icon="fluent:tv-24-regular"
                                                class="property-icon border p-3"></iconify-icon>
                                            <div class="ms-4">
                                                <h5 class="fw-bold mt-2 fs-5 text-body-emphasis">TV Cable</h5>
                                                <p>{details?.TV}</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <hr/>
                                <div class="price my-5">
                                    <h3 class=" fs-2 mb-4">Price Details</h3>
                                    <p> <span class="fw-bold text-dark">Per Night :</span>{details?.pernight}₹</p>
                                    <p> <span class="fw-bold text-dark">Service Charge :</span>{details?.service}₹ </p>
                                    <p> <span class="fw-bold text-dark">Cleaning Fee :</span>{details?.cleaning}₹</p>

                                </div>
                                <hr/>
                                <div class="details my-5">
                                    <h3 class=" fs-2 mb-4">Room Details</h3>
                                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima
                                        dignissimos, voluptates quasi nam laboriosam? Esse aut, velit a ullam numquam
                                        excepturi quidem porro sunt eaque, aperiam cupiditate, iure dignissimos?
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aut explicabo
                                        sunt nesciunt saepe consequatur hic voluptates facilis beatae veniam ut totam
                                        cum? Atque cupiditate corrupti, consequuntur pariatur dolorum laborum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda,
                                        perspiciatis velit est possimus sapiente consequatur dolorem! Alias a eos quae?
                                        Modi eos quo reiciendis, aliquam sequi dicta laborum esse.
                                    </p>

                                </div>
                                <hr/>
                                <div class="feature my-5">
                                    <h3 class=" fs-2 mb-4">Features & Amenities</h3>
                                    <div class="d-md-flex">
                                        <ul class="ms-4 me-5">
                                            <li>Air Conditioning </li>
                                            <li>Barbeque </li>
                                            <li>Dryer </li>
                                            <li>Gym </li>
                                            <li>Lawn </li>
                                            <li>Microwave </li>
                                        </ul>
                                        <ul class="ms-4">
                                            <li>Outdoor Shower </li>
                                            <li>Refrigerator </li>
                                            <li>Swimming Pool </li>
                                            <li>TV Cable </li>
                                            <li>Washer </li>
                                            <li>WiFi </li>
                                        </ul>
                                    </div>

                                </div>
                                <hr/>
                                <div class="address my-5">
                                    <h3 class=" fs-2 mb-4">Location</h3>
                                    <div class="d-flex">
                                        <div class="me-5">
                                            <p> <span class="fw-bold text-dark">Address :</span> 10425 Tabor St</p>
                                            <p> <span class="fw-bold text-dark">City :</span> Los Angeles</p>
                                            <p> <span class="fw-bold text-dark">State/county :</span> California</p>
                                        </div>
                                        <div class="ms-5">
                                            <p> <span class="fw-bold text-dark">Zip/Postal Code :</span> 90034</p>
                                            <p> <span class="fw-bold text-dark">Area :</span> Brookside</p>
                                            <p> <span class="fw-bold text-dark">Country :</span> United States</p>
                                        </div>
                                    </div>


                                </div>

                                <hr/>
                            </div>
                        </article>

                        <section id="post-comment">
                            <div class="container">
                                <div class="row my-5">
                                    <div class="comments-wrap">
                                        <h2 class=" mb-5">
                                            <span class="count">3</span> Reviews
                                        </h2>
                                        <div class="comment-list">
                                            <article class="comment-item pb-3 row">
                                                <div class="col-md-1">
                                                    <img src="images/commentor-item1.jpg" alt="default"
                                                        class="commentor-image img-fluid rounded-circle"/>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="author-post mb-4">
                                                        <div
                                                            class="comment-meta mb-2 text-capitalize d-flex gap-3 text-black">
                                                            <div class="author-name fs-5  ">Lufy carlson</div>
                                                            <span class=" ">Jul 10</span>
                                                        </div>
                                                        <p>Tristique tempis condimentum diam done ullancomroer sit
                                                            element henddg sit he
                                                            consequert.Tristique tempis condimentum diam done
                                                            ullancomroer sit element henddg sit he
                                                            consequert.</p>
                                                        <div class="comments-reply border-animation">
                                                            <a href="#">
                                                                <i class="icon icon-mail-reply"></i>Reply </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            <article class="comment-item pb-3 row child-comments">
                                                <div class="col-md-1">
                                                    <img src="images/commentor-item2.jpg" alt="default"
                                                        class="commentor-image img-fluid rounded-circle"/>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="author-post mb-4">
                                                        <div
                                                            class="comment-meta mb-2 text-capitalize d-flex gap-3 text-black ">
                                                            <div class="author-name fs-5  ">Lora leigh</div>
                                                            <span class=" ">Jul 10</span>
                                                        </div>
                                                        <p>Tristique tempis condimentum diam done ullancomroer sit
                                                            element henddg sit he
                                                            consequert.Tristique tempis condimentum diam done
                                                            ullancomroer sit element henddg sit he
                                                            consequert.</p>
                                                        <div class="comments-reply border-animation">
                                                            <a href="#">
                                                                <i class="icon icon-mail-reply"></i>Reply </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            <article class="comment-item pb-3 row">
                                                <div class="col-md-1">
                                                    <img src="images/commentor-item3.jpg" alt="default"
                                                        class="commentor-image img-fluid rounded-circle"/>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="author-post mb-4">
                                                        <div
                                                            class="comment-meta mb-2 text-capitalize d-flex gap-3 text-black ">
                                                            <div class="author-name fs-5  ">Natalie dormer</div>
                                                            <span class=" ">Jul 10</span>
                                                        </div>
                                                        <p>Tristique tempis condimentum diam done ullancomroer sit
                                                            element henddg sit he
                                                            consequert.Tristique tempis condimentum diam done
                                                            ullancomroer sit element henddg sit he
                                                            consequert.</p>
                                                        <div class="comments-reply border-animation">
                                                            <a href="#">
                                                                <i class="icon icon-mail-reply"></i>Reply </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div class="comment-respond my-5">
                                        <h3 class="">Leave a Review</h3>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                        <form method="post" class="form-group padding-small">
                                            <div class="row">
                                                <div class="col-lg-12 mb-3">
                                                    <textarea class="form-control ps-3 pt-3" id="comment" name="comment"
                                                        placeholder="Write your Review here *"></textarea>
                                                </div>
                                                <div class="col-lg-6 mb-3">
                                                    <input class="form-control ps-3" type="text" name="author"
                                                        id="author" placeholder="Write your full name here *"/>
                                                </div>
                                                <div class="col-lg-6">
                                                    <input class="form-control ps-3" type="email" name="email"
                                                        id="email" placeholder="Write your e-mail address *"/>
                                                </div>
                                                <div class="col-lg-12">
                                                    <label class="d-flex align-items-center">
                                                        <input type="checkbox" class="checked-box me-2"/>
                                                        <span class="label-body">Save my name, email, and website in
                                                            this browser for the next
                                                            time.</span>
                                                    </label>
                                                </div>
                                                <div class="col-lg-12 mt-3">
                                                    <button
                                                        class="btn btn-arrow btn-primary btn-lg btn-pill btn-dark fs-6 w-100"
                                                        type="submit">Post Comment</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <aside class="col-md-3">
                    <div class=" ">
                        <form id="form" class="form-group flex-wrap bg-light p-3 border">
                            <h2 class=" fs-2 text-black my-3 mb-5">Reserve Now</h2>

                            <div class="col-lg-12 my-4">
                                <label for="exampleInputEmail1" class="form-label text-black">Check-In</label>
                                <div class="input-group date" id="datepicker">
                                    <input type="date" id="start" name="appointment" min="2023-01-01" max="2023-12-31"
                                        class="form-control ps-3 me-3"/>
                                </div>
                            </div>
                            <div class="col-lg-12 my-4">
                                <label for="exampleInputEmail1" class="form-label text-black">Check-Out</label>
                                <div class="input-group date" id="datepicker">
                                    <input type="date" id="start" name="appointment" min="2023-01-01" max="2023-12-31"
                                        class="form-control ps-3 me-3"/>
                                </div>
                            </div>
                            <div class="col-lg-12 my-4">
                                <label for="exampleInputEmail1" class="form-label text-black">Room</label>
                                <input type="number" value="1" name="quantity" class="form-control ps-3"/>
                            </div>
                            <div class="col-lg-12 my-4">
                                <label for="exampleInputEmail1" class="form-label text-black">Adult</label>
                                <input type="number" value="1" name="quantity" class="form-control ps-3"/>
                            </div>
                            <div class="col-lg-12 my-4">
                                <label for="exampleInputEmail1" class="form-label text-black">Children</label>
                                <input type="number" value="0" name="quantity" class="form-control ps-3"/>
                            </div>
                            <div class="col-lg-12 my-4">
                                <label for="exampleInputEmail1" class="form-label text-black">Your
                                    Message</label>
                                <textarea placeholder="Write Your Message Here" class="form-control ps-3"
                                    rows="8"></textarea>
                            </div>
                            <div class="d-grid mb-3">
                                <button class="btn btn-arrow btn-primary btn-lg btn-pill btn-dark fs-6">Check
                                    Availabitily</button>
                            </div>
                        </form>

                    </div>
                </aside>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hoteldetail