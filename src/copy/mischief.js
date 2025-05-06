const mischief_alt = "Cover for the Tales of Mischief Series";
const mischief_button_color_one = "Yellow";
const mischief_button_color_two = "Purple";
const mischief_image = "tales of mischief";
const mischief_vertical_image = "tales vertical";
const mischief_amazon_link = "https://amzn.to/48rGC6c";
const amazon_text = "Read in KU"
const amazon_mobile_text = "K.U.";
const mischief_ks_link = "https://www.kickstarter.com/projects/lizshipton/tales-of-mischief-and-fuckery-special-edition-anthology";
const kickstarter_text = "See the Kickstarter";
const ks_mobile_text = "Kickstarter";

const mischief_heading = 'Tales of Mischief and Fuckery';
const mishcief_subheading = 'For people who prefer their men fictional';
const mischief_one = 'Small town apocalypses? Dystopian billionaires? The fairy mafia? How about shape-shifting hockey players? A Greek god desperately in need of a nanny?';
const mischief_two = 'You may ask, "Why?" This series of spicy short stories asks, "Why not?" Why not a mishmash of genres? Why not funny, off-the-wall romance with hot spice and big heart? Why not an unhinged paranormal hockey romp starring the Easter bunny?'
const mischief_three = 'Inside these 12 books, you’ll find fae, vampires, shifters and more getting down and dirty in 12 hilariously raunchy standalone "fairy tales", each set during a different holiday in every month of the year.'
const mischief_four = '"Even August?" I hear you asking.'
const mischief_five = '"Yes, friend. Even August."'
const mischief_six = '"But there isn’t even a holiday in Aug-"'
const mischief_seven = '"Shh shh shh... Don’t worry about that. You let ME worry about that. Just start reading, and I promise everything will be fine."'

const review_heading = "Praise for Tales of Mischief and F*ckery"
const review_one = '"This story is funny! Also the scenes are hot, and the pp is very big. This is incredibly important and made me quite happy." ⭐ ⭐ ⭐ ⭐ ⭐'
const review_two = '"Fast world building but Ms. Shipton made it happen like a pro. Just the right amount of spice and plot to have me wishing for a sequel." ⭐ ⭐ ⭐ ⭐ ⭐'
const review_three = '"Well the author said she goes for QUALITY over QUANTITY when it comes to spice and my oh my did she mean it...this one defied gravity!" ⭐ ⭐ ⭐ ⭐ ⭐'

export const content = [
    {
        heading: mischief_heading,
        subheading: mishcief_subheading,
        paragraphs: {text: [mischief_one, mischief_two, mischief_three, mischief_four, mischief_five, mischief_six, mischief_seven]},
        image: {src: mischief_vertical_image, alt: mischief_alt },
        ctas: [
            {text: kickstarter_text, mobileText: ks_mobile_text, colorScheme: mischief_button_color_two, link: mischief_ks_link},
            {text: amazon_text, mobileText: amazon_mobile_text, colorScheme: mischief_button_color_one, link: mischief_amazon_link}
        ],
        noMargin: true
    },
    {
        heading: review_heading,
        paragraphs: {italic: true, text: [review_one, review_two, review_three]},
        image: {src: mischief_image, alt: mischief_alt },
    }
  ]

  export const MISCHIEF_INDEX_PAGE = {
    image: "Website Tales Kickstarter Header",
    title: "😈 Tales of Mischief & Fuckery 😈",
    alt: "Covers for the Tales of Mischief Series",
    headlineOne: "Exclusive hardcover just launched on Kickstarter!",
    headlineTwo: "",
    cta: "Learn More",
    mobileCta: "More",
    link: mischief_ks_link,
    button: "Purple",
    isGif: false
}

