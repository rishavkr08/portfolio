import Background from './components/Background';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import { profile } from './data/content';

export default function App() {
  return (
    <>
      <Background />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-white/40">
        <p>Built with React, Tailwind & Framer Motion — and a little help from AI.</p>
        <p className="mt-1">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
