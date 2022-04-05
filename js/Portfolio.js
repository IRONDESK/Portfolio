const Portfolio = () => {
    return (`
    <section class="contents-works">
        <article class="img-cont"></article>
        <h1 class="title">여기는<br><strong>참여한 프로젝트 목록입니다.</strong></h1>

        <!-- 모스 -->
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>MOSS 모여라 스터디</strong>
                    <span class="category1">TEAM</span>
                    <a href="https://github.com/IRONDESK/moss" class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>2022. 03 - 진행 중</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>Front-End/Back-End 6명</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>스터디 그룹 연결 및 서포트 플랫폼</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        <li>TypeScript 기반의 React/Next.js로 구현한 웹 서비스</li>
                        <li>d3.js로 벡터 유형의 과제 달성율 차트 구현</li>
                        <li>다양한 Hook과 setTimeout으로 구현한 스터디 타이머</li>
                        <li>스터디 그룹 데이터의 Back-End 스키마 모델링</li>
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span>HTML, CSS(@emotion), TypeScript, React, Next.js, d3.js, Prisma, PlanetScale</span>
                </li>
            </ul>
            <a href="https://github.com/IRONDESK/moss" class="img-link">
                <img src="./img/thumnail/9.jpg" alt="가수 팬심 테스트">
            </a>
        </article>
        <!-- 가수 테스트 -->
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>가수 팬심 테스트</strong>
                    <span class="category1">TEAM</span>
                    <a href="https://github.com/OhRaeKyu/music-quiz" class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>2022. 02</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>Front-End 2명</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>가수의 앨범 및 노래 테스트 제공 서비스</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        <li>TypeScript 기반의 React로 구현한 웹 서비스</li>
                        <li>스포티파이 API를 활용한 트렌드성 테스트 서비스 구현</li>
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span>HTML, CSS(Styled Component), TypeScript, React</span>
                </li>
            </ul>
            <a href="https://music-quizz.vercel.app/" class="img-link">
                <img src="./img/thumnail/8.jpg" alt="가수 팬심 테스트">
            </a>
        </article>
        <!-- 영화 기록 -->
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>영화 감상 기록</strong>
                    <span class="category1">INDIVIDUAL</span>
                    <a href="https://github.com/IRONDESK/movie-node-project" class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>2022. 01 - 2022. 02</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>Front-End 1명</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>감상한 영화 후기 및 평점 기록과 영화 검색 서비스</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        <li>Node.js와 MongoDB를 활용한 CRUD 영화 기록 서비스 구현</li>
                        <li>네이버 영화 API의 영화 정보 활용</li>
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span>HTML, CSS(SCSS), JavaScript, Node.js(MongoDB)</span>
                </li>
            </ul>
            <a href="https://github.com/IRONDESK/movie-node-project" class="img-link">
                <img src="./img/thumnail/7.jpg" alt="영화 감상 기록">
            </a>
        </article>
        <!-- 감귤 -->
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>감귤마켓</strong>
                    <span class="category1">TEAM</span>
                    <a href="https://github.com/jinkwon9301/Oh-my-tangerine" class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>2021. 12 - 2022. 01</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>Front-End 3명</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>감귤 등 제주 농산물을 거래하는 종합 커뮤니티 서비스</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        <li>React를 기반으로 한 웹앱 서비스</li>
                        <li>Figma 디자인을 토대로 Front-End 작업</li>
                        <li>주어진 API로 Axios 모듈을 활용한 CRUD 서비스 구현</li>
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span>HTML, CSS(Styled Component), JavaScript, React</span>
                </li>
            </ul>
            <a href="https://github.com/jinkwon9301/Oh-my-tangerine" class="img-link">
                <img src="./img/thumnail/6.jpg" alt="감귤마켓">
            </a>
        </article>
        <!-- 개인 이력서 및 포트폴리오 -->
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>개인 이력서 및 포트폴리오</strong>
                    <span class="category1">INDIVIDUAL</span>
                    <a href="https://github.com/IRONDESK/Portfolio" class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>2021. 11 - 2021. 12</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>Front-End 1명</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>이력서와 포트폴리오를 하나로 정리한 개인 웹사이트</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        <li>사이트 기획 및 디자인</li>
                        <li>바닐라 JavaScript를 활용한 웹앱 방식 구현</li>
                        <li>SCSS를 활용한 스타일 구현 효율화</li>
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span>HTML, CSS(SCSS), JavaScript</span>
                </li>
            </ul>
            <a href="https://github.com/IRONDESK/Portfolio" class="img-link">
                <img src="./img/thumnail/2.jpg" alt="개인 포트폴리오">
            </a>
        </article>

        <!-- 간단한 가계부 -->
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>간단한 가계부</strong>
                    <span class="category1">INDIVIDUAL</span>
                    <a href="https://github.com/IRONDESK/HouseholdAccount" class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>2021. 11 - 2021. 12</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>Front-End 1명</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>구매 내역을 간단히 정리해주는 가계부 웹서비스 프로젝트</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        <li>사이트 기획 및 디자인</li>
                        <li>Local Storage 활용한 Back Data 구현</li>
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span>HTML, CSS, JavaScript</span>
                </li>
            </ul>
            <a href="https://irondesk.github.io/HouseholdAccount/" class="img-link">
                <img src="./img/thumnail/4.jpg" alt="간단한 가계부">
            </a>
        </article>

        <!-- 밴딩 머신 -->
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>1만시간의 법칙</strong>
                    <span class="category1">INDIVIDUAL</span>
                    <a href="https://github.com/IRONDESK/CloneProject/tree/main/time" class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>2021. 11 - 2021. 12</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>Front-End 1명</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>어떤 분야에서 전문가로 성장하기 위한 '1만 시간'을 계산하는 프로젝트</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        <li>페이지 Front-End 작업</li>
                        <li>바닐라 JavaScript를 활용한 로딩 화면, 값 계산</li>
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span>HTML, CSS, JavaScript</span>
                </li>
            </ul>
            <a href="https://irondesk.github.io/CloneProject/time" class="img-link">
                <img src="./img/thumnail/5.jpg" alt="Vending Machine">
            </a>
        </article>

        <!-- 카카오 클론 -->
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>카카오 클론</strong>
                    <span class="category1">INDIVIDUAL</span>
                    <a href="https://github.com/IRONDESK/KakaoClone" class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>2021. 11 - 2021. 12</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>Front-End 1명</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>카카오 회사 페이지 클론 프로젝트</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        <li>메인 페이지 Front-End 작업</li>
                        <li>바닐라 JavaScript를 활용한 다크모드 구현</li>
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span>HTML, CSS, JavaScript</span>
                </li>
            </ul>
            </ul>
            <a href="https://irondesk.github.io/KakaoClone/" class="img-link">
                <img src="./img/thumnail/3.jpg" alt="카카오 클론">
            </a>
        </article>

        <!-- 사라질 전당포 -->
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>사라질전당포展</strong>
                    <span class="category1">INDIVIDUAL</span>
                    <a href="https://github.com/IRONDESK/pawnshop-exhibition" class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>2019. 10 - 2019. 11</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>Front-End 1명</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>2019. 10 - 2019. 11</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        <li>fullpage.js를 활용한 전시 섹션별 소개 구획</li>
                        <li>모바일 디바이스를 고려한 반응형 페이지</li>

                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span>HTML, CSS, JavaScript, fullpage.js</span>
                </li>

            </ul>
            <a href="http://adpower.org/2019" class="img-link">
                <img src="./img/thumnail/1.jpg" alt="사라질전당포展">
            </a>
        </article>



        <!-- <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>타이틀</strong>
                    <span class="category1">TEAM</span><a class="git-btn">GitHub</a>
                </li>
                <li class="list-detail">
                    <strong>작업 기간</strong>
                    <span>2021. 00 - 2021. 00</span>
                </li>
                <li class="list-detail">
                    <strong>참여 인원</strong>
                    <span>Front-End 1명</span>
                </li>
                <li class="list-detail">
                    <strong>설명</strong>
                    <span>내용</span>
                </li>
                <li class="list-detail">
                    <strong>구현 내용</strong>
                    <ul>
                        <li>사이트 기획 및 디자인</li>
                        <li>내용</li>
                        <li>내용</li>
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span>HTML, CSS, JavaScript</span>
                </li>
            </ul>
            <a href="#" class="img-link">
                <img src="" alt="">
            </a>
        </article> -->

    </section>
    `
    );
}

export default Portfolio;