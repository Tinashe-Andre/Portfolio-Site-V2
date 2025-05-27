//Typing animation

var typed = new Typed("#typed", {
    strings: ["Web Developer?", "Graphic Designer?", "Mobile App Developer?"],
    typeSpeed: 45,
    backSpeed: 45,
    backDelay: 1500,
    loop: true
  });

// Close menu when clicking a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.mobile-nav').classList.remove('show');
  });
});

// Scroll reveal animation
const scrollElements = document.querySelectorAll('.big-box, .project-big-box, .exp-big-container, .flipbook-container');

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    }
  });
};

// Initialize elements as hidden
scrollElements.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Initialize animations on load
window.addEventListener('load', () => {
  handleScrollAnimation();
});
  
//form submission
const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form redirect

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        successMessage.style.display = "block";
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 5000);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("Oops! Something went wrong. Please try again.");
    });
  });

