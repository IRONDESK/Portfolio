const Resume = () => {
    return (
        `
    <section class="contents-resume">
        <article class="img-cont"></article>
        <h1 class="title">안녕하세요,<br><strong>개발하는 손수철입니다.</strong></h1>

        <article class="introduce">
            <h2 class="sub-title">INTRODUCE</h2>
            <p class="sub-text">
                <span>
                    <strong>많은 것을 해왔지만 허투루 하지 않았습니다.</strong><br>
                    경제학을 전공하고 광고와 마케팅, 디자인에 치열하게 몰입해왔습니다.<br>
                    해당 분야에서 경험을 쌓으면서 '이미 만들어진 것'을 다루는 것이 아닌, 직접 서비스를 기획하고 개발하는 '만드는 일'에 기여하고 싶은 목표가
                    생겼습니다.<br><br>
                    제가 경험한 분야와 Front-End 개발자는 '고객의 문제를 해결한다'는 가치를 중점에 둔다는 점에서 다르지 않다고 생각합니다.<br>
                    다양한 분야에서의 경험을 바탕으로 기획자와 디자이너 등 실무진과의 협업의 밀도를 높이고 서비스 향상을 위해 깊게 몰두할 개발자임을 자부합니다.
                </span>
            </p>
        </article>

        <article class="personal">
            <h2 class="sub-title">PERSONAL</h2>
            <dl class="sub-text">
                <dt>Birth
                <dd class="large-width">1995. 7. 5.</dd>
                </dt>
                <dt>Phone
                <dd>+82 10 5199 2429</dd>
                </dt>
                <dt>Place
                <dd>Gimpo city, South Korea</dd>
                </dt>
            </dl>
            <dl class="sub-text">
                <dt>E-Mail
                <dd><a href="mailto:zerozerobase@gmail.com">zerozerobase@gmail.com</a></dd>
                </dt>
                <dt>GitHub
                <dd><a href="https://github.com/IRONDESK">github.com/IRONDESK</a></dd>
                </dt>
                <dt>Blog
                <dd><a href="https://zero1zero.tistory.com/">zero1zero.tistory.com</a></dd>
                </dt>
            </dl>
            <dl class="sub-text">
                <dt>Degree
                <dd>인하대학교 | 경제학 학사 | 2014. 03 - 2021. 08</dd>
                </dt>
            </dl>
        </article>

        <article class="techskill">
            <h2 class="sub-title">SKILL <i class="far fa-question-circle"></i></h2>
            <dl class="sub-text skill">
                <dt>Language
                <dd>
                    <i class="lv3">HTML</i>
                    <i class="lv3">CSS</i>
                    <i class="lv3">SCSS</i>
                    <i class="lv2">JavaScript</i>
                    <i class="lv1">TypeScript</i>
                    <i class="lv2">Python</i>
                </dd>
                </dt>
            </dl>
            <dl class="sub-text skill">
                <dt>Framework\Library
                <dd>
                    <i class="lv2">jQuery</i>
                    <i class="lv2">React</i>
                    <i class="lv2">Node.js</i>
                </dd>
                </dt>
            </dl>
            <dl class="sub-text skill">
                <dt>Graphic
                <dd>
                    <i class="lv4">Photoshop</i>
                    <i class="lv3">Illustrator</i>
                </dd>
                </dt>
            </dl>
            <dl class="sub-text skill">
                <dt>ETC
                <dd>
                    <i>Git</i>
                    <i>Google Docs</i>
                    <i>WordPress</i>
                    <i>MS Office</i>
                </dd>
                </dt>
            </dl>
        </article>

        <article class="experience">
            <h2 class="sub-title">EXPERIENCE</h2>
            <ul class="sub-text experience">
                <li class="list-title">
                    <strong>멋쟁이사자처럼 Front-End School 1기</strong>
                    <span class="category1">DEV</span>
                    <span class="exp-date">2021.11 - 2022.01</span>
                </li>
                <li class="list-detail">Front-End 개발자 양성 및 실무 교육</li>
                <li class="list-detail">다수 개인·팀 프로젝트 참여 개발</li>
            </ul>

            <ul class="sub-text experience">
                <li class="list-title">
                    <strong>제일펑타이 디지털마케팅 AE 인턴</strong>
                    <span class="category1">NON-DEV</span>
                    <span class="exp-date">2019.12 - 2020.06</span>
                </li>
                <li class="list-detail">삼성전자 한국총괄 CE 파트 디지털 온라인IMC 마케팅 기획 및 운영</li>
                <li class="list-detail">네이버 쇼핑 라이브커머스 기획 및 운영</li>
            </ul>

            <ul class="sub-text experience">
                <li class="list-title">
                    <strong>사라질전당포展 전시기획 및 사이트 개발</strong>
                    <span class="exp-date">2019.08 - 2019.11</span>
                </li>
                <li class="list-detail">기술 발전으로 '사라진 것'들의 가치 재발견 전시기획운영 부단장</li>
                <li class="list-detail">전시회 소개 목적 웹사이트 개발 <a href="http://adpower.org/2019">\MOVE TO SITE\</a></li>
            </ul>

            <ul class="sub-text experience">
                <li class="list-title">
                    <strong>연합동아리 애드파워</strong>
                    <span class="category1">NON-DEV</span>
                    <span class="exp-date">2018.03 - 2019.12 | 2020.06 - 2020.12</span>
                </li>
                <li class="list-detail">기업 협업 프로덕트 브랜딩 및 마케팅 프로젝트 기획</li>
                <li class="list-detail">콘텐츠 편집 팀장 (2019.01 - 2019.06)</li>
                <li class="list-detail">동아리 회장 (2020.06 - 2020.12)</li>
            </ul>
        </article>

        <article class="awarded">
            <h2 class="sub-title">AWARDED</h2>
            <ul class="sub-text experience">
                <li class="list-title">
                    <strong>부산국제광고제</strong>
                    <span class="category1">TEAM</span><span>2020.09</span>
                </li>
                <li class="list-detail">Communication Design 부문 Finalist</li>
            </ul>
        </article>

        <article class="license">
            <h2 class="sub-title">LICENSE</h2>
            <ul class="sub-text experience">
                <li class="list-title">
                    <strong>OPIc English</strong>
                    <span class="exp-date">2020.05</span>
                </li>
                <li class="list-detail">Intermediate Middle 2</li>
            </ul>
            <ul class="sub-text experience">
                <li class="list-title">
                    <strong>자동차운전면허증</strong>
                    <span class="exp-date">2014.03</span>
                </li>
                <li class="list-detail">2종 보통</li>
            </ul>
        </article>
    </section>
    `
    );
}

export default Resume;