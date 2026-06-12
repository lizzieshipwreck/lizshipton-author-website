const mother_button_color_one = "Red"
const mother_button_color_two ="Yellow"
const mother_link = "/mother-and-slaughter";

  export const MOTHER_INDEX_PAGE = {
    image: "MS Website Header",
    title: "⚔️ Mother & Slaughter ⚔️",
    alt: "Cover for Mother & Slaughter",
    headlineOne: "Slay, girl",
    cta: "Pre-Order Now",
    mobileCta: "Pre-Order",
    link: mother_link,
    button: "Red",
    isGif: false
}

const mother_heading = "Slay, girl"

const mother_one = "A hundred-and-fifty years ago, the women of Draconia were stripped of their magic."
const mother_two = "Since then, every girl who comes of age in the kingdom is given a choice: become a mother - or become a gladiator. Eleanor Skinner chose gladiator, and at thirty-five, she's the oldest undefeated gladiator in the history of Draconia. She's wealthy, notorious...and overall, happy being a child-free ladykiller, thanks very much."
const mother_three = "Then a one-night stand leaves her knocked up."
const mother_four = "Eleanor would rather be decapitated in the arena than have to raise a child. So when she hears a rumor about a witch who lives outside the kingdom, Eleanor and her friend Rosalind set off on a quest to find her and end the pregnancy with magic."
const mother_five = "But the journey takes an unexpected turn, bringing Eleanor face-to-face with new friends, old flames, and secrets about Draconia that would make any self-respecting feminist want to stand up, pick up a sword, and use it to slaughter the patriarchy."

const bookshop_text = "Buy from Liz"
const retail_text = "Read Free in KU"
const bookshop_mobile_text = "Paperback"
const retail_mobile_text = "Read in KU"
const bookshop_link = "https://shop.lizshipton.com/collection/artificial-magic"
const retail_link = "https://amzn.to/4skYxVr"

const mother_cover_image = "Mother & Slaughter Cover"
const mother_cover_alt = "Cover for Mother & Slaughter"

const review_image = "Mother Reviews"
const review_alt = "Reviews of Mother & Slaughter"
const character_image = "The Horror Show"
const character_alt = "Comic book art for Mother & Slaughter"
const review_text = "Kirkus Review"
const review_link= "https://www.kirkusreviews.com/book-reviews/liz-shipton/mother-slaughter/"

const illustration_image_one = "Hog Wild"
const illustration_image_two = "The River"

const illustration_alt = "Art for Dot Slash Magic"

const mother_ks_heading = "Special Edition Hardcover"
const mother_ks_one = "Get the deluxe collector's edition complete with Daniel Lorca's illustrations in full color."
const mother_ks_two = "A 6x9 hardcover with red metallic foil on the title and page edges, custom endpapers, and a red ribbon bookmark."
const mother_ks_three = "6x9 prints of all color illustrations are also available, along with special edition paperbacks, bookmarks, stickers, and tees."
const mother_ks_image = "Mother Hardcover"
const mother_ks_alt = "The Mother & Slaughter special edition hardcover"
const mother_ks_text = "Order Now"
const mother_ks_mobile_text = "Order"
const mother_ks_link = "https://shop.lizshipton.com/"

export const content = [
    {
        subheading: mother_heading,
        paragraphs: {text: [mother_one, mother_two, mother_three, mother_four,mother_five]},
        images: [{src: mother_cover_image, alt: mother_cover_alt }],
        ctas: [
            {text: bookshop_text, mobileText: bookshop_mobile_text, colorScheme: mother_button_color_one, link: bookshop_link},
            {text: retail_text, mobileText: retail_mobile_text, colorScheme: mother_button_color_two, link: retail_link},
        ],
    },
    {
        images: [{src: review_image, alt: review_alt }, {src: character_image, alt: character_alt }],
        ctas: [
            {text: review_text, mobileText: review_text, colorScheme: mother_button_color_two, link: review_link},
        ],
        noMargin: true
    },
    {
        images: [{src: illustration_image_one, alt: illustration_alt}, {src: illustration_image_two, alt: illustration_alt}],
        noMargin: true
    },
    {
        heading: mother_ks_heading,
        paragraphs: {text: [mother_ks_one, mother_ks_two, mother_ks_three]},
        images: [{src: mother_ks_image, alt: mother_ks_alt }],
        ctas: [
            {text: mother_ks_text, mobileText: mother_ks_mobile_text, colorScheme: mother_button_color_one, link: mother_ks_link},
        ],
        noMargin: true
    }
  ]
  