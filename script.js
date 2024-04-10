function timelineOne() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 0.8,
            markers: false,
            pin: true,
            end: "bottom -250%"
        }
    });

    tl
    .to("#colorc", {
        color: "white",
        stagger: .1,
        delay: .5,
    }, "hello3")  
    .to("#top-right #text", {
        color: "white",
        stagger: .1,
        delay: .5,
    }, "hello3") 
        .to("#circle #btm img", {
            scale: 1,
            rotate: "-180deg",
            duration: 1,
            ease: Power1,
            stagger: .1
        }, "hello")
        
        .to("#circle #top img", {
            scale: 1,
            duration: 1,
            ease: Power1,
            stagger: .1
        }, "hello")
        .to("#overlay>h1", {
            bottom: "-50%",
            ease: Power1
        }, "hello")
        .to("#gola", {
            scale: 2,
            top: "50%",
            duration: 0.8,
            ease: Power1
        }, "hello")
        .to("#gola", {
            opacity: 0,
            ease: Power1
        }, "hello2")
        .to("#centerimg h5", {
            opacity: 0,
            ease: Power1
        }, "hello")
        .to("#cimage img", {
            scale: "0",
            stagger: .1,
            duration: 1,
            ease: Power1
        }, "hello")
        .to("#circle", {
            scale: 0.6,
            ease: Power1
        }, "hello")
        .to("#smcircle", {
            scale: 0,
            duration: 2,
            ease: Power1
        }, "hello2")
        .to("#circle", {
            scale: 0,
            duration: 2,
            ease: Power1
        }, "hello2")
        .to("#overlay>h1#pf", {
            rotate: 0,
            bottom: "2%",
            ease: Power1
        }, "hello2")
        .to("#bluepart", {
            top: "0%",
            duration: 2,
            ease: Power1
        })
        .to("#bluepart", {
            top: "-80%",
            ease: Power1,
            duration: 2
        })
}
function timelineTwo() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: "top top",
            scrub: 0.8,
            markers: false,
            pin: true,
            end: "bottom -50%"
        }
    })
    tl2
        .to(".circle", {
            top: "50%",
            stagger: .1,
            ease: Power1
        })
        .to(".circle", {
            left: "50%",
            stagger: .1,
            ease: Power1
        })
        .to(".pu", {
            scale: 6,
            stagger: .1,
            ease: Power1
        })
        .to(".pu", {
            background: "linear-gradient(to right, rgb(16, 80, 153), rgb(220, 240, 207))",
            delay: 1,
            ease: Power1
        }, "slide")
        .to("#stop h1", {
            left: "-320%",
            ease: Power1,
            duration: 8
        }, "slide")
        .to("#sbtm #one", {
            opacity: 0,
            delay: 1.3,
            ease: Power1
        }, "slide")
        .to("#sbtm #two", {
            opacity: 1,
            delay: 1.9,
            ease: Power1
        }, "slide")
}



timelineOne();
timelineTwo();