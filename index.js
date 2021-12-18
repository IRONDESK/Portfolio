function textChange() {
    /// Device에 따라 다른 문구 보여주기
    const mql = window.matchMedia("screen and (max-width: 1300px)");
    document.querySelector(".cont-item").addEventListener("mouseover", () => {
        document.querySelector("#header-msg").innerText = mql.matches ? "Portfolio" : "Port- folio";
    })
    document.querySelector(".cont-item").addEventListener("mouseout", () => {
        document.querySelector("#header-msg").innerText = "ポート フォリオ";
    })
};

function menuMove() {
    const indexLink = document.querySelector("#link-index");
    const aboutLink = document.querySelector("#link-about");
    const skillsLink = document.querySelector("#link-skills");
    const worksLink = document.querySelector("#link-works");

    indexLink.addEventListener("click", () => {
        document.querySelector(".contents-index").classList.remove("off");
        document.querySelector(".contents-about").classList.add("off");
        document.querySelector(".contents-skills").classList.add("off");
        document.querySelector(".contents-works").classList.add("off");
    })
    aboutLink.addEventListener("click", () => {
        document.querySelector(".contents-index").classList.add("off");
        document.querySelector(".contents-about").classList.remove("off");
        document.querySelector(".contents-skills").classList.add("off");
        document.querySelector(".contents-works").classList.add("off");
    })
    skillsLink.addEventListener("click", () => {
        document.querySelector(".contents-index").classList.add("off");
        document.querySelector(".contents-about").classList.add("off");
        document.querySelector(".contents-skills").classList.remove("off");
        document.querySelector(".contents-works").classList.add("off");
    })
    worksLink.addEventListener("click", () => {
        document.querySelector(".contents-index").classList.add("off");
        document.querySelector(".contents-about").classList.add("off");
        document.querySelector(".contents-skills").classList.add("off");
        document.querySelector(".contents-works").classList.remove("off");
    })
};

textChange();
menuMove();