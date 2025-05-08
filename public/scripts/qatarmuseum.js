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


/*Search bar*/ 


  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const objectItems = document.querySelectorAll('.object-container li');

    searchInput.addEventListener('input', function () {
      const searchValue = this.value.toLowerCase();

      objectItems.forEach(function (item) {
        const titleElement = item.querySelector('.object-info p');
        const title = titleElement ? titleElement.textContent.toLowerCase() : '';

        if (title.includes(searchValue)) {
          item.style.display = ''; // Show
        } else {
          item.style.display = 'none'; // Hide
        }
      });
    });
  });


