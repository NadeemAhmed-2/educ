// import React, { useState, useEffect } from "react";
// import "./TestimonialSlider.css"; // Custom CSS file
// import { PiXBold } from "react-icons/pi";

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   const testimonials = [
//     {
//       name: "Sai Kiran",
//       role: "Computer science student",
//       review:
//         "LearnHub has been a game changer for my career. The resources are well-organized, and the platform makes learning easy and enjoyable.",
//       image: "https://via.placeholder.com/100",
//     },
//     {
//       name: "Nadeem",
//       role: "Intermediate Student",
//       review:
//         "As an intermediate student, LearnHub helped me strengthen my skills. The content is well-structured, and the community support is fantastic.",
//       image: "https://via.placeholder.com/100",
//     },
//     {
//       name: "Anil",
//       role: "Developer",
//       review:
//         "I love how LearnHub provides real-world resources that align with industry standards. The learning paths are very practical and helpful.",
//       image: "https://via.placeholder.com/100",
//     },
//     {
//       name: "Sara Lee",
//       role: "Designer",
//       review:
//         "LearnHub is a one-stop solution for learning. Whether you're a beginner or intermediate, the platform has something for everyone.",
//       image: "https://via.placeholder.com/100",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
//     );
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 700);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="testimonial-section">
//       <h2 className="testimonial-heading">What Our Users Say</h2>
//       {isMobile && (
//         <div className="testimonial-container">
//           <div className="testimonial-slider">
//             <div className="testimonial-card">
//               <h4 className="testimonial-name">
//                 {testimonials[currentIndex].name}
//               </h4>
//               <p className="testimonial-role">
//                 {testimonials[currentIndex].role}
//               </p>
//               <p className="testimonial-review">
//                 {testimonials[currentIndex].review}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//       {!isMobile && (
//         <div className="testimonial-container">
//           <div className="testimonial-slider">
//             {testimonials &&
//               testimonials.map((test) => (
//                 <div className="testimonial-card">
//                   <h4 className="testimonial-name">
//                     {test.name}
//                   </h4>
//                   <p className="testimonial-role">
//                     {test.role}
//                   </p>
//                   <p className="testimonial-review">
//                     {test.review}
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}

//       {/* Navigation buttons */}
//       <div className="slider-controls">
//         <button className="prev" onClick={prevSlide}>
//           Prev
//         </button>
//         <button className="next" onClick={nextSlide}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;


import React, { useState, useEffect } from "react";
import "./TestimonialSlider.css"; // Custom CSS file

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: "Sai Kiran",
      role: "Computer science student",
      review:
        "LearnHub has been a game changer for my career. The resources are well-organized, and the platform makes learning easy and enjoyable.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Nadeem",
      role: "Intermediate Student",
      review:
        "As an intermediate student, LearnHub helped me strengthen my skills. The content is well-structured, and the community support is fantastic.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Anil",
      role: "Developer",
      review:
        "I love how LearnHub provides real-world resources that align with industry standards. The learning paths are very practical and helpful.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Sara Lee",
      role: "Designer",
      review:
        "LearnHub is a one-stop solution for learning. Whether you're a beginner or intermediate, the platform has something for everyone.",
      image: "https://via.placeholder.com/100",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };
  const [ismed,setmed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
      if(window.innerWidth >= 700 && window.innerWidth <= 1230){
        setmed(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ismed]);

  return (
  
    <div className="testimonial-section">
      <h2 className="testimonial-heading">What Our Users Say</h2>
      {isMobile ? (
        <>
        <div className="testimonial-container">
          <div className="testimonial-slider">
            <div className="testimonial-card">
              <h4 className="testimonial-name">
                {testimonials[currentIndex].name}
              </h4>
              <p className="testimonial-role">
                {testimonials[currentIndex].role}
              </p>
              <p className="testimonial-review">
                {testimonials[currentIndex].review}
              </p>
            </div>
          </div>
        </div>
        <div className="slider-controls">
        <button className="prev" onClick={prevSlide}>Prev</button>
         <button  className="next" onClick={nextSlide}>Next</button> 
        </div>
        </>
      //   {/* Navigation buttons */}
      // {/* <div className="slider-controls">
      //   <button className="prev" onClick={prevSlide}>
      //     Prev
      //   </button>
      //   <button className="next" onClick={nextSlide}>
      //     Next
      //   </button>
      // </div> */}
      ) : (
       
         <div className="testimonial-container">
          <div className="testimonial-slider">
            {testimonials.slice(currentIndex, currentIndex + (ismed ? 1 : 3)).map((test) => (
              <div className="testimonial-card" key={test.name}>
                <h4 className="testimonial-name">{test.name}</h4>
                <p className="testimonial-role">{test.role}</p>
                <p className="testimonial-review">{test.review}</p>
              </div>
            ))}
          </div>
          
        </div>
          
          
      )}

      
    </div>
    
  );
};

export default TestimonialSlider;
