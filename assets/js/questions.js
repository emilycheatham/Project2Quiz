/* Questions and Answers. */
const questions =
    [
        {
            question: "In a game of Quidditch, catching the Golden Snitch is worth how many points?",
            answers: [
                { text: "200", correct: false },
                { text: "100", correct: false },
                { text: "175", correct: false },
                { text: "150", correct: true },
            ]
        },
        {
            question: "What house did Nymphadora Tonks belong to?",
            answers: [
                { text: "Hufflepuff", correct: true },
                { text: "Ravenclaw", correct: false },
                { text: "Slytherin", correct: false },
                { text: "Griffindor", correct: false },
            ]
        },
        {
            question: "What is the name of Fred and George's shop in Diagon Alley?",
            answers: [
                { text: "Weasley's Wizardry", correct: false },
                { text: "Weasley's Wizard Sneeze", correct: false },
                { text: "Weasley's Wizard Wheezes", correct: true },
                { text: "Weasley's Wizarding Wheezes", correct: false },
            ]
        },
        {
            question: "What is Hermione's middle name?",
            answers: [
                { text: "Jennifer", correct: false },
                { text: "Jean", correct: true },
                { text: "Julie", correct: false },
                { text: "Janet", correct: false },
            ]
        },
        {
            question: "Who did Ron beat to become the Quiddich keeper?",
            answers: [
                { text: "Ginny", correct: false },
                { text: "Cormac", correct: true },
                { text: "Seamus", correct: false },
                { text: "Draco", correct: false },
            ]
        },
        {
            question: "What is Ron's patronus?",
            answers: [
                { text: "Deer", correct: false },
                { text: "Otter", correct: false },
                { text: "Owl", correct: false },
                { text: "Jack Russell Terrier", correct: true },
            ]
        },
        {
            question: "According to the sign in Borgin & Burkes, how many muggles had the opal necklace killed?",
            answers: [
                { text: "20", correct: false },
                { text: "22", correct: false },
                { text: "18", correct: false },
                { text: "19", correct: true },
            ]
        },
        {
            question: "What is the name of Professor Dumbledore's brother?",
            answers: [
                { text: "Alberforth", correct: true },
                { text: "Aberavon", correct: false },
                { text: "Algar", correct: false },
                { text: "Abertay", correct: false },
            ]
        },
        {
            question: "What was the vault number that the Philosopher's stone was in?",
            answers: [
                { text: "713", correct: true },
                { text: "715", correct: false },
                { text: "716", correct: false },
                { text: "725", correct: false },
            ]
        },
        {
            question: "Who replaces Dumbledore as the headmaster of Hogwarts?",
            answers: [
                { text: "McGonagall", correct: false },
                { text: "Snape", correct: true },
                { text: "Flitwick", correct: false },
                { text: "Slughorn", correct: false },
            ]
        },
        {
            question: "The Avifors spell turns things into what?",
            answers: [
                { text: "Frogs", correct: false },
                { text: "Dogs", correct: false },
                { text: "Birds", correct: true },
                { text: "Cats", correct: false },
            ]
        },
        {
            question: "What is the boggart of Parvati Patil?",
            answers: [
                { text: "Mummy", correct: true },
                { text: "Dementor", correct: false },
                { text: "Spiders", correct: false },
                { text: "Banshee", correct: false },
            ]
        },
        {
            question: "What is the name of Hagrid's half-brother?",
            answers: [
                { text: "Gideon", correct: false },
                { text: "Groot", correct: false },
                { text: "Guybrush", correct: false },
                { text: "Grawp", correct: true },
            ]
        },
        {
            question: "What type of owl is Hedwig?",
            answers: [
                { text: "Snowy Owl", correct: true },
                { text: "Spotter Owl", correct: false },
                { text: "Great Horned Owl", correct: false },
                { text: "Subtropical Pygmy Owl", correct: false },
            ]
        },
        {
            question: "Where is the entrance to the Hufflepuff common room?",
            answers: [
                { text: "In the dungeons", correct: false },
                { text: "In the tallest tower", correct: false },
                { text: "Near the kitchen", correct: true },
                { text: "Near the greenhouse", correct: false },
            ]
        },
        {
            question: "Who did Sirus Black attack trying to get into the Gryffindor common room?",
            answers: [
                { text: "Nearly Headless Nick", correct: false },
                { text: "Peeves", correct: false },
                { text: "Filch", correct: false },
                { text: "The Fat Lady", correct: true },
            ]
        },
        {
            question: "Which Weasley did Fleur marry?",
            answers: [
                { text: "Bill", correct: true },
                { text: "Percy", correct: false },
                { text: "George", correct: false },
                { text: "Fred", correct: false },
            ]
        },
        {
            question: "How does a Quidditch game end?",
            answers: [
                { text: "The first to reach 200 points", correct: false },
                { text: "After 90 minutes", correct: false },
                { text: "When the Seeker catches the Golden Snitch", correct: true },
                { text: "When the Beater is knocked off their broom", correct: false },
            ]
        },
        {
            question: " What are non-magic people called?",
            answers: [
                { text: "Toggles", correct: false },
                { text: "Moggles", correct: false },
                { text: "Muggles", correct: true },
                { text: "Fuggles", correct: false },
            ],
        },
        {
            question: "What did Ron drink that nearly poisoned him?",
            answers: [
                { text: "Firewhisky", correct: false },
                { text: "Port", correct: false },
                { text: "Butterbeer", correct: false },
                { text: "Mead", correct: true },
            ]
        },
        {
            question: "How long had the entrance to the Chamber of Secrets been sealed?",
            answers: [
                { text: "40 years", correct: false },
                { text: "50 years", correct: true },
                { text: "60 years", correct: false },
                { text: "70 years", correct: false },
            ]
        },
        {
            question: "Which family did Dobby belong to?",
            answers: [
                { text: "The Longbottoms", correct: false },
                { text: "The Blacks", correct: false },
                { text: "The Potters", correct: false },
                { text: "The Malfoys", correct: true },
            ]
        },
        {
            question: "What colour is the Philosopher's stone?",
            answers: [
                { text: "Pink", correct: false },
                { text: "Blue", correct: false },
                { text: "Red", correct: true },
                { text: "Purple", correct: false },
            ]
        },
        {
            question: "What is the name of the Dark magical artefacts shop in Knockturn Alley?",
            answers: [
                { text: "Barkin & Bourges", correct: false },
                { text: "Berkin & Borkes", correct: false },
                { text: "Bergin & Books", correct: false },
                { text: "Borgin & Burkes", correct: true },
            ]
        },
        {
            question: "In what year did Dumbledore defeat Grindelwald?",
            answers: [
                { text: "1975", correct: false },
                { text: "1945", correct: true },
                { text: "1845", correct: false },
                { text: "1775", correct: false },
            ]
        },
        {
            question: "When is Fred and George's birthday?",
            answers: [
                { text: "1st April", correct: true },
                { text: "3rd April", correct: false },
                { text: "5th April", correct: false },
                { text: "7th April", correct: false },
            ]
        },
        {
            question: "How many knuts are there in a sickle?",
            answers: [
                { text: "24", correct: false },
                { text: "29", correct: true },
                { text: "33", correct: false },
                { text: "37", correct: false },
            ]
        },
        {
            question: "Who tries to stop Harry returning to Hogwarts for his second year?",
            answers: [
                { text: "Snape", correct: false },
                { text: "Vernon", correct: false },
                { text: "Malfoy", correct: false },
                { text: "Dobby", correct: true },
            ]
        },
        {
            question: "What subject does Professor McGonagall teach?",
            answers: [
                { text: "Defence Against the Dark Arts", correct: false },
                { text: "History of Magic", correct: false },
                { text: "Transfiguration", correct: true },
                { text: "Herbology", correct: false },
            ]
        },
        {
            question: "What is Ginny Weasley's middle name?",
            answers: [
                { text: "Jenny", correct: false },
                { text: "Lily", correct: false },
                { text: "Molly", correct: true },
                { text: "Narcissa", correct: false },
            ]
        },
        {
            question: "What magical village do third years and above get to visit?",
            answers: [
                { text: "Hogsback", correct: false },
                { text: "Hogginton", correct: false },
                { text: "Hogswash", correct: false },
                { text: "Hogsmeade", correct: true },
            ]
        },
        {
            question: "What is Rita Skeeter's animagus?",
            answers: [
                { text: "Beetle", correct: true },
                { text: "Owl", correct: false },
                { text: "Dog", correct: false },
                { text: "Rat", correct: false },
            ]
        },
        {
            question: "Who did Harry Potter share his first kiss with?",
            answers: [
                { text: "Hermione Granger", correct: false },
                { text: "Ginny Wealey", correct: false },
                { text: "Cho Chang", correct: true },
                { text: "Parvati Patil", correct: false },
            ]
        },
        {
            question: "What did Hermione turn into when she got the polyjuice potion wrong?",
            answers: [
                { text: "A boy", correct: false },
                { text: "A bird", correct: false },
                { text: "A dog", correct: false },
                { text: "A cat", correct: true },
            ]
        },
        {
            question: "What is the name of Colin Creevey's brother?",
            answers: [
                { text: "Dominic", correct: false },
                { text: "Daniel", correct: false },
                { text: "Dennis", correct: true },
                { text: "Damon", correct: false },
            ]
        },
        {
            question: "Who is the Head of Herbology?",
            answers: [
                { text: "Professor Cabbage", correct: false },
                { text: "Professor Plum", correct: false },
                { text: "Professor Green", correct: false },
                { text: "Professor Sprout", correct: true },
            ]
        },
        {
            question: "Who is the landlord of The Leaky Cauldron?",
            answers: [
                { text: "Tom", correct: true },
                { text: "Regulus", correct: false },
                { text: "Vincent", correct: false },
                { text: "Lucius", correct: false },
            ]
        },
        {
            question: "What is the name of Aragog's wife?",
            answers: [
                { text: "Morag", correct: false },
                { text: "Mosag", correct: true },
                { text: "Marag", correct: false },
                { text: "Marog", correct: false },
            ]
        },
        {
            question: "What does Hagrid name his Norwegian Ridgeback dragon?",
            answers: [
                { text: "Norbert", correct: true },
                { text: "Norman", correct: false },
                { text: "Norris", correct: false },
                { text: "Nothing", correct: false },
            ]
        },
        {
            question: "What colour is Felix Felicis?",
            answers: [
                { text: "Silver", correct: false },
                { text: "Gold", correct: true },
                { text: "Bronze", correct: false },
                { text: "Copper", correct: false }
            ]
        },
        {
            question: 'What potion will transforms the drinker into the physical form of another?',
            answers: [
                { text: "Daught of Peace", correct: false },
                { text: "Vertaserum", correct: false },
                { text: "Amortenia", correct: false },
                { text: 'Polyjuice potion', correct: true }
            ]
        },
        {
            question: "What are the effects of the Draught of Living Death?",
            answers: [
            { text: "The user is wide awake", correct: false },
            { text: "Same effects as alcohol", correct: false },
            { text: "Instant death", correct: false },
            { text: "A powerful sleeping potion", correct: true }
            ]
        },
        {
            question: "What does Amortentia smell like?",
             answers: [
            { text: "Apples", correct: false },
            { text: "Mown grass and parchment", correct: false },
            { text: "What attracts the person smelling it", correct: true },
            { text: "It has no smell", correct: false }
            ]
        },
        {
            question: "Used to cure common colds, what is a common side effect of Pepperup Potion?",
            answers: [
            { text: "Tasting pepper", correct: false },
            { text: "Ears steaming for hours", correct: true },
            { text: "Feeling the need to jump", correct: false },
            { text: "Pupils turning into a star shape", correct: false }
        ]
    },
    {
            question: "What type of berries are included in a Forgetfulness Potion?",
            answers: [
            { text: "Acai berries", correct: false },
            { text: "Elderberries", correct: false },
            { text: "Goji berries", correct: false },
            { text: "Mistletoe berries", correct: true }
        ]
    },
    {
            question: "In which potion would you put puffer-fish eyes, dried nettles and bat spleens?",
        answers: [
            { text: "Swelling Solution", correct: true },
            { text: "Sleeping Potion", correct: false },
            { text: "Shrinking Solution", correct: false },
            { text: "Screaming Silencer", correct: false }
        ]
    },
    {
    question: "What is the name of the potion that helps tame even the bushiest of hair types?",
        answers: [
            { text: "Birds Nest No More Potion", correct: false },
            { text: "Sleekeazy’s Hair Potion", correct: true },
            { text: "Smooth Hair Potion", correct: false },
            { text: "Tame the Beast Hair Potion", correct: false }
        ]
    },
    {
        question: "How many uses are there for dragon’s blood?",
        answers: [
            { text: "9", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "12", correct: true }
        ]
    },
    {
        question: "What potions would relieve the effects of Lycanthropy?",
        answers: [
            { text: "Wolfsbane Potion", correct: true },
            { text: "Wolfdraught", correct: false },
            { text: "Wolfslixer", correct: false },
            { text: "Wolfmount", correct: false }
        ]
    },
    {
            question: "Sirius Black was sent to Azkaban as it was believed he had murdered who?",
            answers: [
                { text: "Milicent Bulstrode", correct: false },
                { text: "Tom Riddle", correct: false },
                { text: "Gilert Grindelwald", correct: false },
                { text: "Peter Pettigrew", correct: true },
            ]
        },
    ]