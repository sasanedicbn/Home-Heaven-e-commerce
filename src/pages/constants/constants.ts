import { createContext, useContext, useRef } from "react";

const RefsContext = createContext(null);

const RefsProvider = ({ children }) => {
  const targetRef = useRef(null);
  const heroRef = useRef(null);
  const stickyNav = function (entries) {
   const [entry] = entries;
   console.log(entry)
   if(!entry.isIntersecting) heroRef.current.add()

  }
  const headerObserver = new IntersectionObserver(stickyNav, {
    root:null,
    threshold:0,
  })
  headerObserver.observe(heroRef.current)

  return (
    <RefsContext.Provider value={{ targetRef, heroRef }}>
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
