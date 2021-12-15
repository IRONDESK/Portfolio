
function textChange() {
    document.querySelector(".header-item").addEventListener("mouseover", () => {
        document.querySelector("#header-msg").innerText = "All is well."
    })
    document.querySelector(".header-item").addEventListener("mouseout", () => {
        document.querySelector("#header-msg").innerText = "すべては よくなる。"
    })
}

textChange();