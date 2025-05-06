export const THALASSIC_INDEX_PAGE = {
    image: "thalassic new flat",
    title: "⚓ The Thalassic Series ⚓",
    alt: "Covers for the Thalassic Series",
    headlineOne: "What do you do with a drunken sailor when the world is underwater?",
    headlineTwo: "",
    cta: "Check it Out",
    mobileCta: "Shop",
    link: "/thalassic-series",
    button: "BlackOne",
    isGif: false
}

const thalassic_na_image = "thalassic new flat";
const thalassic_na_alt = "Covers for the complete Thalassic New Adult series";
const thalassic_na_button_color_one = "BlackOne";
const thalassic_na_button_color_two = "BlackTwo";


const thalassic_bookshop_link = "https://shop.lizshipton.com/collection/thalassic";
const bookshop_text = "Buy from Liz";
const bookshop_mobile_text = "Bookshop";
const thalassic_na_amazon_link = "https://amzn.to/3PBZR62";
const amazon_text = "Buy from Amazon";
const amazon_mobile_text = "Amazon";

const salt_image = "salt ebook";
const salt_alt = "Cover for Salt";
const spines_image = "spines";
const spines_alt = "Thalassic Series Spines";

const thalassic_na_heading = "The Thalassic Series";
const thalassic_na_subheading = "Fight to save humanity. Learn to save yourself.";
const thalassic_na_one = "When a mysterious message arrives from the brother she thought was dead, Bird Howsley sets off on an epic voyage to find him. But she must cross a brutal dystopian waterworld ravaged by bloodthirsty pirates, global disaster, and dark political secrets.";
const thalassic_na_two = "Determined, Bird barters passage from her surly mentor Sargo, kicking off an extraordinary nine-book quest that spans seven oceans, five dimensions, and four intertwining love stories."
const thalassic_na_three = "Set in a unique and exquisitely detailed world full of beautiful, broken characters, The Thalassic Series sweeps you away with dark humor, toe-curling romance, and a twisting plot that keeps you guessing right up until the end.";
const thalassic_na_four = "For fans of Divergent, Fourth Wing, and Pirates of the Caribbean, this series is a perfect storm of slow-burn romance and fast-paced adventure.";
const thalassic_na_five = ""; 

const review_heading = "Praise for the Thalassic Series";
const review_one = '"The Thalassic Series gave me back that \'just finished ACOTAR feeling\'" ⭐ ⭐ ⭐ ⭐ ⭐';
const review_two = '"I’m usually a high fantasy fan, but I’ve been tearing through these so fast. I’m just starting book three and can’t wait to see what happens!" ⭐ ⭐ ⭐ ⭐ ⭐';
const review_three = '"The tension between Bird and Sargo is just mindblowing!" ⭐ ⭐ ⭐ ⭐ ⭐';
const review_four = '"Couldn’t put it down, a fast paced adventure full of pirates!" ⭐ ⭐ ⭐ ⭐ ⭐';

const reading_order_heading = "Suggested Reading Orders";
const reading_order_one = '#1: Straight through';
const reading_order_two = 'Salt  . .  Sand  . .  Soul  . .  Paz  . .  Passage  . .  Prologue  . .  Scourge & Seed  . .  Savage  . .  Savage: The Lost Years';
const reading_order_three = '#2: In the order they were written';
const reading_order_four = 'Salt  . .  Scourge  . .  Sand  . .  Seed  . .  Soul  . .  Savage  . .  Paz  . .  Passage  . .  Prologue  . .  Savage: The Lost Years';
const reading_order_five = '#3: Chronologically';
const reading_order_six = 'Scourge  . .  Savage  . .  Seed  . .  Savage: The Lost Years  . .  Salt  . .  Sand  . .  Soul  . .  Paz  . .  Passage  . .  Prologue';
const reading_order_link = "https://amzn.to/3CvivrY";
const reading_order_cta_text = "Start with Salt";
const reading_order_cta_mobile_text = "Start";
const reading_order_button_color = "Purple";

