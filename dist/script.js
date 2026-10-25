
function myLineUp(event) {
    event.preventDefault();

    let status = document.querySelector('input[name="status"]:checked').value;
    let date = document.getElementById("gameDate").value;
    let players = document.querySelectorAll('input[name="players"]:checked');

    let result = "Status: " + status + "<br>Date: " + date + "<br>Players: ";

    console.log("Status:", status);
    console.log("Date:", date);

    for (let player of players) {
        console.log("Player:", player.value);
        result += player.value + ", ";
    }

    console.log("Result:", result);

    document.getElementById("output").innerHTML = result;
}

document.getElementById("lineupForm").addEventListener("submit", myLineUp);
