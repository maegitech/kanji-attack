var questions = [];
var count = [0, "/", 0];
var toggle = true;

var radicals = {
    placeholder1: {
        row: 1
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
    second: {
        character: "乙",
        altCharacterA: "⺄",
        altCharacterB: "乚",
        meaning: "second",
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
        altCharacterA: "亻",
        altCharacterB: "𠆢",
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
    eight: {
        character: "八",
        meaning: "eight",
        index: 12
    },
    wide: {
        character: "冂",
        meaning: "wide",
        index: 13
    },
    clothCover: {
        character: "冖",
        meaning: "cloth cover",
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
    placeholder2: {
        row: 2
    },
    container: {
        character: "凵",
        meaning: "container",
        index: 17
    },
    knife: {
        character: "刀",
        altCharacterA: "刂",
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
    box: {
        character: "匕",
        meaning: "box",
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
        altCharacterA: "㔾",
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
    again: {
        character: "又",
        altCharacterA: "𠂇",
        meaning: "again",
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
    placeholder3: {
        row: 3
    },
    warrior: {
        character: "士",
        meaning: "warrior",
        index: 33
    },
    go: {
        character: "夂",
        meaning: "go",
        index: 34
    },
    goSlowly: {
        character: "夊",
        meaning: "go slowly",
        index: 35
    },
    evening: {
        character: "夕",
        meaning: "evening",
        index: 36
    },
    big: {
        character: "大",
        meaning: "big",
        index: 37
    },
    woman: {
        character: "女",
        meaning: "woman",
        index: 38
    },
    child: {
        character: "子",
        meaning: "child",
        index: 39
    },
    roof: {
        character: "宀",
        meaning: "roof",
        index: 40
    },
    inch: {
        character: "寸",
        meaning: "inch, held wrist",
        index: 41
    },
    small: {
        character: "小",
        altCharacterA: "⺌",
        altCharacterB: "⺍",
        meaning: "small",
        index: 42
    },
    lame: {
        character: "尢",
        altCharacterA: "尣",
        meaning: "lame",
        index: 43
    },
    corpse: {
        character: "尸",
        meaning: "corpse",
        index: 44
    },
    sprout: {
        character: "屮",
        meaning: "sprout",
        index: 45
    },
    mountain: {
        character: "山",
        meaning: "mountain",
        index: 46
    },
    river: {
        character: "巛",
        altCharacterA: "川",
        altCharacterB: "巜",
        meaning: "river",
        index: 47
    },
    work: {
        character: "工",
        meaning: "work",
        index: 48
    },
    placeholder4: {
        row: 4
    },
    oneself: {
        character: "己",
        meaning: "oneself",
        index: 49
    },
    turban: {
        character: "巾",
        meaning: "turban",
        index: 50
    },
    dry: {
        character: "干",
        meaning: "dry",
        index: 51
    },
    shortThread: {
        character: "幺",
        meaning: "short thread",
        index: 52
    },
    canopy: {
        character: "广",
        meaning: "canopy",
        index: 53
    },
    longStride: {
        character: "廴",
        meaning: "long stride",
        index: 54
    },
    bothHands: {
        character: "廾",
        meaning: "both hands",
        index: 55
    },
    shoot: {
        character: "弋",
        meaning: "shoot",
        index: 56
    },
    bow: {
        character: "弓",
        meaning: "bow",
        index: 57
    },
    snout: {
        character: "彐",
        altCharacterA: "彑",
        meaning: "snout",
        index: 58
    },
    bristle: {
        character: "彡",
        meaning: "bristle",
        index: 59
    },
    step: {
        character: "彳",
        meaning: "step",
        index: 60
    },
    heart: {
        character: "心",
        altCharacterA: "忄",
        altCharacterB: "⺗",
        meaning: "heart",
        index: 61
    },
    halberd: {
        character: "戈",
        meaning: "halberd",
        index: 62
    },
    door: {
        character: "戶",
        altCharacterA: "户",
        altCharacterB: "戸",
        meaning: "door",
        index: 63
    },
    hand: {
        character: "手",
        altCharacterA: "扌",
        altCharacterB: "龵",
        meaning: "hand",
        index: 64
    },
    placeholder5: {
        row: 5
    },
    branch: {
        character: "支",
        meaning: "branch",
        index: 65
    },
    tap: {
        character: "攴",
        altCharacterA: "攵",
        meaning: "tap",
        index: 66
    },
    script: {
        character: "文",
        meaning: "script",
        index: 67
    },
    dipper: {
        character: "斗",
        meaning: "dipper",
        index: 68
    },
    axe: {
        character: "斤",
        meaning: "axe",
        index: 69
    },
    square: {
        character: "方",
        meaning: "square",
        index: 70
    },
    not: {
        character: "无",
        altCharacterA: "旡",
        meaning: "not",
        index: 71
    },
    sun: {
        character: "日",
        meaning: "sun",
        index: 72
    },
    say: {
        character: "曰",
        meaning: "say",
        index: 73
    },
    moon: {
        character: "月",
        meaning: "moon",
        index: 74
    },
    tree: {
        character: "木",
        meaning: "tree",
        index: 75
    },
    lack: {
        character: "欠",
        meaning: "lack",
        index: 76
    },
    stop: {
        character: "止",
        meaning: "stop",
        index: 77
    },
    death: {
        character: "歹",
        altCharacterA: "歺",
        meaning: "death",
        index: 78
    },
    weapon: {
        character: "殳",
        meaning: "weapon",
        index: 79
    },
    mother: {
        character: "毋",
        altCharacterA: "母",
        meaning: "mother",
        index: 80
    },
    placeholder6: {
        row: 6
    },
    compare: {
        character: "比",
        meaning: "compare",
        index: 81
    },
    fur: {
        character: "毛",
        meaning: "fur",
        index: 82
    },
    clan: {
        character: "氏",
        meaning: "clan",
        index: 83
    },
    steam: {
        character: "气",
        meaning: "steam",
        index: 84
    },
    water: {
        character: "水",
        altCharacterA: "氺",
        altCharacterB: "氵",
        meaning: "water",
        index: 85
    },
    fire: {
        character: "火",
        altCharacterA: "灬",
        meaning: "fire",
        index: 86
    },
    claw: {
        character: "爪",
        altCharacterA: "爫",
        meaning: "claw",
        index: 87
    },
    father: {
        character: "父",
        meaning: "father",
        index: 88
    },
    trigrams: {
        character: "爻",
        meaning: "trigrams",
        index: 89
    },
    splitWood: {
        character: "爿",
        altCharacterA: "丬",
        meaning: "split wood",
        index: 90
    },
    slice: {
        character: "片",
        meaning: "slice",
        index: 91
    },
    fang: {
        character: "牙",
        meaning: "fang",
        index: 92
    },
    cow: {
        character: "牛",
        altCharacterA: "牜",
        altCharacterB: "⺧",
        meaning: "cow",
        index: 93
    },
    dog: {
        character: "犬",
        altCharacterB: "犭",
        meaning: "dog",
        index: 94
    },
    profound: {
        character: "玄",
        meaning: "profound",
        index: 95
    },
    jade: {
        character: "玉",
        altCharacterA: "玊",
        altCharacterB: "王",
        altCharacterC: "⺩",
        meaning: "jade",
        index: 96
    },
    placeholder7: {
        row: 7
    },
    melon: {
        character: "瓜",
        meaning: "melon",
        index: 97
    },
    tile: {
        character: "瓦",
        meaning: "tile",
        index: 98
    },
    sweet: {
        character: "甘",
        meaning: "sweet",
        index: 99
    },
    life: {
        character: "生",
        meaning: "life",
        index: 100
    },
    use: {
        character: "用",
        meaning: "use",
        index: 101
    },
    field: {
        character: "田",
        meaning: "field",
        index: 102
    },
    boltOfCloth: {
        character: "疋",
        altCharacterA: "⺪",
        meaning: "bolt of cloth",
        index: 103
    },
    sickness: {
        character: "疒",
        meaning: "sickness",
        index: 104
    },
    bothFeet: {
        character: "癶",
        meaning: "both feet",
        index: 105
    },
    white: {
        character: "白",
        meaning: "white",
        index: 106
    },
    skin: {
        character: "皮",
        meaning: "skin",
        index: 107
    },
    dish: {
        character: "皿",
        meaning: "dish",
        index: 108
    },
    eye: {
        character: "目",
        meaning: "eye",
        index: 109
    },
    spear: {
        character: "矛",
        meaning: "spear",
        index: 110
    },
    arrow: {
        character: "矢",
        meaning: "arrow",
        index: 111
    },
    stone: {
        character: "石",
        meaning: "stone",
        index: 112
    },
    placeholder8: {
        row: 8
    },
    spirit: {
        character: "示",
        altCharacterA: "礻",
        meaning: "spirit",
        index: 113
    },
    track: {
        character: "禸",
        meaning: "track",
        index: 114
    },
    grain: {
        character: "禾",
        meaning: "grain",
        index: 115
    },
    cave: {
        character: "穴",
        meaning: "cave",
        index: 116
    },
    stand: {
        character: "立",
        meaning: "stand",
        index: 117
    },
    bamboo: {
        character: "竹",
        altCharacterA: "⺮",
        meaning: "bamboo",
        index: 118
    },
    rice: {
        character: "米",
        meaning: "rice",
        index: 119
    },
    silk: {
        character: "糸",
        altCharacterA: "糹",
        meaning: "silk",
        index: 120
    },
    jar: {
        character: "缶",
        meaning: "jar",
        index: 121
    },
    net: {
        character: "网",
        altCharacterA: "罒",
        altCharacterB: "罓",
        altCharacterC: "⺳",
        meaning: "net",
        index: 122
    },
    sheep: {
        character: "羊",
        altCharacterA: "⺶",
        altCharacterB: "⺷",
        meaning: "sheep",
        index: 123
    },
    feather: {
        character: "羽",
        meaning: "feather",
        index: 124
    },
    old: {
        character: "老",
        altCharacterA: "耂",
        meaning: "old",
        index: 125
    },
    and: {
        character: "而",
        meaning: "and",
        index: 126
    },
    plow: {
        character: "耒",
        meaning: "plow",
        index: 127
    },
    ear: {
        character: "耳",
        meaning: "ear",
        index: 128
    },
    placeholder9: {
        row: 9
    },
    brush: {
        character: "聿",
        altCharacterA: "⺻",
        meaning: "brush",
        index: 129
    },
    meat: {
        character: "肉",
        altCharacterA: "⺼",
        meaning: "meat",
        index: 130
    },
    minister: {
        character: "臣",
        meaning: "minister",
        index: 131
    },
    self: {
        character: "自",
        meaning: "self",
        index: 132
    },
    arrive: {
        character: "至",
        meaning: "arrive",
        index: 133
    },
    mortar: {
        character: "臼",
        meaning: "mortar",
        index: 134
    },
    tongue: {
        character: "舌",
        meaning: "tongue",
        index: 135
    },
    oppose: {
        character: "舛",
        meaning: "oppose",
        index: 136
    },
    boat: {
        character: "舟",
        meaning: "boat",
        index: 137
    },
    stopping: {
        character: "艮",
        meaning: "stopping",
        index: 138
    },
    color: {
        character: "色",
        meaning: "color",
        index: 139
    },
    grass: {
        character: "艸",
        altCharacterA: "艹",
        meaning: "grass",
        index: 140
    },
    tiger: {
        character: "虍",
        meaning: "tiger",
        index: 141
    },
    insect: {
        character: "虫",
        meaning: "insect",
        index: 142
    },
    blood: {
        character: "血",
        meaning: "blood",
        index: 143
    },
    walkEnclosure: {
        character: "行",
        meaning: "walk enclosure",
        index: 144
    },
    placeholder10: {
        row: 10
    },
    clothes: {
        character: "衣",
        altCharacterA: "衤",
        meaning: "clothes",
        index: 145
    },
    cover: {
        character: "襾",
        altCharacterA: "西",
        altCharacterB: "覀",
        meaning: "cover",
        index: 146
    },
    see: {
        character: "見",
        meaning: "see",
        index: 147
    },
    horn: {
        character: "角",
        meaning: "horn",
        index: 148
    },
    speech: {
        character: "言",
        altCharacterA: "訁",
        meaning: "speech",
        index: 149
    },
    valley: {
        character: "谷",
        meaning: "valley",
        index: 150
    },
    bean: {
        character: "豆",
        meaning: "bean",
        index: 151
    },
    pig: {
        character: "豕",
        meaning: "pig",
        index: 152
    },
    badger: {
        character: "豸",
        meaning: "badger",
        index: 153
    },
    shell: {
        character: "貝",
        meaning: "shell",
        index: 154
    },
    red: {
        character: "赤",
        meaning: "red",
        index: 155
    },
    run: {
        character: "走",
        altCharacterA: "赱",
        meaning: "run",
        index: 156
    },
    foot: {
        character: "足",
        altCharacterA: "⻊",
        meaning: "foot",
        index: 157
    },
    body: {
        character: "身",
        meaning: "body",
        index: 158
    },
    cart: {
        character: "車",
        meaning: "cart",
        index: 159
    },
    bitter: {
        character: "辛",
        meaning: "bitter",
        index: 160
    },
    placeholder11: {
        row: 11
    },
    morning: {
        character: "辰",
        meaning: "morning",
        index: 161
    },
    walk: {
        character: "辵",
        altCharacterA: "辶",
        altCharacterB: "⻌",
        meaning: "walk",
        index: 162
    },
    city: {
        character: "邑",
        altCharacterA: "阝",
        meaning: "city",
        index: 163
    },
    alcohol: {
        character: "酉",
        meaning: "alcohol",
        index: 164
    },
    distinguish: {
        character: "釆",
        meaning: "distinguish",
        index: 165
    },
    village: {
        character: "里",
        meaning: "village",
        index: 166
    },
    gold: {
        character: "金",
        altCharacterA: "釒",
        meaning: "gold, metal",
        index: 167
    },
    long: {
        character: "長",
        altCharacterA: "镸",
        meaning: "long",
        index: 168
    },
    gate: {
        character: "門",
        meaning: "gate",
        index: 169
    },
    mound: {
        character: "阜",
        meaning: "mound",
        index: 170
    },
    slave: {
        character: "隶",
        meaning: "slave",
        index: 171
    },
    shortTailedBird: {
        character: "隹",
        meaning: "short-tailed bird",
        index: 172
    },
    rain: {
        character: "雨",
        meaning: "rain",
        index: 173
    },
    blue: {
        character: "青",
        altCharacterA: "靑",
        meaning: "blue",
        index: 174
    },
    wrong: {
        character: "非",
        meaning: "wrong",
        index: 175
    },
    face: {
        character: "面",
        altCharacterA: "靣",
        meaning: "face",
        index: 176
    },
    placeholder12: {
        row: 12
    },
    leather: {
        character: "革",
        meaning: "leather",
        index: 177
    },
    tannedLeather: {
        character: "韋",
        meaning: "tanned leather",
        index: 178
    },
    leek: {
        character: "韭",
        meaning: "leek",
        index: 179
    },
    sound: {
        character: "音",
        meaning: "sound",
        index: 180
    },
    leaf: {
        character: "頁",
        meaning: "leaf",
        index: 181
    },
    wind: {
        character: "風",
        altCharacterA: "𠘨",
        meaning: "wind",
        index: 182
    },
    fly: {
        character: "飛",
        meaning: "fly",
        index: 183
    },
    eat: {
        character: "食",
        altCharacterA: "飠",
        meaning: "eat",
        index: 184
    },
    head: {
        character: "首",
        meaning: "head",
        index: 185
    },
    fragrant: {
        character: "香",
        meaning: "fragrant",
        index: 186
    },
    horse: {
        character: "馬",
        meaning: "horse",
        index: 187
    },
    bone: {
        character: "骨",
        meaning: "bone",
        index: 188
    },
    tall: {
        character: "高",
        altCharacterA: "髙",
        meaning: "tall",
        index: 189
    },
    hair: {
        character: "髟",
        meaning: "hair",
        index: 190
    },
    fight: {
        character: "鬥",
        meaning: "fight",
        index: 191
    },
    sacrificialWine: {
        character: "鬯",
        meaning: "sacrificial wine",
        index: 192
    },
    placeholder13: {
        row: 13
    },
    cauldron: {
        character: "鬲",
        meaning: "cauldron",
        index: 193
    },
    ghost: {
        character: "鬼",
        meaning: "ghost",
        index: 194
    },
    fish: {
        character: "魚",
        meaning: "fish",
        index: 195
    },
    bird: {
        character: "鳥",
        meaning: "bird",
        index: 196
    },
    salt: {
        character: "鹵",
        meaning: "salt",
        index: 197
    },
    deer: {
        character: "鹿",
        meaning: "deer",
        index: 198
    },
    wheat: {
        character: "麥",
        altCharacterA: "麦",
        meaning: "wheat",
        index: 199
    },
    hemp: {
        character: "麻",
        meaning: "hemp",
        index: 200
    },
    yellow: {
        character: "黃",
        altCharacterA: "黄",
        meaning: "yellow",
        index: 201
    },
    millet: {
        character: "黍",
        meaning: "millet",
        index: 202
    },
    black: {
        character: "黑",
        altCharacterA: "黒",
        meaning: "black",
        index: 203
    },
    embroidery: {
        character: "黹",
        meaning: "embroidery",
        index: 204
    },
    frog: {
        character: "黽",
        meaning: "frog",
        index: 205
    },
    tripod: {
        character: "鼎",
        meaning: "drum",
        index: 206
    },
    drum: {
        character: "鼓",
        meaning: "drum",
        index: 207
    },
    rat: {
        character: "鼠",
        meaning: "rat",
        index: 208
    },
    placeholder14: {
        row: 14
    },
    nose: {
        character: "鼻",
        meaning: "nose",
        index: 209
    },
    even: {
        character: "齊",
        altCharacterA: "斉",
        meaning: "even",
        index: 210
    },
    tooth: {
        character: "齒",
        altCharacterA: "歯",
        meaning: "tooth",
        index: 211
    },
    dragon: {
        character: "龍",
        altCharacterA: "竜",
        meaning: "dragon",
        index: 212
    },
    turtle: {
        character: "龜",
        altCharacterA: "亀",
        meaning: "turtle",
        index: 213
    },
    flute: {
        character: "龠",
        meaning: "flute",
        index: 214
    }
}