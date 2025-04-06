import { CharacterNames } from "../types/util";

export const characterNameList: CharacterNames[] = [
    'TERRY',
    'MAI',
    'VEGA',
    'GOUKI',
    'ED',
    'AKI',
    'RASHID',
    'CAMMY',
    'LILY',
    'ZANGIEF',
    'JP',
    'MARISA',
    'MANON',
    'DEEJAY',
    'E.HONDA',
    'DHALSIM',
    'BLANKA',
    'KEN',
    'JURI',
    'KIMBERLY',
    'GUILE',
    'CHUNLI',
    'JAMIE',
    'LUKE',
    'RYU'
]

export const characterDataMap = [
    {value: 0, name: 'TERRY'},
    {value: 1, name: 'MAI'},
    {value: 2, name: 'VEGA'},
    {value: 3, name: 'GOUKI'},
    {value: 4, name: 'ED'},
    {value: 5, name: 'AKI'},
    {value: 6, name: 'RASHvalue'},
    {value: 7, name: 'CAMMY'},
    {value: 8, name: 'LILY'},
    {value: 9, name: 'ZANGIEF'},
    {value: 10, name: 'JP'},
    {value: 11, name: 'MARISA'},
    {value: 12, name: 'MANON'},
    {value: 13, name: 'DEEJAY'},
    {value: 14, name: 'E.HONDA'},
    {value: 15, name: 'DHALSIM'},
    {value: 16, name: 'BLANKA'},
    {value: 17, name: 'KEN'},
    {value: 18, name: 'JURI'},
    {value: 19, name: 'KIMBERLY'},
    {value: 20, name: 'GUILE'},
    {value: 21, name: 'CHUNLI'},
    {value: 22, name: 'JAMIE'},
    {value: 23, name: 'LUKE'},
    {value: 24, name: 'RYU'}
]


export const emotionFlameRanges = [
    -99, -98, -97, -96, -95, -94, -93, -92, -91, -90,
    -89, -88, -87, -86, -85, -84, -83, -82, -81, -80,
    -79, -78, -77, -76, -75, -74, -73, -72, -71, -70,
    -69, -68, -67, -66, -65, -64, -63, -62, -61, -60,
    -59, -58, -57, -56, -55, -54, -53, -52, -51, -50,
    -49, -48, -47, -46, -45, -44, -43, -42, -41, -40,
    -39, -38, -37, -36, -35, -34, -33, -32, -31, -30,
    -29, -28, -27, -26, -25, -24, -23, -22, -21, -20,
    -19, -18, -17, -16, -15, -14, -13, -12, -11, -10,
     -9,  -8,  -7,  -6,  -5,  -4,  -3,  -2,  -1,   0,
      1,   2,   3,   4,   5,   6,   7,   8,   9,  10,
     11,  12,  13,  14,  15,  16,  17,  18,  19,  20,
     21,  22,  23,  24,  25,  26,  27,  28,  29,  30,
     31,  32,  33,  34,  35,  36,  37,  38,  39,  40,
     41,  42,  43,  44,  45,  46,  47,  48,  49,  50,
     51,  52,  53,  54,  55,  56,  57,  58,  59,  60,
     61,  62,  63,  64,  65,  66,  67,  68,  69,  70,
     71,  72,  73,  74,  75,  76,  77,  78,  79,  80,
     81,  82,  83,  84,  85,  86,  87,  88,  89,  90,
     91,  92,  93,  94,  95,  96,  97,  98,  99
]

export const convertEmotionFlameRangesOptions = () => {
    return emotionFlameRanges.map((range) => ({
        value: range,
        name: range.toString()
    }))
}