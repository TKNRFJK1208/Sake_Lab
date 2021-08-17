// sake list data
var sakeSet = [
    {
        id: 0,
        name: 'TOMIO ZENRYO YAMADANISHIKI',
        cat: 'DAIGINJO',
        catId: 0,
        active: true,
        price: '$119.00',
        keyImage:'sake0.jpeg',
        desc: "This Junmai Daiginjo sake is made with special brewing rice “YAMADA NISHIKI”, which is polished to 39%. A real sake that is only made possible after spending 350 years of history in brewing sake. This sake is aged in low-temperature environment, creating a rich flavour. Limited quantities."
    },
    {id: 1, name: 'YUKI MANMAN AGED 5 YEARS', cat: 'DAIGINJO', catId: 0, active: true, price: '$89.00', keyImage:'sake1.jpeg', desc: 'This premium daiginjo was aged for 5 years at -5℃/23°F. The slow aging at low temperatures makes it smooth and round. Vividly fruity when first bottled, it has deepened with age to reveal muted tones of pomegranate and persimmon.'},
    {id: 2, name: 'DEWA SANSAN', cat: 'GINJO', catId: 1, active: true, price: '$99.00', keyImage:'sake2.jpeg', desc: 'The brewing rice, called “DEWASANSAN” was made by Yamagata prefecture and local breweries. It has a well balanced acidity and mild UMAMI of rice. You can taste a soft fruity flavour with fresh finish in your mouth.'},
    {id: 3, name: 'KOTO SEN NEN GINJO', cat: 'GINJO', catId: 1, active: true, price: '$79.00', keyImage:'sake3.jpeg', desc: 'This is a pure rice sake.  Nothing is used in its production but rice, water and koji. The taste is full and a bit heavier than other Ginjo Sake yet its incredibly smooth. A clean taste makes it enjoyable to drink both chilled and warmed.'},
    {id: 4, name: 'TAKACHO BODAIMOTO', cat: 'JUNMAI', catId: 2, active: true, price: '$59.00', keyImage:'sake4.jpeg', desc: 'This is a Junmai sake brewed with Nara’s traditional method of Bodaimoto. The rich and complex taste of Umami leaves great impressions of sophisticated Junmai sake.'},
    {id: 5, name: 'KARESANSUI AGED 10YEARS', cat: 'JUNMAI', catId: 2, active: true, price: '$99.00', keyImage:'sake5.jpeg', desc: 'In 2013, To celebrate their 120th years anniversary, they have created a limited-edition sake – “Tokubestu Junmai Karesansui 10 year aged sake.'},
    {id: 6, name: 'ICHIGIN', cat: 'DAIGINJO', catId: 0, active: true, price: '$79.00', keyImage:'sake6.jpeg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 7, name: 'IZUTSUYAIHEI IWAIMAI 35%', cat: 'GINJO', catId: 1, active: true, price: '$69.00', keyImage:'sake7.jpeg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 8, name: 'OMACHI JUNMAI GINJO', cat: 'JUNMAI', catId: 2, active: true, price: '$79.00', keyImage:'sake8.jpeg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
];

var catSet = [
    {id: 0, name: 'DAIGINJO'},
    {id: 1, name: 'GINJO'},
    {id: 2, name: 'JUNMAI'}
]