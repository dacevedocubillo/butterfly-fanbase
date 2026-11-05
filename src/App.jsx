import { useEffect, useRef, useState } from "react";
import butterflyLogo from "./assets/Butter - Logo-Photoroom.png";
import { news, votes, eventsForYear, socials } from "./data/content";
import "./App.css";

const pages = [
  { id: "inicio", title: "Inicio", number: "01" },
  { id: "noticias", title: "Noticias", number: "02" },
  { id: "votaciones", title: "Votaciones", number: "03" },
  { id: "guias", title: "Guías de stream", number: "04" },
  { id: "agenda", title: "Agenda", number: "05" },
];
const aliases = { home: "inicio", stream: "guias", fechas: "agenda" };
const readRoute = () => {
  const hash = decodeURIComponent(location.hash.slice(1));
  return aliases[hash] || (pages.some(p => p.id === hash) ? hash : "inicio");
};
const dateLabel = date => new Intl.DateTimeFormat("es-CR", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Costa_Rica" }).format(new Date(`${date}T12:00:00-06:00`));
const today = () => new Intl.DateTimeFormat("en-CA", { timeZone: "America/Costa_Rica", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());

function ExternalLink({ href, children, className = "text-link" }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children} <span aria-hidden="true">↗</span><span className="sr-only"> (abre en una pestaña nueva)</span></a>;
}
function Heading({ eyebrow, title, children }) {
  return <header className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro">{children}</p></header>;
}
function Empty({ symbol = "✧", title, children }) {
  return <div className="empty-state"><span className="empty-symbol" aria-hidden="true">{symbol}</span><h3>{title}</h3><p>{children}</p></div>;
}
function SectionHeading({ eyebrow, title, href, link }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{href && <a className="text-link" href={href}>{link} <span aria-hidden="true">→</span></a>}</div>;
}
function NewsCard({ item }) {
  return <article className="news-item"><div className="item-meta"><span className="pill">{item.category}</span><time dateTime={item.date}>{dateLabel(item.date)}</time></div><h3>{item.title}</h3><p>{item.description}</p><ExternalLink href={item.url}>{item.source}</ExternalLink></article>;
}
function VoteCard({ item }) {
  const closed = item.status === "closed" || (item.closesAt && new Date(item.closesAt) <= new Date());
  const status = closed ? "Finalizada" : item.status === "pending" ? "Cierre por confirmar" : "Verificada";
  const deadline = item.deadlineLabel || (item.closesAt ? new Date(item.closesAt).toLocaleString("es-CR", { timeZone: "America/Costa_Rica", dateStyle: "long", timeStyle: "short" }) + " · Costa Rica" : "Consulta al organizador");
  return <article className="panel vote-card"><div className="item-meta"><span className="pill">{status}</span><span>{item.platform}</span></div><h3>{item.title}</h3><p>{item.description}</p><p><strong>{closed ? "Cerró: " : "Cierre: "}</strong>{deadline}</p>{item.steps.length > 0 && <ol>{item.steps.map(step => <li key={step}>{step}</li>)}</ol>}<div className="actions"><ExternalLink href={item.url} className="button button-primary">{item.buttonLabel || "Ir a votar"}</ExternalLink><ExternalLink href={item.sourceUrl}>{item.sourceLabel || "Fuente y reglas"}</ExternalLink></div><p className="vote-checked">Revisado el {dateLabel(item.verifiedOn)}. Consulta al organizador por posibles cambios.</p></article>;
}
function EventCard({ item }) {
  return <article className="event-item"><time dateTime={item.date}>{dateLabel(item.date)}</time><div><span className="pill">{item.type}</span><h3>{item.title}</h3><p>{item.description}</p>{item.recurring && <p>Todo el día · Se repite cada año</p>}{item.time && <p>{item.time} · Hora de Costa Rica</p>}<ExternalLink href={item.url}>Ver fuente</ExternalLink></div></article>;
}
function Home({ activeVotes, upcomingEvents }) {
  return <>
    <section className="hero" id="inicio" aria-labelledby="home-title"><div className="hero-copy"><p className="eyebrow">DESDE COSTA RICA · PARA ARMY EN TODAS PARTES</p><h1 id="home-title">La música nos une.<br /><em>ARMY nos conecta.</em></h1><p className="hero-description">Un lugar para encontrarnos, apoyar a BTS y disfrutar el camino. Noticias, votaciones y pequeños momentos para ti.</p><div className="actions"><a href="#noticias" className="button button-primary">Explora Butterfly <span aria-hidden="true">→</span></a><a href="#para-army" className="button button-outline">Un momento para ti</a></div><p className="hero-caption">SIETE VOCES. DISTINTOS CAMINOS. UN MISMO VUELO.</p></div><div className="hero-art"><span className="orbit-caption">con cariño, Butterfly</span><div className="logo-frame"><img src={butterflyLogo} alt="Butterfly Fanbase BTS: una mariposa en tonos rosa y azul" /></div><span className="hero-art-note">Por ARMY, para ARMY ♡</span></div></section>
    <div className="section-shortcuts" aria-label="Explora nuestras secciones">{pages.slice(1).map(p => <a href={`#${p.id}`} key={p.id}><span className="shortcut-number">{p.number}</span><span>{p.title}</span><span aria-hidden="true">↗</span></a>)}</div>
    <section className="home-news"><SectionHeading eyebrow="LO QUE COMPARTIMOS" title="En Butterfly" href="#noticias" link="Ver noticias" /><div className="home-news-grid">{news.slice(0, 1).map(item => <NewsCard key={item.id} item={item} />)}<aside className="editorial-note"><span aria-hidden="true">✧</span><h3>La fuente también importa.</h3><p>Una captura no siempre cuenta toda la historia. Revisa el anuncio original y su fecha antes de compartirlo.</p><a href="#noticias" className="text-link">Encuentra canales oficiales →</a></aside></div></section>
    <div className="two-columns"><section className="panel"><SectionHeading eyebrow="APOYEMOS A BTS" title="Votaciones" href="#votaciones" link="Ver sección" />{activeVotes.length ? <VoteCard item={activeVotes[0]} /> : <Empty title="Sin votaciones publicadas">Cuando tengamos una convocatoria verificada, encontrarás el enlace, las instrucciones y su fecha de cierre aquí.</Empty>}</section><section className="panel panel-blue"><SectionHeading eyebrow="PARA TENER PRESENTE" title="Próximas fechas" href="#agenda" link="Ver agenda" />{upcomingEvents.length ? <EventCard item={upcomingEvents[0]} /> : <Empty symbol="◷" title="La agenda está por estrenarse">Todavía no hemos publicado eventos confirmados. Puedes explorar el calendario y volver cuando haya nuevas fechas.</Empty>}</section></div>
    <section className="army-message" id="para-army"><div><p className="eyebrow">UN MOMENTO PARA TI</p><h2>Tu vuelo también importa.</h2></div><div><p>No tienes que resolverlo todo hoy. Date tiempo para descansar, disfrutar una canción y reconocer lo que ya has logrado. Los pequeños pasos también cuentan.</p><span>Un mensaje de Butterfly para ARMY ♡</span></div></section>
    <section className="music-strip"><span className="music-symbol" aria-hidden="true">♫</span><div><p className="eyebrow">DALE PLAY A TU MOMENTO</p><h2>Siempre hay una canción por descubrir.</h2><p>Encuentra los canales de música y nuestras guías para escuchar a tu ritmo.</p></div><a href="#guias" className="button button-outline">Ver guías →</a></section>
  </>;
}
function News() {
  const [filter, setFilter] = useState("Todas");
  const [query, setQuery] = useState("");
  const items = news.filter(item => (filter === "Todas" || item.category === filter) && `${item.title} ${item.description}`.toLocaleLowerCase("es").includes(query.toLocaleLowerCase("es")));
  return <><Heading eyebrow="02 / NOTICIAS" title="Lo que nos conecta.">Novedades de nuestra comunidad y publicaciones con una fuente a la que puedes volver.</Heading><div className="toolbar"><div className="filters" role="group" aria-label="Categoría de noticias">{["Todas", "Fanbase", "Oficial"].map(f => <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}</div><label className="search-label">Buscar noticias<input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Busca por palabra" /></label></div><p className="result-count" role="status">{items.length} {items.length === 1 ? "publicación" : "publicaciones"}</p><div className="news-grid">{items.map(item => <NewsCard item={item} key={item.id} />)}</div>{items.length === 0 && <Empty title="No hay publicaciones para esta búsqueda">Prueba otra palabra o selecciona Todas. La categoría Oficial se completará con anuncios enlazados a su fuente.</Empty>}<section className="panel official-sources"><SectionHeading eyebrow="CONSULTA EL ORIGINAL" title="Canales oficiales de BTS" /><p>Estos enlaces son fuentes externas. Su contenido no se actualiza automáticamente dentro de Butterfly.</p><div className="actions"><ExternalLink href="https://weverse.io/bts/notice">Anuncios en Weverse</ExternalLink><ExternalLink href="https://www.youtube.com/@BTS">BANGTANTV</ExternalLink><ExternalLink href="https://ibighit.com/bts/eng/">BIGHIT MUSIC · BTS</ExternalLink></div></section></>;
}
function Votes({ activeVotes }) {
  return <><Heading eyebrow="03 / VOTACIONES" title="Cada apoyo empieza informado.">Convocatorias con su enlace original, instrucciones y cierre. Las horas se mostrarán en horario de Costa Rica.</Heading><div className="panel">{activeVotes.length ? activeVotes.map(item => <VoteCard item={item} key={item.id} />) : <Empty title="No hay votaciones activas publicadas">Aún no hemos añadido convocatorias verificadas a Butterfly. Esto no significa que no existan votaciones en otras plataformas.</Empty>}</div><section className="pending-votes"><SectionHeading eyebrow="REVISA EL CIERRE EN EL ORGANIZADOR" title="Información por completar" /><div className="two-columns">{votes.filter(v => v.status === "pending").map(item => <VoteCard key={item.id} item={item} />)}</div></section><details className="panel closed-votes"><summary>Convocatorias finalizadas</summary>{votes.filter(v => v.status === "closed" || (v.closesAt && new Date(v.closesAt) <= new Date())).map(item => <VoteCard key={item.id} item={item} />)}</details><section className="guide-grid"><article className="panel"><span className="step-number">01</span><h2>Revisa la convocatoria</h2><p>Comprueba el organizador, las categorías y las fechas en el anuncio original.</p></article><article className="panel"><span className="step-number">02</span><h2>Lee las reglas</h2><p>Cada plataforma establece sus requisitos, límites y condiciones. Consulta sus instrucciones antes de participar.</p></article><article className="panel"><span className="step-number">03</span><h2>Cuida tu cuenta</h2><p>Entra desde el enlace del organizador y no compartas contraseñas ni códigos de acceso con otras personas.</p></article></section></>;
}
function Guides() {
  return <><Heading eyebrow="04 / GUÍAS DE STREAM" title="Disfrutar la música también es apoyar.">Canales para escuchar a BTS y consejos sencillos para una experiencia auténtica, sin fórmulas ni promesas sobre contadores.</Heading><div className="two-columns"><article className="panel guide-platform"><span className="platform-name">SPOTIFY</span><h2>Una canción lleva a otra.</h2><p>Explora álbumes, descubre canciones y crea una playlist con la música que te gusta.</p><ol><li>Abre el perfil de BTS y elige un álbum o una canción.</li><li>Guarda tus favoritas y organízalas en tus propias playlists.</li><li>Escucha de forma natural. Evita servicios que vendan reproducciones o automaticen la escucha.</li></ol><ExternalLink className="button button-primary" href="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX">Abrir BTS en Spotify</ExternalLink><ExternalLink href="https://artists.spotify.com/artificial-streaming">Fuente: Spotify · Reproducciones artificiales</ExternalLink></article><article className="panel panel-blue guide-platform"><span className="platform-name">YOUTUBE</span><h2>También se disfruta mirando.</h2><p>Encuentra videos, presentaciones y contenido detrás de cámaras en los canales originales.</p><ol><li>Visita BANGTANTV para explorar el contenido del grupo.</li><li>Busca los videos musicales en HYBE LABELS y verifica el canal.</li><li>Participa de forma genuina: no uses bots ni servicios de intercambio de visitas.</li></ol><div className="actions"><ExternalLink href="https://www.youtube.com/@BTS" className="button button-primary">BANGTANTV</ExternalLink><ExternalLink href="https://www.youtube.com/@HYBELABELS" className="button button-outline">HYBE LABELS</ExternalLink></div><ExternalLink href="https://support.google.com/youtube/answer/3399767?hl=es">Fuente: YouTube · Interacciones falsas</ExternalLink></article></div><section className="panel faq"><SectionHeading eyebrow="SIN COMPLICARNOS" title="Preguntas que pueden surgir" /><details><summary>¿Butterfly reproduce música dentro de la página?</summary><p>Por ahora te llevamos a los canales y perfiles originales para que escuches o veas el contenido allí.</p></details><details><summary>¿Aquí puedo ver los streams de Costa Rica?</summary><p>No. Esta versión no integra charts ni contadores de reproducciones.</p></details><details><summary>¿Hay una fórmula que garantice que cada reproducción cuente?</summary><p>No ofrecemos fórmulas. Cada plataforma valida sus propias métricas; consulta siempre su documentación oficial.</p></details></section></>;
}
function Agenda() {
  const [year, month] = today().split("-").map(Number);
  const [cursor, setCursor] = useState({ year, month: month - 1 });
  const [selected, setSelected] = useState(null);
  const [type, setType] = useState("Todos");
  const monthTitle = new Intl.DateTimeFormat("es-CR", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(cursor.year, cursor.month, 1)));
  const prefix = `${cursor.year}-${String(cursor.month + 1).padStart(2, "0")}`;
  const monthEvents = eventsForYear(cursor.year).filter(e => e.date.startsWith(prefix) && (type === "Todos" || e.type === type));
  const shown = selected ? monthEvents.filter(e => e.date === selected) : monthEvents;
  const firstDay = (new Date(cursor.year, cursor.month, 1).getDay() + 6) % 7;
  const days = new Date(cursor.year, cursor.month + 1, 0).getDate();
  const move = direction => { const next = new Date(cursor.year, cursor.month + direction, 1); setCursor({ year: next.getFullYear(), month: next.getMonth() }); setSelected(null); };
  return <><Heading eyebrow="05 / AGENDA" title="Hagamos espacio para lo especial.">Cumpleaños y aniversarios para celebrar cada año, junto a los eventos que publiquemos con una fuente confirmada. Las fechas anuales son de todo el día y conservan su día y mes; no son horarios de actividades en Corea.</Heading><div className="agenda-layout"><section className="panel calendar" aria-label="Calendario de eventos"><div className="calendar-heading"><button className="icon-button" aria-label="Mes anterior" onClick={() => move(-1)}>←</button><h2 aria-live="polite">{monthTitle}</h2><button className="icon-button" aria-label="Mes siguiente" onClick={() => move(1)}>→</button></div><div className="weekdays" aria-hidden="true">{["L", "M", "M", "J", "V", "S", "D"].map((d, i) => <span key={i}>{d}</span>)}</div><div className="calendar-days">{Array.from({ length: firstDay }, (_, i) => <span key={`empty-${i}`} />)}{Array.from({ length: days }, (_, i) => { const date = `${prefix}-${String(i + 1).padStart(2, "0")}`; const hasEvent = monthEvents.some(e => e.date === date); return <button key={date} onClick={() => setSelected(selected === date ? null : date)} aria-label={`${dateLabel(date)}${hasEvent ? ", con eventos" : ", sin eventos publicados"}`} aria-pressed={selected === date} aria-current={date === today() ? "date" : undefined} className={hasEvent ? "has-event" : ""}>{i + 1}{hasEvent && <span aria-hidden="true">•</span>}</button>; })}</div><button className="text-button" onClick={() => { setCursor({ year, month: month - 1 }); setSelected(null); }}>Volver al mes actual</button></section><section className="panel"><div className="section-heading"><h2>{selected ? dateLabel(selected) : "Este mes"}</h2><label>Tipo de evento<select value={type} onChange={e => setType(e.target.value)}>{["Todos", "Cumpleaños", "Lanzamiento", "Aniversario", "Evento"].map(t => <option key={t}>{t}</option>)}</select></label></div><div aria-live="polite">{shown.length ? shown.map(e => <EventCard key={e.id} item={e} />) : <Empty symbol="◷" title="Sin eventos publicados para estas fechas">No hay fechas confirmadas cargadas para esta selección. La agenda no se sincroniza con calendarios externos.</Empty>}</div>{selected && <button className="text-button" onClick={() => setSelected(null)}>Ver todo el mes</button>}</section></div></>;
}
function Footer() {
  return <footer className="footer" id="redes"><div className="footer-topline"><div><p className="footer-brand">Butterfly<span>Fanbase · Costa Rica</span></p><p>Compartimos música, información y un mismo cariño por BTS.</p></div><div className="footer-socials" aria-label="Nuestras redes">{socials.map(s => <ExternalLink key={s.id} href={s.url}><strong>{s.name}</strong><span>{s.handle}</span></ExternalLink>)}</div></div><div className="footer-bottom"><p>Fanbase independiente, sin afiliación oficial con BTS, HYBE o BIGHIT MUSIC.</p><a href="#inicio">Volver al inicio ↑</a></div></footer>;
}
export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef(null);
  useEffect(() => {
    const change = () => { setRoute(readRoute()); setMenuOpen(false); const id = location.hash.slice(1); requestAnimationFrame(() => { if (["redes", "para-army"].includes(id)) document.getElementById(id)?.scrollIntoView(); else { window.scrollTo({ top: 0, behavior: "instant" }); mainRef.current?.focus({ preventScroll: true }); } }); };
    window.addEventListener("hashchange", change);
    change();
    return () => window.removeEventListener("hashchange", change);
  }, []);
  useEffect(() => { document.title = `${pages.find(p => p.id === route).title} · Butterfly Fanbase`; }, [route]);
  const activeVotes = votes.filter(v => v.status === "verified" && new Date(v.closesAt) > new Date());
  const currentYear = Number(today().slice(0, 4));
  const upcomingEvents = [...eventsForYear(currentYear), ...eventsForYear(currentYear + 1)].filter(e => e.date >= today()).sort((a, b) => a.date.localeCompare(b.date));
  return <div className="site"><a className="skip-link" href="#main-content" onClick={e => { e.preventDefault(); mainRef.current?.focus(); }}>Saltar al contenido</a><header className="header"><a className="wordmark" href="#inicio" aria-label="Butterfly Fanbase, inicio">Butterfly<span>POR ARMY, PARA ARMY</span></a><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Cerrar ×" : "Menú ☰"}</button><nav id="main-navigation" className={`navigation${menuOpen ? " is-open" : ""}`} aria-label="Navegación principal" onKeyDown={e => { if (e.key === "Escape") { setMenuOpen(false); document.querySelector(".menu-toggle")?.focus(); } }}>{pages.map(p => <a key={p.id} href={`#${p.id}`} aria-current={route === p.id ? "page" : undefined} onClick={() => setMenuOpen(false)}>{p.title}</a>)}</nav><a className="header-social text-link" href="#redes">Conectemos ↗</a></header><main id="main-content" className="page-content" ref={mainRef} tabIndex={-1}>{route === "inicio" && <Home activeVotes={activeVotes} upcomingEvents={upcomingEvents} />}{route === "noticias" && <News />}{route === "votaciones" && <Votes activeVotes={activeVotes} />}{route === "guias" && <Guides />}{route === "agenda" && <Agenda />}</main><Footer /></div>;
}



