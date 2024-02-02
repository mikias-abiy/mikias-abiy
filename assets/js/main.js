
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded",
  async function () {
    const firstNameElt = document.querySelector(".sidebar-name .first-name");
    const lastNameElt = document.querySelector(".sidebar-name .last-name");
    const firstName = "Mikias";
    const lastName = "Abiy";
    const maxWidth = window.matchMedia("(max-width: 900px)");

    for (let i = 0; i < firstName.length; i++) {
      firstNameElt.innerText += firstName[i];
      await sleep(200);
    }

    for (let i = 0; i < lastName.length; i++) {
      lastNameElt.innerText += lastName[i];
      await sleep(200);
    }

    linksManager(maxWidth);
    console.log("Called Links managere.")

  }
);

const toggleSidebarOn = document.querySelector("#toggleSidebarOn");

toggleSidebarOn.addEventListener('click',
  function () {
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    const toggleSidebarOn = document.querySelector("#toggleSidebarOn");

    toggleSidebarOn.style.display = "none";
    main.style.display = "none";
    sidebar.style.display = "block";
  }
);

const toggleSidebarOff = document.querySelector("#toggleSidebarOff");

toggleSidebarOff.addEventListener('click',
  function () {
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    const toggleSidebarOn = document.querySelector("#toggleSidebarOn");

    toggleSidebarOn.style.display = "block";
    main.style.display = "block";
    sidebar.style.display = "none";
  }
);

function linksManager (maxWidth) {
  console.log(maxWidth.matches)
  if (maxWidth.matches) {
    navLinks = document.querySelectorAll(".sidebar a");
    console.log(navLinks)
    navLinks.forEach(element => {
      element.addEventListener('click', ()=> {
          const sidebar = document.querySelector(".sidebar");
          const main = document.querySelector(".main");
          const toggleSidebarOn = document.querySelector("#toggleSidebarOn");
        
          toggleSidebarOn.style.display = "block";
          main.style.display = "block";
          sidebar.style.display = "none";
          console.log("exectued");
         });
    });
  }
}