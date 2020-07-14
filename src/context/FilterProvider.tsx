import { createContext, useState, useMemo, useContext } from 'react';

const PageContext = createContext(null);

function useInitialization() {
  const context = useContext(PageContext);
  if (!context)
    throw new Error(
      `useInitialization must be used within a PageContextProvider`,
    );

  const [state, setState] = context;

  return [state, setState];
}

function PageContextProvider({ children }) {
  const [initialized, setInitialized] = useState<boolean>(false);

  const initializedValue = useMemo(() => [initialized, setInitialized], [
    initialized,
  ]);

  return (
    <PageContext.Provider value={initializedValue}>
      {children}
    </PageContext.Provider>
  );
}

export { PageContextProvider, useInitialization };
