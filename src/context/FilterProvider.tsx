'use client';

import { createContext, useState, useMemo, useContext, ReactNode } from 'react';

const PageContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | null>(null);

function useInitialization(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const context = useContext(PageContext);
  if (!context)
    throw new Error(
      `useInitialization must be used within a PageContextProvider`,
    );

  return context;
}

function PageContextProvider({ children }: { children: ReactNode }) {
  const [initialized, setInitialized] = useState<boolean>(false);

  const initializedValue = useMemo<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>(
    () => [initialized, setInitialized],
    [initialized]
  );

  return (
    <PageContext.Provider value={initializedValue}>
      {children}
    </PageContext.Provider>
  );
}

export { PageContextProvider, useInitialization };
