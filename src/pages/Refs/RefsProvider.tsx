import  { createContext, useContext, useRef, useEffect } from 'react';

const RefsContext = createContext(null);

const RefsProvider = ({ children }) => {
  const refs = {
    heroRef: useRef(null),
    featuredRef: useRef(null),
    creedsRef: useRef(null),
    operationsRef: useRef(null)
  };

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.15,
    });


    Object.values(refs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

  
    return () => {
      Object.values(refs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs]);

  return (
    <RefsContext.Provider value={refs}>
      {children}
    </RefsContext.Provider>
  );
};

const useRefs = () => {
  const context = useContext(RefsContext);
  if (!context) {
    throw new Error('useRefs must be used within a RefsProvider');
  }
  return context;
};

export { RefsProvider, useRefs };
