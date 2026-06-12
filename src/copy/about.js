const about_liz_subheading = "Hi! I'm Liz.";
const about_liz_image = "Headshot 2026";
const about_liz_alt = "Liz Shipton's Headshot";
export const about_liz_cta_text = "Newsletter";
export const about_liz_cta_mobile_text = "Newsletter";
export const about_liz_button_color = "Pink";
export const about_liz_link = "/newsletter";

const about_liz_one = "I'm a speculative fiction author and loosely-hinged person. I live off-grid on a boat in the Caribbean with my partner and dog, and I spend a lot of time writing. Like. . .a lot.";
const about_liz_two = "I try to balance dark humor, bonkers action, and epic world-building with characters rooted in my lived experience. Everything I write skews political, and many of my books contain explicit content. I like to lure you in with sex and magic, and then beat you over the head with current events."
const about_liz_three = "If you're new to my books, start with Dot Slash Magic or Mother & Slaughter. They have romantic subplots, but aren't considered 'romance' - for that, check out my MM pen name Hailey Reaves."
const about_liz_four = "On the rare occasion I'm not writing, you can find me at yoga or karaoke, complaining about the weather, telling my dog I love her for the bazillionth time today, or watching 8 Out of 10 Cats Does Countdown."
const about_liz_five = "she/they"

const about_loki_subheading = "Full time author 🪶⚓ Part time pirate";
const about_loki_image = "loki";
const about_loki_link = "https://instagram.com/sv_loki";
const about_loki_alt =  "Liz's boat Loki";
const about_loki_cta_text = "Follow Us On Instagram";
const about_loki_cta_mobile_text = "Follow Us";
const about_loki_button_color = "Blue";
const about_loki_one = "My partner, dog, and I live on a 43ft Morgan called Loki. We bought the boat in 2019 after almost 6 years of planning, and set sail in September of 2021."
const about_loki_two = "Our journey began in our hometown of Santa Cruz, CA. From there, we sailed down the Pacific Coast into Baja California. We spent a year in Mexico before continuing south through Guatamala, El Salvador, Nicaragua, Hondurus, Costa Rica, and Panama. In March of 2023 we came through the Panama Canal to the Caribbean."
const about_loki_three = "Loki is a great home, albeit small. We live simply, with minimal expense and waste, procuring our own water and generating power from solar."
const about_loki_four = "We were motivated to pursue this lifestyle by a desire to see the world, but also by the understanding that boat life is an amazing way to keep expenses low. That means we can focus on pursuing work we love, rather than paying off a mortgage."

const about_crew_heading = "Meet the crew";
const about_crew_image = "trev and aloy";
const about_crew_alt = "Trev and Aloy";
const about_crew_one = "Trevor Hope";
const about_crew_two = "Trev is the indispensible captain of this ship, without whom, let's face it, the whole operation really falls apart. He's an excellent sailor, outstanding electrician, and can fix just about anything. We've been together 16 years.";
const about_crew_three = "Aloy Bonesnatcher McGee";
const about_crew_four = "We rescued Aloy from GEPDA rescue in San Martin, CA in 2017. She came to us with some behavioral issues, including aggression toward strangers. We still have to manage that from time to time, but she's calmed down a lot in her maturing years. She's an amazing guard dog and once she gets to know a person, she is ride-or-die. Readers may recognize her as Malarkey from the Thalassic Series.";


export const content = [
    {
        subheading: about_liz_subheading,
        paragraphs: {text: [about_liz_one, about_liz_two, about_liz_three, about_liz_four, about_liz_five]},
        images: [{src: about_liz_image, alt: about_liz_alt }],
        ctas: [{text: about_liz_cta_text, mobileText: about_liz_cta_mobile_text, colorScheme: about_liz_button_color, link: about_liz_link}]

    },
    {
      subheading: about_loki_subheading,
      paragraphs: {text: [about_loki_one, about_loki_two, about_loki_three, about_loki_four]},
      images: [{src: about_loki_image, link: about_loki_link, alt: about_loki_alt}],
      ctas: [{text: about_loki_cta_text, mobileText: about_loki_cta_mobile_text, colorScheme: about_loki_button_color, link: about_loki_link}]
    },
    {
      heading: about_crew_heading,
      paragraphs: {withHeaders: true, text: [about_crew_one, about_crew_two, about_crew_three, about_crew_four]},
      images: [{src: about_crew_image, alt: about_crew_alt}] 
    }
  ]
  