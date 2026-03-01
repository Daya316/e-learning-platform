const params = new URLSearchParams(window.location.search);
const course = params.get("course");

const title = document.getElementById("courseTitle");
const video = document.getElementById("courseVideo");
const slider = document.getElementById("progress");
const value = document.getElementById("progressValue");

if (course === "html") {
  title.textContent = "HTML & CSS Fundamentals";
  video.src = "https://www.youtube.com/embed/UB1O30fR-EE";
}

if (course === "js") {
  title.textContent = "JavaScript Essentials";
  video.src = "https://www.youtube.com/embed/W6NZfCO5SIk";
}

if (slider && value) {
  slider.addEventListener("input", () => {
    value.textContent = slider.value + "%";
    localStorage.setItem("progress_" + course, slider.value);
  });
}
