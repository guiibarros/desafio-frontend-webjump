// ------------------------------ Imports --------------------------------//

import styles from './styles.module.scss';

// ----------------------------- Interfaces ------------------------------//

interface AsideColorsSectionProps {
  colorOptions: string[];
  onColorFilterChange(color: string): void;
}

export function AsideColorsSection({ colorOptions, onColorFilterChange }: AsideColorsSectionProps) {
  const uniqueColorOptions = [...new Set(colorOptions)];

  return (
    <section className={styles.asideColorsContent}>
      <h3>Cores</h3>

      {/* Renderiza as cores para filtragem baseado nos produtos */}
      <div className={styles.flexContent}>
        {uniqueColorOptions.map((color, index) => (
          <button // Define o filtro por cor ao clicar
            key={`${color}${index}`}
            className={styles[color]}
            onClick={() => onColorFilterChange(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </section>
  );
}