// script.js

const albumData = [
  {
    id: "blonde",
    imgSrc: "images/covers/frank.jpg",
    title: "Ivy",
    artist: "BLONDE, Frank Ocean",
    audioSrc: "audio/ivyComp.mp3",
    songLink:
      "https://open.spotify.com/track/2ZWlPOoWh0626oTaHrnl2a?si=03f48282408b4bcb",
    about:
      "Blonde (2016) is Frank Ocean's groundbreaking album, widely hailed as one of the defining works of modern R&B. A departure from his previous material, Blonde blends soulful melodies, experimental production, and introspective lyrics to explore themes of love, identity, and emotional vulnerability. The album features standout tracks like 'Nikes,' 'Pink + White,' and 'Self Control,' with Ocean's unique voice and genre-defying sound capturing a sense of longing and self-discovery. With its lush arrangements and thought-provoking narratives, Blonde has become a critical touchstone in contemporary music, influencing a new wave of artists across genres.",
    glowColor: "#32a852",
  },
  {
    id: "tpab",
    imgSrc: "images/covers/tpab.jpg",
    title: "Wesley's Theory",
    artist: "TPAB, Kendrick Lamar",
    audioSrc: "audio/wesleys-theoryComp.mp3",
    songLink:
      "https://open.spotify.com/track/7Ks4VCY1wFebnOdJrM13t6?si=4f19f8453f9841fd",
    about:
      "To Pimp a Butterfly (2015) is Kendrick Lamar's ambitious and critically acclaimed third studio album, often regarded as a landmark in contemporary hip-hop. Fusing jazz, funk, soul, and spoken word with hard-hitting rap, To Pimp a Butterfly delves into themes of race, identity, self-worth, and societal struggles. The album features standout tracks like 'Alright,' 'King Kunta,' and 'The Blacker the Berry,' offering a powerful commentary on African-American culture, systemic oppression, and personal transformation. With its dense lyricism, innovative production, and political urgency, To Pimp a Butterfly solidified Lamar's place as one of the most influential voices in modern music.    ",
    glowColor: "#b4b3b3",
  },
  {
    id: "mask",
    imgSrc: "images/covers/bauhaus.jpg",
    title: "Of Lilies and Remains",
    artist: "Mask, Bauhaus",
    audioSrc: "audio/of-lilies-and-remainsComp.mp3",
    songLink:
      "https://open.spotify.com/track/0hrBY5YMWGpP4POebLM3BY?si=f5cc2c5cb2214c5d",
    about:
      "Mask (1981) is Bauhaus's fourth studio album, a dark and atmospheric masterpiece that further explores the band's pioneering post-punk and gothic sound. The album blends haunting melodies, angular guitar riffs, and eerie atmospheres to create a moody landscape, with themes of alienation, despair, and existential tension. Tracks like ''The Passion of Lovers,'' ''Hair of the Dog,'' and ''King Volcano'' showcase Bauhaus's ability to fuse the dramatic with the cerebral, pushing the boundaries of goth rock while maintaining their unique artistic vision. Mask remains a defining work in the genre, continuing to influence both goth and alternative music.",
    glowColor: "#ffde00",
  },
  {
    id: "sagittarius-heartbreak-demo",
    imgSrc: "images/covers/saggitarius-heartbreak-demo.jpg", // Add your own image link here
    title: "Sagittarius Heartbreak Demo",
    artist: "Lee",
    audioSrc: "audio/sagittarious-heartbreakComp.mp3",
    songLink:
      "https://open.spotify.com/track/0efwKFnHV30vYjb5kEnzSS?si=74c3a3a7e12d4be4",
    about: "Uhm its pretty good i think",
    glowColor: "#d74e79",
  },
  {
    id: "mexican-dream",
    imgSrc: "images/covers/mexican-dream.jpg", // Add image
    title: "Mexican Dream",
    artist: "Piero Piccioni",
    audioSrc: "audio/mexican-dreamComp.mp3",
    songLink:
      "https://open.spotify.com/track/1quput6F30wXk7Ym6XMPvS?si=837250ef11034e42",
    about:
      "A Prolific Song From Piero Zuffi's 'Colpo Revente' Soundtrakc (1970)",
    glowColor: "#af292c",
  },
  {
    id: "covet",
    imgSrc: "images/covers/basement.jpg", // Add image
    title: "Basement",
    artist: "Colourmeinkindness, Covet",
    audioSrc: "audio/covetComp.mp3",
    songLink:
      "https://open.spotify.com/track/1AMADyXgIWayh5vXLZo2qF?si=192932c5e00849b0",
    about:
      "'colourmekindness' by Basement is a deep dive into raw emotion, blending grunge and melodic punk to tackle themes of longing, heartache, and mental struggle. The album balances heavy riffs and atmospheric melodies, creating a nostalgic, moody sound that feels both intense and introspective. With lyrics that cut to the bone and a haunting yet cathartic vibe, it's an album for those late nights when you’re caught up in your own head, looking for a bit of solace in the noise.",
    glowColor: "#d3731b",
  },
  {
    id: "444",
    imgSrc: "images/covers/444.jpg", // Add image
    title: "4:44",
    artist: "4:44, Jay Z",
    audioSrc: "audio/444Comp.mp3",
    songLink:
      "https://open.spotify.com/track/1gT5TGwbkkkUliNzHRIGi1?si=3d51a6e71bff400c",
    about:
      "Jay-Z’s 4:44 is his most vulnerable album, stripping back the bravado to confront his own flaws, infidelities, and personal growth. Over smooth, soul-sampled production, Jay navigates everything from relationships and fatherhood to his legacy and the Black experience in America. The title track, *4:44*, is a heartfelt apology to Beyoncé, laying bare his regrets and shortcomings. It’s a mature, introspective work that trades in the glitz for introspection, revealing a side of Jay-Z rarely seen, with wisdom gained from both success and mistakes. It's like a candid conversation, making you feel closer to the man behind the legend.",
    glowColor: "#f4cba3",
  },
  {
    id: "hey-jane",
    imgSrc: "images/covers/hey-jane.jpg", // Add image
    title: "Hey Jane",
    artist: "Chromakopia, Tyler, The Creator",
    audioSrc: "audio/hey-janeComp.mp3",
    songLink:
      "https://open.spotify.com/track/3Umj02ZNl4d356pS1D38mn?si=4dab29e44d584fc8",
    about:
      "Chromakopia is the latest album by Tyler, the Creator, dropped on October 28, 2024, as a follow-up to Call Me If You Get Lost. Crafted entirely by Tyler, the album dives into his life growing up in Hawthorne and Inglewood, reflecting lessons from his mom and a raw self-reflection at 33. With features from artists like Daniel Caesar, Doechii, Lil Wayne, and Childish Gambino, Chromakopia blends hip-hop, R&B, and jazz, creating a unique soundscape and delivering Tyler’s introspective journey.",
    glowColor: "#1b7741",
  },
  {
    id: "basement-jack",
    imgSrc: "images/covers/basement-jack.jpg", // Add image
    title: "Basement Jack",
    artist: "Apollo XXI, Steve Lacy",
    audioSrc: "audio/basement-jackComp.mp3",
    songLink:
      "https://open.spotify.com/track/3NOIkyNWG0fEjkPkq9HVMW?si=6824d7c861994b61",
    about:
      "Apollo XXI by Steve Lacy is a wild, genre-blurring debut that dives headfirst into themes of identity, sexuality, love, and self-discovery. With his signature lo-fi, funky production, Lacy brings a mix of rock, R&B, and funk that feels both retro and fresh. Tracks like 'Like Me' explore his journey of coming to terms with his sexuality, while others like 'Playground' and 'Love 2 Fast' showcase his smooth, bass-heavy sound and sharp guitar work. The whole album has this carefree, experimental vibe that’s really all Steve, and it's as if he’s inviting listeners into his mind, unapologetically and fully himself.",
    glowColor: "#f46307",
  },
  {
    id: "742617000027",
    imgSrc: "images/covers/slipknot.jpg", // Add image
    title: "742617000027",
    artist: "Slipknot, Slipknot",
    audioSrc: "audio/7426Comp.mp3",
    songLink:
      "https://open.spotify.com/track/0rA9HonPSSxTbPJkB81Qqh?si=9a4b77f88a004034",
    about:
      "Slipknot’s self-titled debut album is pure, unfiltered chaos, unleashing a fury that’s raw, relentless, and brutally honest. Blending elements of nu-metal, hardcore, and death metal, the album captures an intense mix of rage, pain, and energy. Tracks like 'Wait and Bleed' and 'Spit It Out' are packed with visceral lyrics and primal, pummeling rhythms, introducing the world to Slipknot’s aggressive sound and masked, nine-member lineup. It’s loud, abrasive, and unapologetically dark, channeling the darkest parts of human emotion into a cathartic experience that hits you like a storm. This is Slipknot at their most untamed—an album that doesn’t just play; it attacks.",
    glowColor: "#af4f3f",
  },
  {
    id: "lights-on",
    imgSrc: "images/covers/lights-on.jpg", // Add image
    title: "Lights On",
    artist: "Music Inspired By The Grinch, Tyler, The Creator",
    audioSrc: "audio/lights-onComp.mp3",
    songLink:
      "https://open.spotify.com/track/3ILZNhiwZtZ3fVVI65WC6e?si=71b28d13fe35443b",
    about: "A interesting take on christmas tunes by Tyler The Creator",
    glowColor: "#b0c37f",
  },
  {
    id: "pride",
    imgSrc: "images/covers/pride.jpg", // Add image
    title: "Pride",
    artist: "Damn, Kendrick Lamar",
    audioSrc: "audio/prideComp.mp3",
    songLink:
      "https://open.spotify.com/track/6IZvVAP7VPPnsGX6bvgkqg?si=fc7a40fefae04b1e",
    about:
      "Kendrick Lamar's DAMN. is a powerful and layered album, showcasing his ability to balance personal reflection with broader social commentary. Released in 2017, the album blends elements of hip-hop, trap, and jazz, delivering hard-hitting beats while Kendrick's lyrical prowess shines through. Each track is meticulously crafted, with themes ranging from the complexities of fame, identity, and faith, to the struggles of living in a turbulent world.",
    glowColor: "#eb1314",
  },
  {
    id: "from-the-subway",
    imgSrc: "images/covers/from-the-subway.pg.jpg", // Add image
    title: "From the Subway Train",
    artist: "Angel Youth, Vansire",
    audioSrc: "audio/from-the-subwayComp.mp3",
    songLink:
      "https://open.spotify.com/track/0qOCy2LqvdkMora7eZsJhQ?si=6d5e718ba2f24dfa",
    about:
      "Angel Youth by Vansire is a dreamy, indie-pop album that blends lush, atmospheric soundscapes with introspective lyrics. The duo's smooth vocals float over chill, synth-heavy beats, creating a laid-back vibe that’s both nostalgic and refreshing. Songs like 'Violet' and 'That’s Just a Fact' are filled with rich melodies, subtle guitar riffs, and a sense of longing that evokes feelings of quiet introspection and youthful melancholy. It’s the kind of album that feels like driving through a hazy sunset or lost in your thoughts at the end of a long day—soft, emotive, and full of atmosphere.",
    glowColor: "#4e9eb9",
  },
  {
    id: "knetka",
    imgSrc: "images/covers/kletka.jpg", // Add image
    title: "Kletka",
    artist: "Etazhi, Molchat Doma",
    audioSrc: "audio/kletkaComp.mp3",
    songLink:
      "https://open.spotify.com/track/4nvsRb9ypaqqDXcZxjn6ba?si=82ac5fc8aca6474c",
    about:
      "Etazhi by Molchat Doma is a haunting blend of post-punk, new wave, and synth-driven darkness, steeped in the melancholic vibes of 80s coldwave. The album pulses with icy beats and brooding, distant vocals that feel both retro and timeless. Tracks like ‘Тоска’ and ‘Судно’ capture a sense of existential despair, wrapped in hypnotic, minimalist production. There’s an eerie, almost cinematic quality to the sound, drawing you into a world of solitude and introspection. *Etazhi* is the soundtrack to late-night reflection—distant, haunting, and oddly captivating.",
    glowColor: "#d1caaa",
  },
  {
    id: "no-life",
    imgSrc: "images/covers/slipknot.jpg", // Add image
    title: "No Life",
    artist: "Slipknot, Slipknot",
    audioSrc: "audio/no-lifeComp.mp3",
    songLink:
      "https://open.spotify.com/track/0zy365BwajyyRj9NR3FVOU?si=fbf6c00adefa4ea9",
    about:
      "Slipknot’s self-titled debut album is pure, unfiltered chaos, unleashing a fury that’s raw, relentless, and brutally honest. Blending elements of nu-metal, hardcore, and death metal, the album captures an intense mix of rage, pain, and energy. Tracks like 'Wait and Bleed' and 'Spit It Out' are packed with visceral lyrics and primal, pummeling rhythms, introducing the world to Slipknot’s aggressive sound and masked, nine-member lineup. It’s loud, abrasive, and unapologetically dark, channeling the darkest parts of human emotion into a cathartic experience that hits you like a storm. This is Slipknot at their most untamed—an album that doesn’t just play; it attacks.",
    glowColor: "#af4f3f",
  },
  {
    id: "people-aint-dancing",
    imgSrc: "images/covers/people-aint-dancing.jpg", // Add image
    title: "People Ain't Dancing",
    artist: "Billen Ted",
    audioSrc: "audio/people-aint-dancingComp.mp3",
    songLink:
      "https://open.spotify.com/track/4qXjXZPGtVNhQq1z9QDRFn?si=7603e6d5282540a2",
    about:
      "People Ain’t Dancing by Billen Ted is a feel-good, high-energy track that fuses catchy electronic beats with upbeat house vibes. The song has this infectious groove, driven by pulsating basslines and smooth, soulful vocals that make you want to move. But even with its danceable rhythm, there’s a bit of a cheeky, tongue-in-cheek edge to the lyrics, hinting at the irony that despite the vibe, people just aren't dancing like they used to. It’s the perfect track for a party where the music's hot, but the crowd’s still just standing there, stuck in their heads. The vibe is carefree but with a hint of playful commentary.",
    glowColor: "#3bb590",
  },
  {
    id: "16",
    imgSrc: "images/covers/the-melodic-blue.jpg", // Add image
    title: "16",
    artist: "The Melodic Blue, Baby Keem",
    audioSrc: "audio/16Comp.mp3",
    songLink:
      "https://open.spotify.com/track/1Is8hGpkGMiePASAxBluxM?si=8c07db60363c44bd",
    about:
      "The Melodic Blue by Baby Keem is a genre-bending album that blends hip-hop, R&B, and experimental sounds into something uniquely his. With production from hitmakers like Kanye West and Kendrick Lamar, the album offers a mix of playful bangers and introspective tracks, often touching on themes of self-discovery, family, and the pressures of fame. Songs like ‘family ties’ (with Kendrick) showcase Keem’s energetic flow and sharp delivery, while tracks like ‘lost souls’ explore a more reflective side, mixing melodic hooks with hard-hitting bars. The album has a laid-back, experimental vibe, with Keem playing with different sounds and flows, pushing the boundaries of what modern rap can sound like. It’s bold, confident, and a bit surreal—an album that feels like a journey through his mind.",
    glowColor: "#777b8c",
  },
  {
    id: "some",
    imgSrc: "images/covers/some.jpg", // Add image
    title: "Some",
    artist: "Gemini Rights, Steve Lacy",
    audioSrc: "audio/someComp.mp3",
    songLink:
      "https://open.spotify.com/track/4riDfclV7kPDT9D58FpmHd?si=845abb2bae3140a2",
    about:
      "*Gemini Rights* by Steve Lacy is a captivating mix of R&B, funk, and soul, wrapped in a fresh, experimental sound. The album explores themes of heartbreak, self-discovery, and love, with Lacy’s signature smooth falsetto gliding over groovy basslines and rich, atmospheric production. Tracks like ‘Bad Habit’ and ‘Mercury’ combine introspective lyrics with catchy, layered melodies, creating a vibe that’s both laid-back and emotionally charged. Lacy blends vulnerability with confidence, giving the album a unique depth as he reflects on his personal journey through relationships and growth. *Gemini Rights* feels intimate and cathartic, yet effortlessly cool, making it a standout in Lacy’s discography.",
    glowColor: "#a40c30",
  },
  {
    id: "blue-hair",
    imgSrc: "images/covers/blue-hair.jpg", // Add image
    title: "Blue Hair",
    artist: "Death Of a Party Girl, TV Girl",
    audioSrc: "audio/blue-hairComp.mp3",
    songLink:
      "https://open.spotify.com/track/39sDitIeCMrVX2QyXHY46t?si=ec0007d350504e87",
    about:
      "Death of a Party Girl by TV Girl is a lo-fi indie pop album with a dreamy, melancholic vibe. The record blends catchy, mellow beats with reflective lyrics about love, loss, and the bittersweet moments of youth. Tracks like ‘Not Allowed’ and ‘Louisa’ have a laid-back, almost hazy feel, pairing infectious hooks with a sense of longing and disillusionment. The album’s sound is a mix of retro synths and smooth vocals, capturing the essence of nostalgia and the complexities of relationships. It’s an album that feels like a soundtrack to quiet, introspective nights—fun but with a certain sadness underneath.",
    glowColor: "#d81291",
  },
  {
    id: "music-is-mine",
    imgSrc: "images/covers/music-is-mine.jpg", // Add image
    title: "Music is Mine",
    artist: "Modal Soul, Nujabes",
    audioSrc: "audio/music-is-mineComp.mp3",
    songLink:
      "https://open.spotify.com/track/45ejirK0hfPnsjgzj3s7gP?si=8ad1e7d63df846c7",
    about:
      "Modal Soul by Nujabes is a smooth, soul-soaked masterpiece that blends jazz, hip-hop, and ambient vibes into a tranquil, reflective journey. With his signature production style, Nujabes creates lush, mellow beats that serve as the perfect backdrop for introspective rhymes and laid-back instrumentals. Tracks like ‘Feather’ (featuring Cise Starr) and ‘Luv(sic) Part 3’ resonate with a peaceful, almost meditative quality, while maintaining a deep emotional pull. The album flows like a series of thoughts and dreams, touching on themes of love, loss, and personal growth. *Modal Soul* is both soothing and thought-provoking—an album that feels like a late-night drive or a quiet moment of reflection. It’s a testament to Nujabes' ability to make music that’s as cinematic as it is soulful.",
    glowColor: "#9e1310",
  },
  {
    id: "champion",
    imgSrc: "images/covers/champion.jpg", // Add image
    title: "Champion",
    artist: "Graduation, Kanye West",
    audioSrc: "audio/championComp.mp3",
    songLink:
      "https://open.spotify.com/track/4UQMOPSUVJVicIQzjAcRRZ?si=829ad643a7da474c",
    about:
      "Graduation by Kanye West is a landmark album that pushed the boundaries of hip-hop and marked a shift in the genre’s sound. Blending hip-hop with electronic, rock, and soul influences, Kanye crafted an album that felt both futuristic and deeply personal. Tracks like ‘Stronger’ and ‘Good Life’ became anthems, with massive hooks and bold production, while songs like ‘Hey Mama’ and ‘Roses’ showcase Kanye's vulnerability and introspection. *Graduation* is about more than just success—it’s about overcoming obstacles, grappling with fame, and reflecting on Kanye's journey. With its innovative sound, it solidified Kanye as one of the most influential artists of the 2000s, setting the stage for his evolution as a genre-defying force in music.",
    glowColor: "#9a4882",
  },
  {
    id: "inception",
    imgSrc: "images/covers/Inception.jpg", // Add image
    title: "Inception",
    artist: "Inception, Mcoy Turner Train",
    audioSrc: "audio/inceptionComp.mp3",
    songLink:
      "https://open.spotify.com/track/1Dy1zTcsjdsd6JUVNBLC3R?si=14d13b5e26504837",
    about:
      "Inception by McCoy Turner Trio is a smooth, jazz-infused album that blends traditional jazz with modern influences, offering a mix of complex improvisation and rich melodies. The album’s sound is rooted in smooth, laid-back grooves, with intricate piano work from Turner, supported by tight rhythm and subtle yet powerful basslines and drumming. Each track feels like a journey, with moments of reflective calm and bursts of energetic improvisation, making the whole album feel like a dynamic conversation between the musicians. *Inception* showcases Turner’s skill as a composer and pianist, balancing technical proficiency with emotional depth. It’s an album that’s perfect for late-night listening, drawing you into its sophisticated yet accessible jazz world.",
    glowColor: "#9e7669",
  },
  {
    id: "basket-case",
    imgSrc: "images/covers/basket-case.jpg", // Add image
    title: "Basket Case",
    artist: "Dookie, Green Day",
    audioSrc: "audio/basket-caseComp.mp3",
    songLink:
      "https://open.spotify.com/track/6L89mwZXSOwYl76YXfX13s?si=1e5a9c83461a43ea",
    about:
      "Basket Case is one of Green Day's most iconic tracks from their breakthrough 1994 album, Dookie. Known for its catchy melody and relatable lyrics, the song captures the angst and confusion of mental health struggles, as frontman Billie Joe Armstrong reflects on his own experiences with anxiety. With its raw punk energy, introspective lyrics, and unforgettable hook, 'Basket Case' became an anthem for a generation, symbolizing the emotional turbulence of youth. The track helped solidify Green Day's place in the 90s punk rock scene and remains a fan favorite, highlighting the band's unique blend of humor, rebellion, and vulnerability.",
    glowColor: "#8c3a30",
  },
  {
    id: "words-2-live-by",
    imgSrc: "images/covers/words2liveby.jpg", // Add image
    title: "Words2LiveBy",
    artist: "El Cousteau",
    audioSrc: "audio/words2livebyComp.mp3",
    songLink:
      "https://open.spotify.com/track/6legbS59rPTHhNRrVdABTk?si=f3f4d32dabf44e3e",
    about:
      "Words2LiveBy is a low energy energetic track by underground rapper El Costeau featuring an underground titan in Earl Sweatshirt.",
    glowColor: "#bd3536",
  },
  {
    id: "when-i",
    imgSrc: "images/covers/when-i.jpg", // Add image
    title: "When I",
    artist: "The Lo-Fis, Steve Lacy",
    audioSrc: "audio/when-iComp.mp3",
    songLink:
      "https://open.spotify.com/track/4QUsmmXmINYXwh7UsiMX2j?si=3f425fc00700421a",
    about:
      "'When I' by Steve Lacy captures his signature lo-fi, soulful sound, blending smooth guitar lines with introspective lyrics. This track highlights Lacy’s ability to create an intimate, bedroom-pop vibe that resonates with fans of laid-back, introspective music.",
    glowColor: "#64483e",
  },
  {
    id: "small-worlds",
    imgSrc: "images/covers/small-worlds.jpg", // Add image
    title: "Small Worlds",
    artist: "Swimming, Mac Miller",
    audioSrc: "audio/small-worldsComp.mp3",
    songLink:
      "https://open.spotify.com/track/4gT3mNJA8lnlkYFqGZ8IA2?si=193455cca0424929",
    about:
      "In 'Small Worlds' from Swimming, Mac Miller reflects on life’s challenges and personal growth. Known for its introspective lyrics and jazzy, laid-back vibe, this song showcases Miller’s depth as an artist and his journey towards self-acceptance and healing.",
    glowColor: "#d49aa0",
  },
  {
    id: "creep",
    imgSrc: "images/covers/creep.jpg", // Add image
    title: "Creep",
    artist: "Pablo Honey, Radiohead",
    audioSrc: "audio/creepComp.mp3",
    songLink:
      "https://open.spotify.com/track/70LcF31zb1H0PyJoS1Sx1r?si=c6e744bb7d274829",
    about:
      "'Creep' is Radiohead’s breakthrough single from Pablo Honey, exploring themes of alienation and self-doubt. With its haunting melody and powerful lyrics, the track became an anthem for outsiders and solidified the band's place in alternative rock history.",
    glowColor: "#fbdc5a",
  },
  {
    id: "poxa",
    imgSrc: "images/covers/poxa.jpg", // Add image
    title: "Poxa",
    artist: "Cortex Vol. 2, Cortex",
    audioSrc: "audio/poxaComp.mp3",
    songLink:
      "https://open.spotify.com/track/4NaIl2XLSgc5AoFIZm1NIU?si=b7c5a2295ad24b25",
    about:
      "'Poxa' by Cortex is a jazz-funk instrumental known for its groovy bassline and vibrant horn sections. Cortex’s work has influenced hip-hop and electronic artists alike, and 'Poxa' remains a classic track with a timeless, energetic feel.",
    glowColor: "#a19c55",
  },
  {
    id: "orange-soda",
    imgSrc: "images/covers/orange-soda.jpg", // Add image
    title: "Orange Soda",
    artist: "DIE FOR MY B*TCH, Baby Keem",
    audioSrc: "audio/orange-sodaComp.mp3",
    songLink:
      "https://open.spotify.com/track/5FkoSXiJPKTNyYgALRJFhD?si=6d3dfe16e5f04c55",
    about:
      "'Orange Soda' is one of Baby Keem’s most popular tracks, known for its catchy beat and playful lyrics. Blending humor with bold production, the song has become a fan favorite and showcases Keem’s unique voice in the hip-hop scene.",
    glowColor: "#f28037",
  },
  {
    id: "righteous-minds",
    imgSrc: "images/covers/righteous-minds.jpg", // Add image
    title: "Righteous Minds",
    artist: "1999, Joey Bada$$",
    audioSrc: "audio/righteous-mindsComp.mp3",
    songLink:
      "https://open.spotify.com/track/7dFGkZbmm6cVlI28bfMaWE?si=c932d6228c9d4471",
    about:
      "From Joey Bada$$'s debut mixtape 1999, 'Righteous Minds' combines classic hip-hop beats with introspective lyrics. Known for its socially conscious themes and 90s-inspired sound, the track helped establish Joey as a prominent voice in modern hip-hop.",
    glowColor: "#444484",
  },
  {
    id: "chamber-of-reflection",
    imgSrc: "images/covers/chamber-of-reflection.jpg", // Add image
    title: "Chamber Of Reflection",
    artist: "Salad Days, Mac Demarco",
    audioSrc: "audio/chamber-of-reflectionComp.mp3",
    songLink:
      "https://open.spotify.com/track/7H7NyZ3G075GqPx2evsfeb?si=8899d66faab3478b",
    about:
      "'Chamber Of Reflection' is a dreamy, synth-heavy track by Mac DeMarco, exploring themes of solitude and introspection. Known for its melancholic atmosphere, the song has become a cult favorite and highlights DeMarco's unique approach to indie rock.",
    glowColor: "#3b4b66",
  },
];

