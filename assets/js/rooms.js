const userOptions = document.getElementById("user_options")
const QuantityPerson = document.getElementsByClassName("QuantityPerson")[0]

userOptions.addEventListener("focus", ()=>{
    QuantityPerson.classList.add("QuantityPerson__show")
})

userOptions.addEventListener("blur", ()=>{
    QuantityPerson.classList.remove("QuantityPerson__show")
})