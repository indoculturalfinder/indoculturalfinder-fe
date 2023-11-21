import LandingPage from '../views/pages/landing-page';
import TraditionalDance from '../views/pages/traditional-dance';
import TraditionalFood from '../views/pages/traditional-food';
import TraditionalHouse from '../views/pages/traditional-houses';
import TraditionalCeremonies from '../views/pages/traditional-ceremonies';
import TraditionalClothes from '../views/pages/traditional-clothes';

const routes = {
  '/': LandingPage, // default page
  '/baju-adat': TraditionalClothes,
  '/makanan': TraditionalFood,
  '/rumah-adat': TraditionalHouse,
  '/tarian-adat': TraditionalDance,
  '/upacara-adat': TraditionalCeremonies,
};

export default routes;
