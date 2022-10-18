import './App.css';
import Header from './components/Header';
import Footer  from './components/Footer';
import Note from './components/Note';
import notes from './notes';

function App() {
  return (
    <div className="App">
      <Header />

      {notes.map(noteRender => (
          <Note
            key={noteRender.id}
            title={noteRender.title}
            note={noteRender.note}
          />
      ))}

      <Footer />
    </div>
  );
}

export default App;
