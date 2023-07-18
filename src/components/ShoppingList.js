import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  const catAvecPlantes = (
    <ul>
      {categories.map((cat) => (
        <li key={cat}>
          {cat}
          <ul>
            {plantList
              .filter((plant) => plant.category === cat)
              .map((plant) => (
                <li key={plant.id}>{plant.name}</li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  return <div className="lmj-shopping">Les catégories :{catAvecPlantes}</div>;
}

export default ShoppingList;
