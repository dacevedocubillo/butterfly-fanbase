import "./App.css";
import butterflyLogo from "./assets/Butter - Logo-Photoroom.png";

function Header() {
  const links = ["Inicio", "Votaciones", "Stream", "Fechas importantes", "Para ARMY", "Redes"];
  const targets = ["home", "votaciones", "stream", "fechas", "para-army", "redes"];

  return (
    <header className="header">
    

      <nav className="navigation" aria-label="Main navigation">
        {links.map((link, index) => (
          <a key={link} href={`#${targets[index]}`}>
            {link}
          </a>
        ))}
      </nav>

      <a className="button button-primary" href="#redes">
        Únete a nuestro ARMY →
      </a>
    </header>
  );
}


function Hero() {
  return (
    <section className="hero butterfly-hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">BUTTERFLY FANBASE</p>

        <h1>
          La música nos une.
          <br />
          <span>ARMY nos conecta.</span>
        </h1>

        <p className="hero-description">
          Compartimos canciones, apoyamos a BTS y creamos
          recuerdos juntos. Este también es tu espacio.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#votaciones">
            Apoyemos a BTS →
          </a>

          <a className="button button-outline" href="#para-army">
            Un momento para ti
          </a>
        </div>

        <p className="hero-caption">
          POR ARMY, PARA ARMY · CON CARIÑO, BUTTERFLY
        </p>
      </div>

      <div className="butterfly-visual" aria-hidden="true">
        <div className="logo-orbit">
          <img src={butterflyLogo} alt="" />
        </div>

        <p>Distintos caminos, un mismo vuelo.</p>
      </div>
    </section>
  );
}

function Votaciones() {
  const votaciones = [];

  return (
    <section className="news-card" id="votaciones">
      <div className="section-heading">
        <h2>Votaciones</h2>
        <span className="section-label">Apoyemos a BTS</span>
      </div>

      {votaciones.length === 0 ? (
        <p className="section-description">
          Aquí compartiremos votaciones verificadas, sus fechas
          de cierre y los pasos para participar.
        </p>
      ) : (
        <div className="news-list">
          {votaciones.map((votacion) => (
            <article className="news-item" key={votacion.id}>
              <span className="news-category">
                {votacion.category}
              </span>

              <h3>{votacion.title}</h3>
              <p>{votacion.description}</p>

              <a
                className="button button-outline"
                href={votacion.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a votar →
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}


function Stream() {
  return (
    <section className="news-card" id="stream">
      <div className="section-heading">
        <h2>Stream</h2>
        <span className="section-label">Disfrutemos su música</span>
      </div>

      <p className="section-description">
        Vuelve a tus canciones favoritas y descubre algo nuevo
        en la discografía de BTS.
      </p>

      <div className="stream-actions">
        <a
          className="button button-primary"
          href="https://open.spotify.com/intl-es/artist/3Nrfpe0tUJi4K4DXYWgMUX?si=NEA50iakQyioXnsFACQKlw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escuchar en Spotify →
        </a>

        <a
          className="button button-outline"
          href="https://www.youtube.com/@BTS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver BANGTANTV →
        </a>
      </div>
    </section>
  );
}

function ParaArmy() {
  return (
    <section className="army-card" id="para-army">
      <p className="eyebrow">UN MOMENTO PARA TI</p>

      <h2>Tu vuelo también importa</h2>

      <p className="army-message">
        No tienes que resolverlo todo hoy. Date tiempo para
        descansar, disfrutar una canción y reconocer lo que
        ya has logrado. Los pequeños pasos también cuentan.
      </p>

      <p className="army-signature">
        Con cariño, Butterfly Fanbase ♡
      </p>
    </section>
  );
}

function FechasImportantes() {
  const eventos = [];

  return (
    <section className="news-card dates-card" id="fechas">
      <div className="section-heading">
        <h2>Fechas importantes</h2>
        <span className="section-label">Nuestra agenda ARMY</span>
      </div>

      {eventos.length === 0 ? (
        <p className="section-description">
          Aquí encontrarás próximos eventos, aniversarios
          y lanzamientos confirmados.
        </p>
      ) : (
        <ul className="events-list">
          {eventos.map((evento) => (
            <li className="event-item" key={evento.id}>
              <time
                className="event-date"
                dateTime={evento.fecha}
              >
                {evento.fechaTexto}
              </time>

              <div>
                <h3>{evento.titulo}</h3>
                <p>{evento.descripcion}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}


function Redes() {
  const redes = [];

  return (
    <section className="news-card social-card" id="redes">
      <div className="section-heading">
        <h2>Conectemos</h2>
        <span className="section-label">Butterfly en redes</span>
      </div>

      <p className="section-description">
        Comparte este espacio con otras personas de ARMY
        y acompáñanos en nuestras redes.
      </p>

      {redes.length === 0 ? (
        <p className="social-empty">
          Pronto compartiremos nuestros canales oficiales.
        </p>
      ) : (
        <div className="social-links">
          {redes.map((red) => (
            <a
              className="button button-outline"
              key={red.id}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {red.nombre} ↗
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-brand">Butterfly Fanbase</p>
        <p className="footer-description">
          Un espacio creado por ARMY, para ARMY.
        </p>
      </div>

      <p className="footer-notice">
        Fanbase independiente, sin afiliación oficial con BTS,
        HYBE o BIGHIT MUSIC.
      </p>

      <a className="footer-top" href="#home">
        Volver al inicio ↑
      </a>
    </footer>
  );
}




export default function App() {
  return (
    <div className="site">
      <Header />

    <main className="dashboard">
  <Hero />

  <div className="support-grid">
    <Votaciones />
    <Stream />
  </div>

  <ParaArmy />
  <FechasImportantes />
  <Redes />
</main>

      <Footer />

    </div>
  );
}
