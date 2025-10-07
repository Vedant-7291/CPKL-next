// blogsData.js

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const blogsData = [
  {
    id: 1,
    title: "Player Voices: Stories from the Mat",
    slug: slugify("Player Voices: Stories from the Mat"),
    image: "/assets/Blog Img.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: [
      {
        type: "paragraph",
        text: "In the world of professional kabaddi, every player carries a unique story of struggle, triumph, and relentless dedication. From the dusty grounds of rural India to the glittering arenas of CPKL, these athletes bring more than just skill—they bring heart."
      },
      {
        type: "paragraph", 
        text: "Meet Rohan Singh, a raider from Punjab who started his journey playing in local tournaments with barely any proper training facilities. His story is one of perseverance, where early morning practices and late-night strategy sessions became his routine. The mat became his classroom, and every match taught him lessons no coach could impart."
      },
      {
        type: "paragraph",
        text: "Then there's Priya Sharma, the first woman from her district to make it to the professional league. Breaking stereotypes and overcoming societal barriers, she proved that kabaddi isn't just a man's game. Her powerful raids and strategic defense have made her a fan favorite and an inspiration to countless young girls across the country."
      }
    ]
  },
  {
    id: 2,
    title: "League Evolution: From Tradition to Professionalism",
    slug: slugify("League Evolution: From Tradition to Professionalism"),
    image: "/assets/Blog Img.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: [
      {
        type: "paragraph",
        text: "Kabaddi has come a long way from its roots in ancient India. What began as a rural pastime has transformed into a professional sport with international recognition. The establishment of CPKL marked a turning point, bringing structure, funding, and global attention to this traditional game."
      },
      {
        type: "paragraph",
        text: "The league introduced professional training facilities, scientific coaching methods, and player development programs that have elevated the quality of the sport. International players joining the league have brought diverse playing styles, creating a beautiful fusion of traditional and modern kabaddi techniques."
      },
      {
        type: "paragraph",
        text: "Today, CPKL isn't just a sports league—it's a cultural phenomenon that celebrates India's heritage while embracing modern sporting excellence. The journey from village grounds to state-of-the-art stadiums represents the evolution of kabaddi as both a sport and an entertainment spectacle."
      }
    ]
  },
  {
    id: 3,
    title: "Fan Passion: The Heartbeat of Kabaddi",
    slug: slugify("Fan Passion: The Heartbeat of Kabaddi"),
    image: "/assets/Blog Img.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: [
      {
        type: "paragraph",
        text: "In the electrifying atmosphere of a kabaddi stadium, it's not just the players who create magic—it's the fans. Their chants, cheers, and unwavering support form the heartbeat of every match. From painted faces to customized jerseys, kabaddi fans bring an energy that's unmatched in Indian sports."
      },
      {
        type: "paragraph",
        text: "Season ticket holders who haven't missed a home game in five years, families that plan their vacations around away matches, and college students who save up for months to buy tickets—these are the stories that define kabaddi fandom. The sport has created communities that transcend age, gender, and social backgrounds."
      },
      {
        type: "paragraph",
        text: "Social media has amplified this passion, with fan clubs organizing watch parties, creating content, and traveling across states to support their teams. This organic growth of fandom proves that kabaddi isn't just a sport people watch—it's a sport people live and breathe."
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