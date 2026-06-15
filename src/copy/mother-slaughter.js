const mother_button_color_one = "Red"
const mother_button_color_two ="Yellow"
const mother_link = "/mother-and-slaughter";

  export const MOTHER_INDEX_PAGE = {
    image: "Mother Header",
    mobileImage: "Mother & Slaughter Cover",
    title: "⚔️ Mother & Slaughter ⚔️",
    alt: "Cover for Mother & Slaughter",
    headlineOne: "A hundred and fifty years ago, the women of Draconia were stripped of their magic...",
    cta: "slay, girl",
    mobileCta: "slay, girl",
    link: mother_link,
    button: "Red",
}

const mother_heading = "Slay, girl"

const mother_one = "A hundred-and-fifty years ago, the women of Draconia were stripped of their magic."
const mother_two = "Since then, every girl who comes of age in the kingdom is given a choice: become a mother - or become a gladiator. Eleanor Skinner chose gladiator, and at thirty-five, she's the oldest undefeated gladiator in the history of Draconia. She's wealthy, notorious...and overall, happy being a child-free ladykiller, thanks very much."
const mother_three = "Then a one-night stand leaves her knocked up."
const mother_four = "Eleanor would rather be decapitated in the arena than have to raise a child. So when she hears a rumor about a witch who lives outside the kingdom, Eleanor and her friend Rosalind set off on a quest to find her and end the pregnancy with magic."
const mother_five = "But the journey takes an unexpected turn, bringing Eleanor face-to-face with new friends, old flames, and secrets about Draconia that would make any self-respecting feminist want to stand up, pick up a sword, and use it to slaughter the patriarchy."
const mother_six = "No explicit sexual content."

const bookshop_text = "buy from liz"
const retail_text = "read free in KU"
const bookshop_mobile_text = "paperback"
const retail_mobile_text = "read in KU"
const bookshop_link = "https://shop.lizshipton.com/collection/artificial-magic"
const retail_link = "https://amzn.to/4skYxVr"

const mother_cover_image = "Mother & Slaughter Cover"
const mother_cover_alt = "Cover for Mother & Slaughter"

const review_image = "Mother Reviews"
const review_alt = "Reviews of Mother & Slaughter"
const character_image = "The Horror Show"
const character_alt = "Comic book art for Mother & Slaughter"
const review_text = "kirkus review"
const review_text_mobile = "kirkus"
const review_link= "https://www.kirkusreviews.com/book-reviews/liz-shipton/mother-slaughter/"

const mother_ks_heading = "Special Edition Hardcover"
const mother_ks_one = "Get the deluxe collector's edition complete with Daniel Lorca's illustrations in full color."
const mother_ks_two = "A 6x9 hardcover with red metallic foil on the title and page edges, custom endpapers, and a red ribbon bookmark."
const mother_ks_three = "6x9 prints of all color illustrations are also available, along with special edition paperbacks, bookmarks, stickers, and tees."
const mother_ks_image = "Mother Hardcover"
const mother_ks_alt = "The Mother & Slaughter special edition hardcover"
const mother_ks_text = "order now"
const mother_ks_mobile_text = "order"
const mother_ks_link = "https://shop.lizshipton.com"

const illustration_heading = "Illustrations"
const illustration_subheading = "by Daniel Lorca"
const illustration_one = "I've worked with Daniel on a few projects now, and am always blown away by his talent, imagination, and care for the work."
const illustration_two = "Daniel's ability to tell a story through imagery and his attention to detail are unparalleled. So much in these illustrations comes directly from his head - I give him a breakdown of the scene and point him in a direction, and he comes back with more than I could have ever hoped for. His technical skill is savage, and his style is uniquely beautiful."
const illustration_three = "The book contains 4 of Daniel's illustrations - they are full-color in the eBook and special edition hardcover, B&W in the paperback, and available as art prints. He also designed the cover for the special edition, which is available through my bookshop."
const illustration_four = "Daniel lives in Lima, Peru, and works on commission for various professional and personal projects. I would recommend you hire him, but that would mean I'd have to share him."
const illustration_five = "Just kidding. To see more of his work and contact him, use the button below."

const mother_illustration_image = "The River"
const mother_illustration_alt = "Comic book illustration in Mother & Slaughter"
const illustration_text = "contact daniel"
const illustration_mobile_text = "contact"
const illustration_link = "https://hdlscompany.artstation.com"

export const content = [
    {
        subheading: mother_heading,
        paragraphs: {text: [mother_one, mother_two, mother_three, mother_four,mother_five, mother_six]},
        images: [{src: mother_cover_image, alt: mother_cover_alt }],
        ctas: [
            {text: bookshop_text, mobileText: bookshop_mobile_text, colorScheme: mother_button_color_one, link: bookshop_link},
            {text: retail_text, mobileText: retail_mobile_text, colorScheme: mother_button_color_two, link: retail_link},
        ],
    },
    {
        images: [{src: review_image, alt: review_alt }, {src: character_image, alt: character_alt }],
        ctas: [
            {text: review_text, mobileText: review_text_mobile, colorScheme: mother_button_color_two, link: review_link},
        ],
    },
        {
            heading: illustration_heading,
            subheading: illustration_subheading,
            paragraphs: {text: [illustration_one, illustration_two, illustration_three, illustration_four, illustration_five]},
            images: [{src: mother_illustration_image, alt: mother_illustration_alt }],
            ctas: [
                {text: illustration_text, mobileText: illustration_mobile_text, colorScheme: mother_button_color_two, link: illustration_link},
            ],
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
  