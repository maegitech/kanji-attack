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
        meaning: "one"
    },
    line: {
        character: "丨",
        meaning: "line"
    },
    dot: {
        character: "丶",
        meaning: "dot"
    },
    slash: {
        character: "丿",
        meaning: "slash"
    },
    fishhook: {
        character: "乙",
        meaning: "fishhook"
    },
    hook: {
        character: "亅",
        meaning: "hook"
    },
    two: {
        character: "二",
        meaning: "two"
    },
    lid: {
        character: "亠",
        meaning: "lid"
    },
    man: {
        character: "人",
        meaning: "man"
    },
    legs: {
        character: "儿",
        meaning: "legs"
    },
    enter: {
        character: "入",
        meaning: "enter"
    },
    divide: {
        character: "八",
        meaning: "divide"
    },
    box: {
        character: "冂",
        meaning: "box"
    },
    cover: {
        character: "冖",
        meaning: "cover"
    },
    ice: {
        character: "冫",
        meaning: "ice"
    },
    table: {
        character: "几",
        meaning: "table"
    },
    container: {
        character: "凵",
        meaning: "container"
    },
    knife: {
        character: "刀",
        meaning: "knife"
    },
    power: {
        character: "力",
        meaning: "power"
    },
    wrap: {
        character: "勹",
        meaning: "wrap"
    },
    cane: {
        character: "匕",
        meaning: "cane"
    },
    casket: {
        character: "匚",
        meaning: "casket"
    },
    hidingPlace: {
        character: "匸",
        meaning: "hiding place"
    },
    ten: {
        character: "十",
        meaning: "ten"
    },
    divination: {
        character: "卜",
        meaning: "divination"
    },
    insignia: {
        character: "卩",
        meaning: "insignia"
    },
    cliff: {
        character: "厂",
        meaning: "cliff"
    },
    private: {
        character: "厶",
        meaning: "private"
    },
    outstretchedHand: {
        character: "又",
        meaning: "outstretched hand"
    },
    mouth: {
        character: "口",
        meaning: "mouth"
    },
    enclosure: {
        character: "囗",
        meaning: "enclosure"
    },
    earth: {
        character: "土",
        meaning: "earth"
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
    hardTimeWalking: {
        character: "尢",
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
    halberd: {
        character: "戈",
        meaning: "halberd"
    },
    door: {
        character: "戶",
        meaning: "door"
    },
    hand: {
        character: "手",
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
    weapon: {
        character: "殳",
        meaning: "weapon"
    },
    mother: {
        character: "毋",
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
    fire: {
        character: "火",
        meaning: "fire"
    },
    fingernail: {
        character: "爪",
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
    dog: {
        character: "犬",
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
        character: "生",毛
        meaning: "life"
    },
    use: {
        character: "用",毛
        meaning: "use"
    },
    field: {
        character: "田",毛
        meaning: "field"毛
    },
    rollOfCloth: {
        character: "疋",
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
    
}

/*
: {
        character: "",
        meaning: ""
    },

*/