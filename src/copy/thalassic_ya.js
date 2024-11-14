const thalassic_ya_heading = "Young Adult (YA) Editions";
const thalassic_ya_image = "ya complete mock";
const thalassic_ya_alt = "Covers for the Thalassic YA series";
const thalassic_ya_shop_link = "https://shop.lizshipton.com/collection/ebooks";
const thalassic_ya_cta_text = "Buy YA Editions";
const thalassic_ya_cta_mobile_text = "Shop YA";
const thalassic_ya_button_color = "Salt";

const thalassic_ya_one = "I offer two editions of the Thalassic Series: a New Adult edition and a Young Adult edition."
const thalassic_ya_two = "The only difference between the two editions is that the New Adult books have explicit 'spicy' scenes. The Young Adult editions do not include these scenes, so they are appropriate for older teens (16+) and for people who prefer 'clean' romance."
const thalassic_ya_three = "Amazon and other online retailers won't allow me to offer two versions of my series at the same time, so I offer the non-spicy YA editions exclusively via this website."
const thalassic_ya_four = "Buying direct is a great way to support indie authors! It means we get to keep more of our royalties and aren't beholden to Amazon and other retailers for our income. I appreciate your willingness to buy these books from me in this way. Thank you!"

export const content = [
  {
      heading: thalassic_ya_heading,
      paragraphs: {text: [thalassic_ya_one, thalassic_ya_two, thalassic_ya_three, thalassic_ya_four]},
      image: {src: thalassic_ya_image, link: thalassic_ya_shop_link, alt: thalassic_ya_alt},
      ctas: [{text: thalassic_ya_cta_text, mobileText: thalassic_ya_cta_mobile_text, colorScheme: thalassic_ya_button_color, link: thalassic_ya_shop_link}]
  }
]
