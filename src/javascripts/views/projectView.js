import projectData from '../helpers/data/projectsData';
import project from '../components/project';

const projectsView = () => {
  projectData.getProjects()
    .then((response) => {
      Object.entries(response.data).forEach((item) => {
        $('.projectsContainer').append(project.projectCard(item));
      });
    });
};

const toggleClass = (id) => {
  console.warn(id);
  const mydiv = document.querySelector(`#${id}`);
  const next = mydiv.parentNode.nextElementSibling;
  if (next.classList.contains('move')) {
    mydiv.innerHTML = 'Press For Details';

    console.warn(mydiv);
    // mydiv.innerHTML('Press To Close'); // doesn't work, fix later
    // next.classList.remove('hide');
    next.classList.remove('move');
  } else {
    mydiv.innerHTML = 'Press To Close';
    console.warn(mydiv);
    // mydiv.createTextNode('Press For Details');
    // next.classList.add('hide');
    next.classList.add('move');
  }
};

const getType = (e) => {
  const mytype = e.target.id;
  toggleClass(mytype);
};

const buttonEvents = () => {
  document.querySelector('#projects').addEventListener('click', getType);
};

export default { projectsView, buttonEvents };
