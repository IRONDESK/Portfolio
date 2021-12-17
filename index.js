
function textChange() {
    document.querySelector(".cont-item").addEventListener("mouseover", () => {
        document.querySelector("#header-msg").innerText = "All is well."
    })
    document.querySelector(".cont-item").addEventListener("mouseout", () => {
        document.querySelector("#header-msg").innerText = "すべては よくなる。"
    })
}

textChange();