import PageMain from '../components/Pages/Main';
import About from '../components/Pages/About';
import Proektirovanie from '../components/Pages/Proektirovanie';
import Contacts from '../components/Pages/Contacts';
import Projects from '../components/Pages/Projects';
import Shop from '../components/Pages/Shop';
import Stroitelstvo from '../components/Pages/Stroitelstvo';

export const routes = [
  { path: '/', component: PageMain },
  { path: '/o-kompanii', component: About },
  { path: '/proekty', component: Projects },
  { path: '/proektirovanie', component: Proektirovanie },
  { path: '/stroitelstvo', component: Stroitelstvo },
  { path: '/shop', component: Shop },
  { path: '/kontakty', component: Contacts }
];
