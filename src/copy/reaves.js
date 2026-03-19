const medaling_heading = "Medaling: A Rivals-to-Lovers MM Hockey Romance";
const medaling_subheading = "Two rivals. One room. Three weeks to ruin everything.";

const medaling_image = "medaling website";
const medaling_alt = "Cover for Medaling";

const medaling_one = "Liam Harris is Team USA's most intimidating enforcer — six-foot-three, granite-jawed...and so deep in the closet he's forgotten there's a door. He's at the Winter Olympics for one reason: gold. What he's not here for is Nicolas Arsenault.";
const medaling_two = "Nic left the US for Quebec at sixteen and never looked back. He's bilingual, bisexual, and he's built his whole life around refusing to be anyone other than who he is. Liam hates him so much that six years ago he broke Nic's shoulder on the ice.";
const medaling_three = "And now they're sharing a room in the Olympic village.";
const medaling_four = "Perfect for fans of Rachel Reid's Heated Rivalry who want higher stakes, a slower burn, and an Olympic clock ticking down to zero.";

const medaling_bookshop_link = "https://amzn.to/4rkmdZ8";
const bookshop_text = "Buy Direct";
const bookshop_mobile_text = "Bookshop";
const medaling_amazon_link = "https://amzn.to/4rkmdZ8";
const amazon_text = "Buy from Amazon";
const amazon_mobile_text = "Amazon";
const medaling_button_color_one = "Pink";
const medaling_button_color_two = "Blue";

const bonus_heading = "Bonus chapter"
const bonus_subheading = "A free spicy scene!";

const bonus_image = "medaling bonus";
const bonus_alt = "Medaling Bonus Chapter";

const bonus_one = "Told from Nic's POV, this chapter takes place a few years before the book. This is Nic's bi-awakening with his former partner, French goalie Mathieu Bordeaux. It's tender, sexy, slippery (!) and about 3500 words."
const bonus_link = "https://signup.lizshipton.com/hailey-reaves-newsletter";
const bonus_text = "Get it FREE";
const bonus_mobile_text = "Get it"
const bonus_button_color = "Purple";

const reaves_heading = "Hailey Reaves";
const reaves_subheading = "";

const reaves_image = "reaves website";
const reaves_alt = "Hailey Reaves";

const reaves_one = "Hailey Reaves is the sports romance pen name of author Liz Shipton. Hailey enjoys putting tortured boys into spicy situations.";
const reaves_two = "Liz is a SFF author best known for their spicy urban fantasy Dot Slash Magic, which received a starred review from Publisher's Weekly, and for their viral comedy videos. Liz lives on a sailboat in the Caribbean with their partner and dog.";
const reaves_text = "Learn More";
const reaves_mobile_text = "More";
const reaves_link = "https://lizshipton.com";
const reaves_button_color = "Yellow";

const series_image = "league series";
const series_one = "Medaling is book one of a planned MM rivals-to-lovers hockey romance series called 'The League of Extraordinarily Gay Gentleman'. Books are standalone, dual-POV, feature a new pair each time, and can be read in any order."
const series_two = "Books 2 & 3 (Wingmen & Bro Code) rapid release in 2026.";

export const content = [
    {
        heading: medaling_heading,
        subheading: medaling_subheading,
        paragraphs: {text: [medaling_one, medaling_two, medaling_three, medaling_four]},
        image: {src: medaling_image, alt: medaling_alt },
        ctas: [
            // {text: bookshop_text, mobileText: bookshop_mobile_text, colorScheme: medaling_button_color_one, link: medaling_bookshop_link},
            {text: amazon_text, mobileText: amazon_mobile_text, colorScheme: medaling_button_color_two, link: medaling_amazon_link},
        ],
    },
    {
        image: {src: series_image, alt: medaling_alt },
        paragraphs: {italic: true, text: [series_one, series_two]},    },
    {
        heading: bonus_heading,
        subheading: bonus_subheading,
        paragraphs: {text: [bonus_one]},
        image: {src: bonus_image, alt: bonus_alt },
        ctas: [
            {text: bonus_text, mobileText: bonus_mobile_text, colorScheme: bonus_button_color, link: bonus_link},
        ],
    },
    {
        heading: reaves_heading,
        subheading: reaves_subheading,
        paragraphs: {text: [reaves_one, reaves_two]},
        image: {src: reaves_image, alt: reaves_alt },
        ctas: [
            {text: reaves_text, mobileText: reaves_mobile_text, colorScheme: reaves_button_color, link: reaves_link},
        ],
    }
  ]
  