import Footer from "./components/sections/Footer/Footer";
import Navbar from "./components/sections/Navbar/Navbar";

function App() {
  return (
      <main className="min-h-screen relative bg-gray-50">
          <div className="flex flex-wrap">
              <div className="w-full">
                  <Navbar />
              </div>
          </div>
          <Footer />
      </main>
  );
}

export default App;
