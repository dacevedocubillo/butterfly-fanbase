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
export const votes = [];
// Events need id, title, description, date (YYYY-MM-DD), type, url and optional time (Costa Rica).
export const events = [];
const birthdaySource = "https://kprofiles.com/bts-bangtan-boys-members-profile/";
export const annualEvents = [
  { id: "jhope-birthday", monthDay: "02-18", title: "Cumpleaños de Hoseok · j-hope", type: "Cumpleaños", description: "Un día para celebrar a Jung Hoseok y compartirle nuestro cariño.", url: birthdaySource },
  { id: "suga-birthday", monthDay: "03-09", title: "Cumpleaños de Yoongi · SUGA", type: "Cumpleaños", description: "Celebramos a Min Yoongi y la música que nos acompaña.", url: birthdaySource },
  { id: "bts-anniversary", monthDay: "06-13", title: "Aniversario de BTS", type: "Aniversario", description: "Celebramos el debut de BTS, el 13 de junio de 2013. Esta fecha anual no anuncia actividades específicas de FESTA.", url: "https://www.korea.net/NewsFocus/People/view?articleId=272561" },
  { id: "army-anniversary", monthDay: "07-09", title: "Aniversario de ARMY", type: "Aniversario", description: "Nuestro día como fandom: una fecha para celebrar la conexión entre BTS y ARMY.", url: "https://weverse.io/bts/notice/1378" },
  { id: "jungkook-birthday", monthDay: "09-01", title: "Cumpleaños de Jungkook · Jung Kook", type: "Cumpleaños", description: "Celebramos a Jeon Jungkook y otro año de momentos junto a ARMY.", url: birthdaySource },
  { id: "rm-birthday", monthDay: "09-12", title: "Cumpleaños de Namjoon · RM", type: "Cumpleaños", description: "Un día para celebrar a Kim Namjoon y enviarle nuestros mejores deseos.", url: birthdaySource },
  { id: "jimin-birthday", monthDay: "10-13", title: "Cumpleaños de Jimin", type: "Cumpleaños", description: "Celebramos a Park Jimin con mucho cariño de parte de ARMY.", url: birthdaySource },
  { id: "jin-birthday", monthDay: "12-04", title: "Cumpleaños de Seokjin · Jin", type: "Cumpleaños", description: "Un día para celebrar a Kim Seokjin y compartir nuestra alegría.", url: birthdaySource },
  { id: "v-birthday", monthDay: "12-30", title: "Cumpleaños de Taehyung · V", type: "Cumpleaños", description: "Cerramos diciembre celebrando a Kim Taehyung.", url: birthdaySource },
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

