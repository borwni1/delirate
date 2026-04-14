
function showAlertDanger(message) {
    const alerts = document.getElementById("alerts");

    const alert = document.createElement("div")
    alert.classList.add("alert")
    alert.classList.add("alert-danger")
    alert.textContent = message;

    if (alerts.children.length > 3) {
        alerts.children.item(0).remove()
    }

    alerts.appendChild(alert)
    setTimeout(() => { alert.remove() }, 5000)
}

function showAlertSuccess(message) {
    const alerts = document.getElementById("alerts");

    const alert = document.createElement("div")
    alert.classList.add("alert")
    alert.classList.add("alert-success")
    alert.textContent = message;

    if (alerts.children.length > 3) {
        alerts.children.item(0).remove()
    }

    alerts.appendChild(alert)
    setTimeout(() => { alert.remove() }, 5000)
}

function showAlertWarning(message) {
    const alerts = document.getElementById("alerts");

    const alert = document.createElement("div")
    alert.classList.add("alert")
    alert.classList.add("alert-warning")
    alert.textContent = message;

    if (alerts.children.length > 3) {
        alerts.children.item(0).remove()
    }

    alerts.appendChild(alert)
    setTimeout(() => { alert.remove() }, 5000)
}