// ------------------------------ Imports --------------------------------//

import Link from 'next/link';

import { useCategories } from '../../Contexts/CategoriesContext';

import styles from './styles.module.scss';

export function AsideCategoriesSection() {
  const categories = useCategories(); // Categories context

  return (
    <section className={styles.asideCategoriesContent}>
      <h3>Categorias</h3>

      {/* Renderiza as categorias recebidas pela API */}
      <nav>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <Link href={`/categories/${category.id}`}>
                <a>{category.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}