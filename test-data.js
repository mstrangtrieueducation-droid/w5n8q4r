const IMG = "assets/test-images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const pictureChoice = (id, prompt, pictures, answer, explanation) => ({ id, type: "pictureChoice", prompt, pictures, answers: [answer], explanation, points: 1 });
const labelledPictures = (prefix, labels) => labels.map((label) => ({ value: label, image: `${IMG}${prefix}-${label}.png` }));

const sections = [
  { key: "A", label: "A", title: "Circle the correct answer.", note: "Choose True or False for each science statement.", points: 3, questions: [
    choice("A1", "1. A sailboat uses wind to move across the water.", ["T", "F"], "T", "A sailboat can use wind energy to move across the water, so the statement is true."),
    choice("A2", "2. Pollution is good for the Earth.", ["T", "F"], "F", "Pollution harms the environment, so the statement is false."),
    choice("A3", "3. Coal is a type of food.", ["T", "F"], "F", "Coal is a non-renewable fossil fuel, not a type of food.")
  ]},
  { key: "B", label: "B", title: "Look and complete the sentences.", note: "Use each clean source picture to identify the energy word.", points: 4, questions: [
    input("B1", "1. A ___ is a source of energy.", ["wind turbine", "wind farm"], "The picture shows a wind turbine. A wind farm is a group of wind turbines, so the official key accepts either expression here.", IMG + "b-a.png"),
    input("B2", "2. We use ___ to heat our homes.", ["oil"], "The picture shows oil beside a container. Oil can be burned to heat homes.", IMG + "b-b.png"),
    input("B3", "3. A ___ burns fossil fuels to create energy.", ["power plant"], "The picture shows a power plant, where fossil fuels can be burned to produce energy.", IMG + "b-c.png"),
    input("B4", "4. The burners of our stove use ___.", ["natural gas", "gas"], "The picture shows a gas stove burner. The full vocabulary term is natural gas.", IMG + "b-d.png")
  ]},
  { key: "C", label: "C", title: "Unscramble the words and match.", note: "Write the word, then choose its definition label. The letters a-c are labels only.", points: 6, wordBank: ["a. an energy source with many turbines", "b. cannot be used again", "c. light bulbs, TVs, and computers need this to work"], questions: [
    { id: "C1", type: "paired", prompt: "1. y c i t l e e i t c r", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["electricity"], explanation: "Electricity is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Light bulbs, TVs, and computers need electricity, so the definition label is c." }
    ]},
    { id: "C2", type: "paired", prompt: "2. o n n - n e r e a w l e b", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["non-renewable", "non renewable"], explanation: "Non-renewable is the correct word." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "A non-renewable resource cannot be used again after it is exhausted, so the label is b." }
    ]},
    { id: "C3", type: "paired", prompt: "3. d i w n  a r m f", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["wind farm", "windfarm"], explanation: "Wind farm is the standard spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "A wind farm is an energy source made up of many turbines, so the label is a." }
    ]}
  ]},
  { key: "D", label: "D", title: "Listen. Then circle the correct answer.", note: "Listen for whether each possibility is positive or negative.", points: 4, audio: "assets/audio-a.mp3", questions: [
    choice("D1", "1.", ["He might like to see a wind farm.", "He might not like to see a wind farm."], "He might like to see a wind farm.", "The recording says he might like to see a wind farm."),
    choice("D2", "2.", ["It might be a power plant.", "It might not be a power plant."], "It might be a power plant.", "The recording presents a possible identification: it might be a power plant."),
    choice("D3", "3.", ["The wind turbines might work.", "The wind turbines might not work."], "The wind turbines might not work.", "The recording uses the negative possibility might not work."),
    choice("D4", "4.", ["It might cause pollution.", "It might not cause pollution."], "It might cause pollution.", "The recording says it might cause pollution.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences.", note: "Use each phrase from the box once.", points: 4, wordBank: ["might be a good day", "might not be", "may be very expensive", "might have", "may not work"], questions: [
    input("E1", "1. This town ___ a power plant, but I'm not sure.", ["might have"], "I'm not sure signals possibility, so might have fits the sentence."),
    input("E2", "2. It's windy today. It ___ for sailing.", ["might be a good day"], "Wind can make the day suitable for sailing, but it is only a possibility."),
    input("E3", "3. How much do solar panels cost? I think they ___.", ["may be very expensive"], "I think shows uncertainty, so may be very expensive is appropriate."),
    input("E4", "4. This camera is very old. You can try it, but it ___.", ["may not work"], "Because the camera is very old, there is a possibility that it will not work.")
  ]},
  { key: "F", label: "F", title: "Look and complete the sentences with may, might, may not, or might not and a verb.", note: "Use the evidence in each picture to express a possibility.", points: 4, questions: [
    input("F1", "1. She ___ money.", ["may not have", "might not have"], "Her empty wallet suggests that she may not have any money.", IMG + "f-1.png"),
    input("F2", "2. The car ___ gas.", ["may not have", "might not have"], "The driver appears worried and the car may not have gas.", IMG + "f-2.png"),
    input("F3", "3. They ___ to a wind farm.", ["might go", "may go"], "The children are near wind turbines, so they might go to a wind farm.", IMG + "f-3.png"),
    input("F4", "4. It ___ sunny today.", ["might be", "may be"], "The sun in the picture suggests that it might be sunny today.", IMG + "f-4.png")
  ]},
  { key: "G", label: "G", title: "Two of the three words are incorrect. Listen and circle the correct answer.", note: "Choose the one word from each row that matches the recording.", points: 4, audio: "assets/audio-g.mp3", questions: [
    choice("G1", "1.", ["traffic jam", "carpool", "fire engine"], "traffic jam", "The word in the recording is traffic jam."),
    choice("G2", "2.", ["button", "blade", "mask"], "mask", "The word in the recording is mask."),
    choice("G3", "3.", ["elevator", "pedal", "taxi"], "pedal", "The word in the recording is pedal."),
    choice("G4", "4.", ["escalator", "subway", "ambulance"], "escalator", "The word in the recording is escalator.")
  ]},
  { key: "H", label: "H", title: "Match the sentences to the pictures.", note: "The letters a-d label the pictures only. Choose the picture that matches each sentence.", points: 4, questions: [
    pictureChoice("H1", "1. Let's take the elevator to the fourth floor.", labelledPictures("h", ["a", "b", "c", "d"]), "b", "Picture b shows a person inside an elevator."),
    pictureChoice("H2", "2. The ambulance will take us quickly to the hospital.", labelledPictures("h", ["a", "b", "c", "d"]), "d", "Picture d shows an ambulance."),
    pictureChoice("H3", "3. I hear a fire engine. There must be a fire nearby.", labelledPictures("h", ["a", "b", "c", "d"]), "a", "Picture a shows a fire engine."),
    pictureChoice("H4", "4. Sometimes Arthur takes a carpool to work.", labelledPictures("h", ["a", "b", "c", "d"]), "c", "Picture c shows several passengers sharing one car, which is a carpool.")
  ]},
  { key: "I", label: "I", title: "Complete the sentences.", note: "Write the transportation or city word that completes each meaning.", points: 4, questions: [
    input("I1", "1. I called a ___ to take us to the movie. It should be here in ten minutes.", ["taxi"], "A taxi is a car that you call to take you somewhere."),
    input("I2", "2. A ___ can fly over all the cars in a traffic jam.", ["helicopter"], "A helicopter travels through the air, so it can fly over a traffic jam."),
    input("I3", "3. The ___ is a train that goes under the city.", ["subway"], "A subway is an underground city train."),
    input("I4", "4. I lost a ___ on my shirt. I need to sew on a new one tonight.", ["button"], "A button can be sewn onto a shirt.")
  ]},
  { key: "J", label: "J", title: "Circle the correct answer.", note: "Use the context to choose a few, a little, or a lot of.", points: 3, questions: [
    choice("J1", "1. There are ___ taxis. You can find one easily.", ["a few", "a lot of"], "a lot of", "If a taxi is easy to find, there are a lot of taxis."),
    choice("J2", "2. We have only ___ gas. We need to get more soon.", ["a little", "a lot of"], "a little", "Only and the need to get more show that the amount of gas is small."),
    choice("J3", "3. The library has ___ books about energy and pollution. I won't have a problem finding one.", ["a few", "a lot of"], "a lot of", "If finding a book is not a problem, the library has a lot of books on the topic.")
  ]},
  { key: "K", label: "K", title: "Write the words in the correct order to make sentences.", note: "Use every word and add correct punctuation.", points: 4, questions: [
    input("K1", "1. Ed / a lot / of / has / paper", ["Ed has a lot of paper", "Ed has a lot of paper."], "Place the subject first, followed by has and the quantity phrase a lot of paper."),
    input("K2", "2. We / a few / apples / eat / every day", ["We eat a few apples every day", "We eat a few apples every day."], "Use subject + verb + quantity phrase + time expression."),
    input("K3", "3. games / The students / of / play / a lot", ["The students play a lot of games", "The students play a lot of games."], "A lot of comes directly before the plural count noun games."),
    input("K4", "4. energy / uses / The computer / a little", ["The computer uses a little energy", "The computer uses a little energy."], "A little comes before the uncountable noun energy.")
  ]},
  { key: "L", label: "L", title: "Write the words in the correct order to make questions. Then match them to the pictures.", note: "Write the complete question, then choose its picture label. The letters a-c are labels only.", points: 6, questions: [
    { id: "L1", type: "pictureWord", prompt: "1. a / lot / of / books / Does / she / have", pictures: labelledPictures("l", ["a", "b", "c"]), points: 2, parts: [
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["b"], explanation: "Picture b shows a woman with a lot of books." },
      { key: "word", label: "Complete question", type: "input", answers: ["Does she have a lot of books", "Does she have a lot of books?"], explanation: "A present simple question with she uses Does + subject + base verb." }
    ]},
    { id: "L2", type: "pictureWord", prompt: "2. make / a / lot / pollution / Does / the factory / of", pictures: labelledPictures("l", ["a", "b", "c"]), points: 2, parts: [
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["c"], explanation: "Picture c shows pollution from a factory." },
      { key: "word", label: "Complete question", type: "input", answers: ["Does the factory make a lot of pollution", "Does the factory make a lot of pollution?"], explanation: "Use Does + the factory + make + a lot of pollution." }
    ]},
    { id: "L3", type: "pictureWord", prompt: "3. questions / have / a / Do / the students / few", pictures: labelledPictures("l", ["a", "b", "c"]), points: 2, parts: [
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["a"], explanation: "Picture a shows students raising their hands to ask questions." },
      { key: "word", label: "Complete question", type: "input", answers: ["Do the students have a few questions", "Do the students have a few questions?"], explanation: "A present simple question with the plural subject students uses Do." }
    ]}
  ]}
];
