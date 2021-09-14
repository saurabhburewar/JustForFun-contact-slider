const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.name span', { y: "0%", duration: 1, stagger: 0.25 });
tl.to('.intro', { opacity: 0, duration: 1.5, delay: 1 });
tl.to('.intro', { zIndex: -100 });

function refreshSlider() {
    document.getElementById("slider").value = "";
    document.getElementById("numberOutput").value = "";
}