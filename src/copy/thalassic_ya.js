const thalassic_ya_heading = "Young Adult (YA) Editions";
const thalassic_ya_image = "ya complete mock";
const thalassic_ya_alt = "Covers for the Thalassic YA series";
const thalassic_ya_shop_link = "https://shop.lizshipton.com/collection/ebooks";
const thalassic_ya_cta_text = "Buy YA Editions";
const thalassic_ya_cta_mobile_text = "Shop YA";
const thalassic_ya_button_color = "Scourge";

const thalassic_ya_one = "I offer two editions of the Thalassic Series: a New Adult edition and a Young Adult edition."
const thalassic_ya_two = "The only difference between the two editions is that the New Adult books have explicit 'spicy' scenes. The Young Adult editions do not include these scenes, so they are appropriate for older teens (17+) and for people who prefer 'clean' romance."
const thalassic_ya_three = "Amazon and other online retailers won't allow me to offer two versions of my series at the same time, so I offer the non-spicy YA editions exclusively via this website. I also offer deluxe versions of the spicy NA paperbacks with maps and bonus author notes."
const thalassic_ya_four = "Buying direct is a great way to support indie authors! It means we get to keep more of our royalties and aren't beholden to Amazon and other retailers for our income. I appreciate your willingness to buy these books from my in this way. Thank you!"


const bad_magic_heading = "Bad Magic";
const bad_magic_image =  "bad magic";
const bad_magic_alt = "Bad Magic cover";
const bad_magic_ream_link = "https://bit.ly/bad-magic-ch-1-preview";
const bad_magic_cta_text = "Read Chapter One";
const bad_magic_cta_mobile_text = "Read Ch. 1";
const bad_magic_button_color = "Sand";

const bad_magic_one = "Seven was born at sea. Now she's a SoCal witch."
const bad_magic_two = "For the first sixteen years of her life, Seven has sailed the world. Now, her family is giving up life at sea and moving to San Diego. But Seven is not ready for the realities of an American high school. Immediately branded a 'freak' and a 'weirdo' Seven struggles to fit in.";
const bad_magic_three = "When she's taken under the wing of some fellow 'freaks and weirdos' (aka the theatre kids) Seven discovers that her new friends possess magical abilities - and so does she! Not only that, one of the theatre kids (a handsome boy called Logan) seems to be taking an interest in her.";
const bad_magic_four = "But when Seven's magic starts to behave oddly, Seven learns that not all magic is created equal, and there may be something that her new friends aren't telling her.";
const bad_magic_five = "This is the first book in a new Young Adult Fantasy series I'm working on, slated for release in late 2024. I'm offering early access to work-in-progress chapters and exclusive author's notes via a subscription service called Ream. You can read chapter one for free!";


export const content = [
  {
      heading: thalassic_ya_heading,
      paragraphs: [thalassic_ya_one, thalassic_ya_two, thalassic_ya_three, thalassic_ya_four],
      image: {src: thalassic_ya_image, link: thalassic_ya_shop_link, alt: thalassic_ya_alt},
      cta: {text: thalassic_ya_cta_text, mobileText: thalassic_ya_cta_mobile_text, colorScheme: thalassic_ya_button_color, link: thalassic_ya_shop_link}
  },
  {
    heading: bad_magic_heading,
    paragraphs: [bad_magic_one, bad_magic_two, bad_magic_three, bad_magic_four, bad_magic_five],
    image: {src: bad_magic_image, link: bad_magic_ream_link, alt: bad_magic_alt},
    cta: {text: bad_magic_cta_text, mobileText: bad_magic_cta_mobile_text, colorScheme: bad_magic_button_color, link: bad_magic_ream_link}
  }
]
