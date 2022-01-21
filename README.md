# Portfolio
 > 개인 이력 및 포트폴리오 정리
 * **나를 잘 보여줄 수 있는 형식의** 포트폴리오
 * https://irondesk.netlify.app/

 >> 메인 화면
![Screenshot 2022-01-06 at 01 53 02](https://user-images.githubusercontent.com/87234410/148256791-f12cfde1-5bf0-47fa-b511-7a6b90d1d30b.jpg)

 >> RESUME 화면 (DARK-MDOE)
![image](https://user-images.githubusercontent.com/87234410/148256918-d3a95d2d-1f66-41e0-826f-4a1f5520bbeb.png)


## 📌 목적
### 의도 및 목표
 * 포트폴리오 제작을 겸하여, 바닐라 JavaScript와 SCSS를 활용한 서비스를 만들기
 * 바닐라 JavaScript로 한 페이지에서 작동되는 웹앱(web-app) 만들기
 * 디자인 성향과 역량을 보여줄 수 있는 디자인적 기획 

## 🗂️ 구조
```js
📦Portfolio
 ┣ 📂css
 ┃ ┣ 📜content.css
 ┃ ┣ 📜content.css.map
 ┃ ┣ 📜content.scss
 ┃ ┣ 📜reset.css
 ┃ ┣ 📜style.css
 ┃ ┣ 📜style.css.map
 ┃ ┗ 📜style.scss
 ┣ 📂img
 ┃ ┣ 📂thumnail
 ┃ ┗ 📜myphoto.gif
 ┣ 📜index.html
 ┣ 📜index.js
 ┗ 📜README.md
```

## 💻 사용 스택
 * SCSS(SASS) : SCSS의 ``@mixin`` 등 쿼리를 활용한 스타일 마크업의 효율화
 * 바닐라 JavaScript

## 📌 요약
### ✔️ 주요 기능
  1. 메뉴 간 자연스러운 전환이 가능한 web-app 느낌 구현
  2. 다크 모드

#### 웹앱(web-app)
 * 메뉴 전환 간 자연스러운 통일감을 주기 위해 바닐라 JavaScript로 웹앱의 느낌을 구현했습니다.
 * 하나의 HTML 안에 각 메뉴의 콘텐트를 ``section`` 태그로 감싸고, 클래스를 부여하였습니다.
 * 부여된 요소의 클래스에 ``on``과 ``off``을 넣고 제거하는 방식으로 구현하게 되었습니다.
```js
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
```

#### 다크모드
```js
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
```
