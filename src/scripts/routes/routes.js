import LandingPage from '../views/pages/landing-page';
import TarianAdat from '../views/pages/tarian-adat';
import PakaianAdat from '../views/pages/pakaian-adat';
import UpacaraAdat from '../views/pages/upacara-adat';

const routes = {
  '/': LandingPage, // default page
  '/tarian-adat': TarianAdat,
  '/upacara-adat': UpacaraAdat,
  '/pakaian-adat': PakaianAdat,
};

export default routes;