const thalassic_ya_heading = "Young Adult (YA) Editions";
const thalassic_ya_image = "ya complete mock";
const thalassic_ya_alt = "Covers for the Thalassic YA series";
const thalassic_ya_shop_link = "https://shop.lizshipton.com/collection/ya-thalassic";
const thalassic_ya_cta_text = "Buy YA Editions";
const thalassic_ya_cta_mobile_text = "Shop YA";
const thalassic_ya_button_color = "Blue";

const thalassic_ya_one = "I offer two editions of the Thalassic Series: a New Adult edition and a Young Adult edition."
const thalassic_ya_two = "The only difference between the two editions is that in the New Adult books the characters are a few years older and the books have explicit spicy scenes. The Young Adult editions do not include these scenes, so they are appropriate for teens and for people who prefer no-spice romance."
const thalassic_ya_three = "Amazon and other online retailers won't allow me to offer two versions of my series at the same time, so I offer the no-spice YA editions exclusively via this website."
const thalassic_ya_four = "Buying direct is a great way to support indie authors! It means we get to keep more of our royalties and aren't beholden to Amazon and other retailers for our income. I appreciate your willingness to buy these books from me in this way. Thank you!"

const playlist_heading = "Playlist";
const playlist_image = "playlist";
const playlist_alt = "Listen on Spotify";
const playlist_link = "https://open.spotify.com/playlist/1vYEb8cpRhdLzipFo1fVzp";
const playlist_cta_text = "Listen on Spotify";
const playlist_cta_mobile_text = "Listen";
const playlist_button_color = "Green";

const playlist_one = "Songs that were going round in my head while I was writing the books."
const playlist_two = "Someday I'll have a list for you of which songs go with which books, but not today."

export const content = [
    {
        heading: thalassic_na_heading,
        subheading: thalassic_na_subheading,
        paragraphs: {text: [thalassic_na_one, thalassic_na_two, thalassic_na_three, thalassic_na_four,thalassic_na_five]},
        image: {src: salt_image, alt: salt_alt },
        ctas: [
            {text: bookshop_text, mobileText: bookshop_mobile_text, colorScheme: thalassic_na_button_color_one, link: thalassic_bookshop_link},
            {text: amazon_text, mobileText: amazon_mobile_text, colorScheme: thalassic_na_button_color_two, link: thalassic_na_amazon_link},
        ],
    },
    {
        heading: review_heading,
        paragraphs: {italic: true, text: [review_one, review_two, review_three, review_four]},
        image: {src: thalassic_na_image, alt: thalassic_na_alt },
    },
    {
        heading: reading_order_heading,
        paragraphs: {withHeaders: true, text: [reading_order_one, reading_order_two, reading_order_three, reading_order_four, reading_order_five, reading_order_six]},
        image: {src: spines_image, alt: spines_alt },
        ctas: [
            {text: reading_order_cta_text, mobileText: reading_order_cta_mobile_text, colorScheme: reading_order_button_color, link: reading_order_link},
        ],
    },
    {
        heading: thalassic_ya_heading,
        paragraphs: {text: [thalassic_ya_one, thalassic_ya_two, thalassic_ya_three, thalassic_ya_four]},
        image: {src: thalassic_ya_image, link: thalassic_ya_shop_link, alt: thalassic_ya_alt},
        ctas: [{text: thalassic_ya_cta_text, mobileText: thalassic_ya_cta_mobile_text, colorScheme: thalassic_ya_button_color, link: thalassic_ya_shop_link}]
    },
    {
        heading: playlist_heading,
        paragraphs: {text: [playlist_one, playlist_two]},
        image: {src: playlist_image, link: playlist_link, alt: playlist_alt},
        ctas: [{text: playlist_cta_text, mobileText: playlist_cta_mobile_text, colorScheme: playlist_button_color, link: playlist_link}]
    }
  ]
  