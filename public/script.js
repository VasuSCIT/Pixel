document.addEventListener("DOMContentLoaded", function () {
    const messageBox = document.getElementById("messageBox");

    // Function to handle cell click
    function handleCellClick(event) {
        const cellValue = prompt("Enter the value for this cell:");
        event.target.innerText = cellValue;
    }

    // Add click event to clickable cells
    document.querySelectorAll(".hex-cell.clickable").forEach(cell => {
        cell.addEventListener("click", handleCellClick);
    });

    // Function to handle validation button click
    document.getElementById("validateButton").addEventListener("click", function () {
        const cell1 = document.querySelector('[data-cell="1"]').innerText;
        const cell2 = document.querySelector('[data-cell="2"]').innerText;

        fetch('/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cell1, cell2 })
        })
        .then(response => response.json())
        .then(data => {
            messageBox.innerText = data.message;
            messageBox.style.display = "block";
        })
        .catch(error => console.error('Error:', error));
    });
});
