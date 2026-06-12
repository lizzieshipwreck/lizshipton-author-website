const thalassic_na_button_color_one = "Blue";
const thalassic_na_button_color_two = "Yellow";
const thalassic_link = "/thalassic-series"

export const THALASSIC_INDEX_PAGE = {
    image: "Thalassic Website Header",
    mobileImage: "Salt Cover",
    title: "⚓ The Thalassic Series ⚓",
    alt: "Covers for the Thalassic Series",
    headlineOne: "What do you do with a drunken sailor when the world is underwater?",
    headlineTwo: "",
    cta: "Find Out",
    mobileCta: "Find Out",
    link: thalassic_link,
    button: "Blue",
}

const ya_complete_mock = "ya complete mock";
const thalassic_na_alt = "quote from thalassic";

const thalassic_bookshop_link = "https://shop.lizshipton.com/collection/thalassic";
const bookshop_text = "Buy from Liz";
const bookshop_mobile_text = "Paperback";
const thalassic_na_amazon_link = "https://amzn.to/3PBZR62";
const amazon_text = "Read Free in KU";
const amazon_mobile_text = "Read in KU";
const thalassic_ks_link = "https://www.kickstarter.com/projects/lizshipton/the-thalassic-series-deluxe-hardcover-omnibuses";
const thalassic_ks_text = "Follow the Project";
const thalassic_ks_mobile_text = "Follow";

const salt_image = "bird sargo website";
const salt_alt = "Cover for Salt";
const spines_image = "spines";
const spines_alt = "Thalassic Series Spines";
const thalassic_ks_image = "thalassic website hardcovers";
const thalassic_ks_alt = "Thalassic Series Kickstarter";

const thalassic_na_subheading = "What do you do with a drunken sailor when the world is underwater?";
const thalassic_na_one = "In a brutal dystopian waterworld, where survival depends on skill and smarts, Bird Howsley is a beautiful disaster. Or...maybe just a disaster, period.";
const thalassic_na_two = "When a mysterious message arrives from the brother she thought was dead, Bird bribes her surly (and hot) mentor Sargo Paz to help her find him. Together, they voyage across a dangerous high-tech world ravaged by bloodthirsty pirates, global disaster, and dark political secrets.";
const thalassic_na_three = "Their journey kicks off an epic tale spanning nine books, seven oceans, five alternate dimensions, and three intertwining love stories.";
const thalassic_na_four = "These books contain explicit sexual content."; 

const thalassic_ks_heading = "Deluxe Special Edition Omnibuses";
const thalassic_ks_subheading = "Launching on Kickstarter 2026";
const thalassic_ks_one = "Own the complete 9-book series as 3 deluxe hardcover omnibuses.";
const thalassic_ks_two = "Art by the incomparable Daniel Lorca, who handles all my art.";
const thalassic_ks_three = "The books are foiled hardcases with continuous dust jacket and sprayed edge art, and gorgerous color illustrations. Hand-signed bookplates. First twenty numbered. Also available are bookmarks, stickers, and wearable swag.";
const thalassic_ks_four = "Bonus rewards and stretch goals include decorative chapter headers, additional interior art, NSFW prints, and more."; 

const review_heading = "Praise for the Thalassic Series";
const review_one = '"Gave me that \'just finished ACOTAR\' feeling" ⭐ ⭐ ⭐ ⭐ ⭐';
const review_two = '"Dystopian like I\'ve never read." ⭐ ⭐ ⭐ ⭐ ⭐';
const review_three = '"I’m usually a high fantasy fan, but I’ve been tearing through these so fast. I’m just starting book three and can’t wait to see what happens!" ⭐ ⭐ ⭐ ⭐ ⭐';
const review_four = '"The tension between Bird and Sargo is just mindblowing!" ⭐ ⭐ ⭐ ⭐ ⭐';

