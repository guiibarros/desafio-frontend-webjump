// ------------------------------ Imports --------------------------------//

import Link from 'next/link';

import { useCategories } from '../../Contexts/CategoriesContext';

import styles from './styles.module.scss';

export function Header(): JSX.Element {
  const categories = useCategories();

  function handleOpenHamburguerMenu() {
    const navigationMenu = document.querySelector(`.${ styles.navContent }`);

    navigationMenu.classList.toggle(styles.mobileMenuOpened);
  }

  return (
    <header className={styles.headerContent}>
      <div className={styles.loginContent}>
        <div className={styles.container}>
          <Link href="/"><a>Acesse sua conta</a></Link> ou <Link href="/"><a>Cadastre-se</a></Link>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.logoContent}>
          <button // Botão hamburguer para mobile
            className={styles.hamburguerButton}
            onClick={handleOpenHamburguerMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          <h1 className={styles.logo}>
            <Link href="/">
              <a>
                <img src="/logo.png" alt="Logo" />
              </a>
            </Link>
          </h1>

          <div className={styles.search}>
            <input type="text" placeholder='Pesquise por produtos.' />
            <button>Buscar</button>
          </div>

          {/* Botão de pesquisar para mobile */}
          <button className={styles.mobileSearchButton}>
            <img src="/magnifying.svg" alt="Buscar" />
          </button>
        </div>
      </div>

      <nav className={styles.navContent}>
        <ul className={styles.container}>
          <li><Link href="/"><a>Página inicial</a></Link></li>

          {/* Renderiza as categorias a partir da API */}
          {categories.map(category => (
            <li key={category.id}>
              <Link href={`/categories/${category.id}`}>
                <a>{category.name}</a>
              </Link>
            </li>
          ))}
          
          <li><Link href="/"><a>Contato</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}