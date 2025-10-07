// blogsData.js

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const blogsData = [
  {
    id: 1,
    title: "Kabaddi: India's Oldest Game is Becoming the World's Newest Obsession",
    slug: slugify("Kabaddi: India's Oldest Game is Becoming the World's Newest Obsession"),
    image: "/assets/Blog Img.png",
    description: "From village pastime to global sensation - discover how kabaddi is taking the world by storm through CPKL.",
    content: [
      {
        type: "paragraph",
        text: "If you grew up in India, chances are you've played kabaddi at least once — in your schoolyard, during summer breaks, or in the dusty fields of your village. A game so simple that it needed no ball, no bat, no fancy kit — just courage, strategy, and lungs strong enough to hold your breath."
      },
      {
        type: "paragraph", 
        text: "But here's the twist: what was once a village pastime is now transforming into a global sport with leagues, stars, and international fans. And at the heart of this revolution is the Canvi Premier Kabaddi League (CPKL)."
      },
      {
        type: "paragraph",
        text: "So, what exactly is Kabaddi? One player charges into enemy territory, chanting 'kabaddi-kabaddi,' trying to tag as many opponents as possible before making it back to safety. Sounds simple? Not quite."
      },
      {
        type: "paragraph",
        text: "The raider has to be agile like a panther. The defenders? They're a wall of muscle and strategy waiting to pounce. Each raid is a battle of strength, speed, and mind games — and the smallest mistake can cost the team big."
      },
      {
        type: "paragraph",
        text: "It's fast. It's fierce. And when played professionally, it's nothing short of electrifying."
      },
      {
        type: "paragraph",
        text: "Why Kabaddi is Special: It's Pure - No fancy gear, just raw athleticism. It's Strategic - Every raid is like a chess move at lightning speed. It's Ours - A game born in India, now ready to win the world."
      },
      {
        type: "paragraph",
        text: "Kabaddi Goes Global: From being played in dusty fields to being staged under floodlights in Dubai — kabaddi has come a long way. With professional leagues like CPKL stepping up, this homegrown sport is now getting the recognition it always deserved."
      },
      {
        type: "paragraph",
        text: "And if you've never watched a kabaddi match before? Trust us — one game is all it takes to get hooked."
      }
    ]
  },
  {
    id: 2,
    title: "Pardeep Narwal: The Man Who Turned Kabaddi Into Magic",
    slug: slugify("Pardeep Narwal: The Man Who Turned Kabaddi Into Magic"),
    image: "/assets/Blog Img.png",
    description: "Meet the kabaddi legend who redefined the sport with his incredible raids and record-breaking performances.",
    content: [
      {
        type: "paragraph",
        text: "Every sport has its icon. Football has Messi. Cricket has Kohli. Kabaddi? It has Pardeep Narwal."
      },
      {
        type: "paragraph",
        text: "If you've never heard his name before, here's all you need to know: he's the man who redefined kabaddi raids, scored points like a machine, and pulled off moves that fans still can't believe."
      },
      {
        type: "paragraph",
        text: "From Village Boy to Kabaddi Legend: Pardeep grew up in Haryana, where kabaddi isn't just a sport — it's a way of life. With nothing but determination and talent, he rose from local school matches to becoming one of the most feared raiders in kabaddi history."
      },
      {
        type: "paragraph",
        text: "And his signature move? The 'dubki' — a daring dive where he slips under defenders' arms like water slipping through your fingers. Try watching it once and you'll never forget it."
      },
      {
        type: "paragraph",
        text: "Records That Speak Louder Than Words: Most raid points in kabaddi history. Once scored 34 points in a single match (yes, 34!). The only raider to single-handedly demolish teams with his fearless style."
      },
      {
        type: "paragraph",
        text: "His name isn't just in the record books — it's etched in kabaddi folklore."
      },
      {
        type: "paragraph",
        text: "The Next Chapter: CPKL Dubai: This year, as CPKL Season 2 kicks off in Dubai, Pardeep Narwal joins the stage. And for kabaddi fans, that's like watching Sachin Tendulkar walk out to bat one more time."
      },
      {
        type: "paragraph",
        text: "For new fans? It's the perfect chance to witness a living legend in action. Because once you see Pardeep raid, you'll understand why kabaddi is called the game of warriors."
      }
    ]
  },
  {
    id: 3,
    title: "Why CPKL in Dubai Could Change Kabaddi Forever",
    slug: slugify("Why CPKL in Dubai Could Change Kabaddi Forever"),
    image: "/assets/Blog Img.png",
    description: "Discover how CPKL Season 2 in Dubai is revolutionizing kabaddi and taking it to international audiences.",
    content: [
      {
        type: "paragraph",
        text: "From Indian Villages to Dubai's Arenas: Kabaddi was born in India's soil. But now, for the first time, it's stepping onto one of the world's grandest stages — Dubai. And that's what makes CPKL Season 2 so exciting."
      },
      {
        type: "paragraph",
        text: "This isn't just another league. It's kabaddi's chance to go global."
      },
      {
        type: "paragraph",
        text: "What Makes CPKL Different? Global Stage: Hosting in Dubai puts kabaddi in front of international fans who've never seen it live before. Big Names + Fresh Faces: Legends like Pardeep Narwal playing alongside new grassroots heroes discovered from trials. World-Class Presentation: Lights, cameras, stats, replays — the full sporting spectacle. Fan First: From live streaming to social engagement, CPKL is designed for both hardcore kabaddi lovers and total newcomers."
      },
      {
        type: "paragraph",
        text: "Why It Matters for the Sport: For Players: More visibility, bigger contracts, and a global stage to prove themselves. For Fans: A chance to watch kabaddi like never before, packaged at the level of IPL or UFC. For the Sport: The leap from Indian villages to Dubai arenas proves kabaddi has the muscle to compete with cricket and football for attention."
      },
      {
        type: "paragraph",
        text: "The Future Starts Now: CPKL Season 2 isn't just about matches — it's about rewriting kabaddi's destiny. If this league succeeds, it could pave the way for kabaddi leagues across continents, new youth academies, and even an Olympic dream one day."
      },
      {
        type: "paragraph",
        text: "So whether you're a die-hard kabaddi follower or someone just discovering it — this is the season you don't want to miss."
      }
    ]
  },
  {
    id: 4,
    title: "Training Regimen of Professional Kabaddi Players",
    slug: slugify("Training Regimen of Professional Kabaddi Players"),
    image: "/assets/Blog Img.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: [
      {
        type: "paragraph",
        text: "Behind every spectacular raid and every crucial tackle lies hours of grueling training and meticulous preparation. Professional kabaddi players follow a rigorous regimen that balances physical conditioning, technical skills, and mental fortitude."
      },
      {
        type: "paragraph",
        text: "Their day typically begins at 5 AM with endurance training—long-distance running, sprint intervals, and agility drills. This is followed by strength training sessions focusing on core strength, leg power, and upper body strength—all essential for different aspects of the game."
      },
      {
        type: "paragraph",
        text: "Afternoons are dedicated to skill development: raiders practice their footwork and hand touches, while defenders work on ankle holds, thigh holds, and chain tackles. The day ends with strategy sessions, video analysis of opponents, and recovery routines including yoga and physiotherapy."
      }
    ]
  },
  {
    id: 5,
    title: "The Science Behind Kabaddi Strategy",
    slug: slugify("The Science Behind Kabaddi Strategy"),
    image: "/assets/Blog Img.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: [
      {
        type: "paragraph",
        text: "Modern kabaddi has evolved into a game of chess played at lightning speed. Behind the apparent chaos on the mat lies sophisticated strategy and mathematical precision. Teams employ data analysts, sports scientists, and strategists to gain that crucial edge over opponents."
      },
      {
        type: "paragraph",
        text: "Advanced analytics help teams identify patterns in opponents' play, predict raid success probabilities, and optimize defensive formations. Player performance metrics track everything from raid success rates to tackle efficiency, helping coaches make data-driven decisions during matches."
      },
      {
        type: "paragraph",
        text: "The psychological aspect is equally important. Teams study opponents' body language, stress responses, and decision-making under pressure. Mind games, strategic time-outs, and calculated risk-taking have become integral parts of high-level kabaddi, making it as much a mental battle as a physical one."
      }
    ]
  },
  {
    id: 6,
    title: "Women in Kabaddi: Breaking Barriers",
    slug: slugify("Women in Kabaddi: Breaking Barriers"),
    image: "/assets/Blog Img.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: [
      {
        type: "paragraph",
        text: "The rise of women's kabaddi represents one of the most inspiring developments in Indian sports. From being a male-dominated sport to having professional women's leagues, kabaddi has witnessed a remarkable transformation in gender participation and recognition."
      },
      {
        type: "paragraph",
        text: "Pioneers like Mamta Poojary and Abhilasha Mhatre paved the way for today's generation of female kabaddi stars. These athletes have not only excelled in the sport but have also become role models, challenging stereotypes and inspiring young girls to pursue their sporting dreams."
      },
      {
        type: "paragraph",
        text: "Today, women's kabaddi matches draw substantial crowds and television viewership, proving that skill and excitement know no gender. The establishment of professional women's leagues has provided a platform for female athletes to showcase their talent and build sustainable careers in sports."
      }
    ]
  },
  {
    id: 7,
    title: "Kabaddi's Global Expansion",
    slug: slugify("Kabaddi's Global Expansion"),
    image: "/assets/Blog Img.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: [
      {
        type: "paragraph",
        text: "From its Indian origins, kabaddi is now making waves across the globe. Countries like Iran, South Korea, Japan, and Kenya have developed strong kabaddi programs, with each nation bringing its unique style and approach to the game."
      },
      {
        type: "paragraph",
        text: "Iranian players, known for their exceptional strength and defensive skills, have become valuable assets in professional leagues. South Korean athletes bring incredible speed and agility, while African nations are discovering kabaddi as an affordable and accessible sport that requires minimal equipment."
      },
      {
        type: "paragraph",
        text: "International kabaddi tournaments have become fiercely competitive, with the World Cup seeing surprising upsets and thrilling matches. This global expansion not only raises the sport's profile but also enriches it with diverse playing styles and cultural influences."
      }
    ]
  },
  {
    id: 8,
    title: "The Business of Kabaddi",
    slug: slugify("The Business of Kabaddi"),
    image: "/assets/Blog Img.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: [
      {
        type: "paragraph",
        text: "The professionalization of kabaddi has created a thriving ecosystem of businesses and employment opportunities. From player management agencies to sports equipment manufacturers, the kabaddi industry supports thousands of livelihoods across the country."
      },
      {
        type: "paragraph",
        text: "Franchise owners, sponsors, broadcasters, and merchandise sellers have all found profitable ventures in kabaddi. The league's popularity has attracted major corporate investments, ensuring financial stability and growth for the sport. Stadium operations, event management, and hospitality services have all benefited from the kabaddi boom."
      },
      {
        type: "paragraph",
        text: "Most importantly, the economic opportunities have trickled down to grassroots levels. Local tournaments now offer substantial prize money, coaching has become a viable career, and young players from humble backgrounds can dream of financial security through sports."
      }
    ]
  },
  {
    id: 9,
    title: "Technology in Modern Kabaddi",
    slug: slugify("Technology in Modern Kabaddi"),
    image: "/assets/Blog Img.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: [
      {
        type: "paragraph",
        text: "Technology has revolutionized how kabaddi is played, coached, and experienced. From Hawk-Eye systems for precise decision-making to wearable technology monitoring player performance, modern kabaddi embraces innovation at every level."
      },
      {
        type: "paragraph",
        text: "Video referral systems have eliminated controversial decisions, while player tracking technology provides real-time data on speed, distance covered, and energy expenditure. Smart mats with embedded sensors can detect touches and holds with millimeter precision."
      },
      {
        type: "paragraph",
        text: "For fans, augmented reality apps, virtual reality experiences, and advanced broadcasting technologies have made watching kabaddi more immersive than ever. Social media platforms and streaming services have globalized the sport, allowing international fans to follow their favorite teams and players from anywhere in the world."
      }
    ]
  }
];