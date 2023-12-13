import LandingPage from '../views/pages/landing-page';
import TraditionalDances from '../views/pages/traditional-dances';
import TraditionalFoods from '../views/pages/traditional-foods';
import TraditionalHouses from '../views/pages/traditional-houses';
import TraditionalCeremonies from '../views/pages/traditional-ceremonies';
import TraditionalCostumes from '../views/pages/traditional-costumes';
import CultureDetail from '../views/pages/culture-detail';

const routes = {
  '/': LandingPage, // default page
  '/baju-adat': TraditionalCostumes,
  '/makanan': TraditionalFoods,
  '/rumah-adat': TraditionalHouses,
  '/tarian-adat': TraditionalDances,
  '/upacara-adat': TraditionalCeremonies,
  '/detail/:id': CultureDetail,
};

export default routes;
