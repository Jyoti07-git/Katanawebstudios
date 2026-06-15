import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "TechNova",
      text: "Katana Web Studios transformed our ideas into a stunning website. Highly recommended!",
    },
    {
      name: "Priya Mehta",
      company: "Beauty Bliss",
      text: "Professional, creative and delivered exactly what we needed.",
    },
    {
      name: "Amit Verma",
      company: "FitZone Gym",
      text: "Our business got more leads after the website redesign.",
    },
    {
      name: "Sarah Johnson",
      company: "Digital Agency",
      text: "Excellent communication and premium quality work.",
    },
  ];

  return (
    <section className="testimonials">

      <div className="container">

        <span className="testimonial-subtitle">
          TESTIMONIALS
        </span>

        <h2>
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="testimonial-card">

                <div className="quote">
                  "
                </div>

                <p>{item.text}</p>

                <h4>{item.name}</h4>

                <span>{item.company}</span>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default Testimonials;