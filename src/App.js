import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import tequilaImg from './imagenes/tequila.jpg';
import amigosImg from './imagenes/amigos.jpg';
import calleImg from './imagenes/calle.jpg';
import trabajoImg from './imagenes/trabajo.jpg';
import carrosImg from './imagenes/carros.jpg';

function App() {
  const [messages, setMessages] = useState([
    { text: "Claudia: Desde que era joven, siempre sentí que tenía que complacer a los demás. En mi primera relación, todo parecía perfecto al principio. Mi pareja era encantador, siempre me decía cuánto me quería y lo afortunado que era de tenerme a su lado. Sin embargo, con el tiempo, las cosas cambiaron. Comenzó a criticar mis decisiones, mis amigos, incluso mi apariencia. Recuerdo un día, después de una pelea, que me miró a los ojos y me dijo que era un desastre y que nunca encontraría a alguien mejor que él. Esa fue la primera vez que sentí que mi mundo se desmoronaba. Me aisló de mis amigos y familiares, y cada día que pasaba, sentía que perdía un poco más de mí misma. Al final, entendí que el amor no debería doler y que merecía ser tratada con respeto.", id: Date.now(), sender: 'other', image: tequilaImg },
    { text: "Ester: Durante años, viví en un ciclo de violencia emocional y física. Mi pareja, al principio, era un príncipe, pero luego se convirtió en mi mayor temor. Las primeras veces que me agredió, me decía que era por mi culpa, que si no hubiera hecho ciertas cosas, no habría tenido que reaccionar así. Esa manipulación me llevó a creer que yo era la responsable de su comportamiento. En ocasiones, me encontraba llorando en la ducha, preguntándome en qué momento perdí el control de mi vida. Finalmente, después de una pelea particularmente intensa, donde me empujó contra la pared, decidí que ya era suficiente. Hice una llamada a un refugio y, con mucho miedo, me escapé. Ahora estoy en un camino de sanación, pero aún llevo las cicatrices de esa relación.", id: Date.now() + 1, sender: 'other', image: amigosImg },
    { text: "Teresa: Soy madre de dos hijos y, durante años, soporté el abuso verbal de mi esposo. Cada día era una batalla. Él me decía que no era una buena madre, que no sabía cocinar, que no podía hacer nada bien. En un momento dado, sentí que ya no podía más. Decidí buscar ayuda, hablar con otras mujeres que habían pasado por situaciones similares. Ese apoyo me dio la fuerza para dar el primer paso. A veces, pienso en el día en que decidí irme. Fue aterrador, pero sabía que debía proteger a mis hijos de un entorno tóxico. Ahora, estoy reconstruyendo mi vida y enseñando a mis hijos sobre el amor propio y el respeto.", id: Date.now() + 2, sender: 'other', image: calleImg },
    { text: "Ingrid: Durante años, pensé que el amor era un sacrificio constante. Mi pareja me prometía el mundo, pero con cada promesa incumplida, sentía que mi valor se desvanecía. Las primeras veces que me insultó, creí que eran momentos de frustración, que todo mejoraría. Sin embargo, las palabras hirientes se convirtieron en un ritual diario. Un día, me dijo que nadie me querría jamás si seguía siendo como era. Me sentí atrapada y sola. Decidí buscar ayuda en grupos de apoyo, donde encontré a mujeres que compartían historias similares. Poco a poco, aprendí que merezco amor y respeto, y que salir de esa relación era una forma de amarme a mí misma.", id: Date.now() + 3, sender: 'other', image: trabajoImg },
    { text: "Fabiola: Crecer en un ambiente violento me dejó marcas profundas. Mi padre era abusivo con mi madre, y de niña, veía cómo ella intentaba complacerlo. Aprendí que el amor a menudo venía con dolor. Cuando comencé a salir, repetí ese patrón. Mi pareja era encantador, pero pronto comenzó a mostrar signos de celos extremos. Cada vez que salía con mis amigas, él me llamaba para preguntarme dónde estaba. Un día, me siguió y me enfrentó, cuestionando cada paso que daba. Me di cuenta de que esta situación no era normal. Con el tiempo, entendí que no quería replicar el ciclo de violencia y decidí romper con él. Fue una decisión difícil, pero necesaria para mi salud mental.", id: Date.now() + 4, sender: 'other', image: carrosImg },
    { text: "Valeria: La violencia no siempre es física; a veces, el dolor más profundo viene de las palabras. Mi exmarido tenía una forma de manipularme que me hacía dudar de mi propia realidad. Recuerdo una vez que discutimos y me dijo que era una 'madre horrible' por no hacer las cosas a su manera. Esa noche lloré hasta que me quedé dormida, sintiéndome vacía. Tras mucho tiempo en terapia, comprendí que el abuso emocional puede ser igual de devastador. Ahora, estoy aprendiendo a establecer límites y a valorar mi voz. Estoy en un proceso de sanación y empoderamiento que me ha permitido ser más fuerte que nunca.", id: Date.now() + 5, sender: 'other', image: tequilaImg },
    { text: "Debanih: Mi historia de abuso comenzó cuando tenía 17 años. Al principio, era un romance de ensueño; él era todo lo que había deseado. Pero pronto, los celos se convirtieron en control y me encontré en un ciclo de agresiones y disculpas. La última vez que me golpeó fue durante una discusión en la que simplemente expresé mi opinión. En ese momento, supe que debía salir. Llamé a una línea de ayuda y, con el apoyo de las consejeras, pude encontrar un refugio seguro. Aunque el camino hacia la recuperación ha sido difícil, cada día me siento más fuerte y más capaz de abrazar mi vida sin miedo.", id: Date.now() + 6, sender: 'other', image: amigosImg },
    { text: "Amanda: Después de años de soportar un matrimonio tóxico, finalmente tomé la decisión de irme. Mi esposo era un maestro del engaño, siempre me hacía sentir que era 'yo' quien tenía el problema. Recuerdo noches en las que me decía que estaba loca por sentirme así. Un día, tras un episodio particularmente violento, miré a mis hijos y supe que tenía que hacer algo. Buscar ayuda fue un proceso que nunca imaginé que haría. Asistí a terapia y empecé a reconstruir mi vida. Hoy, estoy más enfocada en ser un modelo a seguir para mis hijos y mostrarles que el amor no debe doler.", id: Date.now() + 7, sender: 'other', image: calleImg },
    { text: "Johana: Durante años, me convencí de que el comportamiento de mi pareja era normal. Era el tipo de amor que me hacía dudar de mí misma. Cada vez que él me decía que 'no era suficiente', me sentía pequeña. La última vez que me insultó, sentí un quiebre interno. Me di cuenta de que no podía seguir viviendo así. La decisión de dejarlo fue aterradora, pero necesaria. Me encontré con mujeres que habían pasado por situaciones similares, y juntas nos apoyamos. Ahora sé que el amor es un viaje de respeto mutuo, y estoy en paz conmigo misma, buscando una vida sin miedo.", id: Date.now() + 8, sender: 'other', image: trabajoImg },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isForumActive, setIsForumActive] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showStoryInput, setShowStoryInput] = useState(false);
  const [exitMessageVisible, setExitMessageVisible] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const menuRef = useRef(null);
  const storyInputRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '' && !isBlocked && isForumActive) {
      const msg = { text: inputValue, id: Date.now(), sender: 'me', image: selectedImage };
      setMessages((prevMessages) => [...prevMessages, msg]);
      setInputValue('');
      setSelectedImage(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      const file = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(file);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const toggleForum = () => {
    setIsForumActive((prev) => {
      const newState = !prev;
      setExitMessageVisible(newState === false);
      return newState;
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCountStoryClick = () => {
    setShowStoryInput(true);
    toggleMenu();
  };

  const filteredMessages = messages.filter((msg) => msg.text.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setSearchTerm('');
      }
      if (showStoryInput && storyInputRef.current && !storyInputRef.current.contains(event.target)) {
        setShowStoryInput(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, showStoryInput]);

  return (
    <div className="App">
      <div className="chat-window">
        <div className="header">
          <div className="contact-info">
            <div className="user-info">
              <h2>Foro seguro</h2>
              <div className="online-status">20 integrantes en Aguascalientes</div>
            </div>
          </div>
          <button onClick={toggleMenu} className="menu-button">☰</button>
          {menuOpen && (
            <div className="menu" ref={menuRef}>
              <button onClick={handleCountStoryClick}>Contar mi historia</button>
              <button onClick={toggleForum}>
                {isForumActive ? 'Salir del foro' : 'Regresar al foro'}
              </button>
              <input 
                type="text" 
                placeholder="Buscar mensajes" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="search-input"
              />
            </div>
          )}
        </div>
        <div className="chat-container">
          <div className="messages">
            {filteredMessages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <p>{msg.text}</p>
                {msg.image && (
                  <div>
                    <img src={msg.image} alt="Mensaje visual" className="message-image" />
                    <div className="action-buttons">
                      <button className="like-button">👍</button>
                      <button className="comment-button">💬</button>
                      <button className="share-button">🔗</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {exitMessageVisible && (
              <div className={`message other`}>
                <p>No puedes publicar ni ver las publicaciones de otros.</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {isBlocked && (
            <div className="blocked-message">No puedes ver lo que sube esta persona.</div>
          )}
        </div>
        {showStoryInput && (
          <form onSubmit={sendMessage} className="message-form" ref={storyInputRef}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => !isBlocked && isForumActive && setInputValue(e.target.value)}
              placeholder={isBlocked ? 'Saliste' : isForumActive ? 'Escribe un mensaje' : 'Saliste del foro'}
              className="message-input"
              disabled={isBlocked || !isForumActive}
              onKeyDown={handleKeyDown}
            />
            <button type="button" onClick={openFileDialog} className="camera-button">📸</button>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden-input"
              ref={fileInputRef}
            />
            <button type="submit" className="send-button" disabled={isBlocked || !isForumActive}>Compartir</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