const reading_order_heading = "Suggested Reading Orders";
const reading_order_one = '#1: Straight through';
const reading_order_two = 'Salt  . .  Sand  . .  Soul  . .  Paz  . .  Passage  . .  Prologue  . .  Scourge & Seed  . .  Savage  . .  Savage: The Lost Years';
const reading_order_three = '#2: In the order they were written';
const reading_order_four = 'Salt  . .  Scourge  . .  Sand  . .  Seed  . .  Soul  . .  Savage  . .  Paz  . .  Passage  . .  Prologue  . .  Savage: The Lost Years';
const reading_order_five = '#3: Chronologically';
const reading_order_six = 'Savage  . .  Scourge  . .  Seed  . .  Savage: The Lost Years  . .  Salt  . .  Sand  . .  Soul  . .  Paz  . .  Passage  . .  Prologue';
const reading_order_link_salt = "https://amzn.to/3CvivrY";
const reading_order_link_savage = "https://amzn.to/4gqghKi";
const reading_order_cta_text_salt = "Start with Salt";
const reading_order_cta_mobile_text_salt = "Salt";
const reading_order_cta_text_savage = "Start with Savage";
const reading_order_cta_mobile_text_savage = "Savage";

const playlist_heading = "Playlist";
const playlist_image = "playlist";
const playlist_alt = "Listen on Spotify";
const playlist_link = "https://open.spotify.com/playlist/1vYEb8cpRhdLzipFo1fVzp";
const playlist_cta_text = "Listen on Spotify";
const playlist_cta_mobile_text = "Listen";

const playlist_one = "Songs that were going round in my head while I was writing the books."
const playlist_two = "Someday I'll have a list for you of which songs go with which books, but not today."

export const content = [
    {
        subheading: thalassic_na_subheading,
        paragraphs: {text: [thalassic_na_one, thalassic_na_two, thalassic_na_three, thalassic_na_four]},
        images: [{src: salt_image, alt: salt_alt }],
        ctas: [
            {text: bookshop_text, mobileText: bookshop_mobile_text, colorScheme: thalassic_na_button_color_one, link: thalassic_bookshop_link},
            {text: amazon_text, mobileText: amazon_mobile_text, colorScheme: thalassic_na_button_color_two, link: thalassic_na_amazon_link},
        ],
    },
    {
        heading: thalassic_ks_heading,
        subheading: thalassic_ks_subheading,
        paragraphs: {text: [thalassic_ks_one, thalassic_ks_two, thalassic_ks_three, thalassic_ks_four]},
        images: [{src: thalassic_ks_image, alt: thalassic_ks_alt }],
        ctas: [
            {text: thalassic_ks_text, mobileText: thalassic_ks_mobile_text, colorScheme: thalassic_na_button_color_one, link: thalassic_ks_link},
        ],
    },
    {
        heading: review_heading,
        paragraphs: {italic: true, text: [review_one, review_two, review_three, review_four]},
        images: [{src: ya_complete_mock, alt: thalassic_na_alt }],
    },
    {
        heading: reading_order_heading,
        paragraphs: {withHeaders: true, text: [reading_order_one, reading_order_two, reading_order_three, reading_order_four, reading_order_five, reading_order_six]},
        images: [{src: spines_image, alt: spines_alt }],
        ctas: [
            {text: reading_order_cta_text_salt, mobileText: reading_order_cta_mobile_text_salt, colorScheme: thalassic_na_button_color_one, link: reading_order_link_salt},
            {text: reading_order_cta_text_savage, mobileText: reading_order_cta_mobile_text_savage, colorScheme: thalassic_na_button_color_two, link: reading_order_link_savage}
        ],
    },
    {
        heading: playlist_heading,
        paragraphs: {text: [playlist_one, playlist_two]},
        images: [{src: playlist_image, link: playlist_link, alt: playlist_alt}],
        ctas: [{text: playlist_cta_text, mobileText: playlist_cta_mobile_text, colorScheme: thalassic_na_button_color_two, link: playlist_link}],
        noMargin: true
    }
  ]
  