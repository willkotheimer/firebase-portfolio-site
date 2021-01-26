const projectCard = (item) => {
  const myString = `<div class="project-outside">
          <div class='projectCard'>
            <div class="left">
            
            <div class='title'>${item[1].title}</div>
            <div class='description'>${item[1].description}</div>
           </div>
           <div class="right">
           <div class='screenshot'><img src='${item[1].screenshot}'/></div>

           <div class="mobileLinks">
           <div class="project-buttons">
           <a target="_blank" href="${item[1].url}" class="btn btn-danger">${item[1].title}</a>
           <a target="_blank" href="${item[1].githubUrl}" class="btn btn-primary">Github</a>
           </div>
           </div>

            </div>
            
            </div>
            <div class="projectDossierButtonContainer">
              <div id="${item[0]}" class="projectDossierButton">
              Press For Details
              </div>
              
            </div>
            <div class="animate rt projectDossier hidden-${item[0]}">
            
            <h3>Links</h3>
            <div class="project-buttons">
            <a target="_blank" href="${item[1].url}" class="btn btn-danger">${item[1].title}</a>
            <a target="_blank" href="${item[1].githubUrl}" class="btn btn-primary">Github</a>
            </div>
            <h3>Details</h3>
        
            ${item[1].details}

            <!--<h3>Planning Stage</h3>-->

            
            </div>
            </div>
            `;
  return myString;
};

export default { projectCard };
