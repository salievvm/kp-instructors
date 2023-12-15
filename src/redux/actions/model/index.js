import App from './App';
import Form from './Form';

import CrmRequisite from './Crm/Requisite';
import CrmContact from './Crm/Contact';
import CrmCandidate from './Crm/Candidate';
import CrmRelatives from './Crm/Relatives';
import CrmExperience from './Crm/Experience';
import CrmRecommendation from './Crm/Recommendation';

import Navigation from './Navigation';
import Lessons from './Lessons';

const obApp = new App();
const obForm = new Form();

const obNavigation = new Navigation();
const obLessons = new Lessons();

export {
  obApp,
  obForm,
  CrmCandidate,
  CrmRelatives,
  CrmExperience,
  CrmRecommendation,
  CrmContact,
  CrmRequisite,
  obNavigation,
  obLessons,
};