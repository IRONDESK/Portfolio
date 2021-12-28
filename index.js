function menuMove() {
    const indexLink = document.querySelector("#link-index");
    const resumeLink = document.querySelector("#link-resume");
    const worksLink = document.querySelector("#link-works");

    indexLink.addEventListener("click", () => {
        document.querySelector(".contents-index").classList.remove("off");
        document.querySelector(".contents-resume").classList.add("off");
        document.querySelector(".contents-works").classList.add("off");
    })
    resumeLink.addEventListener("click", () => {
        document.querySelector(".contents-index").classList.add("off");
        document.querySelector(".contents-resume").classList.remove("off");
        document.querySelector(".contents-works").classList.add("off");
    })
    worksLink.addEventListener("click", () => {
        document.querySelector(".contents-index").classList.add("off");
        document.querySelector(".contents-resume").classList.add("off");
        document.querySelector(".contents-works").classList.remove("off");
    })
};

function darkmode() {
    const body = document.querySelector("body");
    const darkBtn = body.querySelector("#dark-btn");

    darkBtn.addEventListener("click", () => {
        if (body.classList.contains("dark")) {
            document.querySelector("body").classList.remove("dark");
        } else {
            document.querySelector("body").classList.add("dark");
        }
    })
}

menuMove();
darkmode();