export const thalassic_na_image = "thalassic new flat";
export const thalassic_na_alt = "Covers for the complete Thalassic New Adult series";
export const thalassic_link = "/thalassic-series";
export const thalassic_na_text = "Check it Out";
export const thalassic_na_mobile_text = "Shop";
export const thalassic_na_button_color = "Soul";


const thalassic_bookshop_link = "https://shop.lizshipton.com/collection/paperbacks";
const bookshop_text = "Buy from Me";
const bookshop_mobile_text = "My Shop";
const thalassic_na_amazon_link = "https://amzn.to/3PBZR62";
const amazon_text = "Buy from Amazon";
const amazon_mobile_text = "Amazon";

const salt_image = "salt ebook";
const salt_alt = "Cover for Salt";

const thalassic_na_heading = "What do you do with a drunken sailor when the world is underwater?";
const thalassic_na_one = "My name is Bird Howsley, and I'm a beautiful disaster. Well...'beautiful' is probably being generous, but the 'disaster' part is right.";
const thalassic_na_two = "In a brutal dystopian waterworld, where survival depends on skill and smarts, I'm pretty much always one bad decision away from watching my life go completely down the drain.";
const thalassic_na_three = "Luckily, I have a lifeline: my cute, level-headed sailing teacher, Sargo Paz. Did I say cute? I didn't mean cute. He's just a friend. I definitely don't have sex dreams about him...";
const thalassic_na_four = "Anyway, last week I got a message from my brother, who's been dead for ten years. That's odd, right? I came up with a plan to find him, but it went pretty badly sideways and Sargo and I ended up in the crosshairs of a dangerous underground organization that wants us dead.";
const thalassic_na_five = "We didn't know what else to do but flee into the Salt on Sargo's boat. Now we're cooped up together in very close quarters and things are getting - um...tense...between us.";
const thalassic_na_six = "Oh, and did I mention I've been blacking out? Like...a lot?";

const review_heading = "Praise for the Thalassic Series";
const review_one = '"I love it all. I really enjoyed every bit of this book. The thrill and adventure. So many mysteries to solve. I can’t wait to read the next book." ⭐ ⭐ ⭐ ⭐ ⭐';
const review_two = '"I’m usually a high fantasy fan, but I’ve been tearing through these so fast. I’m just starting book three and can’t wait to see what happens!" ⭐ ⭐ ⭐ ⭐ ⭐';
const review_three = '"The tension between Bird and Sargo is just mindblowing!" ⭐ ⭐ ⭐ ⭐ ⭐';
const review_four = '"Couldn’t put it down, a fast paced adventure full of pirates!" ⭐ ⭐ ⭐ ⭐ ⭐';

export const content = [
    {
        heading: thalassic_na_heading,
        paragraphs: {text: [thalassic_na_one, thalassic_na_two, thalassic_na_three, thalassic_na_four, thalassic_na_five, thalassic_na_six]},
        image: {src: salt_image, alt: salt_alt },
        ctas: [
            {text: bookshop_text, mobileText: bookshop_mobile_text, colorScheme: thalassic_na_button_color, link: thalassic_bookshop_link},
            {text: amazon_text, mobileText: amazon_mobile_text, colorScheme: thalassic_na_button_color, link: thalassic_na_amazon_link},
        ],
        noMargin: true
    },
    {
        heading: review_heading,
        paragraphs: {italic: true, text: [review_one, review_two, review_three, review_four]},
        image: {src: thalassic_na_image, alt: thalassic_na_alt },
    }
  ]
  