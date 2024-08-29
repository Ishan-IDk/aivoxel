var typing=new Typed(".text", {
    strings: ["Reimagined.", "Redefined.", "Revolutionized."],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});

gsap.fromTo(
    ".page",
    {display: "none",},
    {
      opacity: 1,
      display: "",
      duration: 1.4,
      delay: 3.5,
    }
  );
  gsap.fromTo(
    ".loader",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1,
      delay: 2.5,
    }
  );
