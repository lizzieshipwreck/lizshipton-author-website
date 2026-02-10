const editing_heading = "Manuscript Shredding";
const editing_image = "quill";
const editing_alt = "quill with blood";

const editing_one = "Get your manuscript in shape for querying or self-publishing – whether that's honing your sentence level craft, tightening up pacing, identifying plot holes, deepening character arcs, or just checking spelling and grammar.";
const editing_two = "In my 4 years in publishing I've edited hundreds of video scripts, 13 short stories, and 12 full-length manuscripts – including 2 that were picked up by publishing houses (Dot Slash Magic, Dot Slash Mayhem) and the one that got me signed by my agent (Savage.) I've worked with editors at Angry Robot, and have written for social media, technical blogs, and freelance copywriting outlets."
const editing_three = "My specialty lies in sci-fi, fantasy, and romance, with a keen eye for world-building, pacing, and dialogue."
const editing_four = "I can help you hook readers from the first sentence, build complex worlds without info-dumping, and streamline and sharpen your dialogue to create natural-sounding banter that builds character and drives the narrative."
const editing_five = "If that's what you're looking for, check out the rates below. To get a quote, please send the first chapter of your manuscript, along with total word count and the services you're seeking."

const prices_heading = "Rates (60K word minimum)";
const prices_image = "typewriter";
const prices_link = "mailto:liz@lizshipton.com";
const prices_alt =  "typewriter letters";
const prices_button_color = "Red";
const prices_cta_text = "Get a Quote";
const prices_cta_mobile_text = "Quote";
const prices_one = "Developmental Editing (Big Picture)"
const prices_two = "$0.025 per word - pacing, themes, plot holes, character arcs"
const prices_three = "Copy/Line Editing (Sentence Level Craft)"
const prices_four = "$0.02 per word - repetition, readability, streamlining dialogue"
const prices_five = "Proofreading (Nitty Gritty)"
const prices_six = "$0.015 per word - spelling, grammar, typos"
const prices_seven = "Bundle (Do It All)"
const prices_eight = "$0.05/word up to 90,000 words. 90K and up please get a quote."

export const content = [
    {
        heading: editing_heading,
        paragraphs: {text: [editing_one, editing_two, editing_three, editing_four, editing_five]},
        image: {src: editing_image, alt: editing_alt },
        noMargin: true
    },
    {
      heading: prices_heading,
      paragraphs: {withHeaders: true, text: [prices_one, prices_two, prices_three, prices_four, prices_five, prices_six, prices_seven, prices_eight]},
      image: {src: prices_image, link: prices_link, alt: prices_alt},
      ctas: [{text: prices_cta_text, mobileText: prices_cta_mobile_text, colorScheme: prices_button_color, link: prices_link}]
    }
  ]
  