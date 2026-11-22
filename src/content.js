// =====================================================================
//  EDIT ME. All text and all photo lists live in this one file.
//  Photos: put files in public/photos/solo and public/photos/together,
//  then make sure the names below match. Add or remove lines freely.
//  aspect: 'portrait' (tall) | 'square' | 'landscape' (wide)
//  tilt: small angle in degrees for the scrapbook look (optional)
// =====================================================================

export const content = {
  friendName: 'Sherin',
  opening: {
    title: 'Hey, Birthday Girl! 🎀',
    line1:
      "I know I'm a little late... but a special person like you deserves more than just a birthday wish.",
    line2: "There's something I've made just for you. 💗",
    button: 'Open Your Little Surprise ♡',
  },

  wish: {
    heading: 'Happiest Birthday, My Girl! ❤️🥹',
    paragraphs: [
      "First of all, I'm really, really sorry for being late to wish you. I honestly don't know how I missed your special day, and I feel bad about it. I know I'm late, but please never think that you're any less special to me.",
      "You're one of those people who are always in my thoughts, even when we don't talk every day. I always think about you, wish the best for you and genuinely pray that life gives you everything your heart wishes for. I just want to see you happy, successful and at peace with everything in life.",
      "You deserve all the happiness, love and beautiful things this world has to offer. May all your dreams come true, may you achieve everything you've ever wished for, and may you always have reasons to smile.",
      "Thank you for being you and for being such a special part of my life. No matter how busy life gets or how often we talk, you'll always have a special place in my heart.",
    ],
    closing:
      'Once again, happiest birthday, my dear! Love you lots. Stay happy, keep smiling and never stop being the beautiful person you are. 🫂❤️',
  },

  solo: {
    heading: 'A Girl Who Deserves the Whole Universe ✨',
    subheading: 'Just a little reminder of how beautiful, special and wonderful you are.',
    photos: [
      { src: 'photos/solo/1.jpeg', caption: 'Simply beautiful.', aspect: 'portrait', tilt: -2 },
      { src: 'photos/solo/2.jpeg', caption: 'Main character energy.', aspect: 'portrait', tilt: 3 },
      { src: 'photos/solo/3.jpeg', caption: 'Born to shine.', aspect: 'portrait', tilt: -3 },
      { src: 'photos/solo/4.jpeg', caption: 'A little sunshine.', aspect: 'portrait', tilt: 2 },
      { src: 'photos/solo/5.jpeg', caption: 'Forever gorgeous.', aspect: 'portrait', tilt: -2.5 },
      { src: 'photos/solo/6.jpeg', caption: 'Pure magic.', aspect: 'portrait', tilt: 1.5 },
    ],
  },

  together: {
    heading: 'Us, and All the Little Things ❤️',
    subheading: 'Some of my favourite memories have you in them.',
    ending: '...from our childhood till now, and so many more to come 💕',
    photos: [
      { src: 'photos/together/1.jpeg', caption: 'My favourite kind of chaos.', when: '', aspect: 'portrait', tilt: -2 },
      { src: 'photos/together/2.jpeg', caption: "Memories I'll always keep close.", when: '', aspect: 'portrait', tilt: 2 },
      { src: 'photos/together/3.jpeg', caption: 'Just two girls making memories.', when: '', aspect: 'portrait', tilt: -1.5 },
      { src: 'photos/together/4.jpeg', caption: 'More laughter, more adventures, more us.', when: '', aspect: 'portrait', tilt: 2.5 },
      { src: 'photos/together/5.jpeg', caption: 'Some people make ordinary moments extraordinary.', when: '', aspect: 'portrait', tilt: -2 },
      { src: 'photos/together/6.jpeg', caption: 'To endless adventures and memories together.', when: '', aspect: 'landscape', tilt: 1.5 },
    ],
  },

  letter: {
    heading: 'A Little Letter, Just for You',
    subheading: 'Tap the envelope. It has been waiting for you.',
    button: 'Open My Letter',
    closeButton: 'Fold it back',
    greeting: 'Dear Sherin,',
    paragraphs: [
      "I might not always say it, but I'm genuinely grateful to have you in my life.",
      'Thank you for being part of my journey, from our childhood days till today, for all the laughter, the conversations, the memories and even the silly little moments that make our friendship special.',
      "I hope life treats you kindly. I hope you achieve everything you've ever dreamed of. I hope you never lose that beautiful spark that makes you YOU.",
      'And whenever life gets difficult, remember that you are stronger, more capable and more loved than you realise.',
      "Here's to more memories, more crazy moments, endless laughter and a friendship that keeps growing.",
      'I may be late with this birthday surprise, but my love and wishes for you are never late.',
      'Forever cheering for you!',
    ],
    signoff: ['With lots of love,', 'Your Bestie ❤️'],
  },

  wishes: {
    heading: 'Little Birthday Wishes',
    subheading: 'Tap a card. Each one carries a little love.',
    items: [
      'May your smile never fade.',
      'May your dreams find their way to you.',
      'May you always feel loved and appreciated.',
      'May your life be filled with beautiful surprises.',
      'May you never settle for less than you deserve.',
      'May this year be your happiest chapter yet.',
    ],
  },

  finale: {
    heading: 'One Last Thing...',
    paragraphs: [
      'Even though I missed your birthday, I never want you to forget how special you are to me.',
      "The calendar may say your birthday has passed, but celebrating you doesn't have an expiry date.",
      'I hope you loved this little surprise.',
      "Here's to you, your happiness, your dreams and all the beautiful things waiting for you.",
    ],
    closing: 'Happy Belated Birthday, Sherin! ❤️',
    button: 'Sending You the Biggest Hug! 🫂',
    hugMessage: 'Love you endlessly! 💗',
  },

  music: {
    src: 'music/song.mp3',
    play: 'Play music',
    pause: 'Pause music',
    missing: 'Music file not added yet',
  },
}
