```javascript
/* =====================================================
   MENU MOBILE
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =====================================================
   FERMER LE MENU APRÈS UN CLIC
===================================================== */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   ANNÉE AUTOMATIQUE
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   BOUTON RETOUR EN HAUT
===================================================== */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        backTop.style.display = "flex";

        backTop.style.alignItems = "center";

        backTop.style.justifyContent = "center";

    } else {

        backTop.style.display = "none";

    }

});


backTop.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   FORMULAIRE
===================================================== */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Merci " +
        name +
        " ! Votre message a été pris en compte."
    );

    form.reset();

});


/* =====================================================
   ANIMATION APPARITION AU SCROLL
===================================================== */

const elements =
    document.querySelectorAll(
        ".skill, .project, .service, .stat, .about-content"
    );


const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});
```
