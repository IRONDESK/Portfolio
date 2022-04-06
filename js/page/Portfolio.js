const Portfolio = () => {
    function template (
        data = {title, team, github, duration, member, summary, detail, stack, link, thumbnail}
    ) {
        return (`
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>${data.title}</strong>
                    <span class="category1">${data.team ? "TEAM" : "INDIVIDUAL"}</span>
                    <a href=${data.github} class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>${data.duration}</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>${data.member}</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>${data.summary}</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        ${data.detail.map(v => `<li>${v}</li>`).join("")}
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span class="stack-wrap">${data.stack.map(v => `<stack>${v}</stack>`).join("")}</span>
                </li>
            </ul>
            <a href=${data.link ? data.link : "#"} class="img-link">
                <img src=${data.thumbnail} alt=${data.title}>
            </a>
        </article>
        `);
    };

    return (`
    <section class="contents-works">
        <article class="img-cont"></article>
        <h1 class="title">여기는<br><strong>참여한 프로젝트 목록입니다.</strong></h1>
        ${
            template({
            title : "MOSS 모여라 스터디",
            team : true,
            github : "https://github.com/IRONDESK/moss",
            duration : "2022. 03 - 진행 중",
            member : "Front-End/Back-End 6명",
            summary : "스터디 그룹 연결 및 서포트 플랫폼",
            detail : ["TypeScript 기반의 React/Next.js로 구현한 웹 서비스",
                    "d3.js로 벡터 유형의 과제 달성율 차트 구현",
                    "다양한 Hook과 setTimeout으로 구현한 스터디 타이머",
                    "스터디 그룹 데이터의 Back-End 스키마 모델링"],
            stack : ["HTML", "CSS(@emotion)", "TypeScript", "React", "Next.js", "d3.js", "Prisma", "PlanetScale"],
            link : "https://github.com/IRONDESK/moss",
            thumbnail : "./img/thumnail/9.jpg"
            })
        }
        ${
            template({
            title : "가수 팬심 테스트",
            team : true,
            github : "https://github.com/OhRaeKyu/music-quiz",
            duration : "2022. 02",
            member : "Front-End 2명",
            summary : "가수의 앨범 및 노래 테스트 제공 서비스",
            detail : ["스포티파이 API를 활용한 트렌드성 테스트 서비스 구현",
                    "다양한 Hook과 React Player 모듈 등을 활용한 퀴즈 자동 생성",
                    "카카오 API를 활용한 공유하기 서비스 제공"],
            stack : ["HTML", "CSS(Styled Component)", "TypeScript", "React"],
            link : "https://music-quizz.vercel.app/",
            thumbnail : "./img/thumnail/8.jpg"
            })
        }

        ${
            template({
            title : "영화 감상 기록",
            team : false,
            github : "https://github.com/IRONDESK/movie-node-project",
            duration : "2022. 01 - 2022. 02",
            member : "Front-End 1명",
            summary : "감상한 영화 후기 및 평점 기록과 영화 검색 서비스",
            detail : ["Node.js와 MongoDB를 활용한 CRUD 영화 기록 서비스 구현",
                    "네이버 영화 API의 영화 정보 활용"],
            stack : ["HTML", "CSS(SCSS)", "JavaScript", "Node.js(MongoDB)"],
            link : "https://github.com/IRONDESK/movie-node-project",
            thumbnail : "./img/thumnail/7.jpg"
            })
        }

        ${
            template({
            title : "감귤마켓",
            team : true,
            github : "https://github.com/jinkwon9301/Oh-my-tangerine",
            duration : "2021. 12 - 2022. 01",
            member : "Front-End 3명",
            summary : "감귤 등 제주 농산물을 거래하는 종합 커뮤니티 서비스",
            detail : ["React를 기반으로 한 웹앱 서비스",
                    "Figma 디자인을 토대로 Front-End 작업",
                    "주어진 API로 Axios 모듈을 활용한 CRUD 서비스 구현"],
            stack : ["HTML", "CSS(Styled Component)", "JavaScript", "React"],
            link : "https://github.com/jinkwon9301/Oh-my-tangerine",
            thumbnail : "./img/thumnail/6.jpg"
            })
        }
        ${
            template({
            title : "개인 이력서 및 포트폴리오",
            team : false,
            github : "https://github.com/IRONDESK/Portfolio",
            duration : "2021. 11 - 2021. 12, 2022. 04",
            member : "Front-End 1명",
            summary : "이력서와 포트폴리오를 하나로 정리한 개인 웹사이트",
            detail : ["사이트 기획 및 디자인", 
                    "바닐라 JavaScript를 활용한 웹앱·컴포넌트 구현",
                    "SCSS를 활용한 스타일 마크업 효율화"],
            stack : ["HTML", "CSS(SCSS)", "JavaScript"],
            link : "https://irondesk.netlify.app/",
            thumbnail : "./img/thumnail/2.jpg"
            })
        }
        ${
            template({
            title : "간단한 가계부",
            team : false,
            github : "https://github.com/IRONDESK/HouseholdAccount",
            duration : "2021. 11 - 2021. 12",
            member : "Front-End 1명",
            summary : "구매 내역을 간단히 정리해주는 가계부 웹서비스 프로젝트",
            detail : ["사이트 기획 및 디자인",
                "Local Storage 활용한 Back Data 구현"],
            stack : ["HTML", "CSS(SCSS)", "JavaScript"],
            link : "https://irondesk.github.io/HouseholdAccount/",
            thumbnail : "./img/thumnail/4.jpg"
            })
        }
        ${
            template({
            title : "1만시간의 법칙",
            team : false,
            github : "https://github.com/IRONDESK/CloneProject/tree/main/time",
            duration : "2021. 11 - 2021. 12",
            member : "Front-End 1명",
            summary : "어떤 분야에서 전문가로 성장하기 위한 '1만 시간' 계산기",
            detail : ["바닐라 JavaScript를 활용한 로딩 화면, 값 계산"],
            stack : ["HTML", "CSS(SCSS)", "JavaScript"],
            link : "https://irondesk.github.io/CloneProject/time",
            thumbnail : "./img/thumnail/5.jpg"
            })
        }
        ${
            template({
            title : "카카오 클론",
            team : false,
            github : "https://github.com/IRONDESK/KakaoClone",
            duration : "2021. 11 - 2021. 12",
            member : "Front-End 1명",
            summary : "카카오 회사 페이지 클론 코딩",
            detail : ["메인 페이지 Front-End 작업", "바닐라 JavaScript를 활용한 다크모드 구현"],
            stack : ["HTML", "CSS(SCSS)", "JavaScript"],
            link : "https://irondesk.github.io/KakaoClone/",
            thumbnail : "./img/thumnail/3.jpg"
            })
        }
        ${
            template({
            title : "사라질전당포展",
            team : false,
            github : "https://github.com/IRONDESK/pawnshop-exhibition",
            duration : "2019. 10 - 2019. 11",
            member : "Front-End 1명",
            summary : "전시회 홍보 및 소개 사이트",
            detail : ["fullpage.js를 활용한 전시 섹션별 소개 구획",
                    "모바일 디바이스를 고려한 반응형 페이지"],
            stack : ["HTML", "CSS(SCSS)", "JavaScript", "fullpage.js"],
            link : "http://adpower.org/2019",
            thumbnail : "./img/thumnail/1.jpg"
            })
        }
    </section>
    `
    );
}

export default Portfolio;