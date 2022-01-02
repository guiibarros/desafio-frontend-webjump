// --------------------------- Imports --------------------------- //
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

// ------------------------- Interfaces -------------------------- //

interface Category {
  id: number;
  name: string;
}

interface CategoriesProviderProps {
  children: ReactNode;
}

const CategoriesContext = createContext<Category[]>([]);

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function handleFetchCategories() {
      const response = await fetch('http://localhost:8888/api/V1/categories/list');
      const { items } = await response.json();

      setCategories(items);
    }

    handleFetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategories = () => useContext(CategoriesContext);