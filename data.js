var questions = [];
var count = [0, "/", 0];

var radicals = {
    aka: {
        romaji: "aka",
        character: "赤",
        furigana: "あか",
        meaning: "red"
    },
    midori: {
        romaji: "midori",
        character: "緑",
        furigana: "みどり",
        meaning: "green"
    },
    ao: {
        romaji: "ao",
        character: "青",
        furigana: "あお",
        meaning: "blue"
    },
    one: {
        character: "一",
        meaning: "one",
        index: 1
    },
    line: {
        character: "丨",
        meaning: "line",
        index: 2
    },
    dot: {
        character: "丶",
        meaning: "dot",
        index: 3
    },
    slash: {
        character: "丿",
        meaning: "slash",
        index: 4
    },
    fishhook: {
        character: "乙",
        meaning: "fishhook",
        index: 5
    },
    fishhookA: {
        character: "⺄",
        meaning: "fishhook",
        index: 5
    },
    fishhookB: {
        character: "乚",
        meaning: "fishhook",
        index: 5
    },
    hook: {
        character: "亅",
        meaning: "hook",
        index: 6
    },
    two: {
        character: "二",
        meaning: "two",
        index: 7
    },
    lid: {
        character: "亠",
        meaning: "lid",
        index: 8
    },
    man: {
        character: "人",
        meaning: "man",
        index: 9
    },
    manA: {
        character: "亻",
        meaning: "man",
        index: 9
    },
    manB: {
        character: "𠆢",
        meaning: "man",
        index: 9
    },
    legs: {
        character: "儿",
        meaning: "legs",
        index: 10
    },
    enter: {
        character: "入",
        meaning: "enter",
        index: 11
    },
    divide: {
        character: "八",
        meaning: "divide",
        index: 12
    },
    box: {
        character: "冂",
        meaning: "box",
        index: 13
    },
    cover: {
        character: "冖",
        meaning: "cover",
        index: 14
    },
    ice: {
        character: "冫",
        meaning: "ice",
        index: 15
    },
    table: {
        character: "几",
        meaning: "table",
        index: 16
    },
    container: {
        character: "凵",
        meaning: "container",
        index: 17
    },
    knife: {
        character: "刀",
        meaning: "knife",
        index: 18
    },
    knifeA: {
        character: "刂",
        meaning: "knife",
        index: 18
    },
    power: {
        character: "力",
        meaning: "power",
        index: 19
    },
    wrap: {
        character: "勹",
        meaning: "wrap",
        index: 20
    },
    cane: {
        character: "匕",
        meaning: "cane",
        index: 21
    },
    casket: {
        character: "匚",
        meaning: "casket",
        index: 22
    },
    hidingPlace: {
        character: "匸",
        meaning: "hiding place",
        index: 23
    },
    ten: {
        character: "十",
        meaning: "ten",
        index: 24
    },
    divination: {
        character: "卜",
        meaning: "divination",
        index: 25
    },
    insignia: {
        character: "卩",
        meaning: "insignia",
        index: 26
    },
    insigniaA: {
        character: "㔾",
        meaning: "insignia",
        index: 26
    },
    cliff: {
        character: "厂",
        meaning: "cliff",
        index: 27
    },
    private: {
        character: "厶",
        meaning: "private",
        index: 28
    },
    outstretchedHand: {
        character: "又",
        meaning: "outstretched hand",
        index: 29
    },
    outstretchedHandA: {
        character: "𠂇",
        meaning: "outstretched hand",
        index: 29
    },
    mouth: {
        character: "口",
        meaning: "mouth",
        index: 30
    },
    enclosure: {
        character: "囗",
        meaning: "enclosure",
        index: 31
    },
    earth: {
        character: "土",
        meaning: "earth",
        index: 32
    },
    warrior: {
        character: "士",
        meaning: "warrior"
    },
    go: {
        character: "夂",
        meaning: "go"
    },
    goSlowly: {
        character: "夊",
        meaning: "go slowly"
    },
    evening: {
        character: "夕",
        meaning: "evening"
    },
    big: {
        character: "大",
        meaning: "big"
    },
    woman: {
        character: "女",
        meaning: "woman"
    },
    child: {
        character: "子",
        meaning: "child"
    },
    roof: {
        character: "宀",
        meaning: "roof"
    },
    inch: {
        character: "寸",
        meaning: "inch, held wrist"
    },
    small: {
        character: "小",
        meaning: "small"
    },
    smallA: {
        character: "⺌",
        meaning: "small"
    },
    smallB: {
        character: "⺍",
        meaning: "small"
    },
    hardTimeWalking: {
        character: "尢",
        meaning: "hard time walking"
    },
    hardTimeWalkingA: {
        character: "尣",
        meaning: "hard time walking"
    },
    corpse: {
        character: "尸",
        meaning: "corpse"
    },
    sprout: {
        character: "屮",
        meaning: "sprout"
    },
    mountain: {
        character: "山",
        meaning: "mountain"
    },
    river: {
        character: "巛",
        meaning: "river"
    },
    riverA: {
        character: "川",
        meaning: "river"
    },
    riverB: {
        character: "巜",
        meaning: "river"
    },
    worktool: {
        character: "工",
        meaning: "worktool"
    },
    oneself: {
        character: "己",
        meaning: "oneself"
    },
    kerchief: {
        character: "巾",
        meaning: "kerchief"
    },
    dry: {
        character: "干",
        meaning: "dry"
    },
    shortThread: {
        character: "幺",
        meaning: "short thread"
    },
    canopy: {
        character: "广",
        meaning: "canopy"
    },
    goingALongDistance: {
        character: "廴",
        meaning: "going a long distance"
    },
    bothHands: {
        character: "廾",
        meaning: "both hands"
    },
    stake: {
        character: "弋",
        meaning: "stake"
    },
    bow: {
        character: "弓",
        meaning: "bow"
    },
    snout: {
        character: "彐",
        meaning: "snout"
    },
    snoutA: {
        character: "彑",
        meaning: "snout"
    },
    bristle: {
        character: "彡",
        meaning: "bristle"
    },
    step: {
        character: "彳",
        meaning: "step"
    },
    heart: {
        character: "心",
        meaning: "heart"
    },
    heartA: {
        character: "忄",
        meaning: "heart"
    },
    heartB: {
        character: "⺗",
        meaning: "heart"
    },
    halberd: {
        character: "戈",
        meaning: "halberd"
    },
    door: {
        character: "戶",
        meaning: "door"
    },
    doorA: {
        character: "户",
        meaning: "door"
    },
    doorB: {
        character: "戸",
        meaning: "door"
    },
    hand: {
        character: "手",
        meaning: "hand"
    },
    handA: {
        character: "扌",
        meaning: "hand"
    },
    handB: {
        character: "龵",
        meaning: "hand"
    },
    branch: {
        character: "支",
        meaning: "branch"
    },
    tap: {
        character: "攴",
        meaning: "tap"
    },
    tapA: {
        character: "攵",
        meaning: "tap"
    },
    writing: {
        character: "文",
        meaning: "writing"
    },
    dipper: {
        character: "斗",
        meaning: "dipper"
    },
    axe: {
        character: "斤",
        meaning: "axe"
    },
    flag: {
        character: "方",
        meaning: "flag"
    },
    not: {
        character: "无",
        meaning: "not"
    },
    notA: {
        character: "旡",
        meaning: "not"
    },
    sun: {
        character: "日",
        meaning: "sun"
    },
    say: {
        character: "曰",
        meaning: "say"
    },
    moon: {
        character: "月",
        meaning: "moon"
    },
    tree: {
        character: "木",
        meaning: "tree"
    },
    personDoingSomething: {
        character: "欠",
        meaning: "person doing something"
    },
    stop: {
        character: "止",
        meaning: "stop"
    },
    death: {
        character: "歹",
        meaning: "death"
    },
    deathA: {
        character: "歺",
        meaning: "death"
    },
    weapon: {
        character: "殳",
        meaning: "weapon"
    },
    mother: {
        character: "毋",
        meaning: "mother"
    },
    motherA: {
        character: "母",
        meaning: "mother"
    },
    compare: {
        character: "比",
        meaning: "compare"
    },
    fur: {
        character: "毛",
        meaning: "fur"
    },
    clan: {
        character: "氏",
        meaning: "clan"
    },
    steam: {
        character: "气",
        meaning: "steam"
    },
    water: {
        character: "水",
        meaning: "water"
    },
    waterA: {
        character: "氺",
        meaning: "water"
    },
    waterB: {
        character: "氵",
        meaning: "water"
    },
    fire: {
        character: "火",
        meaning: "fire"
    },
    fireA: {
        character: "灬",
        meaning: "fire"
    },
    fingernail: {
        character: "爪",
        meaning: "fingernail"
    },
    fingernailA: {
        character: "爫",
        meaning: "fingernail"
    },
    father: {
        character: "父",
        meaning: "father"
    },
    various: {
        character: "爻",
        meaning: "various"
    },
    couch: {
        character: "爿",
        meaning: "couch"
    },
    couchA: {
        character: "丬",
        meaning: "couch"
    },
    fragment: {
        character: "片",
        meaning: "fragment"
    },
    tooth: {
        character: "牙",
        meaning: "tooth"
    },
    cow: {
        character: "牛",
        meaning: "cow"
    },
    cowA: {
        character: "牜",
        meaning: "cow"
    },
    cowB: {
        character: "⺧",
        meaning: "cow"
    },
    dog: {
        character: "犬",
        meaning: "dog"
    },
    dogA: {
        character: "犭",
        meaning: "dog"
    },
    profound: {
        character: "玄",
        meaning: "profound"
    },
    jade: {
        character: "玉",
        meaning: "jade"
    },
    jadeA: {
        character: "玊",
        meaning: "jade"
    },
    jadeB: {
        character: "王",
        meaning: "jade"
    },
    jadeC: {
        character: "⺩",
        meaning: "jade"
    },
    melon: {
        character: "瓜",
        meaning: "melon"
    },
    tile: {
        character: "瓦",
        meaning: "tile"
    },
    sweet: {
        character: "甘",
        meaning: "sweet"
    },
    life: {
        character: "生",
        meaning: "life"
    },
    use: {
        character: "用",
        meaning: "use"
    },
    field: {
        character: "田",
        meaning: "field"
    },
    rollOfCloth: {
        character: "疋",
        meaning: "roll of cloth"
    },
    rollOfClothA: {
        character: "⺪",
        meaning: "roll of cloth"
    },
    sickness: {
        character: "疒",
        meaning: "sickness"
    },
    bothFeet: {
        character: "癶",
        meaning: "both feet"
    },
    white: {
        character: "白",
        meaning: "white"
    },
    skinning: {
        character: "皮",
        meaning: "skinning"
    },
    dish: {
        character: "皿",
        meaning: "dish"
    },
    eye: {
        character: "目",
        meaning: "eye"
    },
    spear: {
        character: "矛",
        meaning: "spear"
    },
    arrow: {
        character: "矢",
        meaning: "arrow"
    },
    stone: {
        character: "石",
        meaning: "stone"
    },
    altar: {
        character: "示",
        meaning: "altar"
    },
    altarA: {
        character: "礻",
        meaning: "altar"
    },
    animalTracks: {
        character: "禸",
        meaning: "animal tracks"
    },
    grain: {
        character: "禾",
        meaning: "grain"
    },
    cave: {
        character: "穴",
        meaning: "cave"
    },
    standing: {
        character: "立",
        meaning: "standing"
    },
    bamboo: {
        character: "竹",
        meaning: "bamboo"
    },
    bambooA: {
        character: "⺮",
        meaning: "bamboo"
    },
    rice: {
        character: "米",
        meaning: "rice"
    },
    thread: {
        character: "糸",
        meaning: "thread"
    },
    threadA: {
        character: "糹",
        meaning: "thread"
    },
    jar: {
        character: "缶",
        meaning: "jar"
    },
    net: {
        character: "网",
        meaning: "net"
    },
    netA: {
        character: "罒",
        meaning: "net"
    },
    netB: {
        character: "罓",
        meaning: "net"
    },
    netC: {
        character: "⺳",
        meaning: "net"
    },
    sheep: {
        character: "羊",
        meaning: "sheep"
    },
    sheepA: {
        character: "⺶",
        meaning: "sheep"
    },
    sheepB: {
        character: "⺷",
        meaning: "sheep"
    },
    feather: {
        character: "羽",
        meaning: "feather"
    },
    old: {
        character: "老",
        meaning: "old"
    },
    oldA: {
        character: "耂",
        meaning: "old"
    },
    sideburns: {
        character: "而",
        meaning: "sideburns"
    },
    plow: {
        character: "耒",
        meaning: "plow"
    },
    ear: {
        character: "耳",
        meaning: "ear"
    },
    writingInstrument: {
        character: "聿",
        meaning: "writing instrument"
    },
    writingInstrumentA: {
        character: "⺻",
        meaning: "writing instrument"
    },
    meat: {
        character: "肉",
        meaning: "meat"
    },
    meatA: {
        character: "⺼",
        meaning: "meat"
    },
    servant: {
        character: "臣",
        meaning: "servant"
    },
    nose: {
        character: "自",
        meaning: "nose"
    },
    arrive: {
        character: "至",
        meaning: "arrive"
    },
    millstone: {
        character: "臼",
        meaning: "millstone"
    },
    tongue: {
        character: "舌",
        meaning: "tongue"
    },
    oppose: {
        character: "舛",
        meaning: "oppose"
    },
    boat: {
        character: "舟",
        meaning: "boat"
    },
    stopping: {
        character: "艮",
        meaning: "stopping"
    },
    facialAppearance: {
        character: "色",
        meaning: "facial appearance"
    },
    grass: {
        character: "艸",
        meaning: "grass"
    },
    grassA: {
        character: "艹",
        meaning: "grass"
    },
    tiger: {
        character: "虍",
        meaning: "tiger"
    },
    insect: {
        character: "虫",
        meaning: "insect"
    },
    blood: {
        character: "血",
        meaning: "blood"
    },
    highway: {
        character: "行",
        meaning: "highway, travel"
    },
    clothes: {
        character: "衣",
        meaning: "clothes"
    },
    clothesA: {
        character: "衤",
        meaning: "clothes"
    },
    west: {
        character: "襾",
        meaning: "west"
    },
    westA: {
        character: "西",
        meaning: "west"
    },
    westB: {
        character: "覀",
        meaning: "west"
    },
    see: {
        character: "見",
        meaning: "see"
    },
    animalHorn: {
        character: "角",
        meaning: "animal horn"
    },
    speech: {
        character: "言",
        meaning: "speech"
    },
    speechA: {
        character: "訁",
        meaning: "speech"
    },
    valley: {
        character: "谷",
        meaning: "valley"
    },
    goblet: {
        character: "豆",
        meaning: "goblet, beanstalks"
    },
    pig: {
        character: "豕",
        meaning: "pig"
    },
    wildAnimal: {
        character: "豸",
        meaning: "wild animal"
    },
    shell: {
        character: "貝",
        meaning: "shell"
    },
    red: {
        character: "赤",
        meaning: "red"
    },
    run: {
        character: "走",
        meaning: "run"
    },
    runA: {
        character: "赱",
        meaning: "run"
    },
    foot: {
        character: "足",
        meaning: "foot"
    },
    footA: {
        character: "⻊",
        meaning: "foot"
    },
    body: {
        character: "身",
        meaning: "body"
    },
    cart: {
        character: "車",
        meaning: "cart"
    },
    crime: {
        character: "辛",
        meaning: "crime, bitter"
    },
    farmingHoe: {
        character: "辰",
        meaning: "farming hoe"
    },
    walk: {
        character: "辵",
        meaning: "walk"
    },
    walkA: {
        character: "辶",
        meaning: "walk"
    },
    walkB: {
        character: "⻌",
        meaning: "walk"
    },
    city: {
        character: "邑",
        meaning: "city"
    },
    cityA: {
        character: "阝",
        meaning: "city, mound"
    },
    alcohol: {
        character: "酉",
        meaning: "alcohol"
    },
    discern: {
        character: "釆",
        meaning: "discern"
    },
    village: {
        character: "里",
        meaning: "village"
    },
    gold: {
        character: "金",
        meaning: "gold, metal"
    },
    goldA: {
        character: "釒",
        meaning: "gold, metal"
    },
    long: {
        character: "長",
        meaning: "long"
    },
    longA: {
        character: "镸",
        meaning: "long"
    },
    gate: {
        character: "門",
        meaning: "gate"
    },
    mound: {
        character: "阜",
        meaning: "mound"
    },
    chaseAndSeize: {
        character: "隶",
        meaning: "chase and seize"
    },
    shortTailedBird: {
        character: "隹",
        meaning: "short-tailed bird"
    },
    rain: {
        character: "雨",
        meaning: "rain"
    },
    blue: {
        character: "青",
        meaning: "blue, green"
    },
    blueA: {
        character: "靑",
        meaning: "blue, green"
    },
    wrong: {
        character: "非",
        meaning: "wrong"
    },
    face: {
        character: "面",
        meaning: "face"
    },
    faceA: {
        character: "靣",
        meaning: "face"
    },
    leather: {
        character: "革",
        meaning: "leather"
    },
    defend: {
        character: "韋",
        meaning: "defend, tanned leather"
    },
    leek: {
        character: "韭",
        meaning: "leek"
    },
    sound: {
        character: "音",
        meaning: "sound"
    },
    noggin: {
        character: "頁",
        meaning: "noggin"
    },
    wind: {
        character: "風",
        meaning: "wind"
    },
    windA: {
        character: "𠘨",
        meaning: "wind"
    },
    flying: {
        character: "飛",
        meaning: "flying"
    },
    eat: {
        character: "食",
        meaning: "eat"
    },
    eatA: {
        character: "飠",
        meaning: "eat"
    },
    head: {
        character: "首",
        meaning: "head"
    },
    aroma: {
        character: "香",
        meaning: "aroma"
    },
    horse: {
        character: "馬",
        meaning: "horse"
    },
    bone: {
        character: "骨",
        meaning: "bone"
    },
    tall: {
        character: "高",
        meaning: "tall"
    },
    tallA: {
        character: "髙",
        meaning: "tall"
    },
    longHair: {
        character: "髟",
        meaning: "long hair"
    },
    fight: {
        character: "鬥",
        meaning: "fight"
    },
    ceremonialWine: {
        character: "鬯",
        meaning: "ceremonial wine"
    },
    cauldron: {
        character: "鬲",
        meaning: "cauldron"
    },
    ghostsAndGoblins: {
        character: "鬼",
        meaning: "ghosts and goblins"
    },
    fish: {
        character: "魚",
        meaning: "fish"
    },
    bird: {
        character: "鳥",
        meaning: "bird"
    },
    salt: {
        character: "鹵",
        meaning: "salt"
    },
    deer: {
        character: "鹿",
        meaning: "deer"
    },
    wheat: {
        character: "麥",
        meaning: "wheat"
    },
    wheatA: {
        character: "麦",
        meaning: "wheat"
    },
    hemp: {
        character: "麻",
        meaning: "hemp"
    },
    yellow: {
        character: "黃",
        meaning: "yellow"
    },
    yellowA: {
        character: "黄",
        meaning: "yellow"
    },
    millet: {
        character: "黍",
        meaning: "millet"
    },
    black: {
        character: "黑",
        meaning: "black"
    },
    blackA: {
        character: "黒",
        meaning: "black"
    },
    embroidery: {
        character: "黹",
        meaning: "embroidery"
    },
    frog: {
        character: "黽",
        meaning: "frog"
    },
    threeLeggedCauldron: {
        character: "鼎",
        meaning: "three-legged cauldron"
    },
    drum: {
        character: "鼓",
        meaning: "drum"
    },
    rat: {
        character: "鼠",
        meaning: "rat"
    },
    sniff: {
        character: "鼻",
        meaning: "sniff"
    },
    uniformity: {
        character: "齊",
        meaning: "uniformity"
    },
    uniformityA: {
        character: "斉",
        meaning: "uniformity"
    },
    teething: {
        character: "齒",
        meaning: "teething"
    },
    teethingA: {
        character: "歯",
        meaning: "teething"
    },
    dragon: {
        character: "龍",
        meaning: "dragon"
    },
    dragonA: {
        character: "竜",
        meaning: "dragon"
    },
    turtle: {
        character: "龜",
        meaning: "turtle"
    },
    turtleA: {
        character: "亀",
        meaning: "turtle"
    },
    panFlute: {
        character: "龠",
        meaning: "pan flute"
    }
}