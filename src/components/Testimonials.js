import React from 'react';

// Automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slides?.length > 0) {
    slides[slideIndex - 1].style.display = 'block';
  }
  setTimeout(showSlides, 5000); // Change testimonial image every 5 seconds
}

export const Testimonials = () => {
  return (
    <div>
      <div className='slideshow-container'>
        <div className='mySlides fade'>
          <p>
            "...a distinct attention to detail, strong work ethic, and knack for
            working through problems to achieve the desired result..."
          </p>

          <p className='quote-name'>
            -- Chandler Green
            <br />
            Associate Software Engineer at Infosys
          </p>
        </div>
        <div className='mySlides fade'>
          <p>"...a hard worker and goes out of his way to help others..."</p>

          <p className='quote-name'>-- David Briagas</p>
        </div>
        <div className='mySlides fade'>
          <p>
            "In the numerous events I worked with Derek, he demonstrated
            dedication and ability to overcome tough situations."
          </p>

          <p className='quote-name'>
            -- Maria Mireles
            <br />
            Junior Software Developer at Open Lending
          </p>
        </div>
        <div className='mySlides fade'>
          <p>"His great humor made him a pleasure to be around."</p>

          <p className='quote-name'>-- Donald Bull</p>
        </div>

        <div className='mySlides fade'>
          <p>
            "I believe that Derek Phelps would be a quality addition to any
            development team."
          </p>

          <p className='quote-name'>
            -- Robert Deckard M.Ed
            <br />
            Senior Software Engineer at The Home Depot
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
