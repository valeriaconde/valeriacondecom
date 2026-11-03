import type { Text } from '@/i18n';

/**
 * Memes: the "Out of minutes?" card on the homepage and the page at /memes.
 *
 * Each entry is a meme file or a quote (or both), shown in this order. The newest goes at the top.
 * - A meme: put the picture, GIF or video (.mp4, .webm, .mov) in src/assets/memes/ and write
 *   its filename as `file`. Add `alt` to describe it for people who can't see it.
 * - A quote: `quote`, and optionally who said it (`by`) and where (`source`).
 * `caption` adds a line of text under a meme.
 * Any text can be { en: '…', es: '…' } once you have the Spanish version.
 */
export type Meme = { file?: string; alt?: Text; caption?: Text; quote?: Text; by?: string; source?: Text };

export const memesText = {
  /** The homepage card. The question mark (and ¿ in Spanish) is added in pink automatically. */
  question: { en: 'Out of minutes', es: 'Se te acabaron los minutos' } as Text,
  scroll: { en: 'Scroll here', es: 'Scrollea aquí' } as Text,
  /** The page at /memes */
  title: 'Memes' as Text,
  empty: 'Nothing here yet. Check back soon.' as Text,
};

export const memes: Meme[] = [
  { file: 'meme-4265.jpg', alt: 'A hand holding a sketchbook with tiny doodles of the ducks standing by the pond behind it' },
  { file: 'meme-4264.jpg', alt: '"Me watching the US Open": a player tossing the ball to serve. "My dog watching the US Open": just the tennis ball' },
  { file: 'meme-4263.jpg', alt: 'Tweet: "having to pee really puts things into perspective. like ok none of this matters"' },
  { file: 'meme-4262.jpg', alt: 'Two pigeons by a white wall on an empty sidewalk, one with its wing on the other like it is comforting it' },
  { file: 'meme-4261.jpg', alt: 'Meme from the US Open 2026: "i don\'t care if you win… i need Zverev to lose"' },
  { file: 'meme-4260.jpg', alt: 'A dachshund sitting on the floor looking up sadly: "Farmeando lástima 🥺"' },
  { file: 'meme-4259.jpg', alt: '"Albumes de Bad Bunny be like": six album covers, each relabeled "Extraño a mi ex" or "Sexo culo"' },
  { file: 'meme-4258.jpg', alt: 'A wide-eyed chihuahua: "when i\'m spreading misinformation and someone gets their phone out to fact check me"' },
  { file: 'meme-4257.jpg', alt: 'Tweet of a tiny island in a Norwegian fjord with one red house. Reply: "No that\'s fine I just imagined it would be bigger"' },
  { file: 'meme-4256.jpg', alt: 'A sad Minion in a dark forest: "hola papoi q haces te extraño"' },
  { file: 'meme-4255.jpg', alt: '"the leftism leaving my body the moment i start to win at monopoly", over a glowing spirit rising out of a body' },
  { file: 'meme-4254.jpg', alt: 'Inspector Gadget talking into his watch: "How mfs look texting from their Apple Watch", and a tweet about a cashier calling someone Ben 10 for paying with their watch' },
  { file: 'meme-4253.jpg', alt: 'A tuxedo cat on a pink heart background: "sorry i can\'t go, i\'m an indoor cat"' },
  { file: 'meme-4252.jpg', alt: '"China\'s Reunification Flag Proposal": the Chinese and Taiwanese flags combined into the Chinese flag' },
  { file: 'meme-4251.jpg', alt: 'Two Smiski figures, one kneeling over the other lying down: "WAKE UP" / "i awek"' },
  { file: 'meme-4250.jpg', alt: 'Rainbow background: "if i was a little crumb would you let me stay in ur bed or would you flick me onto the floor"' },
  { file: 'meme-4249.jpg', alt: 'A man in a cowboy hat wrapped in a Frozen blanket next to a table of tequila and beer: "Se viene la época de pistear así:"' },
  { file: 'meme-4248.jpg', alt: 'A man on a mountain looking back: "Es muy fácil juzgar a Adán pero intenta negarle algo a una mujer encuerada"' },
  { file: 'meme-4247.jpg', alt: 'A dog driving a little ATV: "Salí a buscar trabajo pero nadie ocupa patrón"' },
  { file: 'meme-4246.jpg', alt: 'A smug orange cat: "Te perdono, pero todo tiene un precio"' },
  { file: 'meme-4245.jpg', alt: 'A man in sunglasses in an office: "I\'m the opposite of AI. It took me an hour to write one email and I haven\'t had any water today."' },
  { file: 'meme-4244.jpg', alt: 'Tweets: "The average date now costs $252", "A Costco hot dog is literally $1.50", "What if she eats 168 hot dogs, huh?", "Then we marry"' },
  { file: 'meme-4243.jpg', alt: 'A smug man at his cluttered office desk: "‘are you free after work’ dude i\'m free during work"' },
  { file: 'meme-4242.jpg', alt: 'A toucan plush: "Con todo respeto pero si tu plan incluye sillas sin respaldo no cuentes conmigo"' },
  { file: 'meme-4241.jpg', alt: 'Facebook post: "If my girl was wrong I would simply reshape reality so that what she said is correct"' },
  { file: 'meme-4240.jpg', alt: 'A chihuahua with a pink bow next to a laptop: "Lamentablemente no sufrí ningún fraude, solo era yo gastando sin autocontrol."' },
  { file: 'meme-4239.jpg', alt: 'Tweet: "If you\'re not absolutely genuinly pathetic for your girlfriend what are you like even doing"' },
  { file: 'meme-4238.jpg', alt: 'Stuart Little looking guilty: "When she\'s mad at you and goes to eat her stashed chocolate to calm down but you already ate it"' },
  { file: 'meme-4237.jpg', alt: 'Three cats sitting at a table with shot glasses: "Mi mamá: ‘Pensé que iban a venir todos tus amigos’ Yo: ya son todos má"' },
  { file: 'meme-4236.jpg', alt: 'A cat meditating in front of a mountain lake: "busco pelea"' },
  { file: 'meme-4235.jpg', alt: 'Four dachshunds on a rainbow dolphin background: "Mañana tienes que ir a trabajar y yo no"' },
  { file: 'meme-4234.jpg', alt: 'Two tigers relaxing in a pool: "quizás nacimos para ser desempleados"' },
  { file: 'meme-4233.jpg', alt: 'A close-up of a cat with its eyes shut: "Ahora entiendo porqué los gallos se levantan y gritan"' },
  { file: 'meme-4232.jpg', alt: 'A white and orange cat sitting very upright: "Imagina tener 4 axilas y que te tomen la temperatura por el *"' },
  { file: 'meme-4231.jpg', alt: 'A drawing of a little chicken: "if i was the last chicken on earth would u keep me as a pet or eat me?"' },
  { file: 'meme-4230.jpg', alt: 'A Cars 2 character in English, "Oh, same old, same old, what\'s up with you?", and in the Mexican dub, "¿A qué sabe? Pues a pistache"' },
  { file: 'meme-4229.jpg', alt: 'A man holding his hand out: "i\'m older than you."' },
  { file: 'meme-4228.jpg', alt: 'A plain pink cake: "que increíble es tener a alguien que puedo atormentar de lunes a domingo."' },
  { file: 'meme-4227.jpg', alt: 'A drawing of a little white creature with a bow holding handcuffs: "I got u a friendship bracelet"' },
  { file: 'meme-4226.jpg', alt: 'A grumpy toy clown: "how I look when the birthday person get their cake in a flavor I don\'t like"' },
  { file: 'meme-4225.jpg', alt: 'Tweet: "therapy only works if you have a lower IQ than the therapist"' },
  { file: 'meme-4224.jpg', alt: 'Gradient background: "the medieval royalty urge to always have entertainment while eating"' },
  { file: 'meme-4223.jpg', alt: 'A hamster close up: "Good morning. Your cute problem is already awake"' },
  { file: 'meme-4222.jpg', alt: 'Cartoon monkeys and apes: "Película/serie: *crea un personaje primate*" / "La dirección del doblaje: Pónganle acento cubano"' },
  { file: 'meme-4221.jpg', alt: 'A green cartoon frog pointing: "i\'m hungry… it\'s time for you to figure out what i want to eat."' },
  { file: 'meme-4220.jpg', alt: 'A dodo, a penguin, an ostrich and a chicken holding weapons: "Never trigger the flight or fight response of the flightless bird"' },
  { file: 'meme-4219.jpg', alt: 'A grim reaper with "Game Over" knuckles: "¿Cómo saber si una película es buena? Muy fácil… Si me gusta a mí = es buena. Si no me gusta a mí = es mala"' },
  { file: 'meme-4218.jpg', alt: 'A mirror selfie in a work vest: "Era obvio que me tenía que patinar el coco precioso ni modo que solo esté nalgona…"' },
  { file: 'meme-4217.jpg', alt: 'A mirror selfie: "I am better as a concept do not interact with me"' },
  { file: 'meme-4216.jpg', alt: 'Anthony Bourdain in sunglasses: "My love language is leaving people alone"' },
  { file: 'meme-4214.jpg', alt: 'Hello Kitty comic: "im having a bad day :(" — her friend thinks "when will this bitch have a good day" and replies "whats wrong"' },
  { file: 'meme-4213.jpg', alt: 'Faded text over a dark shirt: "Mientras no te vea mi nombre tatuado no te creo nada."' },
  { file: 'meme-4212.jpg', alt: 'Meat, sausages and onions on a grill: "this and the loml on a Saturday night"' },
  { file: 'meme-4211.jpg', alt: 'SpongeBob holding his hand up: "me when my boyfriend is trying to give me a logical solution to my problem instead of babying me"' },
  { file: 'meme-4210.jpg', alt: 'A popcorn bucket full of green grapes at the movies: "Si en vez de palomitas vendieran esto en el cine, sería feliz"' },
  { file: 'meme-4209.jpg', alt: 'Chat bubbles: "Cuantos días crees que uno puede aguantar sin comer sushi es que ya me estoy sintiendo mal"' },
  { file: 'meme-4208.jpg', alt: 'A small dog dressed as a mouse sitting alone on a subway bench next to a cheese plush' },
  { file: 'meme-4207.jpg', alt: 'Salmon nigiri: "Al sushi y a un beso tuyo jamás les diría que no"' },
  { file: 'meme-4206.jpg', alt: 'Tweet: "Halloween at my house this year? Trick-or-treaters get a single scallop, seared to order. Please allow 3-5 minutes."' },
  { file: 'meme-4205.jpg', alt: 'Cookies on a heart background: "Y una vez más, todo está bajo control gracias a un dulcesito después de almorzar"' },
  { file: 'meme-4204.jpg', alt: 'A Smiski in a knitted hat sitting on the sand: "me after using my own money and realizing how expensive i am"' },
  { file: 'meme-4203.jpg', alt: 'Chat: a photo of a crashed motorcycle, "Tuve un accidente, envía una ambulancia a mi ubicación", answered with "Te ves tan linda amor" to "¿Cómo está mi outfit???"' },
  { file: 'meme-4202.jpg', alt: 'A dog: "Did your human break a treat in half and pretend that\'s a full serving? You may be entitled to compensation. Call Attorneys at Paw"' },
  { file: 'meme-4201.jpg', alt: '"Are you free?" — a man disintegrating. "For lunch." — the same man, whole again' },
  { quote: 'Eventually I must be dealt with.' },
  { quote: "Thursday? This Thursday? No, I can't make it. No, the curse won't be lifted by then." },
  { quote: '“I never see you at the club.” Ok? I never see you at the clearing in the forest.' },
  { quote: 'I have survived everything, but I fear that I cannot survive myself.', by: 'Cynthia Chapman' },
  { quote: 'Even if you were a burden to bear, I would gladly carry you. You are my friend.' },
  { quote: "It's going to be okay, but it's going to be different." },
];
