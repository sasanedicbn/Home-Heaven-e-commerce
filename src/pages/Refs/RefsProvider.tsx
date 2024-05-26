// import  { createContext, useContext, useRef, useEffect } from "react";

// const RefsContext = createContext(null);

// const RefsProvider = ({ children }) => {
//   const navRef = useRef(null);

//   useEffect(() => {
//     const stickyNav = (entries) => {
//       const [entry] = entries;
//       console.log(entry);
//       if (!entry.isIntersecting) {
//         console.log(navRef)
//         navRef.current.classList.add('section-navbar');
//       } else {
//         navRef.current.classList.remove('section-navbar');
//       }
//     };

//     const headerObserver = new IntersectionObserver(stickyNav, {
//       root: null,
//       threshold: 0,
//     });

//     if (navRef.current) {
//       headerObserver.observe(navRef.current);
//     }

//     return () => {
//       if (navRef.current) {
//         headerObserver.unobserve(navRef.current);
//       }
//     };
//   }, []); 

//   return (
//     <RefsContext.Provider value={{ navRef }}>
//       {children}
//     </RefsContext.Provider>
//   );
// };

// const useRefs = () => {
//   const context = useContext(RefsContext);
//   if (!context) {
//     throw new Error('Error');
//   }
//   return context;
// };

// export { RefsProvider, useRefs };
