export default function ProjectCard(
  data = {
    title,
    team,
    github,
    duration,
    member,
    summary,
    detail,
    stack,
    link,
    thumbnail,
  }
) {
  return `
        <article class="item-box">
            <ul class="item-detail">
                <li class="list-title">
                    <strong>${data.title}</strong>
                    <span class="category1">${
                      data.team ? "TEAM" : "INDIVIDUAL"
                    }</span>
                    ${
                      data.github
                        ? `<a href=${data.github} class="git-btn">GitHub</a>`
                        : ""
                    }
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
                        ${data.detail.map((v) => `<li>${v}</li>`).join("")}
                    </ul>
                </li>
                <li class="list-detail">
                    <strong>기술 스택</strong>
                    <span class="stack-wrap">${data.stack
                      .map((v) => `<stack>${v}</stack>`)
                      .join("")}</span>
                </li>
            </ul>
            <a href=${data.link ? data.link : "#"} class="img-link">
                <img src=${data.thumbnail} alt=${data.title}>
            </a>
        </article>
        `;
}
