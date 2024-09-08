import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SignupForm from './components/Signup';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features/>
      <main className="container mx-auto p-4">
        <section>
          <h2 className="text-h2 text-primary-text">Join Us</h2>
          <SignupForm />
        </section>
      </main>
    </div>
  );
}

export default App;
