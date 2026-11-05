// Add only verified announcements here. Keep their original source and date.
export const news = [
  {
    id: "bienvenida-butterfly",
    category: "Fanbase",
    date: "2026-11-05",
    title: "Un mismo vuelo, también en redes.",
    description: "Butterfly tiene un espacio para conectar con ARMY en Facebook, X, Instagram y TikTok. Acompáñanos y comparte este nuevo comienzo con nuestra comunidad.",
    source: "Butterfly en X",
    url: "https://x.com/butterfly_fbcr",
  },
];
// Voting entries need id, title, description, closesAt (ISO with timezone), steps and url.
export const votes = [
  {
    id: "aria-2026", status: "verified", title: "ARIA 2026 · Most Popular International Artist", platform: "X · Desde Costa Rica",
    description: "BTS está nominado. Para quienes vivimos fuera de Australia, la vía admitida es X; la web y Spotify están restringidos a Australia.",
    closesAt: "2026-11-09T23:59:00+11:00", verifiedOn: "2026-11-05",
    steps: ["Consulta las reglas oficiales enlazadas abajo.", "Usa tu cuenta pública de X y publica con el hashtag #ARIASBTS durante el período de votación.", "Los reposts de votos válidos también cuentan según las reglas. No uses automatización."],
    url: "https://www.aria.com.au/public-voting-terms-and-conditions", buttonLabel: "Ver reglas y hashtag", sourceUrl: "https://www.aria.com.au/public-voting-terms-and-conditions"
  },
  {
    id: "mma-2026", status: "verified", title: "MMA 2026 · Global TOP10", platform: "Berriz · Usuarios fuera de Corea del Sur",
    description: "BTS figura entre los candidatos de Global TOP10. La guía permite un voto diario por usuario y requiere unirse a K-Pop Square.",
    closesAt: "2026-11-14T00:00:00+09:00", deadlineLabel: "13 de noviembre de 2026 (fecha en Corea del Sur). Consulta la hora exacta en Berriz.", verifiedOn: "2026-11-05",
    steps: ["Abre la votación oficial de Berriz e inicia sesión.", "Únete a K-Pop Square y revisa los requisitos de participación.", "Elige a BTS y confirma el voto. Se renueva a las 00:00 KST, equivalente a las 9:00 a. m. del día anterior en Costa Rica."],
    url: "https://berriz.in/en/vote/mma2026", sourceUrl: "https://berriz.in/en/vote/mma2026"
  },
  {
    id: "mama-2026", status: "pending", title: "MAMA 2026 · Fans’ Choice", platform: "App Mnet Plus",
    description: "BTS figura en Fans’ Choice en el hilo de referencia. Abre Mnet Plus para consultar la ronda disponible, su cierre y las instrucciones vigentes.",
    verifiedOn: "2026-11-05", deadlineLabel: "Cierre pendiente de verificar en Mnet Plus.",
    steps: ["Abre el enlace oficial en tu teléfono e ingresa a Mnet Plus.", "Revisa que la ronda siga abierta, su cierre y la categoría de BTS antes de participar."],
    url: "https://mnetplus.world/event/en/2026-mama", sourceLabel: "Ver hilo de referencia", sourceUrl: "https://x.com/olivittoo/status/2116986162049134965", buttonLabel: "Consultar en Mnet Plus"
  },
  {
    id: "kca-2026", status: "pending", title: "Kids’ Choice Awards 2026 · BTS", platform: "Sitio de Nickelodeon",
    description: "BTS aparece en Favorite Music Group or Duo y el sitio anuncia votación abierta. El cierre y la disponibilidad dependen de la región y la actividad; falta confirmar la fecha exacta.",
    verifiedOn: "2026-11-05", deadlineLabel: "Cierre pendiente de confirmar para esta región.",
    steps: ["Entra en la categoría oficial de Music Group or Duo y consulta las reglas regionales.", "Selecciona a BTS si la actividad sigue disponible para ti.", "Sigue las categorías hasta terminar la ronda; las reglas indican que no debes cerrar la página antes de completarla."],
    url: "https://kca.nick.tv/es/vota/favorite-music-group-or-duo", sourceUrl: "https://kca.nick.tv/voting-rules", buttonLabel: "Consultar votación"
  },
  {
    id: "aaa-2026", status: "closed", title: "AAA 2026 · Popularity Award", platform: "IDOLCHAMP",
    description: "La votación finalizó el 4 de noviembre a las 23:59 KST: 8:59 a. m. de Costa Rica. El hilo del 1 de noviembre ya no refleja su vigencia.",
    closesAt: "2026-11-04T23:59:00+09:00", verifiedOn: "2026-11-05", steps: [],
    url: "https://www.starnewskorea.com/en/star/2026/09/04/2026090414043351811", sourceUrl: "https://www.starnewskorea.com/en/star/2026/09/04/2026090414043351811", buttonLabel: "Ver votación original"
  },
];
// Events need id, title, description, date (YYYY-MM-DD), type, url and optional time (Costa Rica).
export const events = [];
const birthdaySource = "https://kprofiles.com/bts-bangtan-boys-members-profile/";
export const annualEvents = [
  { id: "jhope-birthday", monthDay: "02-18", title: "Cumpleaños de Hoseok", type: "Cumpleaños", description: "Un día para celebrar a Jung Hoseok y compartirle nuestro cariño.", url: birthdaySource },
  { id: "suga-birthday", monthDay: "03-09", title: "Cumpleaños de Yoongi", type: "Cumpleaños", description: "Celebramos a Min Yoongi y la música que nos acompaña.", url: birthdaySource },
  { id: "bts-anniversary", monthDay: "06-13", title: "Aniversario de BTS", type: "Aniversario", description: "Celebramos el debut de BTS, el 13 de junio de 2013. Esta fecha anual no anuncia actividades específicas de FESTA.", url: "https://www.korea.net/NewsFocus/People/view?articleId=272561" },
  { id: "army-anniversary", monthDay: "07-09", title: "Aniversario de ARMY", type: "Aniversario", description: "Nuestro día como fandom: una fecha para celebrar la conexión entre BTS y ARMY.", url: "https://weverse.io/bts/notice/1378" },
  { id: "jungkook-birthday", monthDay: "09-01", title: "Cumpleaños de Jungkook", type: "Cumpleaños", description: "Celebramos a Jeon Jungkook y otro año de momentos junto a ARMY.", url: birthdaySource },
  { id: "rm-birthday", monthDay: "09-12", title: "Cumpleaños de Namjoon", type: "Cumpleaños", description: "Un día para celebrar a Kim Namjoon y enviarle nuestros mejores deseos.", url: birthdaySource },
  { id: "jimin-birthday", monthDay: "10-13", title: "Cumpleaños de Jimin", type: "Cumpleaños", description: "Celebramos a Park Jimin con mucho cariño de parte de ARMY.", url: birthdaySource },
  { id: "jin-birthday", monthDay: "12-04", title: "Cumpleaños de Seokjin", type: "Cumpleaños", description: "Un día para celebrar a Kim Seokjin y compartir nuestra alegría.", url: birthdaySource },
  { id: "v-birthday", monthDay: "12-30", title: "Cumpleaños de Taehyung", type: "Cumpleaños", description: "Cerramos diciembre celebrando a Kim Taehyung.", url: birthdaySource },
];
export function eventsForYear(year) {
  return [
    ...events.filter(event => event.date.startsWith(`${year}-`)),
    ...annualEvents.map(event => ({ ...event, id: `${event.id}-${year}`, date: `${year}-${event.monthDay}`, recurring: true })),
  ].sort((a, b) => a.date.localeCompare(b.date));
}
export const socials = [
  { id: "facebook", name: "Facebook", handle: "Butterfly Fanbase", url: "https://www.facebook.com/share/1HYojSVfnj/" },
  { id: "x", name: "X", handle: "@butterfly_fbcr", url: "https://x.com/butterfly_fbcr" },
  { id: "instagram", name: "Instagram", handle: "@butterfly_fbcr", url: "https://www.instagram.com/butterfly_fbcr/" },
  { id: "tiktok", name: "TikTok", handle: "@butter7ly.cr", url: "https://www.tiktok.com/@butter7ly.cr" },
];


