import PageMain from '../pages/Main';
import About from '../pages/About';
import Proektirovanie from '../pages/Proektirovanie';
import Contacts from '../pages/Contacts';
import Projects from '../pages/Projects';
import Shop from '../pages/Shop';
import Stroitelstvo from '../pages/Stroitelstvo';

export const routes = [
  { path: '/', component: PageMain },
  { path: '/o-kompanii', component: About },
  { path: '/proekty', component: Projects },
  { path: '/proektirovanie', component: Proektirovanie },
  { path: '/stroitelstvo', component: Stroitelstvo },
  { path: '/shop', component: Shop },
  { path: '/kontakty', component: Contacts }
];
