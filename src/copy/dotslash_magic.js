const dotslash_button_color_one = "Pink"
const dotslash_button_color_two ="Green"
const dotslash_link = "/dot-slash-magic"

export const DOTSLASH_INDEX_PAGE = {
    image: "Dot Slash Header",
    mobileImage: "Dot Slash Magic Cover",
    title: "Dot Slash Magic",
    headlineOne: "If AI gave you power you could barely control...would you use it?",
    alt: "Dot Slash Magic header",
    link: dotslash_link,
    button: dotslash_button_color_one,
    cta: "learn more",
    mobileCta: "learn more",
}

const dotslash_heading = "If AI gave you power you could barely control...would you use it?"

const dotslash_one = "When Seven Jones is blackmailed back to community college after years of drifting, the last thing she expects to find there is an underground world of magic."
const dotslash_two = "Suddenly surrounded by intimidating spell-slingers, Seven struggles to control her own power - until she hacks the magic system and codes a dangerous shortcut. It works...but at a terrible cost."
const dotslash_three = "When monsters begin stalking campus and a student turns up dead, blame falls on Seven and her 'creepy artifical magic.' Is her reckless cheat fueling the chaos...or is someone trying to frame her?"
const dotslash_four = "Her only ally is Logan, an infuriatingly hot ex–Navy SEAL with dark secrets of his own. Together they blow up dragons, chainsaw krakens, and face their demons as Seven desperately tries to prove her innocence. But in the magical underworld, nothing is what it seems – and not everyone makes it out alive."
const dotslash_five = "This book contains explicit sexual content."

const bookshop_text = "buy from liz"
const retail_text = "buy from retailers"
const bookshop_mobile_text = "bookshop"
const retail_mobile_text = "retailers"
const bookshop_link = "https://shop.lizshipton.com/collection/artificial-magic"
const retail_link = "https://amzn.to/3SnAjdm"

const dotslash_cover_image = "Dot Slash Magic Cover"
const dotslash_cover_alt = "Cover for Dot Slash Magic"

const review_image = "Dot Slash Reviews"
const review_alt = "Reviews of Dot Slash Magic"
const character_image = "Dot Slash Characters"
const character_alt = "Character art for Dot Slash magic"
const review_text = "pub weekly"
const review_link= "https://www.publishersweekly.com/9781915998743"

const kraken_image = "Dot Slash Kraken"
const kraken_alt = "Art for Dot Slash Magic"

export const content = [
    {
        subheading: dotslash_heading,
        paragraphs: {text: [dotslash_one, dotslash_two, dotslash_three, dotslash_four,dotslash_five]},
        images: [{src: dotslash_cover_image, alt: dotslash_cover_alt }],
        ctas: [
            {text: bookshop_text, mobileText: bookshop_mobile_text, colorScheme: dotslash_button_color_one, link: bookshop_link},
            {text: retail_text, mobileText: retail_mobile_text, colorScheme: dotslash_button_color_two, link: retail_link},
        ],
    },
    {
        images: [{src: review_image, alt: review_alt }, {src: character_image, alt: character_alt }],
        ctas: [
            {text: review_text, mobileText: review_text, colorScheme: dotslash_button_color_one, link: review_link},
        ],
    },
    {
        images: [{src: kraken_image, alt: kraken_alt, caption: "Art by Daniel Lorca @hdlscompany" }],
        noMargin: true
    }
  ]
  