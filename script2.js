document.addEventListener("DOMContentLoaded", function () {
    let selectedDepartureDate = null;
    let selectedReturnDate = null;
    let selectedDestination = null;
    let selectedPeopleCount = null;
    let reminderVisible = false;


    const departureDateInput = document.querySelector("#departureDateInput");
    const returnDateInput = document.querySelector("#returnDateInput");
    const reminderIcon = document.querySelector("#reminderIcon");
    const reminderInfo = document.querySelector("#reminderInfo");
    const searchButton = document.querySelector("#bookingButton");
    const reminderMessageElement = document.querySelector("#reminderMessage");
    const destinationSelect = document.querySelector("#destinationSelect");
    const peopleCountInput = document.querySelector("#peopleCountInput");

    flatpickr(departureDateInput, {
        dateFormat: "Y-m-d",
        minDate: "today",
        onChange: function (selectedDates, dateStr, instance) {
            selectedDepartureDate = selectedDates[0];
            returnDateInstance.set("minDate", selectedDepartureDate);

            if (selectedReturnDate !== null && selectedReturnDate < selectedDepartureDate) {
                selectedReturnDate = null;
                returnDateInstance.clear();
            }

            instance.redraw();
        },
        onDayCreate: function (dObj, dStr, fp, dayElem) {
            if (selectedDepartureDate !== null && selectedDepartureDate.toDateString() === dStr) {
                dayElem.classList.add("selected-departure");
            } else {
                dayElem.classList.remove("selected-departure");
            }

            if (selectedReturnDate !== null && selectedReturnDate.toDateString() === dStr) {
                dayElem.classList.add("selected-return");
            } else {
                dayElem.classList.remove("selected-return");
            }
        }
    });

    const returnDateInstance = flatpickr(returnDateInput, {
        dateFormat: "Y-m-d",
        minDate: "today"
    });

    returnDateInstance.set("onChange", function (selectedDates, dateStr, instance) {
        selectedReturnDate = selectedDates[0];

        if (selectedDepartureDate !== null && selectedReturnDate < selectedDepartureDate) {
            selectedReturnDate = null;
            returnDateInstance.clear();
        }

        departureDateInstance.redraw();
    });

    reminderIcon.addEventListener("click", function (event) {
        event.preventDefault();
        toggleReminder();
        // showReminder();
        // hideReminder();
    });
    function toggleReminder() {
        reminderVisible = !reminderVisible;
        if (reminderVisible) {
            showReminder();
        } else {
            hideReminder();
        }
    }
    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        saveFormData();
        clearInputs();
        hideReminder();
    });


    function hideReminder() {
        reminderInfo.classList.add("hidden");
    }
    function showReminder() {
        if (selectedDepartureDate !== null && selectedReturnDate !== null && selectedDestination !== null && selectedPeopleCount !== null) {
            const reminderMessage = `Bạn đã đặt lịch tới <strong>${selectedDestination}</strong> từ ngày <strong>${selectedDepartureDate.toLocaleDateString()}</strong> đến ngày <strong>${selectedReturnDate.toLocaleDateString()}</strong> cho <strong>${selectedPeopleCount}</strong> người. Đừng quên nhắc nhở!`;
            reminderMessageElement.innerHTML = reminderMessage;
            reminderInfo.classList.remove("hidden");
        } else {
            alert("Hãy điền đầy đủ thông tin trước khi đặt lịch.");
        }
    }
    function saveFormData() {
        selectedDepartureDate = departureDateInput.value ? new Date(departureDateInput.value) : null;
        selectedReturnDate = returnDateInput.value ? new Date(returnDateInput.value) : null;
        selectedDestination = destinationSelect.value;
        selectedPeopleCount = peopleCountInput.value;
    }

    function clearInputs() {
        departureDateInput.value = "";
        returnDateInput.value = "";
        destinationSelect.value = "#";
        peopleCountInput.value = "";
    }
});