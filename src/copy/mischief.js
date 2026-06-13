const mischief_button_color_one = "Purple";
const mischief_button_color_two = "Yellow";
const mischief_link = "/tales-of-mischief";

  export const MISCHIEF_INDEX_PAGE = {
    image: "Website Tales Kickstarter Header",
    title: "😈 Tales of Mischief & Fuckery 😈",
    alt: "Covers for the Tales of Mischief Series",
    headlineOne: "Troping tropily through the tropes.",
    headlineTwo: "",
    cta: "Let's Go!",
    mobileCta: "Go!",
    link: mischief_link,
    button: "Purple",
}

const mischief_alt = "Cover for the Tales of Mischief Series";
const mischief_image = "tales website";
const mischief_amazon_link = "https://amzn.to/48rGC6c";
const amazon_text = "Read Free in KU"
const amazon_mobile_text = "Read in KU";
const bookshop_text = "Buy from Liz";
const bookshop_mobile_text = "Paperback";
const bookshop_link = "https://shop.lizshipton.com/collection/tales-of-mischief-fuckery"

const mischief_heading = 'Tales of Mischief and Fuckery';
const mishcief_subheading = 'Troping tropily through the tropes';
const mischief_one = 'Small town apocalypses? Dystopian billionaires? The fairy mafia? How about shape-shifting hockey players? A Greek god desperately in need of a nanny?';
const mischief_two = 'You may ask, "Why?" This series of spicy speculative short stories asks, "Why not?" Why not a mishmash of genres? Why not off-the-wall sci-fantasy romance with hot spice and big heart? Why not an unhinged paranormal hockey romp starring the Easter bunny?'
const mischief_three = 'Inside this collection, you’ll find fae, vampires, shifters and more getting down and dirty in 12 raunchy standalone tales, each set during a different holiday in every month of the year.'
const mischief_four = 'This book contains explicit sexual content and extremely NSFW illustrations.'

const review_heading = "Praise for Tales of Mischief and F*ckery"
const review_one = '"This story is funny! Also the scenes are hot, and the pp is very big. This is incredibly important and made me quite happy." ⭐ ⭐ ⭐ ⭐ ⭐'
const review_two = '"Fast world building but Ms. Shipton made it happen like a pro. Just the right amount of spice and plot to have me wishing for a sequel." ⭐ ⭐ ⭐ ⭐ ⭐'
const review_three = '"Well the author said she goes for QUALITY over QUANTITY when it comes to spice and my oh my did she mean it...this one defied gravity!" ⭐ ⭐ ⭐ ⭐ ⭐'
const review_image = "tales review";

const roses_image = "Mischief Roses"
const roses_alt = "Art for Roses are Red, Violence is Blue"
const daddy_image = "Mischief Daddy"
const daddy_alt = "Art for Daddy"
const bonus_cover = "Mischief Bonus"
const bonus_alt = "Art for the cover"

export const content = [
    {
        subheading: mishcief_subheading,
        paragraphs: {text: [mischief_one, mischief_two, mischief_three, mischief_four]},
        images: [{src: mischief_image, alt: mischief_alt }],
        ctas: [
            {text: bookshop_text, mobileText: bookshop_mobile_text, colorScheme: mischief_button_color_one, link: bookshop_link},
            {text: amazon_text, mobileText: amazon_mobile_text, colorScheme: mischief_button_color_two, link: mischief_amazon_link}
        ]
    },
    {
        heading: review_heading,
        paragraphs: {italic: true, text: [review_one, review_two, review_three]},
        images: [{src: review_image, alt: mischief_alt }],
        noMargin: true
    }
  ]
