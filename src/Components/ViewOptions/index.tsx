// ------------------------------ Imports --------------------------------//

import styles from './styles.module.scss';

// ----------------------------- Interfaces ------------------------------//

interface ViewOptionsProps {
  viewMode: string;
  onViewModeChange(mode: string): void;
}

export function ViewOptions({ viewMode, onViewModeChange }: ViewOptionsProps) {
  return (
    <div className={styles.viewOptionsContent}>
      <span>
        {/* Botões responsáveis por alterar o modo de visibilidade */}
        <button
          onClick={() => onViewModeChange('gridMode')}
          className={viewMode === 'gridMode' ? styles.active : ''}
        >
          <img src="/grid.svg" alt="Modo grade" />
        </button>
        <button
          onClick={() => onViewModeChange('listMode')}
          className={viewMode === 'listMode' ? styles.active : ''}
        >
          <img src="/list.svg" alt="Modo lista" />
        </button>
      </span>

      <label>
        Ordenar por
        <select>
          <option>Relevância</option>
          <option>Preço</option>
        </select>
      </label>
    </div>
  );
}