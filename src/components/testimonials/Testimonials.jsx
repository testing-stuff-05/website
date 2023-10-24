import "./styles.css";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import info from "./testimonialInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <Container fluid className="testi-container">
      <h1 className="testimonial-title">What They Say About Us</h1>
      <Swiper
        style={{
          "--swiper-pagination-color": "#4b1827",
        }}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {info.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="slide">
                <img className="image" src={item.img} alt=""></img>
                <p> {item.para}</p>
                <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
                <div className="details">
                  <span className="name">{item.name}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

export default Testimonials;
