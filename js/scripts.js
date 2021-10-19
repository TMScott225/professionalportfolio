
window.addEventListener('DOMContentLoaded', event => {

    // Magic Scroll
    // var scene = new ScrollMagic.Scene();
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: '#services', // starting scene, when reaching this element
    //     duration: 400 // pin the element for a total of 400px
    //   })

    //   controller.addScene(scene);

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

  
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
    
    let linkedin=document.querySelector('.bi-linkedin');
    let pdf=document.querySelector('.bi-file-pdf');
    let app=document.querySelector('.port-app');
    let amp=document.querySelector('.port-amp');
    let real=document.querySelector('.port-real');
    linkedin.addEventListener('click',()=>{
        window.open('https://www.linkedin.com/in/travis-scott-1b666146/')
    });
    pdf.addEventListener('click',()=>{
        window.open('./assets/files/resume.pdf')
    });
    app.addEventListener('click',()=>{
        window.open('https://play.google.com/store/apps/details?id=com.mobileblkhistriv')
    })
    amp.addEventListener('click',()=>{
        window.open('https://ampbeautyla.com/')
    })
    real.addEventListener('click',()=>{
        window.open('https://github.com/TMScott225/universerealty')
    })
});

