import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  // 2- call useLoader hook provided by react-router , then we pass the loader() to the element on the app.jsx
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
//(react router => loader)1- first step to get menu from api
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
