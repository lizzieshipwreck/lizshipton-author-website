const about_liz_button_color = "Pink";
const about_liz_link = "https://lizshiptonauthor.substack.com";

const about_liz_subheading = "Hi. I'm Liz.";
const about_liz_image = "Headshot 2026";
const about_liz_alt = "Liz Shipton's Headshot";
const about_liz_cta_text = "substack";
const about_liz_cta_mobile_text = "substack";

const about_liz_one = "I started writing when my partner and I set out to explore the world by boat in 2021. My first book, Salt, was written on my phone in the cockpit on night watch along the Pacific Coast. That book turned into two, then a series, then the pathological condition people call 'being a writer.'"
const about_liz_two = "My books balance dark humor and high-stakes action with worlds and characters rooted in my lived experience. I consider them satire rather than romance or fantasy, but I like to lure you in with the sex and magic before I beat you over the head with the heavy stuff."
const about_liz_three = "Before I wrote books, I wrote code - so I've spent a lot of time interrogating systems. My books do it through the lens of speculative fiction, but I write more directly on Substack about being an artist in a dystopian machine that runs on algorithms instead of magic."
const about_liz_four = "On the rare occasion I'm not writing, you can find me at yoga or karaoke, complaining about the weather, telling my dog I love her for the bazillionth time today, or watching 8 Out of 10 Cats Does Countdown."

const about_loki_subheading = "Author 🪶⚓ Adventurer";
const about_loki_image = "loki";
const about_loki_link = "https://instagram.com/sv_loki";
const about_loki_alt =  "Liz's boat Loki";
const about_loki_cta_text = "follow on instagram";
const about_loki_cta_mobile_text = "follow us";
const about_loki_button_color = "Blue";
const about_loki_one = "My partner, dog, and I live on a 43ft Morgan called Loki. We bought the boat in 2019 after almost 6 years of planning, and set sail in September of 2021."
const about_loki_two = "Our journey began in our hometown of Santa Cruz, CA. From there, we sailed down the Pacific Coast into Baja California. We spent a year in Mexico before continuing south through Guatamala, El Salvador, Nicaragua, Hondurus, Costa Rica, and Panama. In 2023 we came through the Panama Canal to the Caribbean, where we still live on the boat."
const about_loki_three = "Loki is a great home, albeit small. We live simply, with minimal expense and waste, procuring our own water and generating power from solar."
const about_loki_four = "We were motivated to do this by a desire to see the world - but boat life is also an amazing way to keep expenses low. One of my favorite parts of this lifestyle is that it allows us to focus on pursuing work we love, rather than paying off a mortgage."

const about_crew_subheading = "Meet the crew";
const about_crew_image = "trev and aloy";
const about_crew_alt = "Trev and Aloy";
const about_crew_one = "Trevor Hope";
const about_crew_two = "Trev is the indispensible captain of this ship, without whom, let's face it, the whole operation really falls apart. He's an excellent sailor, outstanding electrician, and can fix just about anything. He's a licensed captain, and works seasonally in the Caribbean and Alaska. We've been together 16 years.";
const about_crew_three = "Aloy Bonesnatcher McGee";
const about_crew_four = "We rescued Aloy from GEPDA rescue in San Martin, CA in 2017. She came to us with some behavioral issues, including aggression toward strangers. We still have to manage that from time to time, but she's calmed down a lot in her maturing years. She's an amazing guard dog and once she gets to know a person, she is ride-or-die. Readers may recognize her as Malarkey from the Thalassic Series.";


export const content = [
    {
        subheading: about_liz_subheading,
        paragraphs: {text: [about_liz_one, about_liz_two, about_liz_three, about_liz_four]},
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
      subheading: about_crew_subheading,
      paragraphs: {withHeaders: true, text: [about_crew_one, about_crew_two, about_crew_three, about_crew_four]},
      images: [{src: about_crew_image, alt: about_crew_alt}],
      noMargin: true
    }
  ]
  