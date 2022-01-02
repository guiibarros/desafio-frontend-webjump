// ------------------------------ Imports --------------------------------//

import styles from './styles.module.scss';

// ------------------------------ Interfaces ------------------------------//

interface AsideGenderSectionProps {
  onGenderFilterChange(gender: string): void;
} 

export function AsideGenderSection({ onGenderFilterChange }: AsideGenderSectionProps) {
  return (
    <section className={styles.asideGenderContent}>
      <h3>Gênero</h3>

      {/* Define o filtro por gênero ao clicar */}
      <ul>
        <li><button onClick={() => onGenderFilterChange('Masculina')}>Masculina</button></li>
        <li><button onClick={() => onGenderFilterChange('Feminina')}>Feminina</button></li>
      </ul>
    </section>
  );
}