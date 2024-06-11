import { createContext, useContext, useRef, useEffect, ReactNode } from 'react';


type RefObject<T> = {
  current: T | null;
};


type Refs = {
  heroRef: RefObject<HTMLElement>;
  featuredRef: RefObject<HTMLElement>;
  creedsRef: RefObject<HTMLElement>;
  operationsRef: RefObject<HTMLElement>;
  testimonialRef: RefObject<HTMLElement>;
};


type RefsContextValue = Refs | null;

const RefsContext = createContext<RefsContextValue>(null);

type RefsProviderProps = {
  children: ReactNode;
};

const RefsProvider = ({ children }: RefsProviderProps) => {
  const refs: Refs = {
    heroRef: useRef<HTMLElement>(null),
    featuredRef: useRef<HTMLElement>(null),
    creedsRef: useRef<HTMLElement>(null),
    operationsRef: useRef<HTMLElement>(null),
    testimonialRef: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
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
      observer.disconnect();
    };
  }, [refs]);

  return (
    <RefsContext.Provider value={refs}>
      {children}
    </RefsContext.Provider>
  );
};

const useRefs = (): Refs => {
  const context = useContext(RefsContext);
  if (!context) {
    throw new Error('useRefs must be used within a RefsProvider');
  }
  return context;
};

export { RefsProvider, useRefs };
