import axios from 'axios';
import cron from 'node-cron';

import { API_KEY } from './config/Index.js';

const emojiis = [
	"bowtie",
	"smile",
	"simple_smile",
	"laughing",
	"blush",
	"smiley",
	"relaxed",
	"smirk",
	"heart_eyes",
	"kissing_heart",
	"kissing_closed_eyes",
	"flushed",
	"relieved",
	"satisfied",
	"grin",
	"wink",
	"stuck_out_tongue_winking_eye",
	"grinning",
	"kissing",
	"kissing_smiling_eyes",
	"stuck_out_tongue",
	"sleeping",
	"worried",
	"frowning",
	"anguished",
	"open_mouth",
	"grimacing",
	"confused",
	"hushed",
	"expressionless",
	"unamused",
	"sweat_smile",
	"sweat",
	"disappointed_relieved",
	"weary",
	"pensive",
	"disappointed",
	"confounded",
	"fearful",
	"cold_sweat",
	"persevere",
	"cry",
	"sob",
	"joy",
	"astonished",
	"scream",
	"neckbeard",
	"tired_face",
	"angry",
	"rage",
	"triumph",
	"sleepy",
	"yum",
	"mask",
	"sunglasses",
	"dizzy_face",
	"imp",
	"smiling_imp",
	"neutral_face",
	"no_mouth",
	"innocent",
	"alien",
	"yellow_heart",
	"blue_heart",
	"purple_heart",
	"heart",
	"green_heart",
	"broken_heart",
	"heartbeat",
	"heartpulse",
	"two_hearts",
	"revolving_hearts",
	"cupid",
	"sparkling_heart",
	"sparkles",
	"star",
	"star2",
	"dizzy",
	"boom",
	"collision",
	"anger",
	"exclamation",
	"question",
	"grey_exclamation",
	"grey_question",
	"zzz",
	"dash",
	"sweat_drops",
	"notes",
	"musical_note",
	"fire",
	"hankey",
	"poop",
	"shit",
	"ok_hand",
	"punch",
	"facepunch",
	"fist",
	"v",
	"wave",
	"hand",
	"raised_hand",
	"open_hands",
	"point_up",
	"point_down",
	"point_left",
	"point_right",
	"raised_hands",
	"pray",
	"point_up_2",
	"clap",
	"muscle",
	"metal",
	"fu",
	"runner",
	"running",
	"couple",
	"family",
	"two_men_holding_hands",
	"two_women_holding_hands",
	"dancer",
	"dancers",
	"ok_woman",
	"no_good",
	"information_desk_person",
	"raising_hand",
	"bride_with_veil",
	"person_with_pouting_face",
	"person_frowning",
	"bow",
	"couplekiss",
	"couple_with_heart",
	"massage",
	"haircut",
	"nail_care",
	"boy",
	"girl",
	"woman",
	"man",
	"baby",
	"older_woman",
	"older_man",
	"person_with_blond_hair",
	"man_with_gua_pi_mao",
	"man_with_turban",
	"construction_worker",
	"cop",
	"angel",
	"princess",
	"smiley_cat",
	"smile_cat",
	"heart_eyes_cat",
	"kissing_cat",
	"smirk_cat",
	"scream_cat",
	"crying_cat_face",
	"joy_cat",
	"pouting_cat",
	"japanese_ogre",
	"japanese_goblin",
	"see_no_evil",
	"hear_no_evil",
	"speak_no_evil",
	"guardsman",
	"skull",
	"feet",
	"lips",
	"kiss",
	"droplet",
	"ear",
	"eyes",
	"nose",
	"tongue",
	"love_letter",
	"bust_in_silhouette",
	"busts_in_silhouette",
	"speech_balloon",
	"thought_balloon",
	"feelsgood",
	"finnadie",
	"goberserk",
	"godmode",
	"hurtrealbad",
	"rage1",
	"rage2",
	"rage3",
	"rage4",
	"suspect",
	"trollface",
	"sunny",
	"foggy",
	"umbrella",
	"cloud",
	"snowflake",
	"snowman",
	"zap",
	"cyclone",
	"ocean",
	"cat",
	"dog",
	"mouse",
	"hamster",
	"rabbit",
	"wolf",
	"frog",
	"tiger",
	"koala",
	"bear",
	"pig",
	"pig_nose",
	"cow",
	"boar",
	"monkey_face",
	"monkey",
	"horse",
	"racehorse",
	"camel",
	"sheep",
	"elephant",
	"panda_face",
	"snake",
	"bird",
	"baby_chick",
	"hatched_chick",
	"hatching_chick",
	"chicken",
	"penguin",
	"turtle",
	"bug",
	"honeybee",
	"ant",
	"beetle",
	"snail",
	"octopus",
	"tropical_fish",
	"fish",
	"whale",
	"whale2",
	"dolphin",
	"cow2",
	"ram",
	"rat",
	"water_buffalo",
	"tiger2",
	"rabbit2",
	"dragon",
	"goat",
	"rooster",
	"dog2",
	"pig2",
	"mouse2",
	"ox",
	"dragon_face",
	"blowfish",
	"crocodile",
	"dromedary_camel",
	"leopard",
	"cat2",
	"poodle",
	"paw_prints",
	"bouquet",
	"cherry_blossom",
	"tulip",
	"four_leaf_clover",
	"rose",
	"sunflower",
	"hibiscus",
	"maple_leaf",
	"leaves",
	"fallen_leaf",
	"herb",
	"mushroom",
	"cactus",
	"palm_tree",
	"evergreen_tree",
	"deciduous_tree",
	"chestnut",
	"seedling",
	"blossom",
	"ear_of_rice",
	"shell",
	"globe_with_meridians",
	"sun_with_face",
	"full_moon_with_face",
	"new_moon_with_face",
	"new_moon",
	"waxing_crescent_moon",
	"first_quarter_moon",
	"waxing_gibbous_moon",
	"full_moon",
	"waning_gibbous_moon",
	"last_quarter_moon",
	"waning_crescent_moon",
	"last_quarter_moon_with_face",
	"first_quarter_moon_with_face",
	"crescent_moon",
	"earth_africa",
	"earth_americas",
	"earth_asia",
	"volcano",
	"milky_way",
	"partly_sunny",
	"octocat",
	"squirrel",
	"bamboo",
	"gift_heart",
	"dolls",
	"school_satchel",
	"mortar_board",
	"flags",
	"fireworks",
	"sparkler",
	"wind_chime",
	"rice_scene",
	"jack_o_lantern",
	"ghost",
	"santa",
	"christmas_tree",
	"gift",
	"bell",
	"no_bell",
	"tanabata_tree",
	"tada",
	"confetti_ball",
	"balloon",
	"crystal_ball",
	"cd",
	"dvd",
	"floppy_disk",
	"camera",
	"video_camera",
	"movie_camera",
	"computer",
	"tv",
	"iphone",
	"phone",
	"telephone",
	"telephone_receiver",
	"pager",
	"fax",
	"minidisc",
	"vhs",
	"speaker",
	"mute",
	"loudspeaker",
	"mega",
	"hourglass",
	"hourglass_flowing_sand",
	"alarm_clock",
	"watch",
	"radio",
	"satellite",
	"loop",
	"mag",
	"mag_right",
	"unlock",
	"lock",
	"lock_with_ink_pen",
	"closed_lock_with_key",
	"key"
];

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
	"My mother always used to say: The older you get, the better you get, unless you’re a banana.",
	"If I’m not back in five minutes, just wait longer",
	"Without requirements or design, programming is the art of adding bugs to an empty text file."
];

const Cron = {

	async init() {
		cron.schedule('*/10 * * * *', () => this.updateStatus());

		this.updateStatus();
	},

	async updateStatus() {
		let dailyNumber = Math.round(getRandomArbitrary(0, quotes.length - 1));
		let dailyEmojii = Math.round(getRandomArbitrary(0, emojiis.length - 1));

		let dailyQuote = quotes[dailyNumber];

		function getRandomArbitrary(min, max) {
			return Math.random() * (max - min) + min;
		}

		const url = 'https://slack.com/api/users.profile.set';
		const header = {
			headers: {
				'Authorization': `Bearer ${API_KEY}`,
				'Content-Type': 'application/json'
			}
		}
		let data = {
			profile: {
				status_text: dailyQuote,
				status_emoji: `:${emojiis[dailyEmojii]}:`
			}
		}

		let result;
		try {
			result = axios.post(url, data, header);
		} catch (error) {
			console.log(error);
		}
	}

}

export default Cron
