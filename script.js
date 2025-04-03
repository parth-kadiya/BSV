document.addEventListener("DOMContentLoaded", function () {
    const calendarWrapper = document.querySelector(".calendar-wrapper");
    const calendarImage = document.querySelector(".calendar-image");
    const body = document.body;

    const fullscreenCalendar = document.createElement("div");
    fullscreenCalendar.classList.add("fullscreen-calendar");

    const fullscreenImage = document.createElement("img");
    fullscreenImage.src = calendarImage.src;

    const closeButton = document.createElement("span");
    closeButton.classList.add("close-btn");
    closeButton.innerHTML = "&times;";

    fullscreenCalendar.appendChild(closeButton);
    fullscreenCalendar.appendChild(fullscreenImage);

    body.appendChild(fullscreenCalendar);

    calendarWrapper.addEventListener("click", () => {
        fullscreenCalendar.classList.add("visible");
    });

    closeButton.addEventListener("click", () => {
        fullscreenCalendar.classList.remove("visible");
    });

    fullscreenCalendar.addEventListener("click", (e) => {
        if (e.target === fullscreenCalendar) {
            fullscreenCalendar.classList.remove("visible");
        }
    });

    const popup = document.createElement("div");
    popup.id = "popup";
    popup.classList.add("popup-container");

    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");

    const popupText = document.createElement("p");
    popupText.textContent = "Do you want to join the event?";

    const joinEventBtn = document.createElement("button");
    joinEventBtn.id = "joinEventBtn";
    joinEventBtn.classList.add("btn", "btn-primary");
    joinEventBtn.textContent = "Yes";

    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancelBtn";
    cancelBtn.classList.add("btn", "btn-secondary");
    cancelBtn.textContent = "No";

    popupContent.appendChild(popupText);
    popupContent.appendChild(joinEventBtn);
    popupContent.appendChild(cancelBtn);
    popup.appendChild(popupContent);
    body.appendChild(popup);

    popup.classList.add("visible");

    joinEventBtn.addEventListener("click", function () {
        window.location.href = "event_page_url";
    });

    cancelBtn.addEventListener("click", function () {
        popup.classList.remove("visible");
    });
});
