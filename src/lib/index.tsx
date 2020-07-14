export const isClient = () =>
  typeof window !== 'undefined' && window.location.hash;

export const isServerSide = () => !isClient();
