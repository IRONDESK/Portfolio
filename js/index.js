import Main from "./Main.js";
import Resume from './Resume.js';
import Portfolio from './Portfolio.js';

const App = document.getElementById("App");
const indexLink = document.getElementById("link-index");
const resumeLink = document.getElementById("link-resume");
const worksLink = document.getElementById("link-works");

function HistoryRoute(pathName) {
    window.history.pushState({}, pathName, pathName);
};

function menuMove() {
    indexLink.addEventListener("click", () => {
        // HistoryRoute('/');
        App.innerHTML = Main();
    })
    resumeLink.addEventListener("click", () => {
        // HistoryRoute('/resume');
        App.innerHTML = Resume();
    })
    worksLink.addEventListener("click", () => {
        // HistoryRoute('/portfolio');
        App.innerHTML = Portfolio();
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
App.innerHTML = Main();