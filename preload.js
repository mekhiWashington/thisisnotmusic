var images = [];

function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();

    images[i].src = preload.arguments[i];
  }
}

// images and sounds

preload(
  "images/covers/444.jpg",

  "images/covers/basement.jpg",

  "images/covers/basket-case.jpg",

  "images/covers/bauhaus.jpg",

  "images/covers/blue-hair.jpg",

  "images/covers/chamber-of-reflection.jpg",

  "images/covers/champion.jpg",

  "images/covers/chrome-denim.jpg",

  "images/covers/creep.jpg",

  "images/covers/frank.jpg",

  "images/covers/from-the-subway.jpg",

  "images/covers/hey-jane.jpg",

  "images/covers/inception.jpg",

  "images/covers/kletka.jpg",

  "images/covers/lights-on.jpg",

  "images/covers/mexican-dream.jpg",

  "images/covers/music-is-mine.jpg",

  "images/covers/orange-soda.jpg",

  "images/covers/people-aint-dancing.jpg",

  "images/covers/poxa.jpg",

  "images/covers/pride.jpg",

  "images/covers/saggitarius-heartbreak-demo.jpg",

  "images/covers/slipknot.jpg",

  "images/covers/small-worlds.jpg",

  "images/covers/some.jpg",

  "images/covers/the-melodic-blue.jpg",

  "images/covers/three-man-weave.jpg",

  "images/covers/tpab.jpg",

  "images/covers/when-i.jpg",

  "images/covers/words2liveby.jpg",

  "audio/16Comp.mp3",

  "audio/7426Comp.mp3",

  "audio/basement-jackComp.mp3",

  "audio/blue-hairComp.mp3",

  "audio/chamber-of-reflectionComp.mp3",

  "audio/championComp.mp3",

  "audio/covetComp.mp3",

  "audio/creepComp.mp3",

  "audio/from-the-subwayComp.mp3",

  "audio/inceptionComp.mp3",

  "audio/ivyComp.mp3",

  "audio/kletkaComp.mp3",

  "audio/lights-onComp.mp3",

  "audio/mexican-dreamComp.mp3",

  "audio/music-is-mineComp.mp3",

  "audio/no-lifeComp.mp3",

  "audio/of-lilies-and-remainsComp.mp3",

  "audio/orange-sodaComp.mp3",

  "audio/people-aint-dancingComp.mp3",

  "audio/poxaComp.mp3",

  "audio/prideComp.mp3",

  "audio/righteous-mindsComp.mp3",

  "audio/sagittarious-heartbreakComp.mp3",

  "audio/small-worldsComp.mp3",

  "audio/someComp.mp3",

  "audio/wesleys-theoryComp.mp3",

  "audio/when-iComp.mp3",

  "audio/words2livebyComp.mp3",
);