console.log("tablet:", tablet);

let audio; // Global audio variable to hold the current audio instance

// Function to play the song
function playSong(audioSrc) {
  if (audio) {
    audio.pause(); // Stop the currently playing song
  }
  audio = new Audio(audioSrc); // Create a new audio element with the given source
  audio.play(); // Play the new song
  audio.loop = true;
}

function stopSong() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0; // Reset to the start of the song
  }
}

// Function to display the modal with album details
function displayModal(album) {
  const modal = document.getElementById("myModal");
  const albumTitle = document.querySelector(".modal-album-title");
  const albumAbout = document.querySelector(".modal-album-about");
  const modalImage = document.getElementById("album-modal-containter");

  // Set modal content
  albumTitle.innerText = album.title;
  albumAbout.innerHTML =
    album.artist + "<br/><br/>" + album.about + "<br/><br/>" + '<a href="' + album.songLink + '" target="_blank">Listen on Spotify</a>' + "<br/><br/> Click Anywhere Outside The Modal To Exit & Stop Playing Music";
  modalImage.src = album.imgSrc;

  // Show the modal

  document.getElementById("modal-content").style.background = `
  linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), ${album.glowColor}
`;

  if (window.matchMedia("(max-width: 500px)").matches) {
    // Display 1 album for small screens (phone)
    modal.style.display = "block";
  } else {
    // Display 4 albums for larger screens
    modal.style.display = "flex";
  }
}

