const navbar = () => {
    let mainNavLinks = document.querySelectorAll("nav ul li a");
    const barsIcon = document.querySelector (".bars-icon");
    const nav = document.querySelector(".links");
    const links = document.querySelectorAll(".links li");
    const body = document.querySelector("body");

    let lastId;
    let current = [];

    window.addEventListener("scroll", (event) => {
        let fromTop = window.scrollY + 80;

        mainNavLinks.forEach(link => {
          let section = document.querySelector(link.hash);

          if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });

    barsIcon.addEventListener("click", (event) => {

        event.stopPropagation();
        nav.classList.toggle("nav-active");

        // Animated links
        links.forEach((link, index) => {
            if (link.style.animation === "") {
              link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
    });

    body.addEventListener("click", () => {
      nav.classList.remove("nav-active");
    });

    nav.addEventListener("click", (event) => {
      event.stopPropagation();
    });
}

navbar();