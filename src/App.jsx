import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import { PostProvider } from "./context/PostContext";

function App() {
   const [isFakeDark, setIsFakeDark] = useState(false);
   // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
   useEffect(
      function () {
         document.documentElement.classList.toggle("fake-dark-mode");
      },
      [isFakeDark]
   );

   return (
      <PostProvider >
         <section>
            <button
               onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
               className="btn-fake-dark-mode"
            >
               {isFakeDark ? "☀️" : "🌙"}
            </button>

            <Header />
            <Main />
            <Archive />
            <Footer />
         </section>
      </PostProvider>
   );
}


function Footer() {
   return <footer>&copy; by The Atomic Blog ✌️</footer>;
}

export default App;
