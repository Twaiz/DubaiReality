function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("el-scroll-show");
    }
  });
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".el-scroll-hidden");
for (let elm of elements) {
  observer.observe(elm);
}
