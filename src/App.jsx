import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';
import MoonSection from './Moonsection';
import Contact from './Contact';
import Editor from './Editor';
import './App.css';
import CodeEditor from './CodeEditor';
import Socials from './Socials';

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <Skills />
    <MoonSection />
    {/* <Editor/> */}
    <CodeEditor/>
    <Contact />
    <Socials/>
  </div>
);

export default App;
