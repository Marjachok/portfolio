gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
if (ScrollTrigger.isTouch !== 1) {
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 0.6,
    effects: true,
})

gsap.fromTo(".hero",{ opacity:1 },{
    opacity:0,
    scrollTrigger:{
        trigger:".hero",
        start:"center",
        end:"750",

        scrub:true
    }
})



 gsap.fromTo(".sec1", { opacity: 0, x: -150 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
       trigger: '.sec1',
       start: '-850',
        end: '-100',
       scrub: true
     }
    })

    gsap.fromTo(".sec3", { opacity: 0, x: -150 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
         trigger: '.sec3',
         start: '-850',
          end: '-100',
         scrub: true
       }
      })
  




    gsap.fromTo('.sec2', { opacity: 0, x: 150 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: ".sec2",
            start: '-750',
            end: 'top',
            scrub: true
        }
    })

    gsap.fromTo('.sec4', { opacity: 0, x: 150 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: ".sec4",
            start: '-750',
            end: 'top',
            scrub: true
        }
    })

    gsap.fromTo('.sec7', { opacity: 0, x: -150 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: ".sec7",
            start: '-750',
            end: 'top',
            scrub: true
        }
    })


    gsap.fromTo('.sec8', { opacity: 0, x: 150 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: ".sec8",
            start: '-750',
            end: 'top',
            scrub: true
        }
    })
}