/*==================== SHOW MENU ====================*/
/*const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}*/


//showMenu('bx','menu-mobile');


const link_more_1 = document.querySelector('.link-more-1');
const link_more_2 = document.querySelector('.link-more-2');
const link_more_3 = document.querySelector('.link-more-3');

const link_less_1 = document.querySelector('.link-less-1');
const link_less_2 = document.querySelector('.link-less-2');
const link_less_3 = document.querySelector('.link-less-3');

const btn_register_1 = document.querySelector('.btn-register-1');
const btn_register_2 = document.querySelector('.btn-register-2');

const card_1 = document.querySelector('.card-1');
const card_2 = document.querySelector('.card-2');
const card_3 = document.querySelector('.card-3');

const card_verse_1 = document.querySelector('.card-verse-1');
const card_verse_2 = document.querySelector('.card-verse-2');
const card_verse_3 = document.querySelector('.card-verse-3');

link_more_1.addEventListener('click', (e) => {
    e.preventDefault();
    card_1.classList.add('flip-card');
    card_verse_1.classList.add('pointer-events-none');
    link_more_1.style.opacity = '0';
    btn_register_1.style.opacity = '0';
})

link_less_1.addEventListener('click', (e) => {
    e.preventDefault();
    card_1.classList.remove('flip-card');
    card_verse_1.classList.remove('pointer-events-none');
    link_more_1.style.opacity = '1';
    btn_register_1.style.opacity = '1';
})

link_more_2.addEventListener('click', (e) => {
    e.preventDefault();
    card_2.classList.add('flip-card');
    card_verse_2.classList.add('pointer-events-none');
    link_more_2.style.opacity = '0';
    btn_register_2.style.opacity = '0';
})

link_less_2.addEventListener('click', (e) => {
    e.preventDefault();
    card_2.classList.remove('flip-card');
    card_verse_2.classList.remove('pointer-events-none');
    link_more_2.style.opacity = '1';
    btn_register_2.style.opacity = '1';
})


    
    
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
/*
function scrollHeader(){
  const nav = document.querySelector('.bg-header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}

window.addEventListener('scroll', scrollHeader)
*/

/*==================== GSAP ====================*/  

/*--=========== GSAP SCROLLTRIGGER ============- */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    /*--=========== TIMELINE LOADING E HERO ============- */
    var tl1 = gsap.timeline();


    tl1
    .to('.screen-loading', {
        duration: 1.5,
        opacity: 0, 
        delay: 3,
        ease: "power4.out",
    })
    .from(".bg-hero", {
        duration: 2, 
        opacity: 0, 
        ease: "power4.out",
    }, '-=1.5')
    .from(".hero div", {
        duration: 2,  
        opacity: 0, 
        y: 200,
        stagger:{each: 0.1},
        ease: "power4.out",
    }, '-=2')




    /////////////////////////////////
    // SECTIONS
    /////////////////////////////////
    /*
    gsap.from("#section-01 div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-01',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });
*/
    gsap.from("#section-02 div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-02',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-03 div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-03',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-04 div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-04',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-05 div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-05',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-06 div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-06',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-07 div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-07',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-08 div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-08',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-09 div",{
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power4.out",
        stagger:{each: 0.2}, 
        scrollTrigger:{
            trigger: '#section-09',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });


    ////////////////////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////


});

//ScrollTrigger.addEventListener("scrollStart", () => ScrollTrigger.refresh() );



    


