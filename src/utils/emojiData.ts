export interface EmojiItem {
    emoji: string;
    name: string;
    v: string;
    toneEnabled: boolean;
    keywords: string[];
}

export interface EmojiCategory {
    title: string;
    icon: string; // Used for rendering category selector tabs
    data: EmojiItem[];
}

export const EMOJI_SECTIONS: EmojiCategory[] = [
    {
        "title": "smileys_emotion",
        "icon": "😀",
        "data": [
            {
                "emoji": "😀",
                "name": "grinning face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "grinning_face",
                    "face",
                    "smile",
                    "happy",
                    "joy",
                    ":D",
                    "grin"
                ]
            },
            {
                "emoji": "😃",
                "name": "grinning face with big eyes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "grinning_face_with_big_eyes",
                    "face",
                    "happy",
                    "joy",
                    "haha",
                    ":D",
                    ":)",
                    "smile",
                    "funny"
                ]
            },
            {
                "emoji": "😄",
                "name": "grinning face with smiling eyes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "grinning_face_with_smiling_eyes",
                    "face",
                    "happy",
                    "joy",
                    "funny",
                    "haha",
                    "laugh",
                    "like",
                    ":D",
                    ":)",
                    "smile"
                ]
            },
            {
                "emoji": "😁",
                "name": "beaming face with smiling eyes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "beaming_face_with_smiling_eyes",
                    "face",
                    "happy",
                    "smile",
                    "joy",
                    "kawaii"
                ]
            },
            {
                "emoji": "😆",
                "name": "grinning squinting face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "grinning_squinting_face",
                    "happy",
                    "joy",
                    "lol",
                    "satisfied",
                    "haha",
                    "face",
                    "glad",
                    "XD",
                    "laugh"
                ]
            },
            {
                "emoji": "😅",
                "name": "grinning face with sweat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "grinning_face_with_sweat",
                    "face",
                    "hot",
                    "happy",
                    "laugh",
                    "sweat",
                    "smile",
                    "relief"
                ]
            },
            {
                "emoji": "🤣",
                "name": "rolling on the floor laughing",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "rolling_on_the_floor_laughing",
                    "face",
                    "rolling",
                    "floor",
                    "laughing",
                    "lol",
                    "haha",
                    "rofl"
                ]
            },
            {
                "emoji": "😂",
                "name": "face with tears of joy",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "face_with_tears_of_joy",
                    "face",
                    "cry",
                    "tears",
                    "weep",
                    "happy",
                    "happytears",
                    "haha"
                ]
            },
            {
                "emoji": "🙂",
                "name": "slightly smiling face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "slightly_smiling_face",
                    "face",
                    "smile"
                ]
            },
            {
                "emoji": "🙃",
                "name": "upside-down face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "upside_down_face",
                    "face",
                    "flipped",
                    "silly",
                    "smile"
                ]
            },
            {
                "emoji": "😉",
                "name": "winking face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "winking_face",
                    "face",
                    "happy",
                    "mischievous",
                    "secret",
                    ";)",
                    "smile",
                    "eye"
                ]
            },
            {
                "emoji": "😊",
                "name": "smiling face with smiling eyes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "smiling_face_with_smiling_eyes",
                    "face",
                    "smile",
                    "happy",
                    "flushed",
                    "crush",
                    "embarrassed",
                    "shy",
                    "joy"
                ]
            },
            {
                "emoji": "😇",
                "name": "smiling face with halo",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "smiling_face_with_halo",
                    "face",
                    "angel",
                    "heaven",
                    "halo",
                    "innocent"
                ]
            },
            {
                "emoji": "🥰",
                "name": "smiling face with hearts",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "smiling_face_with_hearts",
                    "face",
                    "love",
                    "like",
                    "affection",
                    "valentines",
                    "infatuation",
                    "crush",
                    "hearts",
                    "adore"
                ]
            },
            {
                "emoji": "😍",
                "name": "smiling face with heart-eyes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "smiling_face_with_heart_eyes",
                    "face",
                    "love",
                    "like",
                    "affection",
                    "valentines",
                    "infatuation",
                    "crush",
                    "heart"
                ]
            },
            {
                "emoji": "🤩",
                "name": "star-struck",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "star_struck",
                    "face",
                    "smile",
                    "starry",
                    "eyes",
                    "grinning"
                ]
            },
            {
                "emoji": "😘",
                "name": "face blowing a kiss",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "face_blowing_a_kiss",
                    "face",
                    "love",
                    "like",
                    "affection",
                    "valentines",
                    "infatuation",
                    "kiss"
                ]
            },
            {
                "emoji": "😗",
                "name": "kissing face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "kissing_face",
                    "love",
                    "like",
                    "face",
                    "3",
                    "valentines",
                    "infatuation",
                    "kiss"
                ]
            },
            {
                "emoji": "☺️",
                "name": "smiling face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "smiling_face",
                    "face",
                    "blush",
                    "massage",
                    "happiness"
                ]
            },
            {
                "emoji": "😚",
                "name": "kissing face with closed eyes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "kissing_face_with_closed_eyes",
                    "face",
                    "love",
                    "like",
                    "affection",
                    "valentines",
                    "infatuation",
                    "kiss"
                ]
            },
            {
                "emoji": "😙",
                "name": "kissing face with smiling eyes",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "kissing_face_with_smiling_eyes",
                    "face",
                    "affection",
                    "valentines",
                    "infatuation",
                    "kiss"
                ]
            },
            {
                "emoji": "😋",
                "name": "face savoring food",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "face_savoring_food",
                    "happy",
                    "joy",
                    "tongue",
                    "smile",
                    "face",
                    "silly",
                    "yummy",
                    "nom",
                    "delicious",
                    "savouring"
                ]
            },
            {
                "emoji": "😛",
                "name": "face with tongue",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "face_with_tongue",
                    "face",
                    "prank",
                    "childish",
                    "playful",
                    "mischievous",
                    "smile",
                    "tongue"
                ]
            },
            {
                "emoji": "😜",
                "name": "winking face with tongue",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "winking_face_with_tongue",
                    "face",
                    "prank",
                    "childish",
                    "playful",
                    "mischievous",
                    "smile",
                    "wink",
                    "tongue"
                ]
            },
            {
                "emoji": "🤪",
                "name": "zany face",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "zany_face",
                    "face",
                    "goofy",
                    "crazy"
                ]
            },
            {
                "emoji": "😝",
                "name": "squinting face with tongue",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "squinting_face_with_tongue",
                    "face",
                    "prank",
                    "playful",
                    "mischievous",
                    "smile",
                    "tongue"
                ]
            },
            {
                "emoji": "🤑",
                "name": "money-mouth face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "money_mouth_face",
                    "face",
                    "rich",
                    "dollar",
                    "money"
                ]
            },
            {
                "emoji": "🤗",
                "name": "smiling face with open hands",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "hugging_face",
                    "face",
                    "smile",
                    "hug"
                ]
            },
            {
                "emoji": "🤭",
                "name": "face with hand over mouth",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "face_with_hand_over_mouth",
                    "face",
                    "whoops",
                    "shock",
                    "surprise"
                ]
            },
            {
                "emoji": "🤫",
                "name": "shushing face",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "shushing_face",
                    "face",
                    "quiet",
                    "shhh"
                ]
            },
            {
                "emoji": "🤔",
                "name": "thinking face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "thinking_face",
                    "face",
                    "hmmm",
                    "think",
                    "consider"
                ]
            },
            {
                "emoji": "🤐",
                "name": "zipper-mouth face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "zipper_mouth_face",
                    "face",
                    "sealed",
                    "zipper",
                    "secret"
                ]
            },
            {
                "emoji": "🤨",
                "name": "face with raised eyebrow",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "face_with_raised_eyebrow",
                    "face",
                    "distrust",
                    "scepticism",
                    "disapproval",
                    "disbelief",
                    "surprise"
                ]
            },
            {
                "emoji": "😐",
                "name": "neutral face",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "neutral_face",
                    "indifference",
                    "meh",
                    ":|",
                    "neutral"
                ]
            },
            {
                "emoji": "😑",
                "name": "expressionless face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "expressionless_face",
                    "face",
                    "indifferent",
                    "-_-",
                    "meh",
                    "deadpan"
                ]
            },
            {
                "emoji": "😶",
                "name": "face without mouth",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "face_without_mouth",
                    "face",
                    "hellokitty"
                ]
            },
            {
                "emoji": "😏",
                "name": "smirking face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "smirking_face",
                    "face",
                    "smile",
                    "mean",
                    "prank",
                    "smug",
                    "sarcasm"
                ]
            },
            {
                "emoji": "😒",
                "name": "unamused face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "unamused_face",
                    "indifference",
                    "bored",
                    "straight face",
                    "serious",
                    "sarcasm",
                    "unimpressed",
                    "skeptical",
                    "dubious",
                    "side_eye"
                ]
            },
            {
                "emoji": "🙄",
                "name": "face with rolling eyes",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "face_with_rolling_eyes",
                    "face",
                    "eyeroll",
                    "frustrated"
                ]
            },
            {
                "emoji": "😬",
                "name": "grimacing face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "grimacing_face",
                    "face",
                    "grimace",
                    "teeth"
                ]
            },
            {
                "emoji": "🤥",
                "name": "lying face",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "lying_face",
                    "face",
                    "lie",
                    "pinocchio"
                ]
            },
            {
                "emoji": "😌",
                "name": "relieved face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "relieved_face",
                    "face",
                    "relaxed",
                    "phew",
                    "massage",
                    "happiness"
                ]
            },
            {
                "emoji": "😔",
                "name": "pensive face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pensive_face",
                    "face",
                    "sad",
                    "depressed",
                    "upset"
                ]
            },
            {
                "emoji": "😪",
                "name": "sleepy face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sleepy_face",
                    "face",
                    "tired",
                    "rest",
                    "nap"
                ]
            },
            {
                "emoji": "🤤",
                "name": "drooling face",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "drooling_face",
                    "face"
                ]
            },
            {
                "emoji": "😴",
                "name": "sleeping face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "sleeping_face",
                    "face",
                    "tired",
                    "sleepy",
                    "night",
                    "zzz"
                ]
            },
            {
                "emoji": "😷",
                "name": "face with medical mask",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "face_with_medical_mask",
                    "face",
                    "sick",
                    "ill",
                    "disease",
                    "covid"
                ]
            },
            {
                "emoji": "🤒",
                "name": "face with thermometer",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "face_with_thermometer",
                    "sick",
                    "temperature",
                    "thermometer",
                    "cold",
                    "fever",
                    "covid"
                ]
            },
            {
                "emoji": "🤕",
                "name": "face with head-bandage",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "face_with_head_bandage",
                    "injured",
                    "clumsy",
                    "bandage",
                    "hurt"
                ]
            },
            {
                "emoji": "🤢",
                "name": "nauseated face",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "nauseated_face",
                    "face",
                    "vomit",
                    "gross",
                    "green",
                    "sick",
                    "throw up",
                    "ill"
                ]
            },
            {
                "emoji": "🤮",
                "name": "face vomiting",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "face_vomiting",
                    "face",
                    "sick"
                ]
            },
            {
                "emoji": "🤧",
                "name": "sneezing face",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "sneezing_face",
                    "face",
                    "gesundheit",
                    "sneeze",
                    "sick",
                    "allergy"
                ]
            },
            {
                "emoji": "🥵",
                "name": "hot face",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "hot_face",
                    "face",
                    "feverish",
                    "heat",
                    "red",
                    "sweating"
                ]
            },
            {
                "emoji": "🥶",
                "name": "cold face",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "cold_face",
                    "face",
                    "blue",
                    "freezing",
                    "frozen",
                    "frostbite",
                    "icicles"
                ]
            },
            {
                "emoji": "🥴",
                "name": "woozy face",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "woozy_face",
                    "face",
                    "dizzy",
                    "intoxicated",
                    "tipsy",
                    "wavy"
                ]
            },
            {
                "emoji": "😵",
                "name": "face with crossed-out eyes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dizzy_face",
                    "spent",
                    "unconscious",
                    "xox",
                    "dizzy"
                ]
            },
            {
                "emoji": "🤯",
                "name": "exploding head",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "exploding_head",
                    "face",
                    "shocked",
                    "mind",
                    "blown"
                ]
            },
            {
                "emoji": "🤠",
                "name": "cowboy hat face",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "cowboy_hat_face",
                    "face",
                    "cowgirl",
                    "hat"
                ]
            },
            {
                "emoji": "🥳",
                "name": "partying face",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "partying_face",
                    "face",
                    "celebration",
                    "woohoo"
                ]
            },
            {
                "emoji": "😎",
                "name": "smiling face with sunglasses",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "smiling_face_with_sunglasses",
                    "face",
                    "cool",
                    "smile",
                    "summer",
                    "beach",
                    "sunglass"
                ]
            },
            {
                "emoji": "🤓",
                "name": "nerd face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "nerd_face",
                    "face",
                    "nerdy",
                    "geek",
                    "dork"
                ]
            },
            {
                "emoji": "🧐",
                "name": "face with monocle",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "face_with_monocle",
                    "face",
                    "stuffy",
                    "wealthy"
                ]
            },
            {
                "emoji": "😕",
                "name": "confused face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "confused_face",
                    "face",
                    "indifference",
                    "huh",
                    "weird",
                    "hmmm",
                    ":/"
                ]
            },
            {
                "emoji": "😟",
                "name": "worried face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "worried_face",
                    "face",
                    "concern",
                    "nervous",
                    ":("
                ]
            },
            {
                "emoji": "🙁",
                "name": "slightly frowning face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "slightly_frowning_face",
                    "face",
                    "frowning",
                    "disappointed",
                    "sad",
                    "upset"
                ]
            },
            {
                "emoji": "☹️",
                "name": "frowning face",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "frowning_face",
                    "face",
                    "sad",
                    "upset",
                    "frown"
                ]
            },
            {
                "emoji": "😮",
                "name": "face with open mouth",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "face_with_open_mouth",
                    "face",
                    "surprise",
                    "impressed",
                    "wow",
                    "whoa",
                    ":O"
                ]
            },
            {
                "emoji": "😯",
                "name": "hushed face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "hushed_face",
                    "face",
                    "woo",
                    "shh"
                ]
            },
            {
                "emoji": "😲",
                "name": "astonished face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "astonished_face",
                    "face",
                    "xox",
                    "surprised",
                    "poisoned"
                ]
            },
            {
                "emoji": "😳",
                "name": "flushed face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flushed_face",
                    "face",
                    "blush",
                    "shy",
                    "flattered"
                ]
            },
            {
                "emoji": "🥺",
                "name": "pleading face",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "pleading_face",
                    "face",
                    "begging",
                    "mercy",
                    "cry",
                    "tears",
                    "sad",
                    "grievance"
                ]
            },
            {
                "emoji": "😦",
                "name": "frowning face with open mouth",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "frowning_face_with_open_mouth",
                    "face",
                    "aw",
                    "what"
                ]
            },
            {
                "emoji": "😧",
                "name": "anguished face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "anguished_face",
                    "face",
                    "stunned",
                    "nervous"
                ]
            },
            {
                "emoji": "😨",
                "name": "fearful face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fearful_face",
                    "face",
                    "scared",
                    "terrified",
                    "nervous"
                ]
            },
            {
                "emoji": "😰",
                "name": "anxious face with sweat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "anxious_face_with_sweat",
                    "face",
                    "nervous",
                    "sweat"
                ]
            },
            {
                "emoji": "😥",
                "name": "sad but relieved face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sad_but_relieved_face",
                    "face",
                    "phew",
                    "sweat",
                    "nervous"
                ]
            },
            {
                "emoji": "😢",
                "name": "crying face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "crying_face",
                    "face",
                    "tears",
                    "sad",
                    "depressed",
                    "upset",
                    ":'("
                ]
            },
            {
                "emoji": "😭",
                "name": "loudly crying face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "loudly_crying_face",
                    "face",
                    "cry",
                    "tears",
                    "sad",
                    "upset",
                    "depressed"
                ]
            },
            {
                "emoji": "😱",
                "name": "face screaming in fear",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "face_screaming_in_fear",
                    "face",
                    "munch",
                    "scared",
                    "omg"
                ]
            },
            {
                "emoji": "😖",
                "name": "confounded face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "confounded_face",
                    "face",
                    "confused",
                    "sick",
                    "unwell",
                    "oops",
                    ":S"
                ]
            },
            {
                "emoji": "😣",
                "name": "persevering face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "persevering_face",
                    "face",
                    "sick",
                    "no",
                    "upset",
                    "oops"
                ]
            },
            {
                "emoji": "😞",
                "name": "disappointed face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "disappointed_face",
                    "face",
                    "sad",
                    "upset",
                    "depressed",
                    ":("
                ]
            },
            {
                "emoji": "😓",
                "name": "downcast face with sweat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "downcast_face_with_sweat",
                    "face",
                    "hot",
                    "sad",
                    "tired",
                    "exercise"
                ]
            },
            {
                "emoji": "😩",
                "name": "weary face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "weary_face",
                    "face",
                    "tired",
                    "sleepy",
                    "sad",
                    "frustrated",
                    "upset"
                ]
            },
            {
                "emoji": "😫",
                "name": "tired face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tired_face",
                    "sick",
                    "whine",
                    "upset",
                    "frustrated"
                ]
            },
            {
                "emoji": "😤",
                "name": "face with steam from nose",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "face_with_steam_from_nose",
                    "face",
                    "gas",
                    "phew",
                    "proud",
                    "pride"
                ]
            },
            {
                "emoji": "😡",
                "name": "enraged face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pouting_face",
                    "angry",
                    "mad",
                    "hate",
                    "despise"
                ]
            },
            {
                "emoji": "😠",
                "name": "angry face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "angry_face",
                    "mad",
                    "face",
                    "annoyed",
                    "frustrated"
                ]
            },
            {
                "emoji": "🤬",
                "name": "face with symbols on mouth",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "face_with_symbols_on_mouth",
                    "face",
                    "swearing",
                    "cursing",
                    "cussing",
                    "profanity",
                    "expletive"
                ]
            },
            {
                "emoji": "😈",
                "name": "smiling face with horns",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "smiling_face_with_horns",
                    "devil",
                    "horns"
                ]
            },
            {
                "emoji": "👿",
                "name": "angry face with horns",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "angry_face_with_horns",
                    "devil",
                    "angry",
                    "horns"
                ]
            },
            {
                "emoji": "💀",
                "name": "skull",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "skull",
                    "dead",
                    "skeleton",
                    "creepy",
                    "death"
                ]
            },
            {
                "emoji": "☠️",
                "name": "skull and crossbones",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "skull_and_crossbones",
                    "poison",
                    "danger",
                    "deadly",
                    "scary",
                    "death",
                    "pirate",
                    "evil"
                ]
            },
            {
                "emoji": "💩",
                "name": "pile of poo",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pile_of_poo",
                    "hankey",
                    "shitface",
                    "fail",
                    "turd",
                    "shit"
                ]
            },
            {
                "emoji": "🤡",
                "name": "clown face",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "clown_face",
                    "face"
                ]
            },
            {
                "emoji": "👹",
                "name": "ogre",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ogre",
                    "monster",
                    "red",
                    "mask",
                    "halloween",
                    "scary",
                    "creepy",
                    "devil",
                    "demon",
                    "japanese",
                    "ogre"
                ]
            },
            {
                "emoji": "👺",
                "name": "goblin",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "goblin",
                    "red",
                    "evil",
                    "mask",
                    "monster",
                    "scary",
                    "creepy",
                    "japanese",
                    "goblin"
                ]
            },
            {
                "emoji": "👻",
                "name": "ghost",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ghost",
                    "halloween",
                    "spooky",
                    "scary"
                ]
            },
            {
                "emoji": "👽",
                "name": "alien",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "alien",
                    "UFO",
                    "paul",
                    "weird",
                    "outer_space"
                ]
            },
            {
                "emoji": "👾",
                "name": "alien monster",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "alien_monster",
                    "game",
                    "arcade",
                    "play"
                ]
            },
            {
                "emoji": "🤖",
                "name": "robot",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "robot",
                    "computer",
                    "machine",
                    "bot"
                ]
            },
            {
                "emoji": "😺",
                "name": "grinning cat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "grinning_cat",
                    "animal",
                    "cats",
                    "happy",
                    "smile"
                ]
            },
            {
                "emoji": "😸",
                "name": "grinning cat with smiling eyes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "grinning_cat_with_smiling_eyes",
                    "animal",
                    "cats",
                    "smile"
                ]
            },
            {
                "emoji": "😹",
                "name": "cat with tears of joy",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cat_with_tears_of_joy",
                    "animal",
                    "cats",
                    "haha",
                    "happy",
                    "tears"
                ]
            },
            {
                "emoji": "😻",
                "name": "smiling cat with heart-eyes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "smiling_cat_with_heart_eyes",
                    "animal",
                    "love",
                    "like",
                    "affection",
                    "cats",
                    "valentines",
                    "heart"
                ]
            },
            {
                "emoji": "😼",
                "name": "cat with wry smile",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cat_with_wry_smile",
                    "animal",
                    "cats",
                    "smirk"
                ]
            },
            {
                "emoji": "😽",
                "name": "kissing cat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "kissing_cat",
                    "animal",
                    "cats",
                    "kiss"
                ]
            },
            {
                "emoji": "🙀",
                "name": "weary cat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "weary_cat",
                    "animal",
                    "cats",
                    "munch",
                    "scared",
                    "scream"
                ]
            },
            {
                "emoji": "😿",
                "name": "crying cat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "crying_cat",
                    "animal",
                    "tears",
                    "weep",
                    "sad",
                    "cats",
                    "upset",
                    "cry"
                ]
            },
            {
                "emoji": "😾",
                "name": "pouting cat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pouting_cat",
                    "animal",
                    "cats"
                ]
            },
            {
                "emoji": "🙈",
                "name": "see-no-evil monkey",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "see_no_evil_monkey",
                    "monkey",
                    "animal",
                    "nature",
                    "haha"
                ]
            },
            {
                "emoji": "🙉",
                "name": "hear-no-evil monkey",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hear_no_evil_monkey",
                    "animal",
                    "monkey",
                    "nature"
                ]
            },
            {
                "emoji": "🙊",
                "name": "speak-no-evil monkey",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "speak_no_evil_monkey",
                    "monkey",
                    "animal",
                    "nature",
                    "omg"
                ]
            },
            {
                "emoji": "💌",
                "name": "love letter",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "love_letter",
                    "email",
                    "like",
                    "affection",
                    "envelope",
                    "valentines"
                ]
            },
            {
                "emoji": "💘",
                "name": "heart with arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "heart_with_arrow",
                    "love",
                    "like",
                    "heart",
                    "affection",
                    "valentines"
                ]
            },
            {
                "emoji": "💝",
                "name": "heart with ribbon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "heart_with_ribbon",
                    "love",
                    "valentines"
                ]
            },
            {
                "emoji": "💖",
                "name": "sparkling heart",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sparkling_heart",
                    "love",
                    "like",
                    "affection",
                    "valentines"
                ]
            },
            {
                "emoji": "💗",
                "name": "growing heart",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "growing_heart",
                    "like",
                    "love",
                    "affection",
                    "valentines",
                    "pink"
                ]
            },
            {
                "emoji": "💓",
                "name": "beating heart",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "beating_heart",
                    "love",
                    "like",
                    "affection",
                    "valentines",
                    "pink",
                    "heart"
                ]
            },
            {
                "emoji": "💞",
                "name": "revolving hearts",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "revolving_hearts",
                    "love",
                    "like",
                    "affection",
                    "valentines"
                ]
            },
            {
                "emoji": "💕",
                "name": "two hearts",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "two_hearts",
                    "love",
                    "like",
                    "affection",
                    "valentines",
                    "heart"
                ]
            },
            {
                "emoji": "💟",
                "name": "heart decoration",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "heart_decoration",
                    "purple-square",
                    "love",
                    "like"
                ]
            },
            {
                "emoji": "❣️",
                "name": "heart exclamation",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "heart_exclamation",
                    "decoration",
                    "love"
                ]
            },
            {
                "emoji": "💔",
                "name": "broken heart",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "broken_heart",
                    "sad",
                    "sorry",
                    "break",
                    "heart",
                    "heartbreak"
                ]
            },
            {
                "emoji": "❤️",
                "name": "red heart",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "red_heart",
                    "love",
                    "like",
                    "valentines"
                ]
            },
            {
                "emoji": "🧡",
                "name": "orange heart",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "orange_heart",
                    "love",
                    "like",
                    "affection",
                    "valentines"
                ]
            },
            {
                "emoji": "💛",
                "name": "yellow heart",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "yellow_heart",
                    "love",
                    "like",
                    "affection",
                    "valentines"
                ]
            },
            {
                "emoji": "💚",
                "name": "green heart",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "green_heart",
                    "love",
                    "like",
                    "affection",
                    "valentines"
                ]
            },
            {
                "emoji": "💙",
                "name": "blue heart",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "blue_heart",
                    "love",
                    "like",
                    "affection",
                    "valentines"
                ]
            },
            {
                "emoji": "💜",
                "name": "purple heart",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "purple_heart",
                    "love",
                    "like",
                    "affection",
                    "valentines"
                ]
            },
            {
                "emoji": "🖤",
                "name": "black heart",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "black_heart",
                    "evil"
                ]
            },
            {
                "emoji": "💋",
                "name": "kiss mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "kiss_mark",
                    "face",
                    "lips",
                    "love",
                    "like",
                    "affection",
                    "valentines"
                ]
            },
            {
                "emoji": "💯",
                "name": "hundred points",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hundred_points",
                    "score",
                    "perfect",
                    "numbers",
                    "century",
                    "exam",
                    "quiz",
                    "test",
                    "pass",
                    "hundred"
                ]
            },
            {
                "emoji": "💢",
                "name": "anger symbol",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "anger_symbol",
                    "angry",
                    "mad"
                ]
            },
            {
                "emoji": "💥",
                "name": "collision",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "collision",
                    "bomb",
                    "explode",
                    "explosion",
                    "collision",
                    "blown"
                ]
            },
            {
                "emoji": "💫",
                "name": "dizzy",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dizzy",
                    "star",
                    "sparkle",
                    "shoot",
                    "magic"
                ]
            },
            {
                "emoji": "💦",
                "name": "sweat droplets",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sweat_droplets",
                    "water",
                    "drip",
                    "oops"
                ]
            },
            {
                "emoji": "💨",
                "name": "dashing away",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dashing_away",
                    "wind",
                    "air",
                    "fast",
                    "shoo",
                    "fart",
                    "smoke",
                    "puff"
                ]
            },
            {
                "emoji": "🕳️",
                "name": "hole",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "hole",
                    "embarrassing"
                ]
            },
            {
                "emoji": "💬",
                "name": "speech balloon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "speech_balloon",
                    "bubble",
                    "words",
                    "message",
                    "talk",
                    "chatting"
                ]
            },
            {
                "emoji": "👁️‍🗨️",
                "name": "eye in speech bubble",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "eye_in_speech_bubble",
                    "info"
                ]
            },
            {
                "emoji": "🗨️",
                "name": "left speech bubble",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "left_speech_bubble",
                    "words",
                    "message",
                    "talk",
                    "chatting"
                ]
            },
            {
                "emoji": "🗯️",
                "name": "right anger bubble",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "right_anger_bubble",
                    "caption",
                    "speech",
                    "thinking",
                    "mad"
                ]
            },
            {
                "emoji": "💭",
                "name": "thought balloon",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "thought_balloon",
                    "bubble",
                    "cloud",
                    "speech",
                    "thinking",
                    "dream"
                ]
            },
            {
                "emoji": "💤",
                "name": "ZZZ",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "zzz",
                    "sleepy",
                    "tired",
                    "dream"
                ]
            }
        ]
    },
    {
        "title": "people_body",
        "icon": "🤚",
        "data": [
            {
                "emoji": "👋",
                "name": "waving hand",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "waving_hand",
                    "hands",
                    "gesture",
                    "goodbye",
                    "solong",
                    "farewell",
                    "hello",
                    "hi",
                    "palm"
                ]
            },
            {
                "emoji": "🤚",
                "name": "raised back of hand",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "raised_back_of_hand",
                    "fingers",
                    "raised",
                    "backhand"
                ]
            },
            {
                "emoji": "c",
                "name": "hand with fingers splayed",
                "v": "0.7",
                "toneEnabled": true,
                "keywords": [
                    "hand_with_fingers_splayed",
                    "hand",
                    "fingers",
                    "palm"
                ]
            },
            {
                "emoji": "✋",
                "name": "raised hand",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "raised_hand",
                    "fingers",
                    "stop",
                    "highfive",
                    "palm",
                    "ban"
                ]
            },
            {
                "emoji": "🖖",
                "name": "vulcan salute",
                "v": "1.0",
                "toneEnabled": true,
                "keywords": [
                    "vulcan_salute",
                    "hand",
                    "fingers",
                    "spock",
                    "star trek"
                ]
            },
            {
                "emoji": "👌",
                "name": "OK hand",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "ok_hand",
                    "fingers",
                    "limbs",
                    "perfect",
                    "ok",
                    "okay"
                ]
            },
            {
                "emoji": "✌️",
                "name": "victory hand",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "victory_hand",
                    "fingers",
                    "ohyeah",
                    "hand",
                    "peace",
                    "victory",
                    "two"
                ]
            },
            {
                "emoji": "🤞",
                "name": "crossed fingers",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "crossed_fingers",
                    "good",
                    "lucky"
                ]
            },
            {
                "emoji": "🤟",
                "name": "love-you gesture",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "love_you_gesture",
                    "hand",
                    "fingers",
                    "gesture"
                ]
            },
            {
                "emoji": "🤘",
                "name": "sign of the horns",
                "v": "1.0",
                "toneEnabled": true,
                "keywords": [
                    "sign_of_the_horns",
                    "hand",
                    "fingers",
                    "evil_eye",
                    "sign_of_horns",
                    "rock_on"
                ]
            },
            {
                "emoji": "🤙",
                "name": "call me hand",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "call_me_hand",
                    "hands",
                    "gesture",
                    "shaka"
                ]
            },
            {
                "emoji": "👈",
                "name": "backhand index pointing left",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "backhand_index_pointing_left",
                    "direction",
                    "fingers",
                    "hand",
                    "left"
                ]
            },
            {
                "emoji": "👉",
                "name": "backhand index pointing right",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "backhand_index_pointing_right",
                    "fingers",
                    "hand",
                    "direction",
                    "right"
                ]
            },
            {
                "emoji": "👆",
                "name": "backhand index pointing up",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "backhand_index_pointing_up",
                    "fingers",
                    "hand",
                    "direction",
                    "up"
                ]
            },
            {
                "emoji": "🖕",
                "name": "middle finger",
                "v": "1.0",
                "toneEnabled": true,
                "keywords": [
                    "middle_finger",
                    "hand",
                    "fingers",
                    "rude",
                    "middle",
                    "flipping"
                ]
            },
            {
                "emoji": "👇",
                "name": "backhand index pointing down",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "backhand_index_pointing_down",
                    "fingers",
                    "hand",
                    "direction",
                    "down"
                ]
            },
            {
                "emoji": "☝️",
                "name": "index pointing up",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "index_pointing_up",
                    "hand",
                    "fingers",
                    "direction",
                    "up"
                ]
            },
            {
                "emoji": "👍",
                "name": "thumbs up",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "thumbs_up",
                    "thumbsup",
                    "yes",
                    "awesome",
                    "good",
                    "agree",
                    "accept",
                    "cool",
                    "hand",
                    "like",
                    "+1"
                ]
            },
            {
                "emoji": "👎",
                "name": "thumbs down",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "thumbs_down",
                    "thumbsdown",
                    "no",
                    "dislike",
                    "hand",
                    "-1"
                ]
            },
            {
                "emoji": "✊",
                "name": "raised fist",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "raised_fist",
                    "fingers",
                    "hand",
                    "grasp"
                ]
            },
            {
                "emoji": "👊",
                "name": "oncoming fist",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "oncoming_fist",
                    "angry",
                    "violence",
                    "fist",
                    "hit",
                    "attack",
                    "hand"
                ]
            },
            {
                "emoji": "🤛",
                "name": "left-facing fist",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "left_facing_fist",
                    "hand",
                    "fistbump"
                ]
            },
            {
                "emoji": "🤜",
                "name": "right-facing fist",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "right_facing_fist",
                    "hand",
                    "fistbump"
                ]
            },
            {
                "emoji": "👏",
                "name": "clapping hands",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "clapping_hands",
                    "hands",
                    "praise",
                    "applause",
                    "congrats",
                    "yay"
                ]
            },
            {
                "emoji": "🙌",
                "name": "raising hands",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "raising_hands",
                    "gesture",
                    "hooray",
                    "yea",
                    "celebration",
                    "hands"
                ]
            },
            {
                "emoji": "👐",
                "name": "open hands",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "open_hands",
                    "fingers",
                    "butterfly",
                    "hands",
                    "open"
                ]
            },
            {
                "emoji": "🤲",
                "name": "palms up together",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "palms_up_together",
                    "hands",
                    "gesture",
                    "cupped",
                    "prayer"
                ]
            },
            {
                "emoji": "🤝",
                "name": "handshake",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "handshake",
                    "agreement",
                    "shake"
                ]
            },
            {
                "emoji": "🙏",
                "name": "folded hands",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "folded_hands",
                    "please",
                    "hope",
                    "wish",
                    "namaste",
                    "highfive",
                    "pray",
                    "thank you",
                    "thanks",
                    "appreciate"
                ]
            },
            {
                "emoji": "✍️",
                "name": "writing hand",
                "v": "0.7",
                "toneEnabled": true,
                "keywords": [
                    "writing_hand",
                    "lower_left_ballpoint_pen",
                    "stationery",
                    "write",
                    "compose"
                ]
            },
            {
                "emoji": "💅",
                "name": "nail polish",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "nail_polish",
                    "beauty",
                    "manicure",
                    "finger",
                    "fashion",
                    "nail"
                ]
            },
            {
                "emoji": "🤳",
                "name": "selfie",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "selfie",
                    "camera",
                    "phone"
                ]
            },
            {
                "emoji": "💪",
                "name": "flexed biceps",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "flexed_biceps",
                    "arm",
                    "flex",
                    "hand",
                    "summer",
                    "strong",
                    "biceps"
                ]
            },
            {
                "emoji": "🦵",
                "name": "leg",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "leg",
                    "kick",
                    "limb"
                ]
            },
            {
                "emoji": "🦶",
                "name": "foot",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "foot",
                    "kick",
                    "stomp"
                ]
            },
            {
                "emoji": "👂",
                "name": "ear",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "ear",
                    "face",
                    "hear",
                    "sound",
                    "listen"
                ]
            },
            {
                "emoji": "👃",
                "name": "nose",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "nose",
                    "smell",
                    "sniff"
                ]
            },
            {
                "emoji": "🧠",
                "name": "brain",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "brain",
                    "smart",
                    "intelligent"
                ]
            },
            {
                "emoji": "🦷",
                "name": "tooth",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "tooth",
                    "teeth",
                    "dentist"
                ]
            },
            {
                "emoji": "🦴",
                "name": "bone",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "bone",
                    "skeleton"
                ]
            },
            {
                "emoji": "👀",
                "name": "eyes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "eyes",
                    "look",
                    "watch",
                    "stalk",
                    "peek",
                    "see"
                ]
            },
            {
                "emoji": "👁️",
                "name": "eye",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "eye",
                    "face",
                    "look",
                    "see",
                    "watch",
                    "stare"
                ]
            },
            {
                "emoji": "👅",
                "name": "tongue",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tongue",
                    "mouth",
                    "playful"
                ]
            },
            {
                "emoji": "👄",
                "name": "mouth",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "mouth",
                    "mouth",
                    "kiss"
                ]
            },
            {
                "emoji": "👶",
                "name": "baby",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "baby",
                    "child",
                    "boy",
                    "girl",
                    "toddler"
                ]
            },
            {
                "emoji": "🧒",
                "name": "child",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "child",
                    "gender-neutral",
                    "young"
                ]
            },
            {
                "emoji": "👦",
                "name": "boy",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "boy",
                    "man",
                    "male",
                    "guy",
                    "teenager"
                ]
            },
            {
                "emoji": "👧",
                "name": "girl",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "girl",
                    "female",
                    "woman",
                    "teenager"
                ]
            },
            {
                "emoji": "🧑",
                "name": "person",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "person",
                    "gender-neutral",
                    "person"
                ]
            },
            {
                "emoji": "👱",
                "name": "person blond hair",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_blond_hair",
                    "hairstyle"
                ]
            },
            {
                "emoji": "👨",
                "name": "man",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "man",
                    "mustache",
                    "father",
                    "dad",
                    "guy",
                    "classy",
                    "sir",
                    "moustache"
                ]
            },
            {
                "emoji": "🧔",
                "name": "person beard",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "man_beard",
                    "person",
                    "bewhiskered"
                ]
            },
            {
                "emoji": "👨‍🦰",
                "name": "man red hair",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "man_red_hair",
                    "hairstyle"
                ]
            },
            {
                "emoji": "👨‍🦱",
                "name": "man curly hair",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "man_curly_hair",
                    "hairstyle"
                ]
            },
            {
                "emoji": "👨‍🦳",
                "name": "man white hair",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "man_white_hair",
                    "old",
                    "elder"
                ]
            },
            {
                "emoji": "👨‍🦲",
                "name": "man bald",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "man_bald",
                    "hairless"
                ]
            },
            {
                "emoji": "👩",
                "name": "woman",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "woman",
                    "female",
                    "girls",
                    "lady"
                ]
            },
            {
                "emoji": "👩‍🦰",
                "name": "woman red hair",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_red_hair",
                    "hairstyle"
                ]
            },
            {
                "emoji": "👩‍🦱",
                "name": "woman curly hair",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_curly_hair",
                    "hairstyle"
                ]
            },
            {
                "emoji": "👩‍🦳",
                "name": "woman white hair",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_white_hair",
                    "old",
                    "elder"
                ]
            },
            {
                "emoji": "👩‍🦲",
                "name": "woman bald",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_bald",
                    "hairless"
                ]
            },
            {
                "emoji": "👱‍♀️",
                "name": "woman blond hair",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_blond_hair",
                    "woman",
                    "female",
                    "girl",
                    "blonde",
                    "person"
                ]
            },
            {
                "emoji": "👱‍♂️",
                "name": "man blond hair",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_blond_hair",
                    "man",
                    "male",
                    "boy",
                    "blonde",
                    "guy",
                    "person"
                ]
            },
            {
                "emoji": "🧓",
                "name": "older person",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "older_person",
                    "human",
                    "elder",
                    "senior",
                    "gender-neutral"
                ]
            },
            {
                "emoji": "👴",
                "name": "old man",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "old_man",
                    "human",
                    "male",
                    "men",
                    "old",
                    "elder",
                    "senior"
                ]
            },
            {
                "emoji": "👵",
                "name": "old woman",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "old_woman",
                    "human",
                    "female",
                    "women",
                    "lady",
                    "old",
                    "elder",
                    "senior"
                ]
            },
            {
                "emoji": "🙍",
                "name": "person frowning",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_frowning",
                    "worried"
                ]
            },
            {
                "emoji": "🙍‍♂️",
                "name": "man frowning",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_frowning",
                    "male",
                    "boy",
                    "man",
                    "sad",
                    "depressed",
                    "discouraged",
                    "unhappy"
                ]
            },
            {
                "emoji": "🙍‍♀️",
                "name": "woman frowning",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_frowning",
                    "female",
                    "girl",
                    "woman",
                    "sad",
                    "depressed",
                    "discouraged",
                    "unhappy"
                ]
            },
            {
                "emoji": "🙎",
                "name": "person pouting",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_pouting",
                    "upset"
                ]
            },
            {
                "emoji": "🙎‍♂️",
                "name": "man pouting",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_pouting",
                    "male",
                    "boy",
                    "man"
                ]
            },
            {
                "emoji": "🙎‍♀️",
                "name": "woman pouting",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_pouting",
                    "female",
                    "girl",
                    "woman"
                ]
            },
            {
                "emoji": "🙅",
                "name": "person gesturing NO",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_gesturing_no",
                    "decline"
                ]
            },
            {
                "emoji": "🙅‍♂️",
                "name": "man gesturing NO",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_gesturing_no",
                    "male",
                    "boy",
                    "man",
                    "nope"
                ]
            },
            {
                "emoji": "🙅‍♀️",
                "name": "woman gesturing NO",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_gesturing_no",
                    "female",
                    "girl",
                    "woman",
                    "nope"
                ]
            },
            {
                "emoji": "🙆",
                "name": "person gesturing OK",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_gesturing_ok",
                    "agree"
                ]
            },
            {
                "emoji": "🙆‍♂️",
                "name": "man gesturing OK",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_gesturing_ok",
                    "men",
                    "boy",
                    "male",
                    "blue",
                    "human",
                    "man"
                ]
            },
            {
                "emoji": "🙆‍♀️",
                "name": "woman gesturing OK",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_gesturing_ok",
                    "women",
                    "girl",
                    "female",
                    "pink",
                    "human",
                    "woman"
                ]
            },
            {
                "emoji": "💁",
                "name": "person tipping hand",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_tipping_hand",
                    "information"
                ]
            },
            {
                "emoji": "💁‍♂️",
                "name": "man tipping hand",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_tipping_hand",
                    "male",
                    "boy",
                    "man",
                    "human",
                    "information"
                ]
            },
            {
                "emoji": "💁‍♀️",
                "name": "woman tipping hand",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_tipping_hand",
                    "female",
                    "girl",
                    "woman",
                    "human",
                    "information"
                ]
            },
            {
                "emoji": "🙋",
                "name": "person raising hand",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_raising_hand",
                    "question"
                ]
            },
            {
                "emoji": "🙋‍♂️",
                "name": "man raising hand",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_raising_hand",
                    "male",
                    "boy",
                    "man"
                ]
            },
            {
                "emoji": "🙋‍♀️",
                "name": "woman raising hand",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_raising_hand",
                    "female",
                    "girl",
                    "woman"
                ]
            },
            {
                "emoji": "🙇",
                "name": "person bowing",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_bowing",
                    "respectiful"
                ]
            },
            {
                "emoji": "🙇‍♂️",
                "name": "man bowing",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_bowing",
                    "man",
                    "male",
                    "boy"
                ]
            },
            {
                "emoji": "🙇‍♀️",
                "name": "woman bowing",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_bowing",
                    "woman",
                    "female",
                    "girl"
                ]
            },
            {
                "emoji": "🤦",
                "name": "person facepalming",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "person_facepalming",
                    "disappointed"
                ]
            },
            {
                "emoji": "🤦‍♂️",
                "name": "man facepalming",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_facepalming",
                    "man",
                    "male",
                    "boy",
                    "disbelief"
                ]
            },
            {
                "emoji": "🤦‍♀️",
                "name": "woman facepalming",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_facepalming",
                    "woman",
                    "female",
                    "girl",
                    "disbelief"
                ]
            },
            {
                "emoji": "🤷",
                "name": "person shrugging",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "person_shrugging",
                    "regardless"
                ]
            },
            {
                "emoji": "🤷‍♂️",
                "name": "man shrugging",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_shrugging",
                    "man",
                    "male",
                    "boy",
                    "confused",
                    "indifferent",
                    "doubt"
                ]
            },
            {
                "emoji": "🤷‍♀️",
                "name": "woman shrugging",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_shrugging",
                    "woman",
                    "female",
                    "girl",
                    "confused",
                    "indifferent",
                    "doubt"
                ]
            },
            {
                "emoji": "👨‍⚕️",
                "name": "man health worker",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_health_worker",
                    "doctor",
                    "nurse",
                    "therapist",
                    "healthcare",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍⚕️",
                "name": "woman health worker",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_health_worker",
                    "doctor",
                    "nurse",
                    "therapist",
                    "healthcare",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍🎓",
                "name": "man student",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_student",
                    "graduate",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍🎓",
                "name": "woman student",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_student",
                    "graduate",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍🏫",
                "name": "man teacher",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_teacher",
                    "instructor",
                    "professor",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍🏫",
                "name": "woman teacher",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_teacher",
                    "instructor",
                    "professor",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍⚖️",
                "name": "man judge",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_judge",
                    "justice",
                    "court",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍⚖️",
                "name": "woman judge",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_judge",
                    "justice",
                    "court",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍🌾",
                "name": "man farmer",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_farmer",
                    "rancher",
                    "gardener",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍🌾",
                "name": "woman farmer",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_farmer",
                    "rancher",
                    "gardener",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍🍳",
                "name": "man cook",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_cook",
                    "chef",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍🍳",
                "name": "woman cook",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_cook",
                    "chef",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍🔧",
                "name": "man mechanic",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_mechanic",
                    "plumber",
                    "man",
                    "human",
                    "wrench"
                ]
            },
            {
                "emoji": "👩‍🔧",
                "name": "woman mechanic",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_mechanic",
                    "plumber",
                    "woman",
                    "human",
                    "wrench"
                ]
            },
            {
                "emoji": "👨‍🏭",
                "name": "man factory worker",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_factory_worker",
                    "assembly",
                    "industrial",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍🏭",
                "name": "woman factory worker",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_factory_worker",
                    "assembly",
                    "industrial",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍💼",
                "name": "man office worker",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_office_worker",
                    "business",
                    "manager",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍💼",
                "name": "woman office worker",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_office_worker",
                    "business",
                    "manager",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍🔬",
                "name": "man scientist",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_scientist",
                    "biologist",
                    "chemist",
                    "engineer",
                    "physicist",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍🔬",
                "name": "woman scientist",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_scientist",
                    "biologist",
                    "chemist",
                    "engineer",
                    "physicist",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍💻",
                "name": "man technologist",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_technologist",
                    "coder",
                    "developer",
                    "engineer",
                    "programmer",
                    "software",
                    "man",
                    "human",
                    "laptop",
                    "computer"
                ]
            },
            {
                "emoji": "👩‍💻",
                "name": "woman technologist",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_technologist",
                    "coder",
                    "developer",
                    "engineer",
                    "programmer",
                    "software",
                    "woman",
                    "human",
                    "laptop",
                    "computer"
                ]
            },
            {
                "emoji": "👨‍🎤",
                "name": "man singer",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_singer",
                    "rockstar",
                    "entertainer",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍🎤",
                "name": "woman singer",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_singer",
                    "rockstar",
                    "entertainer",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍🎨",
                "name": "man artist",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_artist",
                    "painter",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍🎨",
                "name": "woman artist",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_artist",
                    "painter",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍✈️",
                "name": "man pilot",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_pilot",
                    "aviator",
                    "plane",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍✈️",
                "name": "woman pilot",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_pilot",
                    "aviator",
                    "plane",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍🚀",
                "name": "man astronaut",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_astronaut",
                    "space",
                    "rocket",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍🚀",
                "name": "woman astronaut",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_astronaut",
                    "space",
                    "rocket",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👨‍🚒",
                "name": "man firefighter",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_firefighter",
                    "fireman",
                    "man",
                    "human"
                ]
            },
            {
                "emoji": "👩‍🚒",
                "name": "woman firefighter",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_firefighter",
                    "fireman",
                    "woman",
                    "human"
                ]
            },
            {
                "emoji": "👮",
                "name": "police officer",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "police_officer",
                    "cop"
                ]
            },
            {
                "emoji": "👮‍♂️",
                "name": "man police officer",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_police_officer",
                    "man",
                    "police",
                    "law",
                    "legal",
                    "enforcement",
                    "arrest",
                    "911"
                ]
            },
            {
                "emoji": "👮‍♀️",
                "name": "woman police officer",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_police_officer",
                    "woman",
                    "police",
                    "law",
                    "legal",
                    "enforcement",
                    "arrest",
                    "911",
                    "female"
                ]
            },
            {
                "emoji": "🕵️",
                "name": "detective",
                "v": "0.7",
                "toneEnabled": true,
                "keywords": [
                    "detective",
                    "human",
                    "spy",
                    "detective"
                ]
            },
            {
                "emoji": "🕵️‍♂️",
                "name": "man detective",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_detective",
                    "crime"
                ]
            },
            {
                "emoji": "🕵️‍♀️",
                "name": "woman detective",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_detective",
                    "human",
                    "spy",
                    "detective",
                    "female",
                    "woman"
                ]
            },
            {
                "emoji": "💂",
                "name": "guard",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "guard",
                    "protect"
                ]
            },
            {
                "emoji": "💂‍♂️",
                "name": "man guard",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_guard",
                    "uk",
                    "gb",
                    "british",
                    "male",
                    "guy",
                    "royal"
                ]
            },
            {
                "emoji": "💂‍♀️",
                "name": "woman guard",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_guard",
                    "uk",
                    "gb",
                    "british",
                    "female",
                    "royal",
                    "woman"
                ]
            },
            {
                "emoji": "👷",
                "name": "construction worker",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "construction_worker",
                    "labor",
                    "build"
                ]
            },
            {
                "emoji": "👷‍♂️",
                "name": "man construction worker",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_construction_worker",
                    "male",
                    "human",
                    "wip",
                    "guy",
                    "build",
                    "construction",
                    "worker",
                    "labor"
                ]
            },
            {
                "emoji": "👷‍♀️",
                "name": "woman construction worker",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_construction_worker",
                    "female",
                    "human",
                    "wip",
                    "build",
                    "construction",
                    "worker",
                    "labor",
                    "woman"
                ]
            },
            {
                "emoji": "🤴",
                "name": "prince",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "prince",
                    "boy",
                    "man",
                    "male",
                    "crown",
                    "royal",
                    "king"
                ]
            },
            {
                "emoji": "👸",
                "name": "princess",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "princess",
                    "girl",
                    "woman",
                    "female",
                    "blond",
                    "crown",
                    "royal",
                    "queen"
                ]
            },
            {
                "emoji": "👳",
                "name": "person wearing turban",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_wearing_turban",
                    "headdress"
                ]
            },
            {
                "emoji": "👳‍♂️",
                "name": "man wearing turban",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_wearing_turban",
                    "male",
                    "indian",
                    "hinduism",
                    "arabs"
                ]
            },
            {
                "emoji": "👳‍♀️",
                "name": "woman wearing turban",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_wearing_turban",
                    "female",
                    "indian",
                    "hinduism",
                    "arabs",
                    "woman"
                ]
            },
            {
                "emoji": "👲",
                "name": "person with skullcap",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "man_with_skullcap",
                    "male",
                    "boy",
                    "chinese"
                ]
            },
            {
                "emoji": "🧕",
                "name": "woman with headscarf",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_with_headscarf",
                    "female",
                    "hijab",
                    "mantilla",
                    "tichel"
                ]
            },
            {
                "emoji": "🤵",
                "name": "person in tuxedo",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "man_in_tuxedo",
                    "couple",
                    "marriage",
                    "wedding",
                    "groom"
                ]
            },
            {
                "emoji": "👰",
                "name": "person with veil",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "bride_with_veil",
                    "couple",
                    "marriage",
                    "wedding",
                    "woman",
                    "bride"
                ]
            },
            {
                "emoji": "🤰",
                "name": "pregnant woman",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "pregnant_woman",
                    "baby"
                ]
            },
            {
                "emoji": "🤱",
                "name": "breast-feeding",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "breast_feeding",
                    "nursing",
                    "baby"
                ]
            },
            {
                "emoji": "👼",
                "name": "baby angel",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "baby_angel",
                    "heaven",
                    "wings",
                    "halo"
                ]
            },
            {
                "emoji": "🎅",
                "name": "Santa Claus",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "santa_claus",
                    "festival",
                    "man",
                    "male",
                    "xmas",
                    "father christmas"
                ]
            },
            {
                "emoji": "🤶",
                "name": "Mrs. Claus",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "mrs_claus",
                    "woman",
                    "female",
                    "xmas",
                    "mother christmas"
                ]
            },
            {
                "emoji": "🦸",
                "name": "superhero",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "superhero",
                    "marvel"
                ]
            },
            {
                "emoji": "🦸‍♂️",
                "name": "man superhero",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "man_superhero",
                    "man",
                    "male",
                    "good",
                    "hero",
                    "superpowers"
                ]
            },
            {
                "emoji": "🦸‍♀️",
                "name": "woman superhero",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_superhero",
                    "woman",
                    "female",
                    "good",
                    "heroine",
                    "superpowers"
                ]
            },
            {
                "emoji": "🦹",
                "name": "supervillain",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "supervillain",
                    "marvel"
                ]
            },
            {
                "emoji": "🦹‍♂️",
                "name": "man supervillain",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "man_supervillain",
                    "man",
                    "male",
                    "evil",
                    "bad",
                    "criminal",
                    "hero",
                    "superpowers"
                ]
            },
            {
                "emoji": "🦹‍♀️",
                "name": "woman supervillain",
                "v": "11.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_supervillain",
                    "woman",
                    "female",
                    "evil",
                    "bad",
                    "criminal",
                    "heroine",
                    "superpowers"
                ]
            },
            {
                "emoji": "🧙",
                "name": "mage",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "mage",
                    "magic"
                ]
            },
            {
                "emoji": "🧙‍♂️",
                "name": "man mage",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "man_mage",
                    "man",
                    "male",
                    "mage",
                    "sorcerer"
                ]
            },
            {
                "emoji": "🧙‍♀️",
                "name": "woman mage",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_mage",
                    "woman",
                    "female",
                    "mage",
                    "witch"
                ]
            },
            {
                "emoji": "🧚",
                "name": "fairy",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "fairy",
                    "wings",
                    "magical"
                ]
            },
            {
                "emoji": "🧚‍♂️",
                "name": "man fairy",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "man_fairy",
                    "man",
                    "male"
                ]
            },
            {
                "emoji": "🧚‍♀️",
                "name": "woman fairy",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_fairy",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🧛",
                "name": "vampire",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "vampire",
                    "blood",
                    "twilight"
                ]
            },
            {
                "emoji": "🧛‍♂️",
                "name": "man vampire",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "man_vampire",
                    "man",
                    "male",
                    "dracula"
                ]
            },
            {
                "emoji": "🧛‍♀️",
                "name": "woman vampire",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_vampire",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🧜",
                "name": "merperson",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "merperson",
                    "sea"
                ]
            },
            {
                "emoji": "🧜‍♂️",
                "name": "merman",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "merman",
                    "man",
                    "male",
                    "triton"
                ]
            },
            {
                "emoji": "🧜‍♀️",
                "name": "mermaid",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "mermaid",
                    "woman",
                    "female",
                    "merwoman",
                    "ariel"
                ]
            },
            {
                "emoji": "🧝",
                "name": "elf",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "elf",
                    "magical"
                ]
            },
            {
                "emoji": "🧝‍♂️",
                "name": "man elf",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "man_elf",
                    "man",
                    "male"
                ]
            },
            {
                "emoji": "🧝‍♀️",
                "name": "woman elf",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_elf",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🧞",
                "name": "genie",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "genie",
                    "magical",
                    "wishes"
                ]
            },
            {
                "emoji": "🧞‍♂️",
                "name": "man genie",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "man_genie",
                    "man",
                    "male"
                ]
            },
            {
                "emoji": "🧞‍♀️",
                "name": "woman genie",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "woman_genie",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🧟",
                "name": "zombie",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "zombie",
                    "dead"
                ]
            },
            {
                "emoji": "🧟‍♂️",
                "name": "man zombie",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "man_zombie",
                    "man",
                    "male",
                    "dracula",
                    "undead",
                    "walking dead"
                ]
            },
            {
                "emoji": "🧟‍♀️",
                "name": "woman zombie",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "woman_zombie",
                    "woman",
                    "female",
                    "undead",
                    "walking dead"
                ]
            },
            {
                "emoji": "💆",
                "name": "person getting massage",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_getting_massage",
                    "relax"
                ]
            },
            {
                "emoji": "💆‍♂️",
                "name": "man getting massage",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_getting_massage",
                    "male",
                    "boy",
                    "man",
                    "head"
                ]
            },
            {
                "emoji": "💆‍♀️",
                "name": "woman getting massage",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_getting_massage",
                    "female",
                    "girl",
                    "woman",
                    "head"
                ]
            },
            {
                "emoji": "💇",
                "name": "person getting haircut",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_getting_haircut",
                    "hairstyle"
                ]
            },
            {
                "emoji": "💇‍♂️",
                "name": "man getting haircut",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_getting_haircut",
                    "male",
                    "boy",
                    "man"
                ]
            },
            {
                "emoji": "💇‍♀️",
                "name": "woman getting haircut",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_getting_haircut",
                    "female",
                    "girl",
                    "woman"
                ]
            },
            {
                "emoji": "🚶",
                "name": "person walking",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_walking",
                    "move"
                ]
            },
            {
                "emoji": "🚶‍♂️",
                "name": "man walking",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_walking",
                    "human",
                    "feet",
                    "steps"
                ]
            },
            {
                "emoji": "🚶‍♀️",
                "name": "woman walking",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_walking",
                    "human",
                    "feet",
                    "steps",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🏃",
                "name": "person running",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_running",
                    "move"
                ]
            },
            {
                "emoji": "🏃‍♂️",
                "name": "man running",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_running",
                    "man",
                    "walking",
                    "exercise",
                    "race",
                    "running"
                ]
            },
            {
                "emoji": "🏃‍♀️",
                "name": "woman running",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_running",
                    "woman",
                    "walking",
                    "exercise",
                    "race",
                    "running",
                    "female"
                ]
            },
            {
                "emoji": "💃",
                "name": "woman dancing",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "woman_dancing",
                    "female",
                    "girl",
                    "woman",
                    "fun"
                ]
            },
            {
                "emoji": "🕺",
                "name": "man dancing",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "man_dancing",
                    "male",
                    "boy",
                    "fun",
                    "dancer"
                ]
            },
            {
                "emoji": "🕴️",
                "name": "person in suit levitating",
                "v": "0.7",
                "toneEnabled": true,
                "keywords": [
                    "man_in_suit_levitating",
                    "suit",
                    "business",
                    "levitate",
                    "hover",
                    "jump"
                ]
            },
            {
                "emoji": "👯",
                "name": "people with bunny ears",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "people_with_bunny_ears",
                    "perform",
                    "costume"
                ]
            },
            {
                "emoji": "👯‍♂️",
                "name": "men with bunny ears",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "men_with_bunny_ears",
                    "male",
                    "bunny",
                    "men",
                    "boys"
                ]
            },
            {
                "emoji": "👯‍♀️",
                "name": "women with bunny ears",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "women_with_bunny_ears",
                    "female",
                    "bunny",
                    "women",
                    "girls"
                ]
            },
            {
                "emoji": "🧖",
                "name": "person in steamy room",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "person_in_steamy_room",
                    "relax",
                    "spa"
                ]
            },
            {
                "emoji": "🧖‍♂️",
                "name": "man in steamy room",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "man_in_steamy_room",
                    "male",
                    "man",
                    "spa",
                    "steamroom",
                    "sauna"
                ]
            },
            {
                "emoji": "🧖‍♀️",
                "name": "woman in steamy room",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_in_steamy_room",
                    "female",
                    "woman",
                    "spa",
                    "steamroom",
                    "sauna"
                ]
            },
            {
                "emoji": "🧗",
                "name": "person climbing",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "person_climbing",
                    "sport"
                ]
            },
            {
                "emoji": "🧗‍♂️",
                "name": "man climbing",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "man_climbing",
                    "sports",
                    "hobby",
                    "man",
                    "male",
                    "rock"
                ]
            },
            {
                "emoji": "🧗‍♀️",
                "name": "woman climbing",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_climbing",
                    "sports",
                    "hobby",
                    "woman",
                    "female",
                    "rock"
                ]
            },
            {
                "emoji": "🤺",
                "name": "person fencing",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "person_fencing",
                    "sports",
                    "fencing",
                    "sword"
                ]
            },
            {
                "emoji": "🏇",
                "name": "horse racing",
                "v": "1.0",
                "toneEnabled": true,
                "keywords": [
                    "horse_racing",
                    "animal",
                    "betting",
                    "competition",
                    "gambling",
                    "luck"
                ]
            },
            {
                "emoji": "⛷️",
                "name": "skier",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "skier",
                    "sports",
                    "winter",
                    "snow"
                ]
            },
            {
                "emoji": "🏂",
                "name": "snowboarder",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "snowboarder",
                    "sports",
                    "winter"
                ]
            },
            {
                "emoji": "🏌️",
                "name": "person golfing",
                "v": "0.7",
                "toneEnabled": true,
                "keywords": [
                    "person_golfing",
                    "sports",
                    "business"
                ]
            },
            {
                "emoji": "🏌️‍♂️",
                "name": "man golfing",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_golfing",
                    "sport"
                ]
            },
            {
                "emoji": "🏌️‍♀️",
                "name": "woman golfing",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_golfing",
                    "sports",
                    "business",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🏄",
                "name": "person surfing",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_surfing",
                    "sport",
                    "sea"
                ]
            },
            {
                "emoji": "🏄‍♂️",
                "name": "man surfing",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_surfing",
                    "sports",
                    "ocean",
                    "sea",
                    "summer",
                    "beach"
                ]
            },
            {
                "emoji": "🏄‍♀️",
                "name": "woman surfing",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_surfing",
                    "sports",
                    "ocean",
                    "sea",
                    "summer",
                    "beach",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🚣",
                "name": "person rowing boat",
                "v": "1.0",
                "toneEnabled": true,
                "keywords": [
                    "person_rowing_boat",
                    "sport",
                    "move"
                ]
            },
            {
                "emoji": "🚣‍♂️",
                "name": "man rowing boat",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_rowing_boat",
                    "sports",
                    "hobby",
                    "water",
                    "ship"
                ]
            },
            {
                "emoji": "🚣‍♀️",
                "name": "woman rowing boat",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_rowing_boat",
                    "sports",
                    "hobby",
                    "water",
                    "ship",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🏊",
                "name": "person swimming",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_swimming",
                    "sport",
                    "pool"
                ]
            },
            {
                "emoji": "🏊‍♂️",
                "name": "man swimming",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_swimming",
                    "sports",
                    "exercise",
                    "human",
                    "athlete",
                    "water",
                    "summer"
                ]
            },
            {
                "emoji": "🏊‍♀️",
                "name": "woman swimming",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_swimming",
                    "sports",
                    "exercise",
                    "human",
                    "athlete",
                    "water",
                    "summer",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "⛹️",
                "name": "person bouncing ball",
                "v": "0.7",
                "toneEnabled": true,
                "keywords": [
                    "person_bouncing_ball",
                    "sports",
                    "human"
                ]
            },
            {
                "emoji": "⛹️‍♂️",
                "name": "man bouncing ball",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_bouncing_ball",
                    "sport"
                ]
            },
            {
                "emoji": "⛹️‍♀️",
                "name": "woman bouncing ball",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_bouncing_ball",
                    "sports",
                    "human",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🏋️",
                "name": "person lifting weights",
                "v": "0.7",
                "toneEnabled": true,
                "keywords": [
                    "person_lifting_weights",
                    "sports",
                    "training",
                    "exercise"
                ]
            },
            {
                "emoji": "🏋️‍♂️",
                "name": "man lifting weights",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_lifting_weights",
                    "sport"
                ]
            },
            {
                "emoji": "🏋️‍♀️",
                "name": "woman lifting weights",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_lifting_weights",
                    "sports",
                    "training",
                    "exercise",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🚴",
                "name": "person biking",
                "v": "1.0",
                "toneEnabled": true,
                "keywords": [
                    "person_biking",
                    "sport",
                    "move"
                ]
            },
            {
                "emoji": "🚴‍♂️",
                "name": "man biking",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_biking",
                    "sports",
                    "bike",
                    "exercise",
                    "hipster"
                ]
            },
            {
                "emoji": "🚴‍♀️",
                "name": "woman biking",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_biking",
                    "sports",
                    "bike",
                    "exercise",
                    "hipster",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🚵",
                "name": "person mountain biking",
                "v": "1.0",
                "toneEnabled": true,
                "keywords": [
                    "person_mountain_biking",
                    "sport",
                    "move"
                ]
            },
            {
                "emoji": "🚵‍♂️",
                "name": "man mountain biking",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_mountain_biking",
                    "transportation",
                    "sports",
                    "human",
                    "race",
                    "bike"
                ]
            },
            {
                "emoji": "🚵‍♀️",
                "name": "woman mountain biking",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_mountain_biking",
                    "transportation",
                    "sports",
                    "human",
                    "race",
                    "bike",
                    "woman",
                    "female"
                ]
            },
            {
                "emoji": "🤸",
                "name": "person cartwheeling",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "person_cartwheeling",
                    "sport",
                    "gymnastic"
                ]
            },
            {
                "emoji": "🤸‍♂️",
                "name": "man cartwheeling",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_cartwheeling",
                    "gymnastics"
                ]
            },
            {
                "emoji": "🤸‍♀️",
                "name": "woman cartwheeling",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_cartwheeling",
                    "gymnastics"
                ]
            },
            {
                "emoji": "🤼",
                "name": "people wrestling",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "people_wrestling",
                    "sport"
                ]
            },
            {
                "emoji": "🤼‍♂️",
                "name": "men wrestling",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "men_wrestling",
                    "sports",
                    "wrestlers"
                ]
            },
            {
                "emoji": "🤼‍♀️",
                "name": "women wrestling",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "women_wrestling",
                    "sports",
                    "wrestlers"
                ]
            },
            {
                "emoji": "🤽",
                "name": "person playing water polo",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "person_playing_water_polo",
                    "sport"
                ]
            },
            {
                "emoji": "🤽‍♂️",
                "name": "man playing water polo",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_playing_water_polo",
                    "sports",
                    "pool"
                ]
            },
            {
                "emoji": "🤽‍♀️",
                "name": "woman playing water polo",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_playing_water_polo",
                    "sports",
                    "pool"
                ]
            },
            {
                "emoji": "🤾",
                "name": "person playing handball",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "person_playing_handball",
                    "sport"
                ]
            },
            {
                "emoji": "🤾‍♂️",
                "name": "man playing handball",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_playing_handball",
                    "sports"
                ]
            },
            {
                "emoji": "🤾‍♀️",
                "name": "woman playing handball",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_playing_handball",
                    "sports"
                ]
            },
            {
                "emoji": "🤹",
                "name": "person juggling",
                "v": "3.0",
                "toneEnabled": true,
                "keywords": [
                    "person_juggling",
                    "performance",
                    "balance"
                ]
            },
            {
                "emoji": "🤹‍♂️",
                "name": "man juggling",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "man_juggling",
                    "juggle",
                    "balance",
                    "skill",
                    "multitask"
                ]
            },
            {
                "emoji": "🤹‍♀️",
                "name": "woman juggling",
                "v": "4.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_juggling",
                    "juggle",
                    "balance",
                    "skill",
                    "multitask"
                ]
            },
            {
                "emoji": "🧘",
                "name": "person in lotus position",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "person_in_lotus_position",
                    "meditate"
                ]
            },
            {
                "emoji": "🧘‍♂️",
                "name": "man in lotus position",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "man_in_lotus_position",
                    "man",
                    "male",
                    "meditation",
                    "yoga",
                    "serenity",
                    "zen",
                    "mindfulness"
                ]
            },
            {
                "emoji": "🧘‍♀️",
                "name": "woman in lotus position",
                "v": "5.0",
                "toneEnabled": true,
                "keywords": [
                    "woman_in_lotus_position",
                    "woman",
                    "female",
                    "meditation",
                    "yoga",
                    "serenity",
                    "zen",
                    "mindfulness"
                ]
            },
            {
                "emoji": "🛀",
                "name": "person taking bath",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "person_taking_bath",
                    "clean",
                    "shower",
                    "bathroom"
                ]
            },
            {
                "emoji": "🛌",
                "name": "person in bed",
                "v": "1.0",
                "toneEnabled": true,
                "keywords": [
                    "person_in_bed",
                    "bed",
                    "rest"
                ]
            },
            {
                "emoji": "👭",
                "name": "women holding hands",
                "v": "1.0",
                "toneEnabled": true,
                "keywords": [
                    "women_holding_hands",
                    "pair",
                    "friendship",
                    "couple",
                    "love",
                    "like",
                    "female",
                    "people",
                    "human"
                ]
            },
            {
                "emoji": "👫",
                "name": "woman and man holding hands",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "woman_and_man_holding_hands",
                    "pair",
                    "people",
                    "human",
                    "love",
                    "date",
                    "dating",
                    "like",
                    "affection",
                    "valentines",
                    "marriage"
                ]
            },
            {
                "emoji": "👬",
                "name": "men holding hands",
                "v": "1.0",
                "toneEnabled": true,
                "keywords": [
                    "men_holding_hands",
                    "pair",
                    "couple",
                    "love",
                    "like",
                    "bromance",
                    "friendship",
                    "people",
                    "human"
                ]
            },
            {
                "emoji": "💏",
                "name": "kiss",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "kiss",
                    "pair",
                    "valentines",
                    "love",
                    "like",
                    "dating",
                    "marriage"
                ]
            },
            {
                "emoji": "👩‍❤️‍💋‍👨",
                "name": "kiss woman, man",
                "v": "2.0",
                "toneEnabled": true,
                "keywords": [
                    "kiss_woman_man",
                    "love"
                ]
            },
            {
                "emoji": "👨‍❤️‍💋‍👨",
                "name": "kiss man, man",
                "v": "2.0",
                "toneEnabled": true,
                "keywords": [
                    "kiss_man_man",
                    "pair",
                    "valentines",
                    "love",
                    "like",
                    "dating",
                    "marriage"
                ]
            },
            {
                "emoji": "👩‍❤️‍💋‍👩",
                "name": "kiss woman, woman",
                "v": "2.0",
                "toneEnabled": true,
                "keywords": [
                    "kiss_woman_woman",
                    "pair",
                    "valentines",
                    "love",
                    "like",
                    "dating",
                    "marriage"
                ]
            },
            {
                "emoji": "💑",
                "name": "couple with heart",
                "v": "0.6",
                "toneEnabled": true,
                "keywords": [
                    "couple_with_heart",
                    "pair",
                    "love",
                    "like",
                    "affection",
                    "human",
                    "dating",
                    "valentines",
                    "marriage"
                ]
            },
            {
                "emoji": "👩‍❤️‍👨",
                "name": "couple with heart woman, man",
                "v": "2.0",
                "toneEnabled": true,
                "keywords": [
                    "couple_with_heart_woman_man",
                    "love"
                ]
            },
            {
                "emoji": "👨‍❤️‍👨",
                "name": "couple with heart man, man",
                "v": "2.0",
                "toneEnabled": true,
                "keywords": [
                    "couple_with_heart_man_man",
                    "pair",
                    "love",
                    "like",
                    "affection",
                    "human",
                    "dating",
                    "valentines",
                    "marriage"
                ]
            },
            {
                "emoji": "👩‍❤️‍👩",
                "name": "couple with heart woman, woman",
                "v": "2.0",
                "toneEnabled": true,
                "keywords": [
                    "couple_with_heart_woman_woman",
                    "pair",
                    "love",
                    "like",
                    "affection",
                    "human",
                    "dating",
                    "valentines",
                    "marriage"
                ]
            },
            {
                "emoji": "👪",
                "name": "family",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "family",
                    "home",
                    "parents",
                    "child",
                    "mom",
                    "dad",
                    "father",
                    "mother",
                    "people",
                    "human"
                ]
            },
            {
                "emoji": "👨‍👩‍👦",
                "name": "family man, woman, boy",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_woman_boy",
                    "love"
                ]
            },
            {
                "emoji": "👨‍👩‍👧",
                "name": "family man, woman, girl",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_woman_girl",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "child"
                ]
            },
            {
                "emoji": "👨‍👩‍👧‍👦",
                "name": "family man, woman, girl, boy",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_woman_girl_boy",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👨‍👩‍👦‍👦",
                "name": "family man, woman, boy, boy",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_woman_boy_boy",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👨‍👩‍👧‍👧",
                "name": "family man, woman, girl, girl",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_woman_girl_girl",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👨‍👨‍👦",
                "name": "family man, man, boy",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_man_boy",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👨‍👨‍👧",
                "name": "family man, man, girl",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_man_girl",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👨‍👨‍👧‍👦",
                "name": "family man, man, girl, boy",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_man_girl_boy",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👨‍👨‍👦‍👦",
                "name": "family man, man, boy, boy",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_man_boy_boy",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👨‍👨‍👧‍👧",
                "name": "family man, man, girl, girl",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_man_girl_girl",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👩‍👩‍👦",
                "name": "family woman, woman, boy",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_woman_woman_boy",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👩‍👩‍👧",
                "name": "family woman, woman, girl",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_woman_woman_girl",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👩‍👩‍👧‍👦",
                "name": "family woman, woman, girl, boy",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_woman_woman_girl_boy",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👩‍👩‍👦‍👦",
                "name": "family woman, woman, boy, boy",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_woman_woman_boy_boy",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👩‍👩‍👧‍👧",
                "name": "family woman, woman, girl, girl",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "family_woman_woman_girl_girl",
                    "home",
                    "parents",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👨‍👦",
                "name": "family man, boy",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_boy",
                    "home",
                    "parent",
                    "people",
                    "human",
                    "child"
                ]
            },
            {
                "emoji": "👨‍👦‍👦",
                "name": "family man, boy, boy",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_boy_boy",
                    "home",
                    "parent",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👨‍👧",
                "name": "family man, girl",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_girl",
                    "home",
                    "parent",
                    "people",
                    "human",
                    "child"
                ]
            },
            {
                "emoji": "👨‍👧‍👦",
                "name": "family man, girl, boy",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_girl_boy",
                    "home",
                    "parent",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👨‍👧‍👧",
                "name": "family man, girl, girl",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "family_man_girl_girl",
                    "home",
                    "parent",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👩‍👦",
                "name": "family woman, boy",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "family_woman_boy",
                    "home",
                    "parent",
                    "people",
                    "human",
                    "child"
                ]
            },
            {
                "emoji": "👩‍👦‍👦",
                "name": "family woman, boy, boy",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "family_woman_boy_boy",
                    "home",
                    "parent",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👩‍👧",
                "name": "family woman, girl",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "family_woman_girl",
                    "home",
                    "parent",
                    "people",
                    "human",
                    "child"
                ]
            },
            {
                "emoji": "👩‍👧‍👦",
                "name": "family woman, girl, boy",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "family_woman_girl_boy",
                    "home",
                    "parent",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "👩‍👧‍👧",
                "name": "family woman, girl, girl",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "family_woman_girl_girl",
                    "home",
                    "parent",
                    "people",
                    "human",
                    "children"
                ]
            },
            {
                "emoji": "🗣️",
                "name": "speaking head",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "speaking_head",
                    "user",
                    "person",
                    "human",
                    "sing",
                    "say",
                    "talk"
                ]
            },
            {
                "emoji": "👤",
                "name": "bust in silhouette",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bust_in_silhouette",
                    "user",
                    "person",
                    "human"
                ]
            },
            {
                "emoji": "👥",
                "name": "busts in silhouette",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "busts_in_silhouette",
                    "user",
                    "person",
                    "human",
                    "group",
                    "team"
                ]
            },
            {
                "emoji": "👣",
                "name": "footprints",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "footprints",
                    "feet",
                    "tracking",
                    "walking",
                    "beach"
                ]
            }
        ]
    },
    {
        "title": "animals_nature",
        "icon": "🐵",
        "data": [
            {
                "emoji": "🐵",
                "name": "monkey face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "monkey_face",
                    "animal",
                    "nature",
                    "circus"
                ]
            },
            {
                "emoji": "🐒",
                "name": "monkey",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "monkey",
                    "animal",
                    "nature",
                    "banana",
                    "circus"
                ]
            },
            {
                "emoji": "🦍",
                "name": "gorilla",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "gorilla",
                    "animal",
                    "nature",
                    "circus"
                ]
            },
            {
                "emoji": "🐶",
                "name": "dog face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dog_face",
                    "animal",
                    "friend",
                    "nature",
                    "woof",
                    "puppy",
                    "pet",
                    "faithful"
                ]
            },
            {
                "emoji": "🐕",
                "name": "dog",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "dog",
                    "animal",
                    "nature",
                    "friend",
                    "doge",
                    "pet",
                    "faithful"
                ]
            },
            {
                "emoji": "🐩",
                "name": "poodle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "poodle",
                    "dog",
                    "animal",
                    "101",
                    "nature",
                    "pet"
                ]
            },
            {
                "emoji": "🐺",
                "name": "wolf",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "wolf",
                    "animal",
                    "nature",
                    "wild"
                ]
            },
            {
                "emoji": "🦊",
                "name": "fox",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "fox",
                    "animal",
                    "nature",
                    "face"
                ]
            },
            {
                "emoji": "🦝",
                "name": "raccoon",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "raccoon",
                    "animal",
                    "nature"
                ]
            },
            {
                "emoji": "🐱",
                "name": "cat face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cat_face",
                    "animal",
                    "meow",
                    "nature",
                    "pet",
                    "kitten"
                ]
            },
            {
                "emoji": "🐈",
                "name": "cat",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "cat",
                    "animal",
                    "meow",
                    "pet",
                    "cats"
                ]
            },
            {
                "emoji": "🦁",
                "name": "lion",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "lion",
                    "animal",
                    "nature"
                ]
            },
            {
                "emoji": "🐯",
                "name": "tiger face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tiger_face",
                    "animal",
                    "cat",
                    "danger",
                    "wild",
                    "nature",
                    "roar"
                ]
            },
            {
                "emoji": "🐅",
                "name": "tiger",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "tiger",
                    "animal",
                    "nature",
                    "roar"
                ]
            },
            {
                "emoji": "🐆",
                "name": "leopard",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "leopard",
                    "animal",
                    "nature"
                ]
            },
            {
                "emoji": "🐴",
                "name": "horse face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "horse_face",
                    "animal",
                    "brown",
                    "nature"
                ]
            },
            {
                "emoji": "🐎",
                "name": "horse",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "horse",
                    "animal",
                    "gamble",
                    "luck"
                ]
            },
            {
                "emoji": "🦄",
                "name": "unicorn",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "unicorn",
                    "animal",
                    "nature",
                    "mystical"
                ]
            },
            {
                "emoji": "🦓",
                "name": "zebra",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "zebra",
                    "animal",
                    "nature",
                    "stripes",
                    "safari"
                ]
            },
            {
                "emoji": "🦌",
                "name": "deer",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "deer",
                    "animal",
                    "nature",
                    "horns",
                    "venison"
                ]
            },
            {
                "emoji": "🐮",
                "name": "cow face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cow_face",
                    "beef",
                    "ox",
                    "animal",
                    "nature",
                    "moo",
                    "milk"
                ]
            },
            {
                "emoji": "🐂",
                "name": "ox",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "ox",
                    "animal",
                    "cow",
                    "beef"
                ]
            },
            {
                "emoji": "🐃",
                "name": "water buffalo",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "water_buffalo",
                    "animal",
                    "nature",
                    "ox",
                    "cow"
                ]
            },
            {
                "emoji": "🐄",
                "name": "cow",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "cow",
                    "beef",
                    "ox",
                    "animal",
                    "nature",
                    "moo",
                    "milk"
                ]
            },
            {
                "emoji": "🐷",
                "name": "pig face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pig_face",
                    "animal",
                    "oink",
                    "nature"
                ]
            },
            {
                "emoji": "🐖",
                "name": "pig",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "pig",
                    "animal",
                    "nature"
                ]
            },
            {
                "emoji": "🐗",
                "name": "boar",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "boar",
                    "animal",
                    "nature"
                ]
            },
            {
                "emoji": "🐽",
                "name": "pig nose",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pig_nose",
                    "animal",
                    "oink"
                ]
            },
            {
                "emoji": "🐏",
                "name": "ram",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "ram",
                    "animal",
                    "sheep",
                    "nature"
                ]
            },
            {
                "emoji": "🐑",
                "name": "ewe",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ewe",
                    "animal",
                    "nature",
                    "wool",
                    "shipit"
                ]
            },
            {
                "emoji": "🐐",
                "name": "goat",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "goat",
                    "animal",
                    "nature"
                ]
            },
            {
                "emoji": "🐪",
                "name": "camel",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "camel",
                    "animal",
                    "hot",
                    "desert",
                    "hump"
                ]
            },
            {
                "emoji": "🐫",
                "name": "two-hump camel",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "two_hump_camel",
                    "animal",
                    "nature",
                    "hot",
                    "desert",
                    "hump"
                ]
            },
            {
                "emoji": "🦙",
                "name": "llama",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "llama",
                    "animal",
                    "nature",
                    "alpaca"
                ]
            },
            {
                "emoji": "🦒",
                "name": "giraffe",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "giraffe",
                    "animal",
                    "nature",
                    "spots",
                    "safari"
                ]
            },
            {
                "emoji": "🐘",
                "name": "elephant",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "elephant",
                    "animal",
                    "nature",
                    "nose",
                    "th",
                    "circus"
                ]
            },
            {
                "emoji": "🦏",
                "name": "rhinoceros",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "rhinoceros",
                    "animal",
                    "nature",
                    "horn"
                ]
            },
            {
                "emoji": "🦛",
                "name": "hippopotamus",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "hippopotamus",
                    "animal",
                    "nature"
                ]
            },
            {
                "emoji": "🐭",
                "name": "mouse face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "mouse_face",
                    "animal",
                    "nature",
                    "cheese_wedge",
                    "rodent"
                ]
            },
            {
                "emoji": "🐁",
                "name": "mouse",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "mouse",
                    "animal",
                    "nature",
                    "rodent"
                ]
            },
            {
                "emoji": "🐀",
                "name": "rat",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "rat",
                    "animal",
                    "mouse",
                    "rodent"
                ]
            },
            {
                "emoji": "🐹",
                "name": "hamster",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hamster",
                    "animal",
                    "nature"
                ]
            },
            {
                "emoji": "🐰",
                "name": "rabbit face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "rabbit_face",
                    "animal",
                    "nature",
                    "pet",
                    "spring",
                    "magic",
                    "bunny"
                ]
            },
            {
                "emoji": "🐇",
                "name": "rabbit",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "rabbit",
                    "animal",
                    "nature",
                    "pet",
                    "magic",
                    "spring"
                ]
            },
            {
                "emoji": "🐿️",
                "name": "chipmunk",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "chipmunk",
                    "animal",
                    "nature",
                    "rodent",
                    "squirrel"
                ]
            },
            {
                "emoji": "🦔",
                "name": "hedgehog",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "hedgehog",
                    "animal",
                    "nature",
                    "spiny"
                ]
            },
            {
                "emoji": "🦇",
                "name": "bat",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "bat",
                    "animal",
                    "nature",
                    "blind",
                    "vampire"
                ]
            },
            {
                "emoji": "🐻",
                "name": "bear",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bear",
                    "animal",
                    "nature",
                    "wild"
                ]
            },
            {
                "emoji": "🐨",
                "name": "koala",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "koala",
                    "animal",
                    "nature"
                ]
            },
            {
                "emoji": "🐼",
                "name": "panda",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "panda",
                    "animal",
                    "nature",
                    "panda"
                ]
            },
            {
                "emoji": "🦘",
                "name": "kangaroo",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "kangaroo",
                    "animal",
                    "nature",
                    "australia",
                    "joey",
                    "hop",
                    "marsupial"
                ]
            },
            {
                "emoji": "🦡",
                "name": "badger",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "badger",
                    "animal",
                    "nature",
                    "honey"
                ]
            },
            {
                "emoji": "🐾",
                "name": "paw prints",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "paw_prints",
                    "animal",
                    "tracking",
                    "footprints",
                    "dog",
                    "cat",
                    "pet",
                    "feet"
                ]
            },
            {
                "emoji": "🦃",
                "name": "turkey",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "turkey",
                    "animal",
                    "bird"
                ]
            },
            {
                "emoji": "🐔",
                "name": "chicken",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "chicken",
                    "animal",
                    "cluck",
                    "nature",
                    "bird"
                ]
            },
            {
                "emoji": "🐓",
                "name": "rooster",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "rooster",
                    "animal",
                    "nature",
                    "chicken"
                ]
            },
            {
                "emoji": "🐣",
                "name": "hatching chick",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hatching_chick",
                    "animal",
                    "chicken",
                    "egg",
                    "born",
                    "baby",
                    "bird"
                ]
            },
            {
                "emoji": "🐤",
                "name": "baby chick",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "baby_chick",
                    "animal",
                    "chicken",
                    "bird"
                ]
            },
            {
                "emoji": "🐥",
                "name": "front-facing baby chick",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "front_facing_baby_chick",
                    "animal",
                    "chicken",
                    "baby",
                    "bird"
                ]
            },
            {
                "emoji": "🐦",
                "name": "bird",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bird",
                    "animal",
                    "nature",
                    "fly",
                    "tweet",
                    "spring"
                ]
            },
            {
                "emoji": "🐧",
                "name": "penguin",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "penguin",
                    "animal",
                    "nature"
                ]
            },
            {
                "emoji": "🕊️",
                "name": "dove",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "dove",
                    "animal",
                    "bird"
                ]
            },
            {
                "emoji": "🦅",
                "name": "eagle",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "eagle",
                    "animal",
                    "nature",
                    "bird"
                ]
            },
            {
                "emoji": "🦆",
                "name": "duck",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "duck",
                    "animal",
                    "nature",
                    "bird",
                    "mallard"
                ]
            },
            {
                "emoji": "🦢",
                "name": "swan",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "swan",
                    "animal",
                    "nature",
                    "bird"
                ]
            },
            {
                "emoji": "🦉",
                "name": "owl",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "owl",
                    "animal",
                    "nature",
                    "bird",
                    "hoot"
                ]
            },
            {
                "emoji": "🦚",
                "name": "peacock",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "peacock",
                    "animal",
                    "nature",
                    "peahen",
                    "bird"
                ]
            },
            {
                "emoji": "🦜",
                "name": "parrot",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "parrot",
                    "animal",
                    "nature",
                    "bird",
                    "pirate",
                    "talk"
                ]
            },
            {
                "emoji": "🐸",
                "name": "frog",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "frog",
                    "animal",
                    "nature",
                    "croak",
                    "toad"
                ]
            },
            {
                "emoji": "🐊",
                "name": "crocodile",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "crocodile",
                    "animal",
                    "nature",
                    "reptile",
                    "lizard",
                    "alligator"
                ]
            },
            {
                "emoji": "🐢",
                "name": "turtle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "turtle",
                    "animal",
                    "slow",
                    "nature",
                    "tortoise"
                ]
            },
            {
                "emoji": "🦎",
                "name": "lizard",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "lizard",
                    "animal",
                    "nature",
                    "reptile"
                ]
            },
            {
                "emoji": "🐍",
                "name": "snake",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "snake",
                    "animal",
                    "evil",
                    "nature",
                    "hiss",
                    "python"
                ]
            },
            {
                "emoji": "🐲",
                "name": "dragon face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dragon_face",
                    "animal",
                    "myth",
                    "nature",
                    "chinese",
                    "green"
                ]
            },
            {
                "emoji": "🐉",
                "name": "dragon",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "dragon",
                    "animal",
                    "myth",
                    "nature",
                    "chinese",
                    "green"
                ]
            },
            {
                "emoji": "🦕",
                "name": "sauropod",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "sauropod",
                    "animal",
                    "nature",
                    "dinosaur",
                    "brachiosaurus",
                    "brontosaurus",
                    "diplodocus",
                    "extinct"
                ]
            },
            {
                "emoji": "🦖",
                "name": "T-Rex",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "t_rex",
                    "animal",
                    "nature",
                    "dinosaur",
                    "tyrannosaurus",
                    "extinct"
                ]
            },
            {
                "emoji": "🐳",
                "name": "spouting whale",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "spouting_whale",
                    "animal",
                    "nature",
                    "sea",
                    "ocean"
                ]
            },
            {
                "emoji": "🐋",
                "name": "whale",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "whale",
                    "animal",
                    "nature",
                    "sea",
                    "ocean"
                ]
            },
            {
                "emoji": "🐬",
                "name": "dolphin",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dolphin",
                    "animal",
                    "nature",
                    "fish",
                    "sea",
                    "ocean",
                    "flipper",
                    "fins",
                    "beach"
                ]
            },
            {
                "emoji": "🐟",
                "name": "fish",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fish",
                    "animal",
                    "food",
                    "nature"
                ]
            },
            {
                "emoji": "🐠",
                "name": "tropical fish",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tropical_fish",
                    "animal",
                    "swim",
                    "ocean",
                    "beach",
                    "nemo"
                ]
            },
            {
                "emoji": "🐡",
                "name": "blowfish",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "blowfish",
                    "animal",
                    "nature",
                    "food",
                    "sea",
                    "ocean"
                ]
            },
            {
                "emoji": "🦈",
                "name": "shark",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "shark",
                    "animal",
                    "nature",
                    "fish",
                    "sea",
                    "ocean",
                    "jaws",
                    "fins",
                    "beach"
                ]
            },
            {
                "emoji": "🐙",
                "name": "octopus",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "octopus",
                    "animal",
                    "creature",
                    "ocean",
                    "sea",
                    "nature",
                    "beach"
                ]
            },
            {
                "emoji": "🐚",
                "name": "spiral shell",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "spiral_shell",
                    "nature",
                    "sea",
                    "beach"
                ]
            },
            {
                "emoji": "🐌",
                "name": "snail",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "snail",
                    "slow",
                    "animal",
                    "shell"
                ]
            },
            {
                "emoji": "🦋",
                "name": "butterfly",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "butterfly",
                    "animal",
                    "insect",
                    "nature",
                    "caterpillar"
                ]
            },
            {
                "emoji": "🐛",
                "name": "bug",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bug",
                    "animal",
                    "insect",
                    "nature",
                    "worm"
                ]
            },
            {
                "emoji": "🐜",
                "name": "ant",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ant",
                    "animal",
                    "insect",
                    "nature",
                    "bug"
                ]
            },
            {
                "emoji": "🐝",
                "name": "honeybee",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "honeybee",
                    "animal",
                    "insect",
                    "nature",
                    "bug",
                    "spring",
                    "honey"
                ]
            },
            {
                "emoji": "🐞",
                "name": "lady beetle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "lady_beetle",
                    "animal",
                    "insect",
                    "nature",
                    "ladybug"
                ]
            },
            {
                "emoji": "🦗",
                "name": "cricket",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "cricket",
                    "animal",
                    "cricket",
                    "chirp"
                ]
            },
            {
                "emoji": "🕷️",
                "name": "spider",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "spider",
                    "animal",
                    "arachnid"
                ]
            },
            {
                "emoji": "🕸️",
                "name": "spider web",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "spider_web",
                    "animal",
                    "insect",
                    "arachnid",
                    "silk"
                ]
            },
            {
                "emoji": "🦂",
                "name": "scorpion",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "scorpion",
                    "animal",
                    "arachnid"
                ]
            },
            {
                "emoji": "🦟",
                "name": "mosquito",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "mosquito",
                    "animal",
                    "nature",
                    "insect",
                    "malaria"
                ]
            },
            {
                "emoji": "🦠",
                "name": "microbe",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "microbe",
                    "amoeba",
                    "bacteria",
                    "germs",
                    "virus",
                    "covid"
                ]
            },
            {
                "emoji": "💐",
                "name": "bouquet",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bouquet",
                    "flowers",
                    "nature",
                    "spring"
                ]
            },
            {
                "emoji": "🌸",
                "name": "cherry blossom",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cherry_blossom",
                    "nature",
                    "plant",
                    "spring",
                    "flower"
                ]
            },
            {
                "emoji": "💮",
                "name": "white flower",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "white_flower",
                    "japanese",
                    "spring"
                ]
            },
            {
                "emoji": "🏵️",
                "name": "rosette",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "rosette",
                    "flower",
                    "decoration",
                    "military"
                ]
            },
            {
                "emoji": "🌹",
                "name": "rose",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "rose",
                    "flowers",
                    "valentines",
                    "love",
                    "spring"
                ]
            },
            {
                "emoji": "🥀",
                "name": "wilted flower",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "wilted_flower",
                    "plant",
                    "nature",
                    "flower",
                    "rose"
                ]
            },
            {
                "emoji": "🌺",
                "name": "hibiscus",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hibiscus",
                    "plant",
                    "vegetable",
                    "flowers",
                    "beach"
                ]
            },
            {
                "emoji": "🌻",
                "name": "sunflower",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sunflower",
                    "nature",
                    "plant",
                    "fall"
                ]
            },
            {
                "emoji": "🌼",
                "name": "blossom",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "blossom",
                    "nature",
                    "flowers",
                    "yellow"
                ]
            },
            {
                "emoji": "🌷",
                "name": "tulip",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tulip",
                    "flowers",
                    "plant",
                    "nature",
                    "summer",
                    "spring"
                ]
            },
            {
                "emoji": "🌱",
                "name": "seedling",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "seedling",
                    "plant",
                    "nature",
                    "grass",
                    "lawn",
                    "spring"
                ]
            },
            {
                "emoji": "🌲",
                "name": "evergreen tree",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "evergreen_tree",
                    "plant",
                    "nature"
                ]
            },
            {
                "emoji": "🌳",
                "name": "deciduous tree",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "deciduous_tree",
                    "plant",
                    "nature"
                ]
            },
            {
                "emoji": "🌴",
                "name": "palm tree",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "palm_tree",
                    "plant",
                    "vegetable",
                    "nature",
                    "summer",
                    "beach",
                    "mojito",
                    "tropical"
                ]
            },
            {
                "emoji": "🌵",
                "name": "cactus",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cactus",
                    "vegetable",
                    "plant",
                    "nature"
                ]
            },
            {
                "emoji": "🌾",
                "name": "sheaf of rice",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sheaf_of_rice",
                    "nature",
                    "plant"
                ]
            },
            {
                "emoji": "🌿",
                "name": "herb",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "herb",
                    "vegetable",
                    "plant",
                    "medicine",
                    "weed",
                    "grass",
                    "lawn"
                ]
            },
            {
                "emoji": "☘️",
                "name": "shamrock",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "shamrock",
                    "vegetable",
                    "plant",
                    "nature",
                    "irish",
                    "clover"
                ]
            },
            {
                "emoji": "🍀",
                "name": "four leaf clover",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "four_leaf_clover",
                    "vegetable",
                    "plant",
                    "nature",
                    "lucky",
                    "irish"
                ]
            },
            {
                "emoji": "🍁",
                "name": "maple leaf",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "maple_leaf",
                    "nature",
                    "plant",
                    "vegetable",
                    "ca",
                    "fall"
                ]
            },
            {
                "emoji": "🍂",
                "name": "fallen leaf",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fallen_leaf",
                    "nature",
                    "plant",
                    "vegetable",
                    "leaves"
                ]
            },
            {
                "emoji": "🍃",
                "name": "leaf fluttering in wind",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "leaf_fluttering_in_wind",
                    "nature",
                    "plant",
                    "tree",
                    "vegetable",
                    "grass",
                    "lawn",
                    "spring"
                ]
            },
            {
                "emoji": "🍄",
                "name": "mushroom",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "mushroom",
                    "plant",
                    "vegetable"
                ]
            }
        ]
    },
    {
        "title": "food_drink",
        "icon": "🍇",
        "data": [
            {
                "emoji": "🍇",
                "name": "grapes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "grapes",
                    "fruit",
                    "food",
                    "wine"
                ]
            },
            {
                "emoji": "🍈",
                "name": "melon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "melon",
                    "fruit",
                    "nature",
                    "food"
                ]
            },
            {
                "emoji": "🍉",
                "name": "watermelon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "watermelon",
                    "fruit",
                    "food",
                    "picnic",
                    "summer"
                ]
            },
            {
                "emoji": "🍊",
                "name": "tangerine",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tangerine",
                    "food",
                    "fruit",
                    "nature",
                    "orange"
                ]
            },
            {
                "emoji": "🍋",
                "name": "lemon",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "lemon",
                    "fruit",
                    "nature"
                ]
            },
            {
                "emoji": "🍌",
                "name": "banana",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "banana",
                    "fruit",
                    "food",
                    "monkey"
                ]
            },
            {
                "emoji": "🍍",
                "name": "pineapple",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pineapple",
                    "fruit",
                    "nature",
                    "food"
                ]
            },
            {
                "emoji": "🥭",
                "name": "mango",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "mango",
                    "fruit",
                    "food",
                    "tropical"
                ]
            },
            {
                "emoji": "🍎",
                "name": "red apple",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "red_apple",
                    "fruit",
                    "mac",
                    "school"
                ]
            },
            {
                "emoji": "🍏",
                "name": "green apple",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "green_apple",
                    "fruit",
                    "nature"
                ]
            },
            {
                "emoji": "🍐",
                "name": "pear",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "pear",
                    "fruit",
                    "nature",
                    "food"
                ]
            },
            {
                "emoji": "🍑",
                "name": "peach",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "peach",
                    "fruit",
                    "nature",
                    "food"
                ]
            },
            {
                "emoji": "🍒",
                "name": "cherries",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cherries",
                    "food",
                    "fruit"
                ]
            },
            {
                "emoji": "🍓",
                "name": "strawberry",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "strawberry",
                    "fruit",
                    "food",
                    "nature"
                ]
            },
            {
                "emoji": "🥝",
                "name": "kiwi fruit",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "kiwi_fruit",
                    "fruit",
                    "food"
                ]
            },
            {
                "emoji": "🍅",
                "name": "tomato",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tomato",
                    "fruit",
                    "vegetable",
                    "nature",
                    "food"
                ]
            },
            {
                "emoji": "🥥",
                "name": "coconut",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "coconut",
                    "fruit",
                    "nature",
                    "food",
                    "palm"
                ]
            },
            {
                "emoji": "🥑",
                "name": "avocado",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "avocado",
                    "fruit",
                    "food"
                ]
            },
            {
                "emoji": "🍆",
                "name": "eggplant",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "eggplant",
                    "vegetable",
                    "nature",
                    "food",
                    "aubergine"
                ]
            },
            {
                "emoji": "🥔",
                "name": "potato",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "potato",
                    "food",
                    "tuber",
                    "vegatable",
                    "starch"
                ]
            },
            {
                "emoji": "🥕",
                "name": "carrot",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "carrot",
                    "vegetable",
                    "food",
                    "orange"
                ]
            },
            {
                "emoji": "🌽",
                "name": "ear of corn",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ear_of_corn",
                    "food",
                    "vegetable",
                    "plant"
                ]
            },
            {
                "emoji": "🌶️",
                "name": "hot pepper",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "hot_pepper",
                    "food",
                    "spicy",
                    "chilli",
                    "chili"
                ]
            },
            {
                "emoji": "🥒",
                "name": "cucumber",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "cucumber",
                    "fruit",
                    "food",
                    "pickle"
                ]
            },
            {
                "emoji": "🥬",
                "name": "leafy green",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "leafy_green",
                    "food",
                    "vegetable",
                    "plant",
                    "bok choy",
                    "cabbage",
                    "kale",
                    "lettuce"
                ]
            },
            {
                "emoji": "🥦",
                "name": "broccoli",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "broccoli",
                    "fruit",
                    "food",
                    "vegetable"
                ]
            },
            {
                "emoji": "🥜",
                "name": "peanuts",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "peanuts",
                    "food",
                    "nut"
                ]
            },
            {
                "emoji": "🌰",
                "name": "chestnut",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "chestnut",
                    "food",
                    "squirrel"
                ]
            },
            {
                "emoji": "🍞",
                "name": "bread",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bread",
                    "food",
                    "wheat",
                    "breakfast",
                    "toast"
                ]
            },
            {
                "emoji": "🥐",
                "name": "croissant",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "croissant",
                    "food",
                    "bread",
                    "french"
                ]
            },
            {
                "emoji": "🥖",
                "name": "baguette bread",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "baguette_bread",
                    "food",
                    "bread",
                    "french",
                    "france",
                    "bakery"
                ]
            },
            {
                "emoji": "🥨",
                "name": "pretzel",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "pretzel",
                    "food",
                    "bread",
                    "twisted",
                    "germany",
                    "bakery"
                ]
            },
            {
                "emoji": "🥯",
                "name": "bagel",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "bagel",
                    "food",
                    "bread",
                    "bakery",
                    "schmear",
                    "jewish",
                    "bakery"
                ]
            },
            {
                "emoji": "🥞",
                "name": "pancakes",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "pancakes",
                    "food",
                    "breakfast",
                    "flapjacks",
                    "hotcakes",
                    "brunch"
                ]
            },
            {
                "emoji": "🧀",
                "name": "cheese wedge",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "cheese_wedge",
                    "food",
                    "chadder",
                    "swiss"
                ]
            },
            {
                "emoji": "🍖",
                "name": "meat on bone",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "meat_on_bone",
                    "good",
                    "food",
                    "drumstick"
                ]
            },
            {
                "emoji": "🍗",
                "name": "poultry leg",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "poultry_leg",
                    "food",
                    "meat",
                    "drumstick",
                    "bird",
                    "chicken",
                    "turkey"
                ]
            },
            {
                "emoji": "🥩",
                "name": "cut of meat",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "cut_of_meat",
                    "food",
                    "cow",
                    "meat",
                    "cut",
                    "chop",
                    "lambchop",
                    "porkchop"
                ]
            },
            {
                "emoji": "🥓",
                "name": "bacon",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "bacon",
                    "food",
                    "breakfast",
                    "pork",
                    "pig",
                    "meat",
                    "brunch"
                ]
            },
            {
                "emoji": "🍔",
                "name": "hamburger",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hamburger",
                    "meat",
                    "fast food",
                    "beef",
                    "cheeseburger",
                    "mcdonalds",
                    "burger king"
                ]
            },
            {
                "emoji": "🍟",
                "name": "french fries",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "french_fries",
                    "chips",
                    "snack",
                    "fast food",
                    "potato"
                ]
            },
            {
                "emoji": "🍕",
                "name": "pizza",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pizza",
                    "food",
                    "party",
                    "italy"
                ]
            },
            {
                "emoji": "🌭",
                "name": "hot dog",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "hot_dog",
                    "food",
                    "frankfurter",
                    "america"
                ]
            },
            {
                "emoji": "🥪",
                "name": "sandwich",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "sandwich",
                    "food",
                    "lunch",
                    "bread",
                    "toast",
                    "bakery"
                ]
            },
            {
                "emoji": "🌮",
                "name": "taco",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "taco",
                    "food",
                    "mexican"
                ]
            },
            {
                "emoji": "🌯",
                "name": "burrito",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "burrito",
                    "food",
                    "mexican"
                ]
            },
            {
                "emoji": "🥙",
                "name": "stuffed flatbread",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "stuffed_flatbread",
                    "food",
                    "flatbread",
                    "stuffed",
                    "gyro",
                    "mediterranean"
                ]
            },
            {
                "emoji": "🥚",
                "name": "egg",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "egg",
                    "food",
                    "chicken",
                    "breakfast"
                ]
            },
            {
                "emoji": "🍳",
                "name": "cooking",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cooking",
                    "food",
                    "breakfast",
                    "kitchen",
                    "egg",
                    "skillet"
                ]
            },
            {
                "emoji": "🥘",
                "name": "shallow pan of food",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "shallow_pan_of_food",
                    "food",
                    "cooking",
                    "casserole",
                    "paella",
                    "skillet"
                ]
            },
            {
                "emoji": "🍲",
                "name": "pot of food",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pot_of_food",
                    "food",
                    "meat",
                    "soup",
                    "hot pot"
                ]
            },
            {
                "emoji": "🥣",
                "name": "bowl with spoon",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "bowl_with_spoon",
                    "food",
                    "breakfast",
                    "cereal",
                    "oatmeal",
                    "porridge"
                ]
            },
            {
                "emoji": "🥗",
                "name": "green salad",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "green_salad",
                    "food",
                    "healthy",
                    "lettuce",
                    "vegetable"
                ]
            },
            {
                "emoji": "🍿",
                "name": "popcorn",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "popcorn",
                    "food",
                    "movie theater",
                    "films",
                    "snack",
                    "drama"
                ]
            },
            {
                "emoji": "🧂",
                "name": "salt",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "salt",
                    "condiment",
                    "shaker"
                ]
            },
            {
                "emoji": "🥫",
                "name": "canned food",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "canned_food",
                    "food",
                    "soup",
                    "tomatoes"
                ]
            },
            {
                "emoji": "🍱",
                "name": "bento box",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bento_box",
                    "food",
                    "japanese",
                    "box",
                    "lunch"
                ]
            },
            {
                "emoji": "🍘",
                "name": "rice cracker",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "rice_cracker",
                    "food",
                    "japanese",
                    "snack"
                ]
            },
            {
                "emoji": "🍙",
                "name": "rice ball",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "rice_ball",
                    "food",
                    "japanese"
                ]
            },
            {
                "emoji": "🍚",
                "name": "cooked rice",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cooked_rice",
                    "food",
                    "asian"
                ]
            },
            {
                "emoji": "🍛",
                "name": "curry rice",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "curry_rice",
                    "food",
                    "spicy",
                    "hot",
                    "indian"
                ]
            },
            {
                "emoji": "🍜",
                "name": "steaming bowl",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "steaming_bowl",
                    "food",
                    "japanese",
                    "noodle",
                    "chopsticks",
                    "ramen"
                ]
            },
            {
                "emoji": "🍝",
                "name": "spaghetti",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "spaghetti",
                    "food",
                    "italian",
                    "pasta",
                    "noodle"
                ]
            },
            {
                "emoji": "🍠",
                "name": "roasted sweet potato",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "roasted_sweet_potato",
                    "food",
                    "nature",
                    "plant"
                ]
            },
            {
                "emoji": "🍢",
                "name": "oden",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "oden",
                    "food",
                    "japanese"
                ]
            },
            {
                "emoji": "🍣",
                "name": "sushi",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sushi",
                    "food",
                    "fish",
                    "japanese",
                    "rice"
                ]
            },
            {
                "emoji": "🍤",
                "name": "fried shrimp",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fried_shrimp",
                    "food",
                    "animal",
                    "appetizer",
                    "summer"
                ]
            },
            {
                "emoji": "🍥",
                "name": "fish cake with swirl",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fish_cake_with_swirl",
                    "food",
                    "japan",
                    "sea",
                    "beach",
                    "narutomaki",
                    "pink",
                    "swirl",
                    "kamaboko",
                    "surimi",
                    "ramen"
                ]
            },
            {
                "emoji": "🥮",
                "name": "moon cake",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "moon_cake",
                    "food",
                    "autumn",
                    "dessert"
                ]
            },
            {
                "emoji": "🍡",
                "name": "dango",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dango",
                    "food",
                    "dessert",
                    "sweet",
                    "japanese",
                    "barbecue",
                    "meat"
                ]
            },
            {
                "emoji": "🥟",
                "name": "dumpling",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "dumpling",
                    "food",
                    "empanada",
                    "pierogi",
                    "potsticker",
                    "gyoza"
                ]
            },
            {
                "emoji": "🥠",
                "name": "fortune cookie",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "fortune_cookie",
                    "food",
                    "prophecy",
                    "dessert"
                ]
            },
            {
                "emoji": "🥡",
                "name": "takeout box",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "takeout_box",
                    "food",
                    "leftovers"
                ]
            },
            {
                "emoji": "🦀",
                "name": "crab",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "crab",
                    "animal",
                    "crustacean"
                ]
            },
            {
                "emoji": "🦞",
                "name": "lobster",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "lobster",
                    "animal",
                    "nature",
                    "bisque",
                    "claws",
                    "seafood"
                ]
            },
            {
                "emoji": "🦐",
                "name": "shrimp",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "shrimp",
                    "animal",
                    "ocean",
                    "nature",
                    "seafood"
                ]
            },
            {
                "emoji": "🦑",
                "name": "squid",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "squid",
                    "animal",
                    "nature",
                    "ocean",
                    "sea"
                ]
            },
            {
                "emoji": "🍦",
                "name": "soft ice cream",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "soft_ice_cream",
                    "food",
                    "hot",
                    "dessert",
                    "summer"
                ]
            },
            {
                "emoji": "🍧",
                "name": "shaved ice",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "shaved_ice",
                    "hot",
                    "dessert",
                    "summer"
                ]
            },
            {
                "emoji": "🍨",
                "name": "ice cream",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ice_cream",
                    "food",
                    "hot",
                    "dessert"
                ]
            },
            {
                "emoji": "🍩",
                "name": "doughnut",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "doughnut",
                    "food",
                    "dessert",
                    "snack",
                    "sweet",
                    "donut"
                ]
            },
            {
                "emoji": "🍪",
                "name": "cookie",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cookie",
                    "food",
                    "snack",
                    "oreo",
                    "chocolate",
                    "sweet",
                    "dessert"
                ]
            },
            {
                "emoji": "🎂",
                "name": "birthday cake",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "birthday_cake",
                    "food",
                    "dessert",
                    "cake"
                ]
            },
            {
                "emoji": "🍰",
                "name": "shortcake",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "shortcake",
                    "food",
                    "dessert"
                ]
            },
            {
                "emoji": "🧁",
                "name": "cupcake",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "cupcake",
                    "food",
                    "dessert",
                    "bakery",
                    "sweet"
                ]
            },
            {
                "emoji": "🥧",
                "name": "pie",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "pie",
                    "food",
                    "dessert",
                    "pastry"
                ]
            },
            {
                "emoji": "🍫",
                "name": "chocolate bar",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "chocolate_bar",
                    "food",
                    "snack",
                    "dessert",
                    "sweet"
                ]
            },
            {
                "emoji": "🍬",
                "name": "search",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "search",
                    "snack",
                    "dessert",
                    "sweet",
                    "lolly"
                ]
            },
            {
                "emoji": "🍭",
                "name": "lollipop",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "lollipop",
                    "food",
                    "snack",
                    "search",
                    "sweet"
                ]
            },
            {
                "emoji": "🍮",
                "name": "custard",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "custard",
                    "dessert",
                    "food"
                ]
            },
            {
                "emoji": "🍯",
                "name": "honey pot",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "honey_pot",
                    "bees",
                    "sweet",
                    "kitchen"
                ]
            },
            {
                "emoji": "🍼",
                "name": "baby bottle",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "baby_bottle",
                    "food",
                    "container",
                    "milk"
                ]
            },
            {
                "emoji": "🥛",
                "name": "glass of milk",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "glass_of_milk",
                    "beverage",
                    "drink",
                    "cow"
                ]
            },
            {
                "emoji": "☕",
                "name": "hot beverage",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hot_beverage",
                    "beverage",
                    "caffeine",
                    "latte",
                    "espresso",
                    "coffee",
                    "mug"
                ]
            },
            {
                "emoji": "🍵",
                "name": "teacup without handle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "teacup_without_handle",
                    "drink",
                    "bowl",
                    "breakfast",
                    "green",
                    "british"
                ]
            },
            {
                "emoji": "🍶",
                "name": "sake",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sake",
                    "wine",
                    "drink",
                    "drunk",
                    "beverage",
                    "japanese",
                    "alcohol",
                    "booze"
                ]
            },
            {
                "emoji": "🍾",
                "name": "bottle with popping cork",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "bottle_with_popping_cork",
                    "drink",
                    "wine",
                    "bottle",
                    "celebration"
                ]
            },
            {
                "emoji": "🍷",
                "name": "wine glass",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "wine_glass",
                    "drink",
                    "beverage",
                    "drunk",
                    "alcohol",
                    "booze"
                ]
            },
            {
                "emoji": "🍸",
                "name": "cocktail glass",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cocktail_glass",
                    "drink",
                    "drunk",
                    "alcohol",
                    "beverage",
                    "booze",
                    "mojito"
                ]
            },
            {
                "emoji": "🍹",
                "name": "tropical drink",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tropical_drink",
                    "beverage",
                    "cocktail",
                    "summer",
                    "beach",
                    "alcohol",
                    "booze",
                    "mojito"
                ]
            },
            {
                "emoji": "🍺",
                "name": "beer mug",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "beer_mug",
                    "relax",
                    "beverage",
                    "drink",
                    "drunk",
                    "party",
                    "pub",
                    "summer",
                    "alcohol",
                    "booze"
                ]
            },
            {
                "emoji": "🍻",
                "name": "clinking beer mugs",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "clinking_beer_mugs",
                    "relax",
                    "beverage",
                    "drink",
                    "drunk",
                    "party",
                    "pub",
                    "summer",
                    "alcohol",
                    "booze"
                ]
            },
            {
                "emoji": "🥂",
                "name": "clinking glasses",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "clinking_glasses",
                    "beverage",
                    "drink",
                    "party",
                    "alcohol",
                    "celebrate",
                    "cheers",
                    "wine",
                    "champagne",
                    "toast"
                ]
            },
            {
                "emoji": "🥃",
                "name": "tumbler glass",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "tumbler_glass",
                    "drink",
                    "beverage",
                    "drunk",
                    "alcohol",
                    "liquor",
                    "booze",
                    "bourbon",
                    "scotch",
                    "whisky",
                    "glass",
                    "shot"
                ]
            },
            {
                "emoji": "🥤",
                "name": "cup with straw",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "cup_with_straw",
                    "drink",
                    "soda"
                ]
            },
            {
                "emoji": "🥢",
                "name": "chopsticks",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "chopsticks",
                    "food"
                ]
            },
            {
                "emoji": "🍽️",
                "name": "fork and knife with plate",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "fork_and_knife_with_plate",
                    "food",
                    "eat",
                    "meal",
                    "lunch",
                    "dinner",
                    "restaurant"
                ]
            },
            {
                "emoji": "🍴",
                "name": "fork and knife",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fork_and_knife",
                    "cutlery",
                    "kitchen"
                ]
            },
            {
                "emoji": "🥄",
                "name": "spoon",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "spoon",
                    "cutlery",
                    "kitchen",
                    "tableware"
                ]
            },
            {
                "emoji": "🔪",
                "name": "kitchen knife",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "kitchen_knife",
                    "knife",
                    "blade",
                    "cutlery",
                    "kitchen",
                    "weapon"
                ]
            },
            {
                "emoji": "🏺",
                "name": "amphora",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "amphora",
                    "vase",
                    "jar"
                ]
            }
        ]
    },
    {
        "title": "travel_places",
        "icon": "🌍",
        "data": [
            {
                "emoji": "🌍",
                "name": "globe showing Europe-Africa",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "globe_showing_europe_africa",
                    "globe",
                    "world",
                    "international"
                ]
            },
            {
                "emoji": "🌎",
                "name": "globe showing Americas",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "globe_showing_americas",
                    "globe",
                    "world",
                    "USA",
                    "international"
                ]
            },
            {
                "emoji": "🌏",
                "name": "globe showing Asia-Australia",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "globe_showing_asia_australia",
                    "globe",
                    "world",
                    "east",
                    "international"
                ]
            },
            {
                "emoji": "🌐",
                "name": "globe with meridians",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "globe_with_meridians",
                    "earth",
                    "international",
                    "world",
                    "internet",
                    "interweb",
                    "i18n"
                ]
            },
            {
                "emoji": "🗺️",
                "name": "world map",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "world_map",
                    "location",
                    "direction"
                ]
            },
            {
                "emoji": "🗾",
                "name": "map of Japan",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "map_of_japan",
                    "nation",
                    "country",
                    "japanese",
                    "asia"
                ]
            },
            {
                "emoji": "🧭",
                "name": "compass",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "compass",
                    "magnetic",
                    "navigation",
                    "orienteering"
                ]
            },
            {
                "emoji": "🏔️",
                "name": "snow-capped mountain",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "snow_capped_mountain",
                    "photo",
                    "nature",
                    "environment",
                    "winter",
                    "cold"
                ]
            },
            {
                "emoji": "⛰️",
                "name": "mountain",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "mountain",
                    "photo",
                    "nature",
                    "environment"
                ]
            },
            {
                "emoji": "🌋",
                "name": "volcano",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "volcano",
                    "photo",
                    "nature",
                    "disaster"
                ]
            },
            {
                "emoji": "🗻",
                "name": "mount fuji",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "mount_fuji",
                    "photo",
                    "mountain",
                    "nature",
                    "japanese"
                ]
            },
            {
                "emoji": "🏕️",
                "name": "camping",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "camping",
                    "photo",
                    "outdoors",
                    "tent"
                ]
            },
            {
                "emoji": "🏖️",
                "name": "beach with umbrella",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "beach_with_umbrella",
                    "weather",
                    "summer",
                    "sunny",
                    "sand",
                    "mojito"
                ]
            },
            {
                "emoji": "🏜️",
                "name": "desert",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "desert",
                    "photo",
                    "warm",
                    "saharah"
                ]
            },
            {
                "emoji": "🏝️",
                "name": "desert island",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "desert_island",
                    "photo",
                    "tropical",
                    "mojito"
                ]
            },
            {
                "emoji": "🏞️",
                "name": "national park",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "national_park",
                    "photo",
                    "environment",
                    "nature"
                ]
            },
            {
                "emoji": "🏟️",
                "name": "stadium",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "stadium",
                    "photo",
                    "place",
                    "sports",
                    "concert",
                    "venue"
                ]
            },
            {
                "emoji": "🏛️",
                "name": "classical building",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "classical_building",
                    "art",
                    "culture",
                    "history"
                ]
            },
            {
                "emoji": "🏗️",
                "name": "building construction",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "building_construction",
                    "wip",
                    "working",
                    "progress"
                ]
            },
            {
                "emoji": "🧱",
                "name": "brick",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "brick",
                    "bricks"
                ]
            },
            {
                "emoji": "🏘️",
                "name": "houses",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "houses",
                    "buildings",
                    "photo"
                ]
            },
            {
                "emoji": "🏚️",
                "name": "derelict house",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "derelict_house",
                    "abandon",
                    "evict",
                    "broken",
                    "building"
                ]
            },
            {
                "emoji": "🏠",
                "name": "house",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "house",
                    "building",
                    "home"
                ]
            },
            {
                "emoji": "🏡",
                "name": "house with garden",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "house_with_garden",
                    "home",
                    "plant",
                    "nature"
                ]
            },
            {
                "emoji": "🏢",
                "name": "office building",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "office_building",
                    "building",
                    "bureau",
                    "work"
                ]
            },
            {
                "emoji": "🏣",
                "name": "Japanese post office",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_post_office",
                    "building",
                    "envelope",
                    "communication"
                ]
            },
            {
                "emoji": "🏤",
                "name": "post office",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "post_office",
                    "building",
                    "email"
                ]
            },
            {
                "emoji": "🏥",
                "name": "hospital",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hospital",
                    "building",
                    "health",
                    "surgery",
                    "doctor"
                ]
            },
            {
                "emoji": "🏦",
                "name": "bank",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bank",
                    "building",
                    "money",
                    "sales",
                    "cash",
                    "business",
                    "enterprise"
                ]
            },
            {
                "emoji": "🏨",
                "name": "hotel",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hotel",
                    "building",
                    "accomodation",
                    "checkin"
                ]
            },
            {
                "emoji": "🏩",
                "name": "love hotel",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "love_hotel",
                    "like",
                    "affection",
                    "dating"
                ]
            },
            {
                "emoji": "🏪",
                "name": "convenience store",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "convenience_store",
                    "building",
                    "shopping",
                    "groceries"
                ]
            },
            {
                "emoji": "🏫",
                "name": "school",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "school",
                    "building",
                    "student",
                    "education",
                    "learn",
                    "teach"
                ]
            },
            {
                "emoji": "🏬",
                "name": "department store",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "department_store",
                    "building",
                    "shopping",
                    "mall"
                ]
            },
            {
                "emoji": "🏭",
                "name": "factory",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "factory",
                    "building",
                    "industry",
                    "pollution",
                    "smoke"
                ]
            },
            {
                "emoji": "🏯",
                "name": "Japanese castle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_castle",
                    "photo",
                    "building"
                ]
            },
            {
                "emoji": "🏰",
                "name": "castle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "castle",
                    "building",
                    "royalty",
                    "history"
                ]
            },
            {
                "emoji": "💒",
                "name": "wedding",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "wedding",
                    "love",
                    "like",
                    "affection",
                    "couple",
                    "marriage",
                    "bride",
                    "groom"
                ]
            },
            {
                "emoji": "🗼",
                "name": "Tokyo tower",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tokyo_tower",
                    "photo",
                    "japanese"
                ]
            },
            {
                "emoji": "🗽",
                "name": "Statue of Liberty",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "statue_of_liberty",
                    "american",
                    "newyork"
                ]
            },
            {
                "emoji": "⛪",
                "name": "church",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "church",
                    "building",
                    "religion",
                    "christ"
                ]
            },
            {
                "emoji": "🕌",
                "name": "mosque",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "mosque",
                    "islam",
                    "worship",
                    "minaret"
                ]
            },
            {
                "emoji": "🕍",
                "name": "synagogue",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "synagogue",
                    "judaism",
                    "worship",
                    "temple",
                    "jewish"
                ]
            },
            {
                "emoji": "⛩️",
                "name": "shinto shrine",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "shinto_shrine",
                    "temple",
                    "japan",
                    "kyoto"
                ]
            },
            {
                "emoji": "🕋",
                "name": "kaaba",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "kaaba",
                    "mecca",
                    "mosque",
                    "islam"
                ]
            },
            {
                "emoji": "⛲",
                "name": "fountain",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fountain",
                    "photo",
                    "summer",
                    "water",
                    "fresh"
                ]
            },
            {
                "emoji": "⛺",
                "name": "tent",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tent",
                    "photo",
                    "camping",
                    "outdoors"
                ]
            },
            {
                "emoji": "🌁",
                "name": "foggy",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "foggy",
                    "photo",
                    "mountain"
                ]
            },
            {
                "emoji": "🌃",
                "name": "night with stars",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "night_with_stars",
                    "evening",
                    "city",
                    "downtown"
                ]
            },
            {
                "emoji": "🏙️",
                "name": "cityscape",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "cityscape",
                    "photo",
                    "night life",
                    "urban"
                ]
            },
            {
                "emoji": "🌄",
                "name": "sunrise over mountains",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sunrise_over_mountains",
                    "view",
                    "vacation",
                    "photo"
                ]
            },
            {
                "emoji": "🌅",
                "name": "sunrise",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sunrise",
                    "morning",
                    "view",
                    "vacation",
                    "photo"
                ]
            },
            {
                "emoji": "🌆",
                "name": "cityscape at dusk",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cityscape_at_dusk",
                    "photo",
                    "evening",
                    "sky",
                    "buildings"
                ]
            },
            {
                "emoji": "🌇",
                "name": "sunset",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sunset",
                    "photo",
                    "good morning",
                    "dawn"
                ]
            },
            {
                "emoji": "🌉",
                "name": "bridge at night",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bridge_at_night",
                    "photo",
                    "sanfrancisco"
                ]
            },
            {
                "emoji": "♨️",
                "name": "hot springs",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hot_springs",
                    "bath",
                    "warm",
                    "relax"
                ]
            },
            {
                "emoji": "🎠",
                "name": "carousel horse",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "carousel_horse",
                    "photo",
                    "carnival"
                ]
            },
            {
                "emoji": "🎡",
                "name": "ferris wheel",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ferris_wheel",
                    "photo",
                    "carnival",
                    "londoneye"
                ]
            },
            {
                "emoji": "🎢",
                "name": "roller coaster",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "roller_coaster",
                    "carnival",
                    "playground",
                    "photo",
                    "fun"
                ]
            },
            {
                "emoji": "💈",
                "name": "barber pole",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "barber_pole",
                    "hair",
                    "salon",
                    "style"
                ]
            },
            {
                "emoji": "🎪",
                "name": "circus tent",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "circus_tent",
                    "festival",
                    "carnival",
                    "party"
                ]
            },
            {
                "emoji": "🚂",
                "name": "locomotive",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "locomotive",
                    "transportation",
                    "vehicle",
                    "train"
                ]
            },
            {
                "emoji": "🚃",
                "name": "railway car",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "railway_car",
                    "transportation",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚄",
                "name": "high-speed train",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "high_speed_train",
                    "transportation",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚅",
                "name": "bullet train",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bullet_train",
                    "transportation",
                    "vehicle",
                    "speed",
                    "fast",
                    "public",
                    "travel"
                ]
            },
            {
                "emoji": "🚆",
                "name": "train",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "train",
                    "transportation",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚇",
                "name": "metro",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "metro",
                    "transportation",
                    "blue-square",
                    "mrt",
                    "underground",
                    "tube"
                ]
            },
            {
                "emoji": "🚈",
                "name": "light rail",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "light_rail",
                    "transportation",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚉",
                "name": "station",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "station",
                    "transportation",
                    "vehicle",
                    "public"
                ]
            },
            {
                "emoji": "🚊",
                "name": "tram",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "tram",
                    "transportation",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚝",
                "name": "monorail",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "monorail",
                    "transportation",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚞",
                "name": "mountain railway",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "mountain_railway",
                    "transportation",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚋",
                "name": "tram car",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "tram_car",
                    "transportation",
                    "vehicle",
                    "carriage",
                    "public",
                    "travel"
                ]
            },
            {
                "emoji": "🚌",
                "name": "bus",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bus",
                    "car",
                    "vehicle",
                    "transportation"
                ]
            },
            {
                "emoji": "🚍",
                "name": "oncoming bus",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "oncoming_bus",
                    "vehicle",
                    "transportation"
                ]
            },
            {
                "emoji": "🚎",
                "name": "trolleybus",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "trolleybus",
                    "bart",
                    "transportation",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚐",
                "name": "minibus",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "minibus",
                    "vehicle",
                    "car",
                    "transportation"
                ]
            },
            {
                "emoji": "🚑",
                "name": "ambulance",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ambulance",
                    "health",
                    "911",
                    "hospital"
                ]
            },
            {
                "emoji": "🚒",
                "name": "fire engine",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fire_engine",
                    "transportation",
                    "cars",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚓",
                "name": "police car",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "police_car",
                    "vehicle",
                    "cars",
                    "transportation",
                    "law",
                    "legal",
                    "enforcement"
                ]
            },
            {
                "emoji": "🚔",
                "name": "oncoming police car",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "oncoming_police_car",
                    "vehicle",
                    "law",
                    "legal",
                    "enforcement",
                    "911"
                ]
            },
            {
                "emoji": "🚕",
                "name": "taxi",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "taxi",
                    "uber",
                    "vehicle",
                    "cars",
                    "transportation"
                ]
            },
            {
                "emoji": "🚖",
                "name": "oncoming taxi",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "oncoming_taxi",
                    "vehicle",
                    "cars",
                    "uber"
                ]
            },
            {
                "emoji": "🚗",
                "name": "automobile",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "automobile",
                    "red",
                    "transportation",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚘",
                "name": "oncoming automobile",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "oncoming_automobile",
                    "car",
                    "vehicle",
                    "transportation"
                ]
            },
            {
                "emoji": "🚙",
                "name": "sport utility vehicle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sport_utility_vehicle",
                    "transportation",
                    "vehicle"
                ]
            },
            {
                "emoji": "🚚",
                "name": "delivery truck",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "delivery_truck",
                    "cars",
                    "transportation"
                ]
            },
            {
                "emoji": "🚛",
                "name": "articulated lorry",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "articulated_lorry",
                    "vehicle",
                    "cars",
                    "transportation",
                    "express"
                ]
            },
            {
                "emoji": "🚜",
                "name": "tractor",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "tractor",
                    "vehicle",
                    "car",
                    "farming",
                    "agriculture"
                ]
            },
            {
                "emoji": "🏎️",
                "name": "racing car",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "racing_car",
                    "sports",
                    "race",
                    "fast",
                    "formula",
                    "f1"
                ]
            },
            {
                "emoji": "🏍️",
                "name": "motorcycle",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "motorcycle",
                    "race",
                    "sports",
                    "fast"
                ]
            },
            {
                "emoji": "🛵",
                "name": "motor scooter",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "motor_scooter",
                    "vehicle",
                    "vespa",
                    "sasha"
                ]
            },
            {
                "emoji": "🚲",
                "name": "bicycle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bicycle",
                    "sports",
                    "bicycle",
                    "exercise",
                    "hipster"
                ]
            },
            {
                "emoji": "🛴",
                "name": "kick scooter",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "kick_scooter",
                    "vehicle",
                    "kick",
                    "razor"
                ]
            },
            {
                "emoji": "🛹",
                "name": "skateboard",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "skateboard",
                    "board"
                ]
            },
            {
                "emoji": "🚏",
                "name": "bus stop",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bus_stop",
                    "transportation",
                    "wait"
                ]
            },
            {
                "emoji": "🛣️",
                "name": "motorway",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "motorway",
                    "road",
                    "cupertino",
                    "interstate",
                    "highway"
                ]
            },
            {
                "emoji": "🛤️",
                "name": "railway track",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "railway_track",
                    "train",
                    "transportation"
                ]
            },
            {
                "emoji": "🛢️",
                "name": "oil drum",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "oil_drum",
                    "barrell"
                ]
            },
            {
                "emoji": "⛽",
                "name": "fuel pump",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fuel_pump",
                    "gas station",
                    "petroleum"
                ]
            },
            {
                "emoji": "🚨",
                "name": "police car light",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "police_car_light",
                    "police",
                    "ambulance",
                    "911",
                    "emergency",
                    "alert",
                    "error",
                    "pinged",
                    "law",
                    "legal"
                ]
            },
            {
                "emoji": "🚥",
                "name": "horizontal traffic light",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "horizontal_traffic_light",
                    "transportation",
                    "signal"
                ]
            },
            {
                "emoji": "🚦",
                "name": "vertical traffic light",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "vertical_traffic_light",
                    "transportation",
                    "driving"
                ]
            },
            {
                "emoji": "🛑",
                "name": "stop sign",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "stop_sign",
                    "stop"
                ]
            },
            {
                "emoji": "🚧",
                "name": "construction",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "construction",
                    "wip",
                    "progress",
                    "caution",
                    "warning"
                ]
            },
            {
                "emoji": "⚓",
                "name": "anchor",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "anchor",
                    "ship",
                    "ferry",
                    "sea",
                    "boat"
                ]
            },
            {
                "emoji": "⛵",
                "name": "sailboat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sailboat",
                    "ship",
                    "summer",
                    "transportation",
                    "water",
                    "sailing"
                ]
            },
            {
                "emoji": "🛶",
                "name": "canoe",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "canoe",
                    "boat",
                    "paddle",
                    "water",
                    "ship"
                ]
            },
            {
                "emoji": "🚤",
                "name": "speedboat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "speedboat",
                    "ship",
                    "transportation",
                    "vehicle",
                    "summer"
                ]
            },
            {
                "emoji": "🛳️",
                "name": "passenger ship",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "passenger_ship",
                    "yacht",
                    "cruise",
                    "ferry"
                ]
            },
            {
                "emoji": "⛴️",
                "name": "ferry",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "ferry",
                    "boat",
                    "ship",
                    "yacht"
                ]
            },
            {
                "emoji": "🛥️",
                "name": "motor boat",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "motor_boat",
                    "ship"
                ]
            },
            {
                "emoji": "🚢",
                "name": "ship",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ship",
                    "transportation",
                    "titanic",
                    "deploy"
                ]
            },
            {
                "emoji": "✈️",
                "name": "airplane",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "airplane",
                    "vehicle",
                    "transportation",
                    "flight",
                    "fly"
                ]
            },
            {
                "emoji": "🛩️",
                "name": "small airplane",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "small_airplane",
                    "flight",
                    "transportation",
                    "fly",
                    "vehicle"
                ]
            },
            {
                "emoji": "🛫",
                "name": "airplane departure",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "airplane_departure",
                    "airport",
                    "flight",
                    "landing"
                ]
            },
            {
                "emoji": "🛬",
                "name": "airplane arrival",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "airplane_arrival",
                    "airport",
                    "flight",
                    "boarding"
                ]
            },
            {
                "emoji": "💺",
                "name": "seat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "seat",
                    "sit",
                    "airplane",
                    "transport",
                    "bus",
                    "flight",
                    "fly"
                ]
            },
            {
                "emoji": "🚁",
                "name": "helicopter",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "helicopter",
                    "transportation",
                    "vehicle",
                    "fly"
                ]
            },
            {
                "emoji": "🚟",
                "name": "suspension railway",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "suspension_railway",
                    "vehicle",
                    "transportation"
                ]
            },
            {
                "emoji": "🚠",
                "name": "mountain cableway",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "mountain_cableway",
                    "transportation",
                    "vehicle",
                    "ski"
                ]
            },
            {
                "emoji": "🚡",
                "name": "aerial tramway",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "aerial_tramway",
                    "transportation",
                    "vehicle",
                    "ski"
                ]
            },
            {
                "emoji": "🛰️",
                "name": "satellite",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "satellite",
                    "communication",
                    "gps",
                    "orbit",
                    "spaceflight",
                    "NASA",
                    "ISS"
                ]
            },
            {
                "emoji": "🚀",
                "name": "rocket",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "rocket",
                    "launch",
                    "ship",
                    "staffmode",
                    "NASA",
                    "outer space",
                    "outer_space",
                    "fly"
                ]
            },
            {
                "emoji": "🛸",
                "name": "flying saucer",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "flying_saucer",
                    "transportation",
                    "vehicle",
                    "ufo"
                ]
            },
            {
                "emoji": "🛎️",
                "name": "bellhop bell",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "bellhop_bell",
                    "service"
                ]
            },
            {
                "emoji": "🧳",
                "name": "luggage",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "luggage",
                    "packing",
                    "travel"
                ]
            },
            {
                "emoji": "⌛",
                "name": "hourglass done",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hourglass_done",
                    "time",
                    "clock",
                    "oldschool",
                    "limit",
                    "exam",
                    "quiz",
                    "test"
                ]
            },
            {
                "emoji": "⏳",
                "name": "hourglass not done",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hourglass_not_done",
                    "oldschool",
                    "time",
                    "countdown"
                ]
            },
            {
                "emoji": "⌚",
                "name": "watch",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "watch",
                    "time",
                    "accessories"
                ]
            },
            {
                "emoji": "⏰",
                "name": "alarm clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "alarm_clock",
                    "time",
                    "wake"
                ]
            },
            {
                "emoji": "⏱️",
                "name": "stopwatch",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "stopwatch",
                    "time",
                    "deadline"
                ]
            },
            {
                "emoji": "⏲️",
                "name": "timer clock",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "timer_clock",
                    "alarm"
                ]
            },
            {
                "emoji": "🕰️",
                "name": "mantelpiece clock",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "mantelpiece_clock",
                    "time"
                ]
            },
            {
                "emoji": "🕛",
                "name": "twelve o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "twelve_o_clock",
                    "12",
                    "00:00",
                    "0000",
                    "12:00",
                    "1200",
                    "time",
                    "noon",
                    "midnight",
                    "midday",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕧",
                "name": "twelve-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "twelve_thirty",
                    "00:30",
                    "0030",
                    "12:30",
                    "1230",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕐",
                "name": "one o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "one_o_clock",
                    "1",
                    "1:00",
                    "100",
                    "13:00",
                    "1300",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕜",
                "name": "one-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "one_thirty",
                    "1:30",
                    "130",
                    "13:30",
                    "1330",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕑",
                "name": "two o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "two_o_clock",
                    "2",
                    "2:00",
                    "200",
                    "14:00",
                    "1400",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕝",
                "name": "two-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "two_thirty",
                    "2:30",
                    "230",
                    "14:30",
                    "1430",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕒",
                "name": "three o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "three_o_clock",
                    "3",
                    "3:00",
                    "300",
                    "15:00",
                    "1500",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕞",
                "name": "three-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "three_thirty",
                    "3:30",
                    "330",
                    "15:30",
                    "1530",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕓",
                "name": "four o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "four_o_clock",
                    "4",
                    "4:00",
                    "400",
                    "16:00",
                    "1600",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕟",
                "name": "four-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "four_thirty",
                    "4:30",
                    "430",
                    "16:30",
                    "1630",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕔",
                "name": "five o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "five_o_clock",
                    "5",
                    "5:00",
                    "500",
                    "17:00",
                    "1700",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕠",
                "name": "five-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "five_thirty",
                    "5:30",
                    "530",
                    "17:30",
                    "1730",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕕",
                "name": "six o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "six_o_clock",
                    "6",
                    "6:00",
                    "600",
                    "18:00",
                    "1800",
                    "time",
                    "late",
                    "early",
                    "schedule",
                    "dawn",
                    "dusk"
                ]
            },
            {
                "emoji": "🕡",
                "name": "six-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "six_thirty",
                    "6:30",
                    "630",
                    "18:30",
                    "1830",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕖",
                "name": "seven o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "seven_o_clock",
                    "7",
                    "7:00",
                    "700",
                    "19:00",
                    "1900",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕢",
                "name": "seven-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "seven_thirty",
                    "7:30",
                    "730",
                    "19:30",
                    "1930",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕗",
                "name": "eight o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "eight_o_clock",
                    "8",
                    "8:00",
                    "800",
                    "20:00",
                    "2000",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕣",
                "name": "eight-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "eight_thirty",
                    "8:30",
                    "830",
                    "20:30",
                    "2030",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕘",
                "name": "nine o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "nine_o_clock",
                    "9",
                    "9:00",
                    "900",
                    "21:00",
                    "2100",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕤",
                "name": "nine-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "nine_thirty",
                    "9:30",
                    "930",
                    "21:30",
                    "2130",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕙",
                "name": "ten o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ten_o_clock",
                    "10",
                    "10:00",
                    "1000",
                    "22:00",
                    "2200",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕥",
                "name": "ten-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "ten_thirty",
                    "10:30",
                    "1030",
                    "22:30",
                    "2230",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕚",
                "name": "eleven o’clock",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "eleven_o_clock",
                    "11",
                    "11:00",
                    "1100",
                    "23:00",
                    "2300",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🕦",
                "name": "eleven-thirty",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "eleven_thirty",
                    "11:30",
                    "1130",
                    "23:30",
                    "2330",
                    "time",
                    "late",
                    "early",
                    "schedule"
                ]
            },
            {
                "emoji": "🌑",
                "name": "new moon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "new_moon",
                    "nature",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌒",
                "name": "waxing crescent moon",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "waxing_crescent_moon",
                    "nature",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌓",
                "name": "first quarter moon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "first_quarter_moon",
                    "nature",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌔",
                "name": "waxing gibbous moon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "waxing_gibbous_moon",
                    "nature",
                    "night",
                    "sky",
                    "gray",
                    "twilight",
                    "planet",
                    "space",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌕",
                "name": "full moon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "full_moon",
                    "nature",
                    "yellow",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌖",
                "name": "waning gibbous moon",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "waning_gibbous_moon",
                    "nature",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep",
                    "waxing_gibbous_moon"
                ]
            },
            {
                "emoji": "🌗",
                "name": "last quarter moon",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "last_quarter_moon",
                    "nature",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌘",
                "name": "waning crescent moon",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "waning_crescent_moon",
                    "nature",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌙",
                "name": "crescent moon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "crescent_moon",
                    "night",
                    "sleep",
                    "sky",
                    "evening",
                    "magic"
                ]
            },
            {
                "emoji": "🌚",
                "name": "new moon face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "new_moon_face",
                    "nature",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌛",
                "name": "first quarter moon face",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "first_quarter_moon_face",
                    "nature",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌜",
                "name": "last quarter moon face",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "last_quarter_moon_face",
                    "nature",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌡️",
                "name": "thermometer",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "thermometer",
                    "weather",
                    "temperature",
                    "hot",
                    "cold"
                ]
            },
            {
                "emoji": "☀️",
                "name": "sun",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sun",
                    "weather",
                    "nature",
                    "brightness",
                    "summer",
                    "beach",
                    "spring"
                ]
            },
            {
                "emoji": "🌝",
                "name": "full moon face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "full_moon_face",
                    "nature",
                    "twilight",
                    "planet",
                    "space",
                    "night",
                    "evening",
                    "sleep"
                ]
            },
            {
                "emoji": "🌞",
                "name": "sun with face",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "sun_with_face",
                    "nature",
                    "morning",
                    "sky"
                ]
            },
            {
                "emoji": "⭐",
                "name": "star",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "star",
                    "night",
                    "yellow"
                ]
            },
            {
                "emoji": "🌟",
                "name": "glowing star",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "glowing_star",
                    "night",
                    "sparkle",
                    "awesome",
                    "good",
                    "magic"
                ]
            },
            {
                "emoji": "🌠",
                "name": "shooting star",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "shooting_star",
                    "night",
                    "photo"
                ]
            },
            {
                "emoji": "🌌",
                "name": "milky way",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "milky_way",
                    "photo",
                    "space",
                    "stars"
                ]
            },
            {
                "emoji": "☁️",
                "name": "cloud",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cloud",
                    "weather",
                    "sky"
                ]
            },
            {
                "emoji": "⛅",
                "name": "sun behind cloud",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sun_behind_cloud",
                    "weather",
                    "nature",
                    "cloudy",
                    "morning",
                    "fall",
                    "spring"
                ]
            },
            {
                "emoji": "⛈️",
                "name": "cloud with lightning and rain",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "cloud_with_lightning_and_rain",
                    "weather",
                    "lightning"
                ]
            },
            {
                "emoji": "🌤️",
                "name": "sun behind small cloud",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "sun_behind_small_cloud",
                    "weather"
                ]
            },
            {
                "emoji": "🌥️",
                "name": "sun behind large cloud",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "sun_behind_large_cloud",
                    "weather"
                ]
            },
            {
                "emoji": "🌦️",
                "name": "sun behind rain cloud",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "sun_behind_rain_cloud",
                    "weather"
                ]
            },
            {
                "emoji": "🌧️",
                "name": "cloud with rain",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "cloud_with_rain",
                    "weather"
                ]
            },
            {
                "emoji": "🌨️",
                "name": "cloud with snow",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "cloud_with_snow",
                    "weather"
                ]
            },
            {
                "emoji": "🌩️",
                "name": "cloud with lightning",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "cloud_with_lightning",
                    "weather",
                    "thunder"
                ]
            },
            {
                "emoji": "🌪️",
                "name": "tornado",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "tornado",
                    "weather",
                    "cyclone",
                    "twister"
                ]
            },
            {
                "emoji": "🌫️",
                "name": "fog",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "fog",
                    "weather"
                ]
            },
            {
                "emoji": "🌬️",
                "name": "wind face",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "wind_face",
                    "gust",
                    "air"
                ]
            },
            {
                "emoji": "🌀",
                "name": "cyclone",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cyclone",
                    "weather",
                    "swirl",
                    "blue",
                    "cloud",
                    "vortex",
                    "spiral",
                    "whirlpool",
                    "spin",
                    "tornado",
                    "hurricane",
                    "typhoon"
                ]
            },
            {
                "emoji": "🌈",
                "name": "rainbow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "rainbow",
                    "nature",
                    "happy",
                    "unicorn_face",
                    "photo",
                    "sky",
                    "spring"
                ]
            },
            {
                "emoji": "🌂",
                "name": "closed umbrella",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "closed_umbrella",
                    "weather",
                    "rain",
                    "drizzle"
                ]
            },
            {
                "emoji": "☂️",
                "name": "umbrella",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "umbrella",
                    "weather",
                    "spring"
                ]
            },
            {
                "emoji": "☔",
                "name": "umbrella with rain drops",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "umbrella_with_rain_drops",
                    "rainy",
                    "weather",
                    "spring"
                ]
            },
            {
                "emoji": "⛱️",
                "name": "umbrella on ground",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "umbrella_on_ground",
                    "weather",
                    "summer"
                ]
            },
            {
                "emoji": "⚡",
                "name": "high voltage",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "high_voltage",
                    "thunder",
                    "weather",
                    "lightning bolt",
                    "fast"
                ]
            },
            {
                "emoji": "❄️",
                "name": "snowflake",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "snowflake",
                    "winter",
                    "season",
                    "cold",
                    "weather",
                    "christmas",
                    "xmas"
                ]
            },
            {
                "emoji": "☃️",
                "name": "snowman",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "snowman",
                    "winter",
                    "season",
                    "cold",
                    "weather",
                    "christmas",
                    "xmas",
                    "frozen"
                ]
            },
            {
                "emoji": "⛄",
                "name": "snowman without snow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "snowman_without_snow",
                    "winter",
                    "season",
                    "cold",
                    "weather",
                    "christmas",
                    "xmas",
                    "frozen",
                    "without_snow"
                ]
            },
            {
                "emoji": "☄️",
                "name": "comet",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "comet",
                    "space"
                ]
            },
            {
                "emoji": "🔥",
                "name": "fire",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fire",
                    "hot",
                    "cook",
                    "flame"
                ]
            },
            {
                "emoji": "💧",
                "name": "droplet",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "droplet",
                    "water",
                    "drip",
                    "faucet",
                    "spring"
                ]
            },
            {
                "emoji": "🌊",
                "name": "water wave",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "water_wave",
                    "sea",
                    "water",
                    "wave",
                    "nature",
                    "tsunami",
                    "disaster"
                ]
            }
        ]
    },
    {
        "title": "activities",
        "icon": "🎃",
        "data": [
            {
                "emoji": "🎃",
                "name": "jack-o-lantern",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "jack_o_lantern",
                    "halloween",
                    "light",
                    "pumpkin",
                    "creepy",
                    "fall"
                ]
            },
            {
                "emoji": "🎄",
                "name": "Christmas tree",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "christmas_tree",
                    "festival",
                    "vacation",
                    "december",
                    "xmas",
                    "celebration"
                ]
            },
            {
                "emoji": "🎆",
                "name": "fireworks",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fireworks",
                    "photo",
                    "festival",
                    "carnival",
                    "congratulations"
                ]
            },
            {
                "emoji": "🎇",
                "name": "sparkler",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sparkler",
                    "stars",
                    "night",
                    "shine"
                ]
            },
            {
                "emoji": "🧨",
                "name": "firecracker",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "firecracker",
                    "dynamite",
                    "boom",
                    "explode",
                    "explosion",
                    "explosive"
                ]
            },
            {
                "emoji": "✨",
                "name": "sparkles",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sparkles",
                    "stars",
                    "shine",
                    "shiny",
                    "cool",
                    "awesome",
                    "good",
                    "magic"
                ]
            },
            {
                "emoji": "🎈",
                "name": "balloon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "balloon",
                    "party",
                    "celebration",
                    "birthday",
                    "circus"
                ]
            },
            {
                "emoji": "🎉",
                "name": "party popper",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "party_popper",
                    "party",
                    "congratulations",
                    "birthday",
                    "magic",
                    "circus",
                    "celebration",
                    "tada"
                ]
            },
            {
                "emoji": "🎊",
                "name": "confetti ball",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "confetti_ball",
                    "festival",
                    "party",
                    "birthday",
                    "circus"
                ]
            },
            {
                "emoji": "🎋",
                "name": "tanabata tree",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tanabata_tree",
                    "plant",
                    "nature",
                    "branch",
                    "summer",
                    "bamboo",
                    "wish",
                    "star_festival",
                    "tanzaku"
                ]
            },
            {
                "emoji": "🎍",
                "name": "pine decoration",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pine_decoration",
                    "japanese",
                    "plant",
                    "nature",
                    "vegetable",
                    "panda",
                    "new_years",
                    "bamboo"
                ]
            },
            {
                "emoji": "🎎",
                "name": "Japanese dolls",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_dolls",
                    "japanese",
                    "toy",
                    "kimono"
                ]
            },
            {
                "emoji": "🎏",
                "name": "carp streamer",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "carp_streamer",
                    "fish",
                    "japanese",
                    "koinobori",
                    "carp",
                    "banner"
                ]
            },
            {
                "emoji": "🎐",
                "name": "wind chime",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "wind_chime",
                    "nature",
                    "ding",
                    "spring",
                    "bell"
                ]
            },
            {
                "emoji": "🎑",
                "name": "moon viewing ceremony",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "moon_viewing_ceremony",
                    "photo",
                    "japan",
                    "asia",
                    "tsukimi"
                ]
            },
            {
                "emoji": "🧧",
                "name": "red envelope",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "red_envelope",
                    "gift"
                ]
            },
            {
                "emoji": "🎀",
                "name": "ribbon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ribbon",
                    "decoration",
                    "pink",
                    "girl",
                    "bowtie"
                ]
            },
            {
                "emoji": "🎁",
                "name": "wrapped gift",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "wrapped_gift",
                    "present",
                    "birthday",
                    "christmas",
                    "xmas"
                ]
            },
            {
                "emoji": "🎗️",
                "name": "reminder ribbon",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "reminder_ribbon",
                    "sports",
                    "cause",
                    "support",
                    "awareness"
                ]
            },
            {
                "emoji": "🎟️",
                "name": "admission tickets",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "admission_tickets",
                    "sports",
                    "concert",
                    "entrance"
                ]
            },
            {
                "emoji": "🎫",
                "name": "ticket",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ticket",
                    "event",
                    "concert",
                    "pass"
                ]
            },
            {
                "emoji": "🎖️",
                "name": "military medal",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "military_medal",
                    "award",
                    "winning",
                    "army"
                ]
            },
            {
                "emoji": "🏆",
                "name": "trophy",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "trophy",
                    "win",
                    "award",
                    "contest",
                    "place",
                    "ftw",
                    "ceremony"
                ]
            },
            {
                "emoji": "🏅",
                "name": "sports medal",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "sports_medal",
                    "award",
                    "winning"
                ]
            },
            {
                "emoji": "🥇",
                "name": "1st place medal",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "1st_place_medal",
                    "award",
                    "winning",
                    "first"
                ]
            },
            {
                "emoji": "🥈",
                "name": "2nd place medal",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "2nd_place_medal",
                    "award",
                    "second"
                ]
            },
            {
                "emoji": "🥉",
                "name": "3rd place medal",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "3rd_place_medal",
                    "award",
                    "third"
                ]
            },
            {
                "emoji": "⚽",
                "name": "soccer ball",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "soccer_ball",
                    "sports",
                    "football"
                ]
            },
            {
                "emoji": "⚾",
                "name": "baseball",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "baseball",
                    "sports",
                    "balls"
                ]
            },
            {
                "emoji": "🥎",
                "name": "softball",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "softball",
                    "sports",
                    "balls"
                ]
            },
            {
                "emoji": "🏀",
                "name": "basketball",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "basketball",
                    "sports",
                    "balls",
                    "NBA"
                ]
            },
            {
                "emoji": "🏐",
                "name": "volleyball",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "volleyball",
                    "sports",
                    "balls"
                ]
            },
            {
                "emoji": "🏈",
                "name": "american football",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "american_football",
                    "sports",
                    "balls",
                    "NFL"
                ]
            },
            {
                "emoji": "🏉",
                "name": "rugby football",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "rugby_football",
                    "sports",
                    "team"
                ]
            },
            {
                "emoji": "🎾",
                "name": "tennis",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tennis",
                    "sports",
                    "balls",
                    "green"
                ]
            },
            {
                "emoji": "🥏",
                "name": "flying disc",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "flying_disc",
                    "sports",
                    "frisbee",
                    "ultimate"
                ]
            },
            {
                "emoji": "🎳",
                "name": "bowling",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bowling",
                    "sports",
                    "fun",
                    "play"
                ]
            },
            {
                "emoji": "🏏",
                "name": "cricket game",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "cricket_game",
                    "sports"
                ]
            },
            {
                "emoji": "🏑",
                "name": "field hockey",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "field_hockey",
                    "sports"
                ]
            },
            {
                "emoji": "🏒",
                "name": "ice hockey",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "ice_hockey",
                    "sports"
                ]
            },
            {
                "emoji": "🥍",
                "name": "lacrosse",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "lacrosse",
                    "sports",
                    "ball",
                    "stick"
                ]
            },
            {
                "emoji": "🏓",
                "name": "ping pong",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "ping_pong",
                    "sports",
                    "pingpong"
                ]
            },
            {
                "emoji": "🏸",
                "name": "badminton",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "badminton",
                    "sports"
                ]
            },
            {
                "emoji": "🥊",
                "name": "boxing glove",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "boxing_glove",
                    "sports",
                    "fighting"
                ]
            },
            {
                "emoji": "🥋",
                "name": "martial arts uniform",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "martial_arts_uniform",
                    "judo",
                    "karate",
                    "taekwondo"
                ]
            },
            {
                "emoji": "🥅",
                "name": "goal net",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "goal_net",
                    "sports"
                ]
            },
            {
                "emoji": "⛳",
                "name": "flag in hole",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_in_hole",
                    "sports",
                    "business",
                    "flag",
                    "hole",
                    "summer"
                ]
            },
            {
                "emoji": "⛸️",
                "name": "ice skate",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "ice_skate",
                    "sports"
                ]
            },
            {
                "emoji": "🎣",
                "name": "fishing pole",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fishing_pole",
                    "food",
                    "hobby",
                    "summer"
                ]
            },
            {
                "emoji": "🎽",
                "name": "running shirt",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "running_shirt",
                    "play",
                    "pageant"
                ]
            },
            {
                "emoji": "🎿",
                "name": "skis",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "skis",
                    "sports",
                    "winter",
                    "cold",
                    "snow"
                ]
            },
            {
                "emoji": "🛷",
                "name": "sled",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "sled",
                    "sleigh",
                    "luge",
                    "toboggan"
                ]
            },
            {
                "emoji": "🥌",
                "name": "curling stone",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "curling_stone",
                    "sports"
                ]
            },
            {
                "emoji": "🎯",
                "name": "bullseye",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "direct_hit",
                    "game",
                    "play",
                    "bar",
                    "target",
                    "bullseye"
                ]
            },
            {
                "emoji": "🔫",
                "name": "water pistol",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pistol",
                    "violence",
                    "weapon",
                    "pistol",
                    "revolver"
                ]
            },
            {
                "emoji": "🎱",
                "name": "pool 8 ball",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pool_8_ball",
                    "pool",
                    "hobby",
                    "game",
                    "luck",
                    "magic"
                ]
            },
            {
                "emoji": "🔮",
                "name": "crystal ball",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "crystal_ball",
                    "disco",
                    "party",
                    "magic",
                    "circus",
                    "fortune_teller"
                ]
            },
            {
                "emoji": "🎮",
                "name": "video game",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "video_game",
                    "play",
                    "console",
                    "PS4",
                    "controller"
                ]
            },
            {
                "emoji": "🕹️",
                "name": "joystick",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "joystick",
                    "game",
                    "play"
                ]
            },
            {
                "emoji": "🎰",
                "name": "slot machine",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "slot_machine",
                    "bet",
                    "gamble",
                    "vegas",
                    "fruit machine",
                    "luck",
                    "casino"
                ]
            },
            {
                "emoji": "🎲",
                "name": "game die",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "game_die",
                    "dice",
                    "random",
                    "tabletop",
                    "play",
                    "luck"
                ]
            },
            {
                "emoji": "🧩",
                "name": "puzzle piece",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "puzzle_piece",
                    "interlocking",
                    "puzzle",
                    "piece"
                ]
            },
            {
                "emoji": "🧸",
                "name": "teddy bear",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "teddy_bear",
                    "plush",
                    "stuffed"
                ]
            },
            {
                "emoji": "♠️",
                "name": "spade suit",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "spade_suit",
                    "poker",
                    "cards",
                    "suits",
                    "magic"
                ]
            },
            {
                "emoji": "♥️",
                "name": "heart suit",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "heart_suit",
                    "poker",
                    "cards",
                    "magic",
                    "suits"
                ]
            },
            {
                "emoji": "♦️",
                "name": "diamond suit",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "diamond_suit",
                    "poker",
                    "cards",
                    "magic",
                    "suits"
                ]
            },
            {
                "emoji": "♣️",
                "name": "club suit",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "club_suit",
                    "poker",
                    "cards",
                    "magic",
                    "suits"
                ]
            },
            {
                "emoji": "♟️",
                "name": "chess pawn",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "chess_pawn",
                    "expendable"
                ]
            },
            {
                "emoji": "🃏",
                "name": "joker",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "joker",
                    "poker",
                    "cards",
                    "game",
                    "play",
                    "magic"
                ]
            },
            {
                "emoji": "🀄",
                "name": "mahjong red dragon",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "mahjong_red_dragon",
                    "game",
                    "play",
                    "chinese",
                    "kanji"
                ]
            },
            {
                "emoji": "🎴",
                "name": "flower playing cards",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flower_playing_cards",
                    "game",
                    "sunset",
                    "red"
                ]
            },
            {
                "emoji": "🎭",
                "name": "performing arts",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "performing_arts",
                    "acting",
                    "theater",
                    "drama"
                ]
            },
            {
                "emoji": "🖼️",
                "name": "framed picture",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "framed_picture",
                    "photography"
                ]
            },
            {
                "emoji": "🎨",
                "name": "artist palette",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "artist_palette",
                    "design",
                    "paint",
                    "draw",
                    "colors"
                ]
            },
            {
                "emoji": "🧵",
                "name": "thread",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "thread",
                    "needle",
                    "sewing",
                    "spool",
                    "string"
                ]
            },
            {
                "emoji": "🧶",
                "name": "yarn",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "yarn",
                    "ball",
                    "crochet",
                    "knit"
                ]
            }
        ]
    },
    {
        "title": "objects",
        "icon": "👓",
        "data": [
            {
                "emoji": "👓",
                "name": "glasses",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "glasses",
                    "fashion",
                    "accessories",
                    "eyesight",
                    "nerdy",
                    "dork",
                    "geek"
                ]
            },
            {
                "emoji": "🕶️",
                "name": "sunglasses",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "sunglasses",
                    "face",
                    "cool",
                    "accessories"
                ]
            },
            {
                "emoji": "🥽",
                "name": "goggles",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "goggles",
                    "eyes",
                    "protection",
                    "safety"
                ]
            },
            {
                "emoji": "🥼",
                "name": "lab coat",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "lab_coat",
                    "doctor",
                    "experiment",
                    "scientist",
                    "chemist"
                ]
            },
            {
                "emoji": "👔",
                "name": "necktie",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "necktie",
                    "shirt",
                    "suitup",
                    "formal",
                    "fashion",
                    "cloth",
                    "business"
                ]
            },
            {
                "emoji": "👕",
                "name": "t-shirt",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "t_shirt",
                    "fashion",
                    "cloth",
                    "casual",
                    "shirt",
                    "tee"
                ]
            },
            {
                "emoji": "👖",
                "name": "jeans",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "jeans",
                    "fashion",
                    "shopping"
                ]
            },
            {
                "emoji": "🧣",
                "name": "scarf",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "scarf",
                    "neck",
                    "winter",
                    "clothes"
                ]
            },
            {
                "emoji": "🧤",
                "name": "gloves",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "gloves",
                    "hands",
                    "winter",
                    "clothes"
                ]
            },
            {
                "emoji": "🧥",
                "name": "coat",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "coat",
                    "jacket"
                ]
            },
            {
                "emoji": "🧦",
                "name": "socks",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "socks",
                    "stockings",
                    "clothes"
                ]
            },
            {
                "emoji": "👗",
                "name": "dress",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dress",
                    "clothes",
                    "fashion",
                    "shopping"
                ]
            },
            {
                "emoji": "👘",
                "name": "kimono",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "kimono",
                    "dress",
                    "fashion",
                    "women",
                    "female",
                    "japanese"
                ]
            },
            {
                "emoji": "👙",
                "name": "bikini",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bikini",
                    "swimming",
                    "female",
                    "woman",
                    "girl",
                    "fashion",
                    "beach",
                    "summer"
                ]
            },
            {
                "emoji": "👚",
                "name": "woman’s clothes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "woman_s_clothes",
                    "fashion",
                    "shopping_bags",
                    "female"
                ]
            },
            {
                "emoji": "👛",
                "name": "purse",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "purse",
                    "fashion",
                    "accessories",
                    "money",
                    "sales",
                    "shopping"
                ]
            },
            {
                "emoji": "👜",
                "name": "handbag",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "handbag",
                    "fashion",
                    "accessory",
                    "accessories",
                    "shopping"
                ]
            },
            {
                "emoji": "👝",
                "name": "clutch bag",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "clutch_bag",
                    "bag",
                    "accessories",
                    "shopping"
                ]
            },
            {
                "emoji": "🛍️",
                "name": "shopping bags",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "shopping_bags",
                    "mall",
                    "buy",
                    "purchase"
                ]
            },
            {
                "emoji": "🎒",
                "name": "backpack",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "backpack",
                    "student",
                    "education",
                    "bag",
                    "backpack"
                ]
            },
            {
                "emoji": "👞",
                "name": "man’s shoe",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "man_s_shoe",
                    "fashion",
                    "male"
                ]
            },
            {
                "emoji": "👟",
                "name": "running shoe",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "running_shoe",
                    "shoes",
                    "sports",
                    "sneakers"
                ]
            },
            {
                "emoji": "🥾",
                "name": "hiking boot",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "hiking_boot",
                    "backpacking",
                    "camping",
                    "hiking"
                ]
            },
            {
                "emoji": "🥿",
                "name": "flat shoe",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "flat_shoe",
                    "ballet",
                    "slip-on",
                    "slipper"
                ]
            },
            {
                "emoji": "👠",
                "name": "high-heeled shoe",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "high_heeled_shoe",
                    "fashion",
                    "shoes",
                    "female",
                    "pumps",
                    "stiletto"
                ]
            },
            {
                "emoji": "👡",
                "name": "woman’s sandal",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "woman_s_sandal",
                    "shoes",
                    "fashion",
                    "flip flops"
                ]
            },
            {
                "emoji": "👢",
                "name": "woman’s boot",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "woman_s_boot",
                    "shoes",
                    "fashion"
                ]
            },
            {
                "emoji": "👑",
                "name": "crown",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "crown",
                    "king",
                    "kod",
                    "leader",
                    "royalty",
                    "lord"
                ]
            },
            {
                "emoji": "👒",
                "name": "woman’s hat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "woman_s_hat",
                    "fashion",
                    "accessories",
                    "female",
                    "lady",
                    "spring"
                ]
            },
            {
                "emoji": "🎩",
                "name": "top hat",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "top_hat",
                    "magic",
                    "gentleman",
                    "classy",
                    "circus"
                ]
            },
            {
                "emoji": "🎓",
                "name": "graduation cap",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "graduation_cap",
                    "school",
                    "college",
                    "degree",
                    "university",
                    "graduation",
                    "cap",
                    "hat",
                    "legal",
                    "learn",
                    "education"
                ]
            },
            {
                "emoji": "🧢",
                "name": "billed cap",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "billed_cap",
                    "cap",
                    "baseball"
                ]
            },
            {
                "emoji": "⛑️",
                "name": "rescue worker’s helmet",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "rescue_worker_s_helmet",
                    "construction",
                    "build"
                ]
            },
            {
                "emoji": "📿",
                "name": "prayer beads",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "prayer_beads",
                    "dhikr",
                    "religious"
                ]
            },
            {
                "emoji": "💄",
                "name": "lipstick",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "lipstick",
                    "female",
                    "girl",
                    "fashion",
                    "woman"
                ]
            },
            {
                "emoji": "💍",
                "name": "ring",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ring",
                    "wedding",
                    "propose",
                    "marriage",
                    "valentines",
                    "diamond",
                    "fashion",
                    "jewelry",
                    "gem",
                    "engagement"
                ]
            },
            {
                "emoji": "💎",
                "name": "gem stone",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "gem_stone",
                    "blue",
                    "ruby",
                    "diamond",
                    "jewelry"
                ]
            },
            {
                "emoji": "🔇",
                "name": "muted speaker",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "muted_speaker",
                    "sound",
                    "volume",
                    "silence",
                    "quiet"
                ]
            },
            {
                "emoji": "🔈",
                "name": "speaker low volume",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "speaker_low_volume",
                    "sound",
                    "volume",
                    "silence",
                    "broadcast"
                ]
            },
            {
                "emoji": "🔉",
                "name": "speaker medium volume",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "speaker_medium_volume",
                    "volume",
                    "speaker",
                    "broadcast"
                ]
            },
            {
                "emoji": "🔊",
                "name": "speaker high volume",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "speaker_high_volume",
                    "volume",
                    "noise",
                    "noisy",
                    "speaker",
                    "broadcast"
                ]
            },
            {
                "emoji": "📢",
                "name": "loudspeaker",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "loudspeaker",
                    "volume",
                    "sound"
                ]
            },
            {
                "emoji": "📣",
                "name": "megaphone",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "megaphone",
                    "sound",
                    "speaker",
                    "volume"
                ]
            },
            {
                "emoji": "📯",
                "name": "postal horn",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "postal_horn",
                    "instrument",
                    "music"
                ]
            },
            {
                "emoji": "🔔",
                "name": "bell",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bell",
                    "sound",
                    "notification",
                    "christmas",
                    "xmas",
                    "chime"
                ]
            },
            {
                "emoji": "🔕",
                "name": "bell with slash",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "bell_with_slash",
                    "sound",
                    "volume",
                    "mute",
                    "quiet",
                    "silent"
                ]
            },
            {
                "emoji": "🎼",
                "name": "musical score",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "musical_score",
                    "treble",
                    "clef",
                    "compose"
                ]
            },
            {
                "emoji": "🎵",
                "name": "musical note",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "musical_note",
                    "score",
                    "tone",
                    "sound"
                ]
            },
            {
                "emoji": "🎶",
                "name": "musical notes",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "musical_notes",
                    "music",
                    "score"
                ]
            },
            {
                "emoji": "🎙️",
                "name": "studio microphone",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "studio_microphone",
                    "sing",
                    "recording",
                    "artist",
                    "talkshow"
                ]
            },
            {
                "emoji": "🎚️",
                "name": "level slider",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "level_slider",
                    "scale"
                ]
            },
            {
                "emoji": "🎛️",
                "name": "control knobs",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "control_knobs",
                    "dial"
                ]
            },
            {
                "emoji": "🎤",
                "name": "microphone",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "microphone",
                    "sound",
                    "music",
                    "PA",
                    "sing",
                    "talkshow"
                ]
            },
            {
                "emoji": "🎧",
                "name": "headphone",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "headphone",
                    "music",
                    "score",
                    "gadgets"
                ]
            },
            {
                "emoji": "📻",
                "name": "radio",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "radio",
                    "communication",
                    "music",
                    "podcast",
                    "program"
                ]
            },
            {
                "emoji": "🎷",
                "name": "saxophone",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "saxophone",
                    "music",
                    "instrument",
                    "jazz",
                    "blues"
                ]
            },
            {
                "emoji": "🎸",
                "name": "guitar",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "guitar",
                    "music",
                    "instrument"
                ]
            },
            {
                "emoji": "🎹",
                "name": "musical keyboard",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "musical_keyboard",
                    "piano",
                    "instrument",
                    "compose"
                ]
            },
            {
                "emoji": "🎺",
                "name": "trumpet",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "trumpet",
                    "music",
                    "brass"
                ]
            },
            {
                "emoji": "🎻",
                "name": "violin",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "violin",
                    "music",
                    "instrument",
                    "orchestra",
                    "symphony"
                ]
            },
            {
                "emoji": "🥁",
                "name": "drum",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "drum",
                    "music",
                    "instrument",
                    "drumsticks",
                    "snare"
                ]
            },
            {
                "emoji": "📱",
                "name": "mobile phone",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "mobile_phone",
                    "technology",
                    "apple",
                    "gadgets",
                    "dial"
                ]
            },
            {
                "emoji": "📲",
                "name": "mobile phone with arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "mobile_phone_with_arrow",
                    "iphone",
                    "incoming"
                ]
            },
            {
                "emoji": "☎️",
                "name": "telephone",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "telephone",
                    "technology",
                    "communication",
                    "dial",
                    "telephone"
                ]
            },
            {
                "emoji": "📞",
                "name": "telephone receiver",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "telephone_receiver",
                    "technology",
                    "communication",
                    "dial"
                ]
            },
            {
                "emoji": "📟",
                "name": "pager",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pager",
                    "bbcall",
                    "oldschool",
                    "90s"
                ]
            },
            {
                "emoji": "📠",
                "name": "fax machine",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fax_machine",
                    "communication",
                    "technology"
                ]
            },
            {
                "emoji": "🔋",
                "name": "battery",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "battery",
                    "power",
                    "energy",
                    "sustain"
                ]
            },
            {
                "emoji": "🔌",
                "name": "electric plug",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "electric_plug",
                    "charger",
                    "power"
                ]
            },
            {
                "emoji": "💻",
                "name": "laptop",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "laptop",
                    "technology",
                    "laptop",
                    "screen",
                    "display",
                    "monitor"
                ]
            },
            {
                "emoji": "🖥️",
                "name": "desktop computer",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "desktop_computer",
                    "technology",
                    "computing",
                    "screen"
                ]
            },
            {
                "emoji": "🖨️",
                "name": "printer",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "printer",
                    "paper",
                    "ink"
                ]
            },
            {
                "emoji": "⌨️",
                "name": "keyboard",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "keyboard",
                    "technology",
                    "computer",
                    "type",
                    "input",
                    "text"
                ]
            },
            {
                "emoji": "🖱️",
                "name": "computer mouse",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "computer_mouse",
                    "click"
                ]
            },
            {
                "emoji": "🖲️",
                "name": "trackball",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "trackball",
                    "technology",
                    "trackpad"
                ]
            },
            {
                "emoji": "💽",
                "name": "computer disk",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "computer_disk",
                    "technology",
                    "record",
                    "data",
                    "disk",
                    "90s"
                ]
            },
            {
                "emoji": "💾",
                "name": "floppy disk",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "floppy_disk",
                    "oldschool",
                    "technology",
                    "save",
                    "90s",
                    "80s"
                ]
            },
            {
                "emoji": "💿",
                "name": "optical disk",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "optical_disk",
                    "technology",
                    "dvd",
                    "disk",
                    "disc",
                    "90s"
                ]
            },
            {
                "emoji": "📀",
                "name": "dvd",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dvd",
                    "cd",
                    "disk",
                    "disc"
                ]
            },
            {
                "emoji": "🧮",
                "name": "abacus",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "abacus",
                    "calculation"
                ]
            },
            {
                "emoji": "🎥",
                "name": "movie camera",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "movie_camera",
                    "film",
                    "record"
                ]
            },
            {
                "emoji": "🎞️",
                "name": "film frames",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "film_frames",
                    "movie"
                ]
            },
            {
                "emoji": "📽️",
                "name": "film projector",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "film_projector",
                    "video",
                    "tape",
                    "record",
                    "movie"
                ]
            },
            {
                "emoji": "🎬",
                "name": "clapper board",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "clapper_board",
                    "movie",
                    "film",
                    "record"
                ]
            },
            {
                "emoji": "📺",
                "name": "television",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "television",
                    "technology",
                    "program",
                    "oldschool",
                    "show",
                    "television"
                ]
            },
            {
                "emoji": "📷",
                "name": "camera",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "camera",
                    "gadgets",
                    "photography"
                ]
            },
            {
                "emoji": "📸",
                "name": "camera with flash",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "camera_with_flash",
                    "photography",
                    "gadgets"
                ]
            },
            {
                "emoji": "📹",
                "name": "video camera",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "video_camera",
                    "film",
                    "record"
                ]
            },
            {
                "emoji": "📼",
                "name": "videocassette",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "videocassette",
                    "record",
                    "video",
                    "oldschool",
                    "90s",
                    "80s"
                ]
            },
            {
                "emoji": "🔍",
                "name": "magnifying glass tilted left",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "magnifying_glass_tilted_left",
                    "search",
                    "zoom",
                    "find",
                    "detective"
                ]
            },
            {
                "emoji": "🔎",
                "name": "magnifying glass tilted right",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "magnifying_glass_tilted_right",
                    "search",
                    "zoom",
                    "find",
                    "detective"
                ]
            },
            {
                "emoji": "🕯️",
                "name": "candle",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "candle",
                    "fire",
                    "wax"
                ]
            },
            {
                "emoji": "💡",
                "name": "light bulb",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "light_bulb",
                    "light",
                    "electricity",
                    "idea"
                ]
            },
            {
                "emoji": "🔦",
                "name": "flashlight",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flashlight",
                    "dark",
                    "camping",
                    "sight",
                    "night"
                ]
            },
            {
                "emoji": "🏮",
                "name": "red paper lantern",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "red_paper_lantern",
                    "light",
                    "paper",
                    "halloween",
                    "spooky"
                ]
            },
            {
                "emoji": "📔",
                "name": "notebook with decorative cover",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "notebook_with_decorative_cover",
                    "classroom",
                    "notes",
                    "record",
                    "paper",
                    "study"
                ]
            },
            {
                "emoji": "📕",
                "name": "closed book",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "closed_book",
                    "read",
                    "library",
                    "knowledge",
                    "textbook",
                    "learn"
                ]
            },
            {
                "emoji": "📖",
                "name": "open book",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "open_book",
                    "book",
                    "read",
                    "library",
                    "knowledge",
                    "literature",
                    "learn",
                    "study"
                ]
            },
            {
                "emoji": "📗",
                "name": "green book",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "green_book",
                    "read",
                    "library",
                    "knowledge",
                    "study"
                ]
            },
            {
                "emoji": "📘",
                "name": "blue book",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "blue_book",
                    "read",
                    "library",
                    "knowledge",
                    "learn",
                    "study"
                ]
            },
            {
                "emoji": "📙",
                "name": "orange book",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "orange_book",
                    "read",
                    "library",
                    "knowledge",
                    "textbook",
                    "study"
                ]
            },
            {
                "emoji": "📚",
                "name": "books",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "books",
                    "literature",
                    "library",
                    "study"
                ]
            },
            {
                "emoji": "📓",
                "name": "notebook",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "notebook",
                    "stationery",
                    "record",
                    "notes",
                    "paper",
                    "study"
                ]
            },
            {
                "emoji": "📒",
                "name": "ledger",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ledger",
                    "notes",
                    "paper"
                ]
            },
            {
                "emoji": "📃",
                "name": "page with curl",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "page_with_curl",
                    "documents",
                    "office",
                    "paper"
                ]
            },
            {
                "emoji": "📜",
                "name": "scroll",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "scroll",
                    "documents",
                    "ancient",
                    "history",
                    "paper"
                ]
            },
            {
                "emoji": "📄",
                "name": "page facing up",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "page_facing_up",
                    "documents",
                    "office",
                    "paper",
                    "information"
                ]
            },
            {
                "emoji": "📰",
                "name": "newspaper",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "newspaper",
                    "press",
                    "headline"
                ]
            },
            {
                "emoji": "🗞️",
                "name": "rolled-up newspaper",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "rolled_up_newspaper",
                    "press",
                    "headline"
                ]
            },
            {
                "emoji": "📑",
                "name": "bookmark tabs",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bookmark_tabs",
                    "favorite",
                    "save",
                    "order",
                    "tidy"
                ]
            },
            {
                "emoji": "🔖",
                "name": "bookmark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bookmark",
                    "favorite",
                    "label",
                    "save"
                ]
            },
            {
                "emoji": "🏷️",
                "name": "label",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "label",
                    "sale",
                    "tag"
                ]
            },
            {
                "emoji": "💰",
                "name": "money bag",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "money_bag",
                    "dollar",
                    "payment",
                    "coins",
                    "sale"
                ]
            },
            {
                "emoji": "💴",
                "name": "yen banknote",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "yen_banknote",
                    "money",
                    "sales",
                    "japanese",
                    "dollar",
                    "currency"
                ]
            },
            {
                "emoji": "💵",
                "name": "dollar banknote",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dollar_banknote",
                    "money",
                    "sales",
                    "bill",
                    "currency"
                ]
            },
            {
                "emoji": "💶",
                "name": "euro banknote",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "euro_banknote",
                    "money",
                    "sales",
                    "dollar",
                    "currency"
                ]
            },
            {
                "emoji": "💷",
                "name": "pound banknote",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "pound_banknote",
                    "british",
                    "sterling",
                    "money",
                    "sales",
                    "bills",
                    "uk",
                    "england",
                    "currency"
                ]
            },
            {
                "emoji": "💸",
                "name": "money with wings",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "money_with_wings",
                    "dollar",
                    "bills",
                    "payment",
                    "sale"
                ]
            },
            {
                "emoji": "💳",
                "name": "credit card",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "credit_card",
                    "money",
                    "sales",
                    "dollar",
                    "bill",
                    "payment",
                    "shopping"
                ]
            },
            {
                "emoji": "🧾",
                "name": "receipt",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "receipt",
                    "accounting",
                    "expenses"
                ]
            },
            {
                "emoji": "💹",
                "name": "chart increasing with yen",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "chart_increasing_with_yen",
                    "green-square",
                    "graph",
                    "presentation",
                    "stats"
                ]
            },
            {
                "emoji": "✉️",
                "name": "envelope",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "envelope",
                    "letter",
                    "postal",
                    "inbox",
                    "communication"
                ]
            },
            {
                "emoji": "📧",
                "name": "e-mail",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "e_mail",
                    "communication",
                    "inbox"
                ]
            },
            {
                "emoji": "📨",
                "name": "incoming envelope",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "incoming_envelope",
                    "email",
                    "inbox"
                ]
            },
            {
                "emoji": "📩",
                "name": "envelope with arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "envelope_with_arrow",
                    "email",
                    "communication"
                ]
            },
            {
                "emoji": "📤",
                "name": "outbox tray",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "outbox_tray",
                    "inbox",
                    "email"
                ]
            },
            {
                "emoji": "📥",
                "name": "inbox tray",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "inbox_tray",
                    "email",
                    "documents"
                ]
            },
            {
                "emoji": "📦",
                "name": "package",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "package",
                    "mail",
                    "gift",
                    "cardboard",
                    "box",
                    "moving"
                ]
            },
            {
                "emoji": "📫",
                "name": "closed mailbox with raised flag",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "closed_mailbox_with_raised_flag",
                    "email",
                    "inbox",
                    "communication"
                ]
            },
            {
                "emoji": "📪",
                "name": "closed mailbox with lowered flag",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "closed_mailbox_with_lowered_flag",
                    "email",
                    "communication",
                    "inbox"
                ]
            },
            {
                "emoji": "📬",
                "name": "open mailbox with raised flag",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "open_mailbox_with_raised_flag",
                    "email",
                    "inbox",
                    "communication"
                ]
            },
            {
                "emoji": "📭",
                "name": "open mailbox with lowered flag",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "open_mailbox_with_lowered_flag",
                    "email",
                    "inbox"
                ]
            },
            {
                "emoji": "📮",
                "name": "postbox",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "postbox",
                    "email",
                    "letter",
                    "envelope"
                ]
            },
            {
                "emoji": "🗳️",
                "name": "ballot box with ballot",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "ballot_box_with_ballot",
                    "election",
                    "vote"
                ]
            },
            {
                "emoji": "✏️",
                "name": "pencil",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pencil",
                    "stationery",
                    "write",
                    "paper",
                    "writing",
                    "school",
                    "study"
                ]
            },
            {
                "emoji": "✒️",
                "name": "black nib",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "black_nib",
                    "pen",
                    "stationery",
                    "writing",
                    "write"
                ]
            },
            {
                "emoji": "🖋️",
                "name": "fountain pen",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "fountain_pen",
                    "stationery",
                    "writing",
                    "write"
                ]
            },
            {
                "emoji": "🖊️",
                "name": "pen",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "pen",
                    "stationery",
                    "writing",
                    "write"
                ]
            },
            {
                "emoji": "🖌️",
                "name": "paintbrush",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "paintbrush",
                    "drawing",
                    "creativity",
                    "art"
                ]
            },
            {
                "emoji": "🖍️",
                "name": "crayon",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "crayon",
                    "drawing",
                    "creativity"
                ]
            },
            {
                "emoji": "📝",
                "name": "memo",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "memo",
                    "write",
                    "documents",
                    "stationery",
                    "pencil",
                    "paper",
                    "writing",
                    "legal",
                    "exam",
                    "quiz",
                    "test",
                    "study",
                    "compose"
                ]
            },
            {
                "emoji": "💼",
                "name": "briefcase",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "briefcase",
                    "business",
                    "documents",
                    "work",
                    "law",
                    "legal",
                    "job",
                    "career"
                ]
            },
            {
                "emoji": "📁",
                "name": "file folder",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "file_folder",
                    "documents",
                    "business",
                    "office"
                ]
            },
            {
                "emoji": "📂",
                "name": "open file folder",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "open_file_folder",
                    "documents",
                    "load"
                ]
            },
            {
                "emoji": "🗂️",
                "name": "card index dividers",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "card_index_dividers",
                    "organizing",
                    "business",
                    "stationery"
                ]
            },
            {
                "emoji": "📅",
                "name": "calendar",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "calendar",
                    "calendar",
                    "schedule"
                ]
            },
            {
                "emoji": "📆",
                "name": "tear-off calendar",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "tear_off_calendar",
                    "schedule",
                    "date",
                    "planning"
                ]
            },
            {
                "emoji": "🗒️",
                "name": "spiral notepad",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "spiral_notepad",
                    "memo",
                    "stationery"
                ]
            },
            {
                "emoji": "🗓️",
                "name": "spiral calendar",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "spiral_calendar",
                    "date",
                    "schedule",
                    "planning"
                ]
            },
            {
                "emoji": "📇",
                "name": "card index",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "card_index",
                    "business",
                    "stationery"
                ]
            },
            {
                "emoji": "📈",
                "name": "chart increasing",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "chart_increasing",
                    "graph",
                    "presentation",
                    "stats",
                    "recovery",
                    "business",
                    "economics",
                    "money",
                    "sales",
                    "good",
                    "success"
                ]
            },
            {
                "emoji": "📉",
                "name": "chart decreasing",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "chart_decreasing",
                    "graph",
                    "presentation",
                    "stats",
                    "recession",
                    "business",
                    "economics",
                    "money",
                    "sales",
                    "bad",
                    "failure"
                ]
            },
            {
                "emoji": "📊",
                "name": "bar chart",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bar_chart",
                    "graph",
                    "presentation",
                    "stats"
                ]
            },
            {
                "emoji": "📋",
                "name": "clipboard",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "clipboard",
                    "stationery",
                    "documents"
                ]
            },
            {
                "emoji": "📌",
                "name": "pushpin",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pushpin",
                    "stationery",
                    "mark",
                    "here"
                ]
            },
            {
                "emoji": "📍",
                "name": "round pushpin",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "round_pushpin",
                    "stationery",
                    "location",
                    "map",
                    "here"
                ]
            },
            {
                "emoji": "📎",
                "name": "paperclip",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "paperclip",
                    "documents",
                    "stationery"
                ]
            },
            {
                "emoji": "🖇️",
                "name": "linked paperclips",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "linked_paperclips",
                    "documents",
                    "stationery"
                ]
            },
            {
                "emoji": "📏",
                "name": "straight ruler",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "straight_ruler",
                    "stationery",
                    "calculate",
                    "length",
                    "math",
                    "school",
                    "drawing",
                    "architect",
                    "sketch"
                ]
            },
            {
                "emoji": "📐",
                "name": "triangular ruler",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "triangular_ruler",
                    "stationery",
                    "math",
                    "architect",
                    "sketch"
                ]
            },
            {
                "emoji": "✂️",
                "name": "scissors",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "scissors",
                    "stationery",
                    "cut"
                ]
            },
            {
                "emoji": "🗃️",
                "name": "card file box",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "card_file_box",
                    "business",
                    "stationery"
                ]
            },
            {
                "emoji": "🗄️",
                "name": "file cabinet",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "file_cabinet",
                    "filing",
                    "organizing"
                ]
            },
            {
                "emoji": "🗑️",
                "name": "wastebasket",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "wastebasket",
                    "bin",
                    "trash",
                    "rubbish",
                    "garbage",
                    "toss"
                ]
            },
            {
                "emoji": "🔒",
                "name": "locked",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "locked",
                    "security",
                    "password",
                    "padlock"
                ]
            },
            {
                "emoji": "🔓",
                "name": "unlocked",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "unlocked",
                    "privacy",
                    "security"
                ]
            },
            {
                "emoji": "🔏",
                "name": "locked with pen",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "locked_with_pen",
                    "security",
                    "secret"
                ]
            },
            {
                "emoji": "🔐",
                "name": "locked with key",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "locked_with_key",
                    "security",
                    "privacy"
                ]
            },
            {
                "emoji": "🔑",
                "name": "key",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "key",
                    "lock",
                    "door",
                    "password"
                ]
            },
            {
                "emoji": "🗝️",
                "name": "old key",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "old_key",
                    "lock",
                    "door",
                    "password"
                ]
            },
            {
                "emoji": "🔨",
                "name": "hammer",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hammer",
                    "tools",
                    "build",
                    "create"
                ]
            },
            {
                "emoji": "⛏️",
                "name": "pick",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "pick",
                    "tools",
                    "dig"
                ]
            },
            {
                "emoji": "⚒️",
                "name": "hammer and pick",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "hammer_and_pick",
                    "tools",
                    "build",
                    "create"
                ]
            },
            {
                "emoji": "🛠️",
                "name": "hammer and wrench",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "hammer_and_wrench",
                    "tools",
                    "build",
                    "create"
                ]
            },
            {
                "emoji": "🗡️",
                "name": "dagger",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "dagger",
                    "weapon"
                ]
            },
            {
                "emoji": "⚔️",
                "name": "crossed swords",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "crossed_swords",
                    "weapon"
                ]
            },
            {
                "emoji": "💣",
                "name": "bomb",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "bomb",
                    "boom",
                    "explode",
                    "explosion",
                    "terrorism"
                ]
            },
            {
                "emoji": "🏹",
                "name": "bow and arrow",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "bow_and_arrow",
                    "sports"
                ]
            },
            {
                "emoji": "🛡️",
                "name": "shield",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "shield",
                    "protection",
                    "security"
                ]
            },
            {
                "emoji": "🔧",
                "name": "wrench",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "wrench",
                    "tools",
                    "diy",
                    "ikea",
                    "fix",
                    "maintainer"
                ]
            },
            {
                "emoji": "🔩",
                "name": "nut and bolt",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "nut_and_bolt",
                    "handy",
                    "tools",
                    "fix"
                ]
            },
            {
                "emoji": "⚙️",
                "name": "gear",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "gear",
                    "cog"
                ]
            },
            {
                "emoji": "🗜️",
                "name": "clamp",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "clamp",
                    "tool"
                ]
            },
            {
                "emoji": "⚖️",
                "name": "balance scale",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "balance_scale",
                    "law",
                    "fairness",
                    "weight"
                ]
            },
            {
                "emoji": "🔗",
                "name": "link",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "link",
                    "rings",
                    "url"
                ]
            },
            {
                "emoji": "⛓️",
                "name": "chains",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "chains",
                    "lock",
                    "arrest"
                ]
            },
            {
                "emoji": "🧰",
                "name": "toolbox",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "toolbox",
                    "tools",
                    "diy",
                    "fix",
                    "maintainer",
                    "mechanic"
                ]
            },
            {
                "emoji": "🧲",
                "name": "magnet",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "magnet",
                    "attraction",
                    "magnetic"
                ]
            },
            {
                "emoji": "⚗️",
                "name": "alembic",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "alembic",
                    "distilling",
                    "science",
                    "experiment",
                    "chemistry"
                ]
            },
            {
                "emoji": "🧪",
                "name": "test tube",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "test_tube",
                    "chemistry",
                    "experiment",
                    "lab",
                    "science"
                ]
            },
            {
                "emoji": "🧫",
                "name": "petri dish",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "petri_dish",
                    "bacteria",
                    "biology",
                    "culture",
                    "lab"
                ]
            },
            {
                "emoji": "🧬",
                "name": "dna",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "dna",
                    "biologist",
                    "genetics",
                    "life"
                ]
            },
            {
                "emoji": "🔬",
                "name": "microscope",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "microscope",
                    "laboratory",
                    "experiment",
                    "zoomin",
                    "science",
                    "study"
                ]
            },
            {
                "emoji": "🔭",
                "name": "telescope",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "telescope",
                    "stars",
                    "space",
                    "zoom",
                    "science",
                    "astronomy"
                ]
            },
            {
                "emoji": "📡",
                "name": "satellite antenna",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "satellite_antenna",
                    "communication",
                    "future",
                    "radio",
                    "space"
                ]
            },
            {
                "emoji": "💉",
                "name": "syringe",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "syringe",
                    "health",
                    "hospital",
                    "drugs",
                    "blood",
                    "medicine",
                    "needle",
                    "doctor",
                    "nurse"
                ]
            },
            {
                "emoji": "💊",
                "name": "pill",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pill",
                    "health",
                    "medicine",
                    "doctor",
                    "pharmacy",
                    "drug"
                ]
            },
            {
                "emoji": "🚪",
                "name": "door",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "door",
                    "house",
                    "entry",
                    "exit"
                ]
            },
            {
                "emoji": "🛏️",
                "name": "bed",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "bed",
                    "sleep",
                    "rest"
                ]
            },
            {
                "emoji": "🛋️",
                "name": "couch and lamp",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "couch_and_lamp",
                    "read",
                    "chill"
                ]
            },
            {
                "emoji": "🚽",
                "name": "toilet",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "toilet",
                    "restroom",
                    "wc",
                    "washroom",
                    "bathroom",
                    "potty"
                ]
            },
            {
                "emoji": "🚿",
                "name": "shower",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "shower",
                    "clean",
                    "water",
                    "bathroom"
                ]
            },
            {
                "emoji": "🛁",
                "name": "bathtub",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "bathtub",
                    "clean",
                    "shower",
                    "bathroom"
                ]
            },
            {
                "emoji": "🧴",
                "name": "lotion bottle",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "lotion_bottle",
                    "moisturizer",
                    "sunscreen"
                ]
            },
            {
                "emoji": "🧷",
                "name": "safety pin",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "safety_pin",
                    "diaper"
                ]
            },
            {
                "emoji": "🧹",
                "name": "broom",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "broom",
                    "cleaning",
                    "sweeping",
                    "witch"
                ]
            },
            {
                "emoji": "🧺",
                "name": "basket",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "basket",
                    "laundry"
                ]
            },
            {
                "emoji": "🧻",
                "name": "roll of paper",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "roll_of_paper",
                    "roll"
                ]
            },
            {
                "emoji": "🧼",
                "name": "soap",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "soap",
                    "bar",
                    "bathing",
                    "cleaning",
                    "lather"
                ]
            },
            {
                "emoji": "🧽",
                "name": "sponge",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "sponge",
                    "absorbing",
                    "cleaning",
                    "porous"
                ]
            },
            {
                "emoji": "🧯",
                "name": "fire extinguisher",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "fire_extinguisher",
                    "quench"
                ]
            },
            {
                "emoji": "🛒",
                "name": "shopping cart",
                "v": "3.0",
                "toneEnabled": false,
                "keywords": [
                    "shopping_cart",
                    "trolley"
                ]
            },
            {
                "emoji": "🚬",
                "name": "cigarette",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cigarette",
                    "kills",
                    "tobacco",
                    "cigarette",
                    "joint",
                    "smoke"
                ]
            },
            {
                "emoji": "⚰️",
                "name": "coffin",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "coffin",
                    "vampire",
                    "dead",
                    "die",
                    "death",
                    "rip",
                    "graveyard",
                    "cemetery",
                    "casket",
                    "funeral",
                    "box"
                ]
            },
            {
                "emoji": "⚱️",
                "name": "funeral urn",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "funeral_urn",
                    "dead",
                    "die",
                    "death",
                    "rip",
                    "ashes"
                ]
            },
            {
                "emoji": "🧿",
                "name": "nazar amulet",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "nazar_amulet",
                    "bead",
                    "charm"
                ]
            },
            {
                "emoji": "🗿",
                "name": "moai",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "moai",
                    "rock",
                    "easter island",
                    "moai"
                ]
            }
        ]
    },
    {
        "title": "symbols",
        "icon": "🏧",
        "data": [
            {
                "emoji": "🏧",
                "name": "ATM sign",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "atm_sign",
                    "money",
                    "sales",
                    "cash",
                    "blue-square",
                    "payment",
                    "bank"
                ]
            },
            {
                "emoji": "🚮",
                "name": "litter in bin sign",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "litter_in_bin_sign",
                    "blue-square",
                    "sign",
                    "human",
                    "info"
                ]
            },
            {
                "emoji": "🚰",
                "name": "potable water",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "potable_water",
                    "blue-square",
                    "liquid",
                    "restroom",
                    "cleaning",
                    "faucet"
                ]
            },
            {
                "emoji": "♿",
                "name": "wheelchair symbol",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "wheelchair_symbol",
                    "blue-square",
                    "disabled",
                    "accessibility"
                ]
            },
            {
                "emoji": "🚹",
                "name": "men’s room",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "men_s_room",
                    "toilet",
                    "restroom",
                    "wc",
                    "blue-square",
                    "gender",
                    "male"
                ]
            },
            {
                "emoji": "🚺",
                "name": "women’s room",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "women_s_room",
                    "purple-square",
                    "woman",
                    "female",
                    "toilet",
                    "loo",
                    "restroom",
                    "gender"
                ]
            },
            {
                "emoji": "🚻",
                "name": "restroom",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "restroom",
                    "blue-square",
                    "toilet",
                    "refresh",
                    "wc",
                    "gender"
                ]
            },
            {
                "emoji": "🚼",
                "name": "baby symbol",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "baby_symbol",
                    "orange-square",
                    "child"
                ]
            },
            {
                "emoji": "🚾",
                "name": "water closet",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "water_closet",
                    "toilet",
                    "restroom",
                    "blue-square"
                ]
            },
            {
                "emoji": "🛂",
                "name": "passport control",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "passport_control",
                    "custom",
                    "blue-square"
                ]
            },
            {
                "emoji": "🛃",
                "name": "customs",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "customs",
                    "passport",
                    "border",
                    "blue-square"
                ]
            },
            {
                "emoji": "🛄",
                "name": "baggage claim",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "baggage_claim",
                    "blue-square",
                    "airport",
                    "transport"
                ]
            },
            {
                "emoji": "🛅",
                "name": "left luggage",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "left_luggage",
                    "blue-square",
                    "travel"
                ]
            },
            {
                "emoji": "⚠️",
                "name": "warning",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "warning",
                    "exclamation",
                    "wip",
                    "alert",
                    "error",
                    "problem",
                    "issue"
                ]
            },
            {
                "emoji": "🚸",
                "name": "children crossing",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "children_crossing",
                    "school",
                    "warning",
                    "danger",
                    "sign",
                    "driving",
                    "yellow-diamond"
                ]
            },
            {
                "emoji": "⛔",
                "name": "no entry",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "no_entry",
                    "limit",
                    "security",
                    "privacy",
                    "bad",
                    "denied",
                    "stop",
                    "circle"
                ]
            },
            {
                "emoji": "🚫",
                "name": "prohibited",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "prohibited",
                    "forbid",
                    "stop",
                    "limit",
                    "denied",
                    "disallow",
                    "circle"
                ]
            },
            {
                "emoji": "🚳",
                "name": "no bicycles",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "no_bicycles",
                    "cyclist",
                    "prohibited",
                    "circle"
                ]
            },
            {
                "emoji": "🚭",
                "name": "no smoking",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "no_smoking",
                    "cigarette",
                    "blue-square",
                    "smell",
                    "smoke"
                ]
            },
            {
                "emoji": "🚯",
                "name": "no littering",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "no_littering",
                    "trash",
                    "bin",
                    "garbage",
                    "circle"
                ]
            },
            {
                "emoji": "🚱",
                "name": "non-potable water",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "non_potable_water",
                    "drink",
                    "faucet",
                    "tap",
                    "circle"
                ]
            },
            {
                "emoji": "🚷",
                "name": "no pedestrians",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "no_pedestrians",
                    "rules",
                    "crossing",
                    "walking",
                    "circle"
                ]
            },
            {
                "emoji": "📵",
                "name": "no mobile phones",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "no_mobile_phones",
                    "iphone",
                    "mute",
                    "circle"
                ]
            },
            {
                "emoji": "🔞",
                "name": "no one under eighteen",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "no_one_under_eighteen",
                    "18",
                    "drink",
                    "pub",
                    "night",
                    "minor",
                    "circle"
                ]
            },
            {
                "emoji": "☢️",
                "name": "radioactive",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "radioactive",
                    "nuclear",
                    "danger"
                ]
            },
            {
                "emoji": "☣️",
                "name": "biohazard",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "biohazard",
                    "danger"
                ]
            },
            {
                "emoji": "⬆️",
                "name": "up arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "up_arrow",
                    "blue-square",
                    "continue",
                    "top",
                    "direction"
                ]
            },
            {
                "emoji": "↗️",
                "name": "up-right arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "up_right_arrow",
                    "blue-square",
                    "point",
                    "direction",
                    "diagonal",
                    "northeast"
                ]
            },
            {
                "emoji": "➡️",
                "name": "right arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "right_arrow",
                    "blue-square",
                    "next"
                ]
            },
            {
                "emoji": "↘️",
                "name": "down-right arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "down_right_arrow",
                    "blue-square",
                    "direction",
                    "diagonal",
                    "southeast"
                ]
            },
            {
                "emoji": "⬇️",
                "name": "down arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "down_arrow",
                    "blue-square",
                    "direction",
                    "bottom"
                ]
            },
            {
                "emoji": "↙️",
                "name": "down-left arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "down_left_arrow",
                    "blue-square",
                    "direction",
                    "diagonal",
                    "southwest"
                ]
            },
            {
                "emoji": "⬅️",
                "name": "left arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "left_arrow",
                    "blue-square",
                    "previous",
                    "back"
                ]
            },
            {
                "emoji": "↖️",
                "name": "up-left arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "up_left_arrow",
                    "blue-square",
                    "point",
                    "direction",
                    "diagonal",
                    "northwest"
                ]
            },
            {
                "emoji": "↕️",
                "name": "up-down arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "up_down_arrow",
                    "blue-square",
                    "direction",
                    "way",
                    "vertical"
                ]
            },
            {
                "emoji": "↔️",
                "name": "left-right arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "left_right_arrow",
                    "shape",
                    "direction",
                    "horizontal",
                    "sideways"
                ]
            },
            {
                "emoji": "↩️",
                "name": "right arrow curving left",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "right_arrow_curving_left",
                    "back",
                    "return",
                    "blue-square",
                    "undo",
                    "enter"
                ]
            },
            {
                "emoji": "↪️",
                "name": "left arrow curving right",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "left_arrow_curving_right",
                    "blue-square",
                    "return",
                    "rotate",
                    "direction"
                ]
            },
            {
                "emoji": "⤴️",
                "name": "right arrow curving up",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "right_arrow_curving_up",
                    "blue-square",
                    "direction",
                    "top"
                ]
            },
            {
                "emoji": "⤵️",
                "name": "right arrow curving down",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "right_arrow_curving_down",
                    "blue-square",
                    "direction",
                    "bottom"
                ]
            },
            {
                "emoji": "🔃",
                "name": "clockwise vertical arrows",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "clockwise_vertical_arrows",
                    "sync",
                    "cycle",
                    "round",
                    "repeat"
                ]
            },
            {
                "emoji": "🔄",
                "name": "counterclockwise arrows button",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "counterclockwise_arrows_button",
                    "blue-square",
                    "sync",
                    "cycle"
                ]
            },
            {
                "emoji": "🔙",
                "name": "BACK arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "back_arrow",
                    "arrow",
                    "words",
                    "return"
                ]
            },
            {
                "emoji": "🔚",
                "name": "END arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "end_arrow",
                    "words",
                    "arrow"
                ]
            },
            {
                "emoji": "🔛",
                "name": "ON! arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "on_arrow",
                    "arrow",
                    "words"
                ]
            },
            {
                "emoji": "🔜",
                "name": "SOON arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "soon_arrow",
                    "arrow",
                    "words"
                ]
            },
            {
                "emoji": "🔝",
                "name": "TOP arrow",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "top_arrow",
                    "words",
                    "blue-square"
                ]
            },
            {
                "emoji": "🛐",
                "name": "place of worship",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "place_of_worship",
                    "religion",
                    "church",
                    "temple",
                    "prayer"
                ]
            },
            {
                "emoji": "⚛️",
                "name": "atom symbol",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "atom_symbol",
                    "science",
                    "physics",
                    "chemistry"
                ]
            },
            {
                "emoji": "🕉️",
                "name": "om",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "om",
                    "hinduism",
                    "buddhism",
                    "sikhism",
                    "jainism"
                ]
            },
            {
                "emoji": "✡️",
                "name": "star of David",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "star_of_david",
                    "judaism"
                ]
            },
            {
                "emoji": "☸️",
                "name": "wheel of dharma",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "wheel_of_dharma",
                    "hinduism",
                    "buddhism",
                    "sikhism",
                    "jainism"
                ]
            },
            {
                "emoji": "☯️",
                "name": "yin yang",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "yin_yang",
                    "balance"
                ]
            },
            {
                "emoji": "✝️",
                "name": "latin cross",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "latin_cross",
                    "christianity"
                ]
            },
            {
                "emoji": "☦️",
                "name": "orthodox cross",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "orthodox_cross",
                    "suppedaneum",
                    "religion"
                ]
            },
            {
                "emoji": "☪️",
                "name": "star and crescent",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "star_and_crescent",
                    "islam"
                ]
            },
            {
                "emoji": "☮️",
                "name": "peace symbol",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "peace_symbol",
                    "hippie"
                ]
            },
            {
                "emoji": "🕎",
                "name": "menorah",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "menorah",
                    "hanukkah",
                    "candles",
                    "jewish"
                ]
            },
            {
                "emoji": "🔯",
                "name": "dotted six-pointed star",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "dotted_six_pointed_star",
                    "purple-square",
                    "religion",
                    "jewish",
                    "hexagram"
                ]
            },
            {
                "emoji": "♈",
                "name": "Aries",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "aries",
                    "sign",
                    "purple-square",
                    "zodiac",
                    "astrology"
                ]
            },
            {
                "emoji": "♉",
                "name": "Taurus",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "taurus",
                    "purple-square",
                    "sign",
                    "zodiac",
                    "astrology"
                ]
            },
            {
                "emoji": "♊",
                "name": "Gemini",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "gemini",
                    "sign",
                    "zodiac",
                    "purple-square",
                    "astrology"
                ]
            },
            {
                "emoji": "♋",
                "name": "Cancer",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cancer",
                    "sign",
                    "zodiac",
                    "purple-square",
                    "astrology"
                ]
            },
            {
                "emoji": "♌",
                "name": "Leo",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "leo",
                    "sign",
                    "purple-square",
                    "zodiac",
                    "astrology"
                ]
            },
            {
                "emoji": "♍",
                "name": "Virgo",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "virgo",
                    "sign",
                    "zodiac",
                    "purple-square",
                    "astrology"
                ]
            },
            {
                "emoji": "♎",
                "name": "Libra",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "libra",
                    "sign",
                    "purple-square",
                    "zodiac",
                    "astrology"
                ]
            },
            {
                "emoji": "♏",
                "name": "Scorpio",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "scorpio",
                    "sign",
                    "zodiac",
                    "purple-square",
                    "astrology",
                    "scorpio"
                ]
            },
            {
                "emoji": "♐",
                "name": "Sagittarius",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sagittarius",
                    "sign",
                    "zodiac",
                    "purple-square",
                    "astrology"
                ]
            },
            {
                "emoji": "♑",
                "name": "Capricorn",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "capricorn",
                    "sign",
                    "zodiac",
                    "purple-square",
                    "astrology"
                ]
            },
            {
                "emoji": "♒",
                "name": "Aquarius",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "aquarius",
                    "sign",
                    "purple-square",
                    "zodiac",
                    "astrology"
                ]
            },
            {
                "emoji": "♓",
                "name": "Pisces",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "pisces",
                    "purple-square",
                    "sign",
                    "zodiac",
                    "astrology"
                ]
            },
            {
                "emoji": "⛎",
                "name": "Ophiuchus",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ophiuchus",
                    "sign",
                    "purple-square",
                    "constellation",
                    "astrology"
                ]
            },
            {
                "emoji": "🔀",
                "name": "shuffle tracks button",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "shuffle_tracks_button",
                    "blue-square",
                    "shuffle",
                    "music",
                    "random"
                ]
            },
            {
                "emoji": "🔁",
                "name": "repeat button",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "repeat_button",
                    "loop",
                    "record"
                ]
            },
            {
                "emoji": "🔂",
                "name": "repeat single button",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "repeat_single_button",
                    "blue-square",
                    "loop"
                ]
            },
            {
                "emoji": "▶️",
                "name": "play button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "play_button",
                    "blue-square",
                    "right",
                    "direction",
                    "play"
                ]
            },
            {
                "emoji": "⏩",
                "name": "fast-forward button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fast_forward_button",
                    "blue-square",
                    "play",
                    "speed",
                    "continue"
                ]
            },
            {
                "emoji": "⏭️",
                "name": "next track button",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "next_track_button",
                    "forward",
                    "next",
                    "blue-square"
                ]
            },
            {
                "emoji": "⏯️",
                "name": "play or pause button",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "play_or_pause_button",
                    "blue-square",
                    "play",
                    "pause"
                ]
            },
            {
                "emoji": "◀️",
                "name": "reverse button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "reverse_button",
                    "blue-square",
                    "left",
                    "direction"
                ]
            },
            {
                "emoji": "⏪",
                "name": "fast reverse button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fast_reverse_button",
                    "play",
                    "blue-square"
                ]
            },
            {
                "emoji": "⏮️",
                "name": "last track button",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "last_track_button",
                    "backward"
                ]
            },
            {
                "emoji": "🔼",
                "name": "upwards button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "upwards_button",
                    "blue-square",
                    "triangle",
                    "direction",
                    "point",
                    "forward",
                    "top"
                ]
            },
            {
                "emoji": "⏫",
                "name": "fast up button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fast_up_button",
                    "blue-square",
                    "direction",
                    "top"
                ]
            },
            {
                "emoji": "🔽",
                "name": "downwards button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "downwards_button",
                    "blue-square",
                    "direction",
                    "bottom"
                ]
            },
            {
                "emoji": "⏬",
                "name": "fast down button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "fast_down_button",
                    "blue-square",
                    "direction",
                    "bottom"
                ]
            },
            {
                "emoji": "⏸️",
                "name": "pause button",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "pause_button",
                    "pause",
                    "blue-square"
                ]
            },
            {
                "emoji": "⏹️",
                "name": "stop button",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "stop_button",
                    "blue-square"
                ]
            },
            {
                "emoji": "⏺️",
                "name": "record button",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "record_button",
                    "blue-square"
                ]
            },
            {
                "emoji": "⏏️",
                "name": "eject button",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "eject_button",
                    "blue-square"
                ]
            },
            {
                "emoji": "🎦",
                "name": "cinema",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cinema",
                    "blue-square",
                    "record",
                    "film",
                    "movie",
                    "curtain",
                    "stage",
                    "theater"
                ]
            },
            {
                "emoji": "🔅",
                "name": "dim button",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "dim_button",
                    "sun",
                    "afternoon",
                    "warm",
                    "summer"
                ]
            },
            {
                "emoji": "🔆",
                "name": "bright button",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "bright_button",
                    "sun",
                    "light"
                ]
            },
            {
                "emoji": "📶",
                "name": "antenna bars",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "antenna_bars",
                    "blue-square",
                    "reception",
                    "phone",
                    "internet",
                    "connection",
                    "wifi",
                    "bluetooth",
                    "bars"
                ]
            },
            {
                "emoji": "📳",
                "name": "vibration mode",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "vibration_mode",
                    "orange-square",
                    "phone"
                ]
            },
            {
                "emoji": "📴",
                "name": "mobile phone off",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "mobile_phone_off",
                    "mute",
                    "orange-square",
                    "silence",
                    "quiet"
                ]
            },
            {
                "emoji": "♀️",
                "name": "female sign",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "female_sign",
                    "woman",
                    "women",
                    "lady",
                    "girl"
                ]
            },
            {
                "emoji": "♂️",
                "name": "male sign",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "male_sign",
                    "man",
                    "boy",
                    "men"
                ]
            },
            {
                "emoji": "✖️",
                "name": "multiply",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "multiplication_sign",
                    "math",
                    "calculation"
                ]
            },
            {
                "emoji": "➕",
                "name": "plus",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "plus_sign",
                    "math",
                    "calculation",
                    "addition",
                    "more",
                    "increase"
                ]
            },
            {
                "emoji": "➖",
                "name": "minus",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "minus_sign",
                    "math",
                    "calculation",
                    "subtract",
                    "less"
                ]
            },
            {
                "emoji": "➗",
                "name": "divide",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "division_sign",
                    "divide",
                    "math",
                    "calculation"
                ]
            },
            {
                "emoji": "♾️",
                "name": "infinity",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "infinity",
                    "forever"
                ]
            },
            {
                "emoji": "‼️",
                "name": "double exclamation mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "double_exclamation_mark",
                    "exclamation",
                    "surprise"
                ]
            },
            {
                "emoji": "⁉️",
                "name": "exclamation question mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "exclamation_question_mark",
                    "wat",
                    "punctuation",
                    "surprise"
                ]
            },
            {
                "emoji": "❓",
                "name": "red question mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "question_mark",
                    "doubt",
                    "confused"
                ]
            },
            {
                "emoji": "❔",
                "name": "white question mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "white_question_mark",
                    "doubts",
                    "gray",
                    "huh",
                    "confused"
                ]
            },
            {
                "emoji": "❕",
                "name": "white exclamation mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "white_exclamation_mark",
                    "surprise",
                    "punctuation",
                    "gray",
                    "wow",
                    "warning"
                ]
            },
            {
                "emoji": "❗",
                "name": "red exclamation mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "exclamation_mark",
                    "heavy_exclamation_mark",
                    "danger",
                    "surprise",
                    "punctuation",
                    "wow",
                    "warning"
                ]
            },
            {
                "emoji": "〰️",
                "name": "wavy dash",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "wavy_dash",
                    "draw",
                    "line",
                    "moustache",
                    "mustache",
                    "squiggle",
                    "scribble"
                ]
            },
            {
                "emoji": "💱",
                "name": "currency exchange",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "currency_exchange",
                    "money",
                    "sales",
                    "dollar",
                    "travel"
                ]
            },
            {
                "emoji": "💲",
                "name": "heavy dollar sign",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "heavy_dollar_sign",
                    "money",
                    "sales",
                    "payment",
                    "currency",
                    "buck"
                ]
            },
            {
                "emoji": "⚕️",
                "name": "medical symbol",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "medical_symbol",
                    "health",
                    "hospital"
                ]
            },
            {
                "emoji": "♻️",
                "name": "recycling symbol",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "recycling_symbol",
                    "arrow",
                    "environment",
                    "garbage",
                    "trash"
                ]
            },
            {
                "emoji": "⚜️",
                "name": "fleur-de-lis",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "fleur_de_lis",
                    "decorative",
                    "scout"
                ]
            },
            {
                "emoji": "🔱",
                "name": "trident emblem",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "trident_emblem",
                    "weapon",
                    "spear"
                ]
            },
            {
                "emoji": "📛",
                "name": "name badge",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "name_badge",
                    "fire",
                    "forbid"
                ]
            },
            {
                "emoji": "🔰",
                "name": "Japanese symbol for beginner",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_symbol_for_beginner",
                    "badge",
                    "shield"
                ]
            },
            {
                "emoji": "⭕",
                "name": "hollow red circle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "hollow_red_circle",
                    "circle",
                    "round"
                ]
            },
            {
                "emoji": "✅",
                "name": "check mark button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "check_mark_button",
                    "green-square",
                    "ok",
                    "agree",
                    "vote",
                    "election",
                    "answer",
                    "tick"
                ]
            },
            {
                "emoji": "☑️",
                "name": "check box with check",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "check_box_with_check",
                    "ok",
                    "agree",
                    "confirm",
                    "black-square",
                    "vote",
                    "election",
                    "yes",
                    "tick"
                ]
            },
            {
                "emoji": "✔️",
                "name": "check mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "check_mark",
                    "ok",
                    "nike",
                    "answer",
                    "yes",
                    "tick"
                ]
            },
            {
                "emoji": "❌",
                "name": "cross mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cross_mark",
                    "no",
                    "delete",
                    "remove",
                    "cancel",
                    "red"
                ]
            },
            {
                "emoji": "❎",
                "name": "cross mark button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cross_mark_button",
                    "x",
                    "green-square",
                    "no",
                    "deny"
                ]
            },
            {
                "emoji": "➰",
                "name": "curly loop",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "curly_loop",
                    "scribble",
                    "draw",
                    "shape",
                    "squiggle"
                ]
            },
            {
                "emoji": "➿",
                "name": "double curly loop",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "double_curly_loop",
                    "tape",
                    "cassette"
                ]
            },
            {
                "emoji": "〽️",
                "name": "part alternation mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "part_alternation_mark",
                    "graph",
                    "presentation",
                    "stats",
                    "business",
                    "economics",
                    "bad"
                ]
            },
            {
                "emoji": "✳️",
                "name": "eight-spoked asterisk",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "eight_spoked_asterisk",
                    "star",
                    "sparkle",
                    "green-square"
                ]
            },
            {
                "emoji": "✴️",
                "name": "eight-pointed star",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "eight_pointed_star",
                    "orange-square",
                    "shape",
                    "polygon"
                ]
            },
            {
                "emoji": "❇️",
                "name": "sparkle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sparkle",
                    "stars",
                    "green-square",
                    "awesome",
                    "good",
                    "fireworks"
                ]
            },
            {
                "emoji": "©️",
                "name": "copyright",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "copyright",
                    "ip",
                    "license",
                    "circle",
                    "law",
                    "legal"
                ]
            },
            {
                "emoji": "®️",
                "name": "registered",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "registered",
                    "alphabet",
                    "circle"
                ]
            },
            {
                "emoji": "™️",
                "name": "trade mark",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "trade_mark",
                    "trademark",
                    "brand",
                    "law",
                    "legal"
                ]
            },
            {
                "emoji": "#️⃣",
                "name": "keycap #",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_",
                    "symbol",
                    "blue-square",
                    "twitter"
                ]
            },
            {
                "emoji": "*️⃣",
                "name": "keycap *",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "keycap_",
                    "star",
                    "keycap"
                ]
            },
            {
                "emoji": "0️⃣",
                "name": "keycap 0",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_0",
                    "0",
                    "numbers",
                    "blue-square",
                    "null"
                ]
            },
            {
                "emoji": "1️⃣",
                "name": "keycap 1",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_1",
                    "blue-square",
                    "numbers",
                    "1"
                ]
            },
            {
                "emoji": "2️⃣",
                "name": "keycap 2",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_2",
                    "numbers",
                    "2",
                    "prime",
                    "blue-square"
                ]
            },
            {
                "emoji": "3️⃣",
                "name": "keycap 3",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_3",
                    "3",
                    "numbers",
                    "prime",
                    "blue-square"
                ]
            },
            {
                "emoji": "4️⃣",
                "name": "keycap 4",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_4",
                    "4",
                    "numbers",
                    "blue-square"
                ]
            },
            {
                "emoji": "5️⃣",
                "name": "keycap 5",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_5",
                    "5",
                    "numbers",
                    "blue-square",
                    "prime"
                ]
            },
            {
                "emoji": "6️⃣",
                "name": "keycap 6",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_6",
                    "6",
                    "numbers",
                    "blue-square"
                ]
            },
            {
                "emoji": "7️⃣",
                "name": "keycap 7",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_7",
                    "7",
                    "numbers",
                    "blue-square",
                    "prime"
                ]
            },
            {
                "emoji": "8️⃣",
                "name": "keycap 8",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_8",
                    "8",
                    "blue-square",
                    "numbers"
                ]
            },
            {
                "emoji": "9️⃣",
                "name": "keycap 9",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_9",
                    "blue-square",
                    "numbers",
                    "9"
                ]
            },
            {
                "emoji": "🔟",
                "name": "keycap 10",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "keycap_10",
                    "numbers",
                    "10",
                    "blue-square"
                ]
            },
            {
                "emoji": "🔠",
                "name": "input latin uppercase",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "input_latin_uppercase",
                    "alphabet",
                    "words",
                    "blue-square"
                ]
            },
            {
                "emoji": "🔡",
                "name": "input latin lowercase",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "input_latin_lowercase",
                    "blue-square",
                    "alphabet"
                ]
            },
            {
                "emoji": "🔢",
                "name": "input numbers",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "input_numbers",
                    "numbers",
                    "blue-square",
                    "1234",
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            {
                "emoji": "🔣",
                "name": "input symbols",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "input_symbols",
                    "blue-square",
                    "music",
                    "note",
                    "ampersand",
                    "percent",
                    "glyphs",
                    "characters"
                ]
            },
            {
                "emoji": "🔤",
                "name": "input latin letters",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "input_latin_letters",
                    "blue-square",
                    "alphabet"
                ]
            },
            {
                "emoji": "🅰️",
                "name": "A button (blood type)",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "a_button",
                    "red-square",
                    "alphabet",
                    "letter"
                ]
            },
            {
                "emoji": "🆎",
                "name": "AB button (blood type)",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ab_button",
                    "red-square",
                    "alphabet"
                ]
            },
            {
                "emoji": "🅱️",
                "name": "B button (blood type)",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "b_button",
                    "red-square",
                    "alphabet",
                    "letter"
                ]
            },
            {
                "emoji": "🆑",
                "name": "CL button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cl_button",
                    "alphabet",
                    "words",
                    "red-square"
                ]
            },
            {
                "emoji": "🆒",
                "name": "COOL button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "cool_button",
                    "words",
                    "blue-square"
                ]
            },
            {
                "emoji": "🆓",
                "name": "FREE button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "free_button",
                    "blue-square",
                    "words"
                ]
            },
            {
                "emoji": "ℹ️",
                "name": "information",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "information",
                    "blue-square",
                    "alphabet",
                    "letter"
                ]
            },
            {
                "emoji": "🆔",
                "name": "ID button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "id_button",
                    "purple-square",
                    "words"
                ]
            },
            {
                "emoji": "Ⓜ️",
                "name": "circled M",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "circled_m",
                    "alphabet",
                    "blue-circle",
                    "letter"
                ]
            },
            {
                "emoji": "🆕",
                "name": "NEW button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "new_button",
                    "blue-square",
                    "words",
                    "start"
                ]
            },
            {
                "emoji": "🆖",
                "name": "NG button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ng_button",
                    "blue-square",
                    "words",
                    "shape",
                    "icon"
                ]
            },
            {
                "emoji": "🅾️",
                "name": "O button (blood type)",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "o_button",
                    "alphabet",
                    "red-square",
                    "letter"
                ]
            },
            {
                "emoji": "🆗",
                "name": "OK button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "ok_button",
                    "good",
                    "agree",
                    "yes",
                    "blue-square"
                ]
            },
            {
                "emoji": "🅿️",
                "name": "P button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "p_button",
                    "cars",
                    "blue-square",
                    "alphabet",
                    "letter"
                ]
            },
            {
                "emoji": "🆘",
                "name": "SOS button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "sos_button",
                    "help",
                    "red-square",
                    "words",
                    "emergency",
                    "911"
                ]
            },
            {
                "emoji": "🆙",
                "name": "UP! button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "up_button",
                    "blue-square",
                    "above",
                    "high"
                ]
            },
            {
                "emoji": "🆚",
                "name": "VS button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "vs_button",
                    "words",
                    "orange-square"
                ]
            },
            {
                "emoji": "🈁",
                "name": "Japanese “here” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_here_button",
                    "blue-square",
                    "here",
                    "katakana",
                    "japanese",
                    "destination"
                ]
            },
            {
                "emoji": "🈂️",
                "name": "Japanese “service charge” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_service_charge_button",
                    "japanese",
                    "blue-square",
                    "katakana"
                ]
            },
            {
                "emoji": "🈷️",
                "name": "Japanese “monthly amount” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_monthly_amount_button",
                    "chinese",
                    "month",
                    "moon",
                    "japanese",
                    "orange-square",
                    "kanji"
                ]
            },
            {
                "emoji": "🈶",
                "name": "Japanese “not free of charge” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_not_free_of_charge_button",
                    "orange-square",
                    "chinese",
                    "have",
                    "kanji"
                ]
            },
            {
                "emoji": "🈯",
                "name": "Japanese “reserved” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_reserved_button",
                    "chinese",
                    "point",
                    "green-square",
                    "kanji"
                ]
            },
            {
                "emoji": "🉐",
                "name": "Japanese “bargain” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_bargain_button",
                    "chinese",
                    "kanji",
                    "obtain",
                    "get",
                    "circle"
                ]
            },
            {
                "emoji": "🈹",
                "name": "Japanese “discount” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_discount_button",
                    "cut",
                    "divide",
                    "chinese",
                    "kanji",
                    "pink-square"
                ]
            },
            {
                "emoji": "🈚",
                "name": "Japanese “free of charge” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_free_of_charge_button",
                    "nothing",
                    "chinese",
                    "kanji",
                    "japanese",
                    "orange-square"
                ]
            },
            {
                "emoji": "🈲",
                "name": "Japanese “prohibited” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_prohibited_button",
                    "kanji",
                    "japanese",
                    "chinese",
                    "forbidden",
                    "limit",
                    "restricted",
                    "red-square"
                ]
            },
            {
                "emoji": "🉑",
                "name": "Japanese “acceptable” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_acceptable_button",
                    "ok",
                    "good",
                    "chinese",
                    "kanji",
                    "agree",
                    "yes",
                    "orange-circle"
                ]
            },
            {
                "emoji": "🈸",
                "name": "Japanese “application” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_application_button",
                    "chinese",
                    "japanese",
                    "kanji",
                    "orange-square"
                ]
            },
            {
                "emoji": "🈴",
                "name": "Japanese “passing grade” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_passing_grade_button",
                    "japanese",
                    "chinese",
                    "join",
                    "kanji",
                    "red-square"
                ]
            },
            {
                "emoji": "🈳",
                "name": "Japanese “vacancy” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_vacancy_button",
                    "kanji",
                    "japanese",
                    "chinese",
                    "empty",
                    "sky",
                    "blue-square"
                ]
            },
            {
                "emoji": "㊗️",
                "name": "Japanese “congratulations” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_congratulations_button",
                    "chinese",
                    "kanji",
                    "japanese",
                    "red-circle"
                ]
            },
            {
                "emoji": "㊙️",
                "name": "Japanese “secret” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_secret_button",
                    "privacy",
                    "chinese",
                    "sshh",
                    "kanji",
                    "red-circle"
                ]
            },
            {
                "emoji": "🈺",
                "name": "Japanese “open for business” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_open_for_business_button",
                    "japanese",
                    "opening hours",
                    "orange-square"
                ]
            },
            {
                "emoji": "🈵",
                "name": "Japanese “no vacancy” button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "japanese_no_vacancy_button",
                    "full",
                    "chinese",
                    "japanese",
                    "red-square",
                    "kanji"
                ]
            },
            {
                "emoji": "🔴",
                "name": "red circle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "red_circle",
                    "shape",
                    "error",
                    "danger"
                ]
            },
            {
                "emoji": "🔵",
                "name": "blue circle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "blue_circle",
                    "shape",
                    "icon",
                    "button"
                ]
            },
            {
                "emoji": "⚫",
                "name": "black circle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "black_circle",
                    "shape",
                    "button",
                    "round"
                ]
            },
            {
                "emoji": "⚪",
                "name": "white circle",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "white_circle",
                    "shape",
                    "round"
                ]
            },
            {
                "emoji": "⬛",
                "name": "black large square",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "black_large_square",
                    "shape",
                    "icon",
                    "button"
                ]
            },
            {
                "emoji": "⬜",
                "name": "white large square",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "white_large_square",
                    "shape",
                    "icon",
                    "stone",
                    "button"
                ]
            },
            {
                "emoji": "◼️",
                "name": "black medium square",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "black_medium_square",
                    "shape",
                    "button",
                    "icon"
                ]
            },
            {
                "emoji": "◻️",
                "name": "white medium square",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "white_medium_square",
                    "shape",
                    "stone",
                    "icon"
                ]
            },
            {
                "emoji": "◾",
                "name": "black medium-small square",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "black_medium_small_square",
                    "icon",
                    "shape",
                    "button"
                ]
            },
            {
                "emoji": "◽",
                "name": "white medium-small square",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "white_medium_small_square",
                    "shape",
                    "stone",
                    "icon",
                    "button"
                ]
            },
            {
                "emoji": "▪️",
                "name": "black small square",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "black_small_square",
                    "shape",
                    "icon"
                ]
            },
            {
                "emoji": "▫️",
                "name": "white small square",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "white_small_square",
                    "shape",
                    "icon"
                ]
            },
            {
                "emoji": "🔶",
                "name": "large orange diamond",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "large_orange_diamond",
                    "shape",
                    "jewel",
                    "gem"
                ]
            },
            {
                "emoji": "🔷",
                "name": "large blue diamond",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "large_blue_diamond",
                    "shape",
                    "jewel",
                    "gem"
                ]
            },
            {
                "emoji": "🔸",
                "name": "small orange diamond",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "small_orange_diamond",
                    "shape",
                    "jewel",
                    "gem"
                ]
            },
            {
                "emoji": "🔹",
                "name": "small blue diamond",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "small_blue_diamond",
                    "shape",
                    "jewel",
                    "gem"
                ]
            },
            {
                "emoji": "🔺",
                "name": "red triangle pointed up",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "red_triangle_pointed_up",
                    "shape",
                    "direction",
                    "up",
                    "top"
                ]
            },
            {
                "emoji": "🔻",
                "name": "red triangle pointed down",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "red_triangle_pointed_down",
                    "shape",
                    "direction",
                    "bottom"
                ]
            },
            {
                "emoji": "💠",
                "name": "diamond with a dot",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "diamond_with_a_dot",
                    "jewel",
                    "blue",
                    "gem",
                    "crystal",
                    "fancy"
                ]
            },
            {
                "emoji": "🔘",
                "name": "radio button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "radio_button",
                    "input",
                    "old",
                    "music",
                    "circle"
                ]
            },
            {
                "emoji": "🔳",
                "name": "white square button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "white_square_button",
                    "shape",
                    "input"
                ]
            },
            {
                "emoji": "🔲",
                "name": "black square button",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "black_square_button",
                    "shape",
                    "input",
                    "frame"
                ]
            }
        ]
    },
    {
        "title": "flags",
        "icon": "🏁",
        "data": [
            {
                "emoji": "🏁",
                "name": "chequered flag",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "chequered_flag",
                    "contest",
                    "finishline",
                    "race",
                    "gokart"
                ]
            },
            {
                "emoji": "🚩",
                "name": "triangular flag",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "triangular_flag",
                    "mark",
                    "milestone",
                    "place"
                ]
            },
            {
                "emoji": "🎌",
                "name": "crossed flags",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "crossed_flags",
                    "japanese",
                    "nation",
                    "country",
                    "border"
                ]
            },
            {
                "emoji": "🏴",
                "name": "black flag",
                "v": "1.0",
                "toneEnabled": false,
                "keywords": [
                    "black_flag",
                    "pirate"
                ]
            },
            {
                "emoji": "🏳️",
                "name": "white flag",
                "v": "0.7",
                "toneEnabled": false,
                "keywords": [
                    "white_flag",
                    "losing",
                    "loser",
                    "lost",
                    "surrender",
                    "give up",
                    "fail"
                ]
            },
            {
                "emoji": "🏳️‍🌈",
                "name": "rainbow flag",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "rainbow_flag",
                    "flag",
                    "rainbow",
                    "pride",
                    "gay",
                    "lgbt",
                    "glbt",
                    "queer",
                    "homosexual",
                    "lesbian",
                    "bisexual",
                    "transgender"
                ]
            },
            {
                "emoji": "🏴‍☠️",
                "name": "pirate flag",
                "v": "11.0",
                "toneEnabled": false,
                "keywords": [
                    "pirate_flag",
                    "skull",
                    "crossbones",
                    "flag",
                    "banner"
                ]
            },
            {
                "emoji": "🇦🇨",
                "name": "flag Ascension Island",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_ascension_island"
                ]
            },
            {
                "emoji": "🇦🇩",
                "name": "flag Andorra",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_andorra",
                    "ad",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "andorra"
                ]
            },
            {
                "emoji": "🇦🇪",
                "name": "flag United Arab Emirates",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_united_arab_emirates",
                    "united",
                    "arab",
                    "emirates",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "united_arab_emirates"
                ]
            },
            {
                "emoji": "🇦🇫",
                "name": "flag Afghanistan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_afghanistan",
                    "af",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "afghanistan"
                ]
            },
            {
                "emoji": "🇦🇬",
                "name": "flag Antigua & Barbuda",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_antigua_barbuda",
                    "antigua",
                    "barbuda",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "antigua_barbuda"
                ]
            },
            {
                "emoji": "🇦🇮",
                "name": "flag Anguilla",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_anguilla",
                    "ai",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "anguilla"
                ]
            },
            {
                "emoji": "🇦🇱",
                "name": "flag Albania",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_albania",
                    "al",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "albania"
                ]
            },
            {
                "emoji": "🇦🇲",
                "name": "flag Armenia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_armenia",
                    "am",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "armenia"
                ]
            },
            {
                "emoji": "🇦🇴",
                "name": "flag Angola",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_angola",
                    "ao",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "angola"
                ]
            },
            {
                "emoji": "🇦🇶",
                "name": "flag Antarctica",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_antarctica",
                    "aq",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "antarctica"
                ]
            },
            {
                "emoji": "🇦🇷",
                "name": "flag Argentina",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_argentina",
                    "ar",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "argentina"
                ]
            },
            {
                "emoji": "🇦🇸",
                "name": "flag American Samoa",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_american_samoa",
                    "american",
                    "ws",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "american_samoa"
                ]
            },
            {
                "emoji": "🇦🇹",
                "name": "flag Austria",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_austria",
                    "at",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "austria"
                ]
            },
            {
                "emoji": "🇦🇺",
                "name": "flag Australia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_australia",
                    "au",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "australia"
                ]
            },
            {
                "emoji": "🇦🇼",
                "name": "flag Aruba",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_aruba",
                    "aw",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "aruba"
                ]
            },
            {
                "emoji": "🇦🇽",
                "name": "flag Åland Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_aland_islands",
                    "Åland",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "aland_islands"
                ]
            },
            {
                "emoji": "🇦🇿",
                "name": "flag Azerbaijan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_azerbaijan",
                    "az",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "azerbaijan"
                ]
            },
            {
                "emoji": "🇧🇦",
                "name": "flag Bosnia & Herzegovina",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_bosnia_herzegovina",
                    "bosnia",
                    "herzegovina",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "bosnia_herzegovina"
                ]
            },
            {
                "emoji": "🇧🇧",
                "name": "flag Barbados",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_barbados",
                    "bb",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "barbados"
                ]
            },
            {
                "emoji": "🇧🇩",
                "name": "flag Bangladesh",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_bangladesh",
                    "bd",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "bangladesh"
                ]
            },
            {
                "emoji": "🇧🇪",
                "name": "flag Belgium",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_belgium",
                    "be",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "belgium"
                ]
            },
            {
                "emoji": "🇧🇫",
                "name": "flag Burkina Faso",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_burkina_faso",
                    "burkina",
                    "faso",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "burkina_faso"
                ]
            },
            {
                "emoji": "🇧🇬",
                "name": "flag Bulgaria",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_bulgaria",
                    "bg",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "bulgaria"
                ]
            },
            {
                "emoji": "🇧🇭",
                "name": "flag Bahrain",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_bahrain",
                    "bh",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "bahrain"
                ]
            },
            {
                "emoji": "🇧🇮",
                "name": "flag Burundi",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_burundi",
                    "bi",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "burundi"
                ]
            },
            {
                "emoji": "🇧🇯",
                "name": "flag Benin",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_benin",
                    "bj",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "benin"
                ]
            },
            {
                "emoji": "🇧🇱",
                "name": "flag St. Barthélemy",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_st_barthelemy",
                    "saint",
                    "barthélemy",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "st_barthelemy"
                ]
            },
            {
                "emoji": "🇧🇲",
                "name": "flag Bermuda",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_bermuda",
                    "bm",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "bermuda"
                ]
            },
            {
                "emoji": "🇧🇳",
                "name": "flag Brunei",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_brunei",
                    "bn",
                    "darussalam",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "brunei"
                ]
            },
            {
                "emoji": "🇧🇴",
                "name": "flag Bolivia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_bolivia",
                    "bo",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "bolivia"
                ]
            },
            {
                "emoji": "🇧🇶",
                "name": "flag Caribbean Netherlands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_caribbean_netherlands",
                    "bonaire",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "caribbean_netherlands"
                ]
            },
            {
                "emoji": "🇧🇷",
                "name": "flag Brazil",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_brazil",
                    "br",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "brazil"
                ]
            },
            {
                "emoji": "🇧🇸",
                "name": "flag Bahamas",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_bahamas",
                    "bs",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "bahamas"
                ]
            },
            {
                "emoji": "🇧🇹",
                "name": "flag Bhutan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_bhutan",
                    "bt",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "bhutan"
                ]
            },
            {
                "emoji": "🇧🇻",
                "name": "flag Bouvet Island",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_bouvet_island",
                    "norway"
                ]
            },
            {
                "emoji": "🇧🇼",
                "name": "flag Botswana",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_botswana",
                    "bw",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "botswana"
                ]
            },
            {
                "emoji": "🇧🇾",
                "name": "flag Belarus",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_belarus",
                    "by",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "belarus"
                ]
            },
            {
                "emoji": "🇧🇿",
                "name": "flag Belize",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_belize",
                    "bz",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "belize"
                ]
            },
            {
                "emoji": "🇨🇦",
                "name": "flag Canada",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_canada",
                    "ca",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "canada"
                ]
            },
            {
                "emoji": "🇨🇨",
                "name": "flag Cocos (Keeling) Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_cocos_islands",
                    "cocos",
                    "keeling",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "cocos_islands"
                ]
            },
            {
                "emoji": "🇨🇩",
                "name": "flag Congo - Kinshasa",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_congo_kinshasa",
                    "congo",
                    "democratic",
                    "republic",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "congo_kinshasa"
                ]
            },
            {
                "emoji": "🇨🇫",
                "name": "flag Central African Republic",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_central_african_republic",
                    "central",
                    "african",
                    "republic",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "central_african_republic"
                ]
            },
            {
                "emoji": "🇨🇬",
                "name": "flag Congo - Brazzaville",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_congo_brazzaville",
                    "congo",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "congo_brazzaville"
                ]
            },
            {
                "emoji": "🇨🇭",
                "name": "flag Switzerland",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_switzerland",
                    "ch",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "switzerland"
                ]
            },
            {
                "emoji": "🇨🇮",
                "name": "flag Côte d’Ivoire",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_cote_d_ivoire",
                    "ivory",
                    "coast",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "cote_d_ivoire"
                ]
            },
            {
                "emoji": "🇨🇰",
                "name": "flag Cook Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_cook_islands",
                    "cook",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "cook_islands"
                ]
            },
            {
                "emoji": "🇨🇱",
                "name": "flag Chile",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_chile",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "chile"
                ]
            },
            {
                "emoji": "🇨🇲",
                "name": "flag Cameroon",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_cameroon",
                    "cm",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "cameroon"
                ]
            },
            {
                "emoji": "🇨🇳",
                "name": "flag China",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_china",
                    "china",
                    "chinese",
                    "prc",
                    "flag",
                    "country",
                    "nation",
                    "banner",
                    "china"
                ]
            },
            {
                "emoji": "🇨🇴",
                "name": "flag Colombia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_colombia",
                    "co",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "colombia"
                ]
            },
            {
                "emoji": "🇨🇵",
                "name": "flag Clipperton Island",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_clipperton_island"
                ]
            },
            {
                "emoji": "🇨🇷",
                "name": "flag Costa Rica",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_costa_rica",
                    "costa",
                    "rica",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "costa_rica"
                ]
            },
            {
                "emoji": "🇨🇺",
                "name": "flag Cuba",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_cuba",
                    "cu",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "cuba"
                ]
            },
            {
                "emoji": "🇨🇻",
                "name": "flag Cape Verde",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_cape_verde",
                    "cabo",
                    "verde",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "cape_verde"
                ]
            },
            {
                "emoji": "🇨🇼",
                "name": "flag Curaçao",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_curacao",
                    "curaçao",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "curacao"
                ]
            },
            {
                "emoji": "🇨🇽",
                "name": "flag Christmas Island",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_christmas_island",
                    "christmas",
                    "island",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "christmas_island"
                ]
            },
            {
                "emoji": "🇨🇾",
                "name": "flag Cyprus",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_cyprus",
                    "cy",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "cyprus"
                ]
            },
            {
                "emoji": "🇨🇿",
                "name": "flag Czechia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_czechia",
                    "cz",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "czechia"
                ]
            },
            {
                "emoji": "🇩🇪",
                "name": "flag Germany",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_germany",
                    "german",
                    "nation",
                    "flag",
                    "country",
                    "banner",
                    "germany"
                ]
            },
            {
                "emoji": "🇩🇬",
                "name": "flag Diego Garcia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_diego_garcia"
                ]
            },
            {
                "emoji": "🇩🇯",
                "name": "flag Djibouti",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_djibouti",
                    "dj",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "djibouti"
                ]
            },
            {
                "emoji": "🇩🇰",
                "name": "flag Denmark",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_denmark",
                    "dk",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "denmark"
                ]
            },
            {
                "emoji": "🇩🇲",
                "name": "flag Dominica",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_dominica",
                    "dm",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "dominica"
                ]
            },
            {
                "emoji": "🇩🇴",
                "name": "flag Dominican Republic",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_dominican_republic",
                    "dominican",
                    "republic",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "dominican_republic"
                ]
            },
            {
                "emoji": "🇩🇿",
                "name": "flag Algeria",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_algeria",
                    "dz",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "algeria"
                ]
            },
            {
                "emoji": "🇪🇦",
                "name": "flag Ceuta & Melilla",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_ceuta_melilla"
                ]
            },
            {
                "emoji": "🇪🇨",
                "name": "flag Ecuador",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_ecuador",
                    "ec",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "ecuador"
                ]
            },
            {
                "emoji": "🇪🇪",
                "name": "flag Estonia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_estonia",
                    "ee",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "estonia"
                ]
            },
            {
                "emoji": "🇪🇬",
                "name": "flag Egypt",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_egypt",
                    "eg",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "egypt"
                ]
            },
            {
                "emoji": "🇪🇭",
                "name": "flag Western Sahara",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_western_sahara",
                    "western",
                    "sahara",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "western_sahara"
                ]
            },
            {
                "emoji": "🇪🇷",
                "name": "flag Eritrea",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_eritrea",
                    "er",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "eritrea"
                ]
            },
            {
                "emoji": "🇪🇸",
                "name": "flag Spain",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_spain",
                    "spain",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "spain"
                ]
            },
            {
                "emoji": "🇪🇹",
                "name": "flag Ethiopia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_ethiopia",
                    "et",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "ethiopia"
                ]
            },
            {
                "emoji": "🇪🇺",
                "name": "flag European Union",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_european_union",
                    "european",
                    "union",
                    "flag",
                    "banner"
                ]
            },
            {
                "emoji": "🇫🇮",
                "name": "flag Finland",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_finland",
                    "fi",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "finland"
                ]
            },
            {
                "emoji": "🇫🇯",
                "name": "flag Fiji",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_fiji",
                    "fj",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "fiji"
                ]
            },
            {
                "emoji": "🇫🇰",
                "name": "flag Falkland Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_falkland_islands",
                    "falkland",
                    "islands",
                    "malvinas",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "falkland_islands"
                ]
            },
            {
                "emoji": "🇫🇲",
                "name": "flag Micronesia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_micronesia",
                    "micronesia",
                    "federated",
                    "states",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "micronesia"
                ]
            },
            {
                "emoji": "🇫🇴",
                "name": "flag Faroe Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_faroe_islands",
                    "faroe",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "faroe_islands"
                ]
            },
            {
                "emoji": "🇫🇷",
                "name": "flag France",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_france",
                    "banner",
                    "flag",
                    "nation",
                    "france",
                    "french",
                    "country",
                    "france"
                ]
            },
            {
                "emoji": "🇬🇦",
                "name": "flag Gabon",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_gabon",
                    "ga",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "gabon"
                ]
            },
            {
                "emoji": "🇬🇧",
                "name": "flag United Kingdom",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_united_kingdom",
                    "united",
                    "kingdom",
                    "great",
                    "britain",
                    "northern",
                    "ireland",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "british",
                    "UK",
                    "english",
                    "england",
                    "union jack",
                    "united_kingdom"
                ]
            },
            {
                "emoji": "🇬🇩",
                "name": "flag Grenada",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_grenada",
                    "gd",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "grenada"
                ]
            },
            {
                "emoji": "🇬🇪",
                "name": "flag Georgia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_georgia",
                    "ge",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "georgia"
                ]
            },
            {
                "emoji": "🇬🇫",
                "name": "flag French Guiana",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_french_guiana",
                    "french",
                    "guiana",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "french_guiana"
                ]
            },
            {
                "emoji": "🇬🇬",
                "name": "flag Guernsey",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_guernsey",
                    "gg",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "guernsey"
                ]
            },
            {
                "emoji": "🇬🇭",
                "name": "flag Ghana",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_ghana",
                    "gh",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "ghana"
                ]
            },
            {
                "emoji": "🇬🇮",
                "name": "flag Gibraltar",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_gibraltar",
                    "gi",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "gibraltar"
                ]
            },
            {
                "emoji": "🇬🇱",
                "name": "flag Greenland",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_greenland",
                    "gl",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "greenland"
                ]
            },
            {
                "emoji": "🇬🇲",
                "name": "flag Gambia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_gambia",
                    "gm",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "gambia"
                ]
            },
            {
                "emoji": "🇬🇳",
                "name": "flag Guinea",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_guinea",
                    "gn",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "guinea"
                ]
            },
            {
                "emoji": "🇬🇵",
                "name": "flag Guadeloupe",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_guadeloupe",
                    "gp",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "guadeloupe"
                ]
            },
            {
                "emoji": "🇬🇶",
                "name": "flag Equatorial Guinea",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_equatorial_guinea",
                    "equatorial",
                    "gn",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "equatorial_guinea"
                ]
            },
            {
                "emoji": "🇬🇷",
                "name": "flag Greece",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_greece",
                    "gr",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "greece"
                ]
            },
            {
                "emoji": "🇬🇸",
                "name": "flag South Georgia & South Sandwich Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_south_georgia_south_sandwich_islands",
                    "south",
                    "georgia",
                    "sandwich",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "south_georgia_south_sandwich_islands"
                ]
            },
            {
                "emoji": "🇬🇹",
                "name": "flag Guatemala",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_guatemala",
                    "gt",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "guatemala"
                ]
            },
            {
                "emoji": "🇬🇺",
                "name": "flag Guam",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_guam",
                    "gu",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "guam"
                ]
            },
            {
                "emoji": "🇬🇼",
                "name": "flag Guinea-Bissau",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_guinea_bissau",
                    "gw",
                    "bissau",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "guinea_bissau"
                ]
            },
            {
                "emoji": "🇬🇾",
                "name": "flag Guyana",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_guyana",
                    "gy",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "guyana"
                ]
            },
            {
                "emoji": "🇭🇰",
                "name": "flag Hong Kong SAR China",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_hong_kong_sar_china",
                    "hong",
                    "kong",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "hong_kong_sar_china"
                ]
            },
            {
                "emoji": "🇭🇲",
                "name": "flag Heard & McDonald Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_heard_mcdonald_islands"
                ]
            },
            {
                "emoji": "🇭🇳",
                "name": "flag Honduras",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_honduras",
                    "hn",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "honduras"
                ]
            },
            {
                "emoji": "🇭🇷",
                "name": "flag Croatia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_croatia",
                    "hr",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "croatia"
                ]
            },
            {
                "emoji": "🇭🇹",
                "name": "flag Haiti",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_haiti",
                    "ht",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "haiti"
                ]
            },
            {
                "emoji": "🇭🇺",
                "name": "flag Hungary",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_hungary",
                    "hu",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "hungary"
                ]
            },
            {
                "emoji": "🇮🇨",
                "name": "flag Canary Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_canary_islands",
                    "canary",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "canary_islands"
                ]
            },
            {
                "emoji": "🇮🇩",
                "name": "flag Indonesia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_indonesia",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "indonesia"
                ]
            },
            {
                "emoji": "🇮🇪",
                "name": "flag Ireland",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_ireland",
                    "ie",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "ireland"
                ]
            },
            {
                "emoji": "🇮🇱",
                "name": "flag Israel",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_israel",
                    "il",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "israel"
                ]
            },
            {
                "emoji": "🇮🇲",
                "name": "flag Isle of Man",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_isle_of_man",
                    "isle",
                    "man",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "isle_of_man"
                ]
            },
            {
                "emoji": "🇮🇳",
                "name": "flag India",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_india",
                    "in",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "india"
                ]
            },
            {
                "emoji": "🇮🇴",
                "name": "flag British Indian Ocean Territory",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_british_indian_ocean_territory",
                    "british",
                    "indian",
                    "ocean",
                    "territory",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "british_indian_ocean_territory"
                ]
            },
            {
                "emoji": "🇮🇶",
                "name": "flag Iraq",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_iraq",
                    "iq",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "iraq"
                ]
            },
            {
                "emoji": "🇮🇷",
                "name": "flag Iran",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_iran",
                    "iran",
                    "islamic",
                    "republic",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "iran"
                ]
            },
            {
                "emoji": "🇮🇸",
                "name": "flag Iceland",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_iceland",
                    "is",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "iceland"
                ]
            },
            {
                "emoji": "🇮🇹",
                "name": "flag Italy",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_italy",
                    "italy",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "italy"
                ]
            },
            {
                "emoji": "🇯🇪",
                "name": "flag Jersey",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_jersey",
                    "je",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "jersey"
                ]
            },
            {
                "emoji": "🇯🇲",
                "name": "flag Jamaica",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_jamaica",
                    "jm",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "jamaica"
                ]
            },
            {
                "emoji": "🇯🇴",
                "name": "flag Jordan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_jordan",
                    "jo",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "jordan"
                ]
            },
            {
                "emoji": "🇯🇵",
                "name": "flag Japan",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_japan",
                    "japanese",
                    "nation",
                    "flag",
                    "country",
                    "banner",
                    "japan",
                    "jp",
                    "ja"
                ]
            },
            {
                "emoji": "🇰🇪",
                "name": "flag Kenya",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_kenya",
                    "ke",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "kenya"
                ]
            },
            {
                "emoji": "🇰🇬",
                "name": "flag Kyrgyzstan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_kyrgyzstan",
                    "kg",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "kyrgyzstan"
                ]
            },
            {
                "emoji": "🇰🇭",
                "name": "flag Cambodia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_cambodia",
                    "kh",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "cambodia"
                ]
            },
            {
                "emoji": "🇰🇮",
                "name": "flag Kiribati",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_kiribati",
                    "ki",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "kiribati"
                ]
            },
            {
                "emoji": "🇰🇲",
                "name": "flag Comoros",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_comoros",
                    "km",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "comoros"
                ]
            },
            {
                "emoji": "🇰🇳",
                "name": "flag St. Kitts & Nevis",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_st_kitts_nevis",
                    "saint",
                    "kitts",
                    "nevis",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "st_kitts_nevis"
                ]
            },
            {
                "emoji": "🇰🇵",
                "name": "flag North Korea",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_north_korea",
                    "north",
                    "korea",
                    "nation",
                    "flag",
                    "country",
                    "banner",
                    "north_korea"
                ]
            },
            {
                "emoji": "🇰🇷",
                "name": "flag South Korea",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_south_korea",
                    "south",
                    "korea",
                    "nation",
                    "flag",
                    "country",
                    "banner",
                    "south_korea"
                ]
            },
            {
                "emoji": "🇰🇼",
                "name": "flag Kuwait",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_kuwait",
                    "kw",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "kuwait"
                ]
            },
            {
                "emoji": "🇰🇾",
                "name": "flag Cayman Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_cayman_islands",
                    "cayman",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "cayman_islands"
                ]
            },
            {
                "emoji": "🇰🇿",
                "name": "flag Kazakhstan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_kazakhstan",
                    "kz",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "kazakhstan"
                ]
            },
            {
                "emoji": "🇱🇦",
                "name": "flag Laos",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_laos",
                    "lao",
                    "democratic",
                    "republic",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "laos"
                ]
            },
            {
                "emoji": "🇱🇧",
                "name": "flag Lebanon",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_lebanon",
                    "lb",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "lebanon"
                ]
            },
            {
                "emoji": "🇱🇨",
                "name": "flag St. Lucia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_st_lucia",
                    "saint",
                    "lucia",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "st_lucia"
                ]
            },
            {
                "emoji": "🇱🇮",
                "name": "flag Liechtenstein",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_liechtenstein",
                    "li",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "liechtenstein"
                ]
            },
            {
                "emoji": "🇱🇰",
                "name": "flag Sri Lanka",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_sri_lanka",
                    "sri",
                    "lanka",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "sri_lanka"
                ]
            },
            {
                "emoji": "🇱🇷",
                "name": "flag Liberia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_liberia",
                    "lr",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "liberia"
                ]
            },
            {
                "emoji": "🇱🇸",
                "name": "flag Lesotho",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_lesotho",
                    "ls",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "lesotho"
                ]
            },
            {
                "emoji": "🇱🇹",
                "name": "flag Lithuania",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_lithuania",
                    "lt",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "lithuania"
                ]
            },
            {
                "emoji": "🇱🇺",
                "name": "flag Luxembourg",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_luxembourg",
                    "lu",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "luxembourg"
                ]
            },
            {
                "emoji": "🇱🇻",
                "name": "flag Latvia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_latvia",
                    "lv",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "latvia"
                ]
            },
            {
                "emoji": "🇱🇾",
                "name": "flag Libya",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_libya",
                    "ly",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "libya"
                ]
            },
            {
                "emoji": "🇲🇦",
                "name": "flag Morocco",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_morocco",
                    "ma",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "morocco"
                ]
            },
            {
                "emoji": "🇲🇨",
                "name": "flag Monaco",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_monaco",
                    "mc",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "monaco"
                ]
            },
            {
                "emoji": "🇲🇩",
                "name": "flag Moldova",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_moldova",
                    "moldova",
                    "republic",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "moldova"
                ]
            },
            {
                "emoji": "🇲🇪",
                "name": "flag Montenegro",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_montenegro",
                    "me",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "montenegro"
                ]
            },
            {
                "emoji": "🇲🇫",
                "name": "flag St. Martin",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_st_martin"
                ]
            },
            {
                "emoji": "🇲🇬",
                "name": "flag Madagascar",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_madagascar",
                    "mg",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "madagascar"
                ]
            },
            {
                "emoji": "🇲🇭",
                "name": "flag Marshall Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_marshall_islands",
                    "marshall",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "marshall_islands"
                ]
            },
            {
                "emoji": "🇲🇰",
                "name": "flag North Macedonia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_north_macedonia",
                    "macedonia",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "north_macedonia"
                ]
            },
            {
                "emoji": "🇲🇱",
                "name": "flag Mali",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_mali",
                    "ml",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "mali"
                ]
            },
            {
                "emoji": "🇲🇲",
                "name": "flag Myanmar (Burma)",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_myanmar",
                    "mm",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "myanmar"
                ]
            },
            {
                "emoji": "🇲🇳",
                "name": "flag Mongolia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_mongolia",
                    "mn",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "mongolia"
                ]
            },
            {
                "emoji": "🇲🇴",
                "name": "flag Macao SAR China",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_macao_sar_china",
                    "macao",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "macao_sar_china"
                ]
            },
            {
                "emoji": "🇲🇵",
                "name": "flag Northern Mariana Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_northern_mariana_islands",
                    "northern",
                    "mariana",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "northern_mariana_islands"
                ]
            },
            {
                "emoji": "🇲🇶",
                "name": "flag Martinique",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_martinique",
                    "mq",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "martinique"
                ]
            },
            {
                "emoji": "🇲🇷",
                "name": "flag Mauritania",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_mauritania",
                    "mr",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "mauritania"
                ]
            },
            {
                "emoji": "🇲🇸",
                "name": "flag Montserrat",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_montserrat",
                    "ms",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "montserrat"
                ]
            },
            {
                "emoji": "🇲🇹",
                "name": "flag Malta",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_malta",
                    "mt",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "malta"
                ]
            },
            {
                "emoji": "🇲🇺",
                "name": "flag Mauritius",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_mauritius",
                    "mu",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "mauritius"
                ]
            },
            {
                "emoji": "🇲🇻",
                "name": "flag Maldives",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_maldives",
                    "mv",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "maldives"
                ]
            },
            {
                "emoji": "🇲🇼",
                "name": "flag Malawi",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_malawi",
                    "mw",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "malawi"
                ]
            },
            {
                "emoji": "🇲🇽",
                "name": "flag Mexico",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_mexico",
                    "mx",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "mexico"
                ]
            },
            {
                "emoji": "🇲🇾",
                "name": "flag Malaysia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_malaysia",
                    "my",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "malaysia"
                ]
            },
            {
                "emoji": "🇲🇿",
                "name": "flag Mozambique",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_mozambique",
                    "mz",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "mozambique"
                ]
            },
            {
                "emoji": "🇳🇦",
                "name": "flag Namibia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_namibia",
                    "na",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "namibia"
                ]
            },
            {
                "emoji": "🇳🇨",
                "name": "flag New Caledonia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_new_caledonia",
                    "new",
                    "caledonia",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "new_caledonia"
                ]
            },
            {
                "emoji": "🇳🇪",
                "name": "flag Niger",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_niger",
                    "ne",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "niger"
                ]
            },
            {
                "emoji": "🇳🇫",
                "name": "flag Norfolk Island",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_norfolk_island",
                    "norfolk",
                    "island",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "norfolk_island"
                ]
            },
            {
                "emoji": "🇳🇬",
                "name": "flag Nigeria",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_nigeria",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "nigeria"
                ]
            },
            {
                "emoji": "🇳🇮",
                "name": "flag Nicaragua",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_nicaragua",
                    "ni",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "nicaragua"
                ]
            },
            {
                "emoji": "🇳🇱",
                "name": "flag Netherlands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_netherlands",
                    "nl",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "netherlands"
                ]
            },
            {
                "emoji": "🇳🇴",
                "name": "flag Norway",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_norway",
                    "no",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "norway"
                ]
            },
            {
                "emoji": "🇳🇵",
                "name": "flag Nepal",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_nepal",
                    "np",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "nepal"
                ]
            },
            {
                "emoji": "🇳🇷",
                "name": "flag Nauru",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_nauru",
                    "nr",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "nauru"
                ]
            },
            {
                "emoji": "🇳🇺",
                "name": "flag Niue",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_niue",
                    "nu",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "niue"
                ]
            },
            {
                "emoji": "🇳🇿",
                "name": "flag New Zealand",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_new_zealand",
                    "new",
                    "zealand",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "new_zealand"
                ]
            },
            {
                "emoji": "🇴🇲",
                "name": "flag Oman",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_oman",
                    "om_symbol",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "oman"
                ]
            },
            {
                "emoji": "🇵🇦",
                "name": "flag Panama",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_panama",
                    "pa",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "panama"
                ]
            },
            {
                "emoji": "🇵🇪",
                "name": "flag Peru",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_peru",
                    "pe",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "peru"
                ]
            },
            {
                "emoji": "🇵🇫",
                "name": "flag French Polynesia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_french_polynesia",
                    "french",
                    "polynesia",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "french_polynesia"
                ]
            },
            {
                "emoji": "🇵🇬",
                "name": "flag Papua New Guinea",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_papua_new_guinea",
                    "papua",
                    "new",
                    "guinea",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "papua_new_guinea"
                ]
            },
            {
                "emoji": "🇵🇭",
                "name": "flag Philippines",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_philippines",
                    "ph",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "philippines"
                ]
            },
            {
                "emoji": "🇵🇰",
                "name": "flag Pakistan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_pakistan",
                    "pk",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "pakistan"
                ]
            },
            {
                "emoji": "🇵🇱",
                "name": "flag Poland",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_poland",
                    "pl",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "poland"
                ]
            },
            {
                "emoji": "🇵🇲",
                "name": "flag St. Pierre & Miquelon",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_st_pierre_miquelon",
                    "saint",
                    "pierre",
                    "miquelon",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "st_pierre_miquelon"
                ]
            },
            {
                "emoji": "🇵🇳",
                "name": "flag Pitcairn Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_pitcairn_islands",
                    "pitcairn",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "pitcairn_islands"
                ]
            },
            {
                "emoji": "🇵🇷",
                "name": "flag Puerto Rico",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_puerto_rico",
                    "puerto",
                    "rico",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "puerto_rico"
                ]
            },
            {
                "emoji": "🇵🇸",
                "name": "flag Palestinian Territories",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_palestinian_territories",
                    "palestine",
                    "palestinian",
                    "territories",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "palestinian_territories"
                ]
            },
            {
                "emoji": "🇵🇹",
                "name": "flag Portugal",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_portugal",
                    "pt",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "portugal"
                ]
            },
            {
                "emoji": "🇵🇼",
                "name": "flag Palau",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_palau",
                    "pw",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "palau"
                ]
            },
            {
                "emoji": "🇵🇾",
                "name": "flag Paraguay",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_paraguay",
                    "py",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "paraguay"
                ]
            },
            {
                "emoji": "🇶🇦",
                "name": "flag Qatar",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_qatar",
                    "qa",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "qatar"
                ]
            },
            {
                "emoji": "🇷🇪",
                "name": "flag Réunion",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_reunion",
                    "réunion",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "reunion"
                ]
            },
            {
                "emoji": "🇷🇴",
                "name": "flag Romania",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_romania",
                    "ro",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "romania"
                ]
            },
            {
                "emoji": "🇷🇸",
                "name": "flag Serbia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_serbia",
                    "rs",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "serbia"
                ]
            },
            {
                "emoji": "🇷🇺",
                "name": "flag Russia",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_russia",
                    "russian",
                    "federation",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "russia"
                ]
            },
            {
                "emoji": "🇷🇼",
                "name": "flag Rwanda",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_rwanda",
                    "rw",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "rwanda"
                ]
            },
            {
                "emoji": "🇸🇦",
                "name": "flag Saudi Arabia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_saudi_arabia",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "saudi_arabia"
                ]
            },
            {
                "emoji": "🇸🇧",
                "name": "flag Solomon Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_solomon_islands",
                    "solomon",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "solomon_islands"
                ]
            },
            {
                "emoji": "🇸🇨",
                "name": "flag Seychelles",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_seychelles",
                    "sc",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "seychelles"
                ]
            },
            {
                "emoji": "🇸🇩",
                "name": "flag Sudan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_sudan",
                    "sd",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "sudan"
                ]
            },
            {
                "emoji": "🇸🇪",
                "name": "flag Sweden",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_sweden",
                    "se",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "sweden"
                ]
            },
            {
                "emoji": "🇸🇬",
                "name": "flag Singapore",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_singapore",
                    "sg",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "singapore"
                ]
            },
            {
                "emoji": "🇸🇭",
                "name": "flag St. Helena",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_st_helena",
                    "saint",
                    "helena",
                    "ascension",
                    "tristan",
                    "cunha",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "st_helena"
                ]
            },
            {
                "emoji": "🇸🇮",
                "name": "flag Slovenia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_slovenia",
                    "si",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "slovenia"
                ]
            },
            {
                "emoji": "🇸🇯",
                "name": "flag Svalbard & Jan Mayen",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_svalbard_jan_mayen"
                ]
            },
            {
                "emoji": "🇸🇰",
                "name": "flag Slovakia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_slovakia",
                    "sk",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "slovakia"
                ]
            },
            {
                "emoji": "🇸🇱",
                "name": "flag Sierra Leone",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_sierra_leone",
                    "sierra",
                    "leone",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "sierra_leone"
                ]
            },
            {
                "emoji": "🇸🇲",
                "name": "flag San Marino",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_san_marino",
                    "san",
                    "marino",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "san_marino"
                ]
            },
            {
                "emoji": "🇸🇳",
                "name": "flag Senegal",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_senegal",
                    "sn",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "senegal"
                ]
            },
            {
                "emoji": "🇸🇴",
                "name": "flag Somalia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_somalia",
                    "so",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "somalia"
                ]
            },
            {
                "emoji": "🇸🇷",
                "name": "flag Suriname",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_suriname",
                    "sr",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "suriname"
                ]
            },
            {
                "emoji": "🇸🇸",
                "name": "flag South Sudan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_south_sudan",
                    "south",
                    "sd",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "south_sudan"
                ]
            },
            {
                "emoji": "🇸🇹",
                "name": "flag São Tomé & Príncipe",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_sao_tome_principe",
                    "sao",
                    "tome",
                    "principe",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "sao_tome_principe"
                ]
            },
            {
                "emoji": "🇸🇻",
                "name": "flag El Salvador",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_el_salvador",
                    "el",
                    "salvador",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "el_salvador"
                ]
            },
            {
                "emoji": "🇸🇽",
                "name": "flag Sint Maarten",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_sint_maarten",
                    "sint",
                    "maarten",
                    "dutch",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "sint_maarten"
                ]
            },
            {
                "emoji": "🇸🇾",
                "name": "flag Syria",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_syria",
                    "syrian",
                    "arab",
                    "republic",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "syria"
                ]
            },
            {
                "emoji": "🇸🇿",
                "name": "flag Eswatini",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_eswatini",
                    "sz",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "eswatini"
                ]
            },
            {
                "emoji": "🇹🇦",
                "name": "flag Tristan da Cunha",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_tristan_da_cunha"
                ]
            },
            {
                "emoji": "🇹🇨",
                "name": "flag Turks & Caicos Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_turks_caicos_islands",
                    "turks",
                    "caicos",
                    "islands",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "turks_caicos_islands"
                ]
            },
            {
                "emoji": "🇹🇩",
                "name": "flag Chad",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_chad",
                    "td",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "chad"
                ]
            },
            {
                "emoji": "🇹🇫",
                "name": "flag French Southern Territories",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_french_southern_territories",
                    "french",
                    "southern",
                    "territories",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "french_southern_territories"
                ]
            },
            {
                "emoji": "🇹🇬",
                "name": "flag Togo",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_togo",
                    "tg",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "togo"
                ]
            },
            {
                "emoji": "🇹🇭",
                "name": "flag Thailand",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_thailand",
                    "th",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "thailand"
                ]
            },
            {
                "emoji": "🇹🇯",
                "name": "flag Tajikistan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_tajikistan",
                    "tj",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "tajikistan"
                ]
            },
            {
                "emoji": "🇹🇰",
                "name": "flag Tokelau",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_tokelau",
                    "tk",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "tokelau"
                ]
            },
            {
                "emoji": "🇹🇱",
                "name": "flag Timor-Leste",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_timor_leste",
                    "timor",
                    "leste",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "timor_leste"
                ]
            },
            {
                "emoji": "🇹🇲",
                "name": "flag Turkmenistan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_turkmenistan",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "turkmenistan"
                ]
            },
            {
                "emoji": "🇹🇳",
                "name": "flag Tunisia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_tunisia",
                    "tn",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "tunisia"
                ]
            },
            {
                "emoji": "🇹🇴",
                "name": "flag Tonga",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_tonga",
                    "to",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "tonga"
                ]
            },
            {
                "emoji": "🇹🇷",
                "name": "flag Turkey",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_turkey",
                    "turkey",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "turkey"
                ]
            },
            {
                "emoji": "🇹🇹",
                "name": "flag Trinidad & Tobago",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_trinidad_tobago",
                    "trinidad",
                    "tobago",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "trinidad_tobago"
                ]
            },
            {
                "emoji": "🇹🇻",
                "name": "flag Tuvalu",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_tuvalu",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "tuvalu"
                ]
            },
            {
                "emoji": "🇹🇼",
                "name": "flag Taiwan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_taiwan",
                    "tw",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "taiwan"
                ]
            },
            {
                "emoji": "🇹🇿",
                "name": "flag Tanzania",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_tanzania",
                    "tanzania",
                    "united",
                    "republic",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "tanzania"
                ]
            },
            {
                "emoji": "🇺🇦",
                "name": "flag Ukraine",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_ukraine",
                    "ua",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "ukraine"
                ]
            },
            {
                "emoji": "🇺🇬",
                "name": "flag Uganda",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_uganda",
                    "ug",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "uganda"
                ]
            },
            {
                "emoji": "🇺🇲",
                "name": "flag U.S. Outlying Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_u_s_outlying_islands"
                ]
            },
            {
                "emoji": "🇺🇳",
                "name": "flag United Nations",
                "v": "4.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_united_nations",
                    "un",
                    "flag",
                    "banner"
                ]
            },
            {
                "emoji": "🇺🇸",
                "name": "flag United States",
                "v": "0.6",
                "toneEnabled": false,
                "keywords": [
                    "flag_united_states",
                    "united",
                    "states",
                    "america",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "united_states"
                ]
            },
            {
                "emoji": "🇺🇾",
                "name": "flag Uruguay",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_uruguay",
                    "uy",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "uruguay"
                ]
            },
            {
                "emoji": "🇺🇿",
                "name": "flag Uzbekistan",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_uzbekistan",
                    "uz",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "uzbekistan"
                ]
            },
            {
                "emoji": "🇻🇦",
                "name": "flag Vatican City",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_vatican_city",
                    "vatican",
                    "city",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "vatican_city"
                ]
            },
            {
                "emoji": "🇻🇨",
                "name": "flag St. Vincent & Grenadines",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_st_vincent_grenadines",
                    "saint",
                    "vincent",
                    "grenadines",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "st_vincent_grenadines"
                ]
            },
            {
                "emoji": "🇻🇪",
                "name": "flag Venezuela",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_venezuela",
                    "ve",
                    "bolivarian",
                    "republic",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "venezuela"
                ]
            },
            {
                "emoji": "🇻🇬",
                "name": "flag British Virgin Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_british_virgin_islands",
                    "british",
                    "virgin",
                    "islands",
                    "bvi",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "british_virgin_islands"
                ]
            },
            {
                "emoji": "🇻🇮",
                "name": "flag U.S. Virgin Islands",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_u_s_virgin_islands",
                    "virgin",
                    "islands",
                    "us",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "u_s_virgin_islands"
                ]
            },
            {
                "emoji": "🇻🇳",
                "name": "flag Vietnam",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_vietnam",
                    "viet",
                    "nam",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "vietnam"
                ]
            },
            {
                "emoji": "🇻🇺",
                "name": "flag Vanuatu",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_vanuatu",
                    "vu",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "vanuatu"
                ]
            },
            {
                "emoji": "🇼🇫",
                "name": "flag Wallis & Futuna",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_wallis_futuna",
                    "wallis",
                    "futuna",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "wallis_futuna"
                ]
            },
            {
                "emoji": "🇼🇸",
                "name": "flag Samoa",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_samoa",
                    "ws",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "samoa"
                ]
            },
            {
                "emoji": "🇽🇰",
                "name": "flag Kosovo",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_kosovo",
                    "xk",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "kosovo"
                ]
            },
            {
                "emoji": "🇾🇪",
                "name": "flag Yemen",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_yemen",
                    "ye",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "yemen"
                ]
            },
            {
                "emoji": "🇾🇹",
                "name": "flag Mayotte",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_mayotte",
                    "yt",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "mayotte"
                ]
            },
            {
                "emoji": "🇿🇦",
                "name": "flag South Africa",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_south_africa",
                    "south",
                    "africa",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "south_africa"
                ]
            },
            {
                "emoji": "🇿🇲",
                "name": "flag Zambia",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_zambia",
                    "zm",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "zambia"
                ]
            },
            {
                "emoji": "🇿🇼",
                "name": "flag Zimbabwe",
                "v": "2.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_zimbabwe",
                    "zw",
                    "flag",
                    "nation",
                    "country",
                    "banner",
                    "zimbabwe"
                ]
            },
            {
                "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                "name": "flag England",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_england",
                    "flag",
                    "english"
                ]
            },
            {
                "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
                "name": "flag Scotland",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_scotland",
                    "flag",
                    "scottish"
                ]
            },
            {
                "emoji": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
                "name": "flag Wales",
                "v": "5.0",
                "toneEnabled": false,
                "keywords": [
                    "flag_wales",
                    "flag",
                    "welsh"
                ]
            }
        ]
    }
]