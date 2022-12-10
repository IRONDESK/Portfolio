import ProjectCard from "../components/ProjectCard.js";

function Portfolio() {
  const WorkList = async () => {
    const res = await fetch("../data/Work.json");
    const json = await res.json();
    return json.data;
  };

  const DisplyList = (item) => {
    const contentsWorks = document.querySelector(".contents-works");
    contentsWorks.insertAdjacentHTML(
      "beforeend",
      item?.map((el, idx) => `${ProjectCard(el)}`).join("")
    );
  };

  WorkList().then((res) => DisplyList(res));

  return `
    <section class="contents-works">
        <article class="img-cont"></article>
        <h1 class="title">Prism Developer<br><strong>참여한 프로젝트 목록입니다.</strong></h1>
    </section>
    `;
}

export default Portfolio;
