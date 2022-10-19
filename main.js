let matchStatus = document.querySelector(".matchStatus")
const pwd1 = document.querySelector("#password")
const pwd2 = document.querySelector("#confirm_password")

function checkPassword() {
 
    if (pwd1.value !== pwd2.value) {
        matchStatus.style.display = "block"
        matchStatus.style.color = "red"
        matchStatus.innerHTML = "Passwords do not match"
        return false
    } else {
        matchStatus.style.display = "block"
        matchStatus.style.color = "green"
        matchStatus.innerHTML = "Passwords match"
    }
}  

pwd1.addEventListener("keyup", () => {
    checkPassword();
})

pwd2.addEventListener("keyup", () => {
    checkPassword();
})