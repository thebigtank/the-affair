export default function heroAnimation() {
    let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}});

    tl.to('h1', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2});
}