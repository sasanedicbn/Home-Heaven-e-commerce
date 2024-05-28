import React, { createContext, useContext, useRef, useEffect } from 'react';

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
          entry.target.classList.add('section-visible');
          entry.target.classList.remove('section-hidden');
        } else {
          entry.target.classList.add('section-hidden');
          entry.target.classList.remove('section-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.15,
    });

    Object.values(refs).forEach(ref => {
      if (ref.current) {
        ref.current.classList.add('section-hidden'); 
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

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
