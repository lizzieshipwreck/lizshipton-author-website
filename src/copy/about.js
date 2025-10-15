const about_liz_heading = "Brilliantly stupid";
const about_liz_image = "inquisitive headshot";
const about_liz_alt = "Liz working from a hammock";
export const about_liz_cta_text = "Newsletter";
export const about_liz_cta_mobile_text = "Newsletter";
export const about_liz_button_color = "Yellow";
export const about_liz_link = "/newsletter";

const about_liz_one = "Hi! I'm Liz. I'm a writer and off-grid liveaboard sailor. I gallivant about the high seas with my partner and my dog, turning my real-life adventures into speculative fiction.";
const about_liz_two = "While I explore the world, my books explore themes adjacent to mental health, the loneliness epidemic, addiction, smashing the broligarchy, climate change, and the looming collapse of society (but, like...in a fun way.)"
const about_liz_three = "When I'm not penning novels about the impending apocalypse, I rip other writers' manuscripts to shreds for fun. Others call this pastime 'editing', and if you're interested, I can do it for you."
const about_liz_four = " On the rare occasion I'm not working, you can find me swimming, complaining about the weather, telling my dog I love her for the bazillionth time today, or watching Taskmaster."
const about_liz_five = "For editing inquiries, please send the first page of your manuscript to liz@lizshipton.com. For anything else, contact my agent Amy Collins at acollins@talcottnotch.net."

const about_loki_heading = "Our floating home";
const about_loki_image = "loki";
const about_loki_link = "https://instagram.com/sv_loki";
const about_loki_alt =  "Liz's boat Loki";
const about_loki_cta_text = "Follow Us On Instagram";
const about_loki_cta_mobile_text = "Follow Us";
const about_loki_button_color = "Blue";
const about_loki_one = "My partner, dog, and I live on a 43ft Morgan sailboat called Loki. We bought the boat in 2019 after almost 6 years of planning, and set sail in September of 2021."
const about_loki_two = "Our journey began in our hometown of Santa Cruz, CA. From there, we sailed down the Pacific Coast into Baja California. We spent a year in Mexico before continuing south through Guatamala, El Salvador, Nicaragua, Hondurus, Costa Rica, and Panama. In March of 2023 we came through the Panama Canal to the Caribbean."
const about_loki_three = "Loki is a wonderful home, albeit small at times. We live simply, and with minimal expense and waste, procuring our own water and generating our own power from solar."
const about_loki_four = "One of my favorite things about this way of life is the freedom it gives us to explore work we love. We were motivated to pursue this lifestyle by a desire to see the world, but also by the understanding that boat life is an amazing way to keep expenses low - meaning we have time to focus on creative projects, rather than a mortgage."

const about_crew_heading = "Meet the crew";
const about_crew_image = "trev and aloy";
const about_crew_alt = "Trev and Aloy";
const about_crew_one = "Trevor Hope";
const about_crew_two = "Trev is the indispensible captain of this ship, without whom, let's face it, the whole operation really falls apart. He's an excellent sailor, outstanding electrician, and can fix just about anything. We've been together 16 years.";
const about_crew_three = "Aloy Bonesnatcher McGee";
const about_crew_four = "We rescued Aloy from GEPDA rescue in San Martin, CA in 2017. She came to us with some behavioral issues, including aggression toward strangers. We still have to manage that from time to time, but she's calmed down a lot in her maturing years. She's an amazing guard dog and once she gets to know a person, she is ride-or-die. Readers may recognize her as Malarkey from the Thalassic Series.";


export const content = [
    {
        heading: about_liz_heading,
        paragraphs: {text: [about_liz_one, about_liz_two, about_liz_three, about_liz_four, about_liz_five]},
        image: {src: about_liz_image, alt: about_liz_alt },
        ctas: [{text: about_liz_cta_text, mobileText: about_liz_cta_mobile_text, colorScheme: about_liz_button_color, link: about_liz_link}]

    },
    {
      heading: about_loki_heading,
      paragraphs: {text: [about_loki_one, about_loki_two, about_loki_three, about_loki_four]},
      image: {src: about_loki_image, link: about_loki_link, alt: about_loki_alt},
      ctas: [{text: about_loki_cta_text, mobileText: about_loki_cta_mobile_text, colorScheme: about_loki_button_color, link: about_loki_link}]
    },
    {
      heading: about_crew_heading,
      paragraphs: {withHeaders: true, text: [about_crew_one, about_crew_two, about_crew_three, about_crew_four]},
      image: {src: about_crew_image, alt: about_crew_alt} 
    }
  ]
  