import projectData from '../helpers/data/projectsData';
import project from '../components/project';

const projectsView = () => {
  projectData.getProjects()
    .then((response) => {
      Object.values(response.data).forEach((item) => {
        $('.projects').append(project.projectCard(item));
      });
    });
};

export default { projectsView };