function displayAlbums(albums) {
  const albumContainer = document.getElementById("album-container");
  albumContainer.innerHTML = ""; // Clear current albums

  albums.forEach((album) => {
    const albumDiv = document.createElement("div");
    albumDiv.classList.add("album", "center-content");
    albumDiv.innerHTML = `<img src="${album.imgSrc}" class="album-img" alt="${album.title}" style="--glow-color: ${album.glowColor};"/> <h2>${album.title} <br />${album.artist}</h2>`;

    // Click event to open modal and play song
    albumDiv.addEventListener("click", () => {
      playSong(album.audioSrc);
      displayModal(album);
    });

    albumContainer.appendChild(albumDiv);
  });
}
// Responsive function to reroll albums based on screen size
var tablet = window.matchMedia("(max-width: 820px)");

function rerollAlbums() {
  const shuffledAlbums = [...albumData].sort(() => Math.random() - 0.5);

  if (window.matchMedia("(max-width: 500px)").matches) {
    // Display 1 album for small screens (phone)
    displayAlbums(shuffledAlbums.slice(0, 1));
  } else if (window.matchMedia("(max-width: 820px)").matches) {
    // Display 2 albums for tablet screens
    displayAlbums(shuffledAlbums.slice(0, 2));
  } else {
    // Display 4 albums for larger screens
    displayAlbums(shuffledAlbums.slice(0, 4));
  }
}

window.addEventListener("resize", rerollAlbums);

// Initial load
rerollAlbums();

// Get the modal element
var modal = document.getElementById("myModal");

// When the user clicks anywhere outside of the modal, close it and stop the song
// Handle click event for non-touch devices
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Close the modal
    stopSong(); // Stop the audio when modal is clicked outside
  }
};

// Handle touch event for touch devices (like smartphones and tablets)
window.addEventListener('touchstart', function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Close the modal
    stopSong(); // Stop the audio when modal is touched outside
  }
});


const pauseButton = document.getElementById("pauseButton");

pauseButton.addEventListener("click", () => {
  if (audio) {
    audio.pause(); // Pause the audio when the button is clicked
  }
});

window.addEventListener("load", rerollAlbums); // Ensure albums are loaded on page load
