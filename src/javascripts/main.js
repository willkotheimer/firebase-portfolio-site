import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';
// import projects from './helpers/data/projectData';
import bio from './components/bio';
import projects from './views/projectView';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  bio.printBio();
  projects.projectsView();
  projects.buttonEvents();

  // projectsPublish.printButtons();
  // projectsPublish.createProjectCards(projects.getProjects());
};

init();
