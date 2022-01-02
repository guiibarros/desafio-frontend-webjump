// ------------------------------ Imports --------------------------------//

import Link from 'next/link';
import styles from './styles.module.scss';

// ----------------------------- Interfaces ------------------------------//

interface BreadcrumbProps {
  current: string;
}

export function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb}>
      <Link href='/'><a>Página inicial</a></Link> <span>&gt;</span> <strong>{current}</strong>
    </nav>
  );
}