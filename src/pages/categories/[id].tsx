// --------------------------- Imports --------------------------- //

import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

import { Aside } from '../../Components/Aside';
import { Footer } from '../../Components/Footer';
import { useCategories } from '../../Contexts/CategoriesContext';

import { AsideGenderSection } from '../../Components/AsideGenderSection';
import { AsideCategoriesSection } from '../../Components/AsideCategoriesSection';
import { AsideColorsSection } from '../../Components/AsideColorsSection';
import { Breadcrumb } from '../../Components/Breadcrumb';
import { ViewOptions } from '../../Components/ViewOptions';

import styles from '../../styles/product.module.scss';

// -------------------------- Interfaces -------------------------- //

interface Product {
  id: number,
  name: string,
  image: string,
  price: number,
  specialPrice: number;
  priceFormatted: string;
  specialPriceFormatted: string;
  filter: Filter[]
}

interface Filter {
  color?: string;
  gender?: string;
}

interface CategoryIdProductsProps {
  products: {
    items: Product[];
    filters: Filter[];
  };
  currentCategoryId: number;
}

export default function CategoryIdProducts({
  products,
  currentCategoryId
}: CategoryIdProductsProps): JSX.Element {
  // --------------------------- States --------------------------- //

  const [filteredProducts, setFilteredProducts] = useState(products.items);
  const categories = useCategories();
  const currentCategory = categories.find(category => category.id === Number(currentCategoryId))?.name;

  const [viewMode, setViewMode] = useState('gridMode');
  const colorOptions = products.items.map(product => product.filter[0].color);

  const [filters, setFilters] = useState({
    color: '',
    gender: '',
  });

  // --------------------------- Effects --------------------------- //

  useEffect(() => {
    let updatedFilteredProducts = products.items.filter(product => {
      return product.filter[0].color === filters.color || product.filter[0].gender === filters.gender;
    });

    if (updatedFilteredProducts.length === 0) {
      updatedFilteredProducts = products.items;
    }

    setFilteredProducts(updatedFilteredProducts);
  }, [filters.color, filters.gender, products])

  // --------------------------- Functions --------------------------- //

  function handleChangeViewMode(mode: string) {
    setViewMode(mode);
  }

  function handleChangeColorFilter(color: string) {
    setFilters({
      ...filters,
      color,
    });
  }

  function handleChangeGenderFilter(gender: string) {
    setFilters({
      ...filters,
      gender,
    });
  }

  return (
    <>
      <Head>
        <title>{currentCategory} | WebJump</title>
      </Head>

      <div className={styles.container}>
        <Breadcrumb current={currentCategory} />

        <div className={styles.flexContainer}>
          <Aside>
            <h2>Filtre por</h2>

            <AsideCategoriesSection />

            {products.filters[0].color &&
              <AsideColorsSection
                onColorFilterChange={handleChangeColorFilter}
                colorOptions={colorOptions}
              />}

            {products.filters[0].gender &&
              <AsideGenderSection
                onGenderFilterChange={handleChangeGenderFilter}
              />}
          </Aside>

          <main>
            <h2>{currentCategory}</h2>

            <ViewOptions viewMode={viewMode} onViewModeChange={handleChangeViewMode} />

            <ul className={styles[viewMode]}>
              {filteredProducts.map(product => (
                <li key={product.id}>
                  <img src={`/${product.image}`} alt={product.name} />
                  <div>
                    <p>{product.name}</p>
                    <span>
                      {product.specialPriceFormatted ? (
                        <>
                          <strong className={styles.previowsPrice}>{product.priceFormatted}</strong>
                          <strong>{product.specialPriceFormatted}</strong>
                        </>
                      ) : (
                        <strong>{product.priceFormatted}</strong>
                      )}
                    </span>
                    <button>comprar</button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

// Server-side rendering
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  // Obter dados dos produtos
  const response = await fetch(`http://localhost:8888/api/V1/categories/${ id }`);
  const { items, filters } = await response.json();

  const formattedProducts = items.map((product: Product) => {
    const priceFormatted = Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(product.price);

    const specialPriceFormatted = product.specialPrice
      ? Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }).format(product.specialPrice)
      : null;

    return {
      ...product,
      priceFormatted,
      specialPriceFormatted
    };
  });

  return {
    props: {
      products: {
        items: formattedProducts,
        filters,
      },
      currentCategoryId: id,
    },
  };
};