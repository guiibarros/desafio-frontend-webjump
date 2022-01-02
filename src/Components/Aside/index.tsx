// ------------------------------ Imports --------------------------------//

import { ReactNode } from 'react';

import styles from './styles.module.scss';

// ----------------------------- Interfaces ------------------------------//

interface AsideProps {
  children: ReactNode;
}

export function Aside({ children }: AsideProps) {
  return (
    <aside className={styles.asideContent}>
      {children}
    </aside>
  );
}