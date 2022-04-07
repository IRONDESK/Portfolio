import Main from "./page/Main.js";
import Resume from './page/Resume.js';
import Portfolio from './page/Portfolio.js';

const { hash } = location
const App = document.getElementById("App");
const indexLink = document.getElementById("link-index");
const resumeLink = document.getElementById("link-resume");
const worksLink = document.getElementById("link-works");

export default function getApp({target}) {
    if (hash === '#' || hash === '') {
        target.innerHTML = Main();
    } else if (hash === '#resume') {
        target.innerHTML = Resume();
    } else if (hash === '#portfolio') {
        target.innerHTML = Portfolio();
    };
}

function menuMove() {
    function HashRoute(name) {
        window.location.replace(name);
    };

    indexLink.addEventListener("click", () => {
        HashRoute("#");
        App.innerHTML = Main();
    })
    resumeLink.addEventListener("click", () => {
        HashRoute("#resume")
        App.innerHTML = Resume();
    })
    worksLink.addEventListener("click", () => {
        HashRoute('#portfolio');
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