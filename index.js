var axios = require('axios');
var cron = require('node-cron');
require('dotenv').config();

const api_key = `Bearer ${process.env.API_KEY}`;

cron.schedule('10 * * * *', () => {
	let dailyNumber = Math.round(getRandomArbitrary(0, quotes.length - 1));

	let dailyQuote = quotes[dailyNumber];

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	const url = 'https://slack.com/api/users.profile.set';
	const header = {
		headers: {
			'Authorization': api_key,
			'Content-Type': 'application/json'
		}
	}
	let data = {
		profile: {
			status_text: dailyQuote,
			status_emoji: ":crystal_ball:"
		}
	}

	let result;
	try {
		result = axios.post(url, data, header);
	} catch (error) {
		console.log(error)
	}


});
const quotes = [
	"I’m not superstitious, but I am a little stitious.",
	"I walk around like everything’s fine, but deep down, inside my shoe, my sock is sliding off",
	"I haven’t spoken to my wife in years. I didn’t want to interrupt her.",
	"There is no sunrise so beautiful that it is worth waking me up to see it.",
	"Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts.",
	"I’m not insane. My mother had me tested.",
	"Common sense is like deodorant. The people who need it most never use it.",
	"Opinions are like ass-holes, everybody has one",
	"9 ud af 10 læger siger jeg er sindsyg, den sidste stak af",
	"No man goes before his time—unless the boss leaves early.",
	"I have come here to chew bubblegum and kick ass... and I'm all out of bubblegum",
	"What is this even?",
	"Work, work, work",
	"Folk siger, at ingenting er umuligt, men jeg laver ingenting hver dag.",
	"Nogle mennesker taler med dyr. Der er dog ikke mange, der lytter. Det er problemet.",
	"Gode venner kan lave alting sammen- men kun de bedste venner er i stand til at lave ingenting sammen",
	"Er du nogensinde stoppet op for at tænke og glemt at starte igen?",
	"Nogle gange,” sagde Plys, “er det de mindste ting, der fylder mest i hjertet.",
	"When I wrote this code, only God and I understood what I did. Now only God knows.",
	"How many programmers does it take to change a light bulb? None, that’s a hardware problem.",
	"Programming is like sex: One mistake and you have to support it for the rest of your life.",
	"It’s not a bug — it’s an undocumented feature.",
	"The best thing about a boolean is even if you are wrong, you are only off by a bit.",
	"One man’s crappy software is another man’s full-time job.",
	"Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work.",
	"Software and cathedrals are much the same — first we build them, then we pray.",
	"A good programmer is someone who always looks both ways before crossing a one-way street.",
	"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
	"It works on my machine.",
	"It compiles; ship it.",
	"Walking on water and developing software from a specification are easy if both are frozen.",
	"What’s the object-oriented way to get wealthy? Inheritance.",
	"Why do Java programmers have to wear glasses? Because they don’t C#.",
	"A SQL query goes into a bar, walks up to two tables, and asks, ‘Can I join you?",
	"My mother always used to say: The older you get, the better you get, unless you’re a banana."
];




