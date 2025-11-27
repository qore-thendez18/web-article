// POPUP HANDLING
const popupButtons = document.querySelectorAll(".popup-btn");
const closeButtons = document.querySelectorAll(".close-popup");
const popups = document.querySelectorAll(".popup");

// Open popup when button is clicked
popupButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.popup);
        if (target) target.style.display = "flex";
    });
});

// Close popup
closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        popups.forEach(p => p.style.display = "none");
    });
});

// Close popup when clicking outside
popups.forEach(popup => {
    popup.addEventListener("click", e => {
        if (e.target === popup) popup.style.display = "none";
    });
});