document.getElementById('lastModified').textContent = `Last modification ${document.lastModified}`

const characterValidation = (e) => {
    e.preventDefault()
    const username = document.getElementById("username")
    const verifyUsername = document.getElementById("verify_username")

    if (username.value !== verifyUsername.value) {
        e.preventDefault()
        document.getElementById("form-message").textContent = "Passwords do not match."
        username.value = ""
        verifyUsername.value = ""
        document.getElementById("username").focus()
        return
    }

    const fieldsStyles = "color: #fff774;padding: 10px;text-align: center;"
    const valuesStyles = "color: white;padding: 10px;text-align: center;"
    document.querySelector("html").innerHTML = `
    <div style="background-color: rgb(232 232 232);width: 200px;">
    <h3 style="text-align: center;padding-top: 20px;">Form Input</h3>
    <table style="margin: auto; padding-bottom: 10px; width: 90%;">
        <thead style="background-color: black;color: white;">
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody style="background-color: rgb(69 69 69);color: #fff774;">
            <tr>
                <td style="${fieldsStyles}"">Name:</td>
                <td style="${valuesStyles}" id="tbl-name">${document.getElementById("full_name").value}</td>
            </tr>
            <tr>
                <td style="${fieldsStyles}">Email:</td>
                <td style="${valuesStyles}" id="tbl-email">${document.getElementById("email").value}</td>
            </tr>
            <tr>
                <td style="${fieldsStyles}">Rating:</td>
                <td style="${valuesStyles}" id="tbl-rating">${document.getElementById("rating").value}</td>
            </tr>
            <tr>
                <td style="${fieldsStyles}">Username:</td>
                <td style="${valuesStyles}" id="tbl-username">${username.value}</td>
            </tr>
        </tbody>
    </table>
    </div>
    `
}


window.addEventListener("submit", (e) => characterValidation(e))