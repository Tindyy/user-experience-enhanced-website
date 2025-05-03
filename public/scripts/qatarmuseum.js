document.addEventListener("DOMContentLoaded", function () {
  const themeSwitch = document.getElementById("switch");

  // Check if user has a saved preference
  if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      themeSwitch.checked = true;
      console.log("Dark mode loaded from local storage.");
  } else {
      console.log("Light mode loaded from local storage.");
  }

  themeSwitch.addEventListener("change", function () {
      if (this.checked) {
          document.body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark");
          console.log("Dark mode enabled.");
      } else {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
          console.log("Light mode enabled.");
      }

      console.log("Theme in localStorage:", localStorage.getItem("theme"));
  });
});


//like animation
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".like-form").forEach((form) => {
    form.addEventListener("submit", async function (e) {
      e.preventDefault(); // Prevent page reload

      let button = this.querySelector(".like-button");
      let action = this.getAttribute("action");
      let method = this.getAttribute("method");

      let response = await fetch(action, {
        method: method,
        body: new FormData(this),
      });

      let data = await response.json();

      if (data.success) {
        if (data.is_liked) {
          this.setAttribute("action", action.replace("/like/", "/unlike/"));
          button.classList.add("active");
          generateClones(button); // Run animation
        } else {
          this.setAttribute("action", action.replace("/unlike/", "/like/"));
          button.classList.remove("active");
        }
      } else {
        console.error("Error updating like status:", data.message);
      }
    });
  });
});

// ANIMATION FUNCTION
function generateClones(button) {
  let clones = randomInt(2, 4);
  for (let it = 1; it <= clones; it++) {
    let clone = button.querySelector("svg").cloneNode(true),
      size = randomInt(5, 16);
    button.appendChild(clone);
    clone.setAttribute("width", size);
    clone.setAttribute("height", size);
    clone.style.position = "absolute";
    clone.style.transition =
      "transform 0.5s cubic-bezier(0.12, 0.74, 0.58, 0.99) 0.3s, opacity 1s ease-out .5s";
    
    setTimeout(() => {
      clone.style.transform =
        `translate3d(${plusOrMinus() * randomInt(10, 25)}px, ${plusOrMinus() * randomInt(10, 25)}px, 0)`;
      clone.style.opacity = 0;
    }, 1);

    setTimeout(() => clone.remove(), 900);
    setTimeout(() => button.classList.remove("animated"), 600);
  }
}

function plusOrMinus() {
  return Math.random() < 0.5 ? -1 : 1;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
