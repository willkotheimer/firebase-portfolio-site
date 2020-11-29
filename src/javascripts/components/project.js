const projectCard = (item) => {
  const myString = `<div class='projectCard'>
            <div class="left">
            <div class='screenshot'><img src='${item.screenshot}'/></div>
            <div class='title'>${item.title}</div>
            <div class='description'>${item.description}</div>
           </div>
           <div class="right">
           <div class="project-buttons">
           <a target="_blank" href="${item.url}" class="btn btn-danger">${item.title}</a>
           <a target="_blank" href="${item.githubUrl}" class="btn btn-primary">Github</a>
           </div>
            </div>
            </div>
            `;
  return myString;
};

export default { projectCard };
