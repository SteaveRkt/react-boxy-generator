import Header from './components/Header';
import Footer from './components/Footer';
import LeftContainer from './layouts/LeftContainer';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-wrap justify-center items-center bg-gray-100 p-4 md:flex-nowrap">
        <LeftContainer />
      </main>
      <Footer />
    </div>
  );
}
export default App;
