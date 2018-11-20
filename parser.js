const Hirakana = require("./hirakana.json");

const alphabet_hiragana = `U+3041
ぁ
SMALL A
U+3042
あ
A
U+3043
ぃ
SMALL I
U+3044
い
I
U+3045
ぅ
SMALL U
U+3046
う
U
U+3047
ぇ
SMALL E
U+3048
え
E
U+3049
ぉ
SMALL O
U+304A
お
O
U+304B
か
KA
U+304C
が
GA
U+304D
き
KI
U+304E
ぎ
GI
U+304F
く
KU
U+3050
ぐ
GU
U+3051
け
KE
U+3052
げ
GE
U+3053
こ
KO
U+3054
ご
GO
U+3055
さ
SA
U+3056
ざ
ZA
U+3057
し
SI
U+3058
じ
ZI
U+3059
す
SU
U+305A
ず
ZU
U+305B
せ
SE
U+305C
ぜ
ZE
U+305D
そ
SO
U+305E
ぞ
ZO
U+305F
た
TA
U+3060
だ
DA
U+3061
ち
TI
U+3062
ぢ
DI
U+3063
っ
SMALL TU
U+3064
つ
TU
U+3065
づ
DU
U+3066
て
TE
U+3067
で
DE
U+3068
と
TO
U+3069
ど
DO
U+306A
な
NA
U+306B
に
NI
U+306C
ぬ
NU
U+306D
ね
NE
U+306E
の
NO
U+306F
は
HA
U+3070
ば
BA
U+3071
ぱ
PA
U+3072
ひ
HI
U+3073
び
BI
U+3074
ぴ
PI
U+3075
ふ
HU
U+3076
ぶ
BU
U+3077
ぷ
PU
U+3078
へ
HE
U+3079
べ
BE
U+307A
ぺ
PE
U+307B
ほ
HO
U+307C
ぼ
BO
U+307D
ぽ
PO
U+307E
ま
MA
U+307F
み
MI
U+3080
む
MU
U+3081
め
ME
U+3082
も
MO
U+3083
ゃ
SMALL YA
U+3084
や
YA
U+3085
ゅ
SMALL YU
U+3086
ゆ
YU
U+3087
ょ
SMALL YO
U+3088
よ
YO
U+3089
ら
RA
U+308A
り
RI
U+308B
る
RU
U+308C
れ
RE
U+308D
ろ
RO
U+308E
ゎ
SMALL WA
U+308F
わ
WA
U+3090
ゐ
WI
U+3091
ゑ
WE
U+3092
を
WO
U+3093
ん
N
U+3094
ゔ
VU
U+3095
ゕ
SMALL KA
U+3096
ゖ
SMALL KE`;

const alphabet_katagana = `U+30A1
ァ
SMALL A
U+30A2
ア
A
U+30A3
ィ
SMALL I
U+30A4
イ
I
U+30A5
ゥ
SMALL U
U+30A6
ウ
U
U+30A7
ェ
SMALL E
U+30A8
エ
E
U+30A9
ォ
SMALL O
U+30AA
オ
O
U+30AB
カ
KA
U+30AC
ガ
GA
U+30AD
キ
KI
U+30AE
ギ
GI
U+30AF
ク
KU
U+30B0
グ
GU
U+30B1
ケ
KE
U+30B2
ゲ
GE
U+30B3
コ
KO
U+30B4
ゴ
GO
U+30B5
サ
SA
U+30B6
ザ
ZA
U+30B7
シ
SI
U+30B8
ジ
ZI
U+30B9
ス
SU
U+30BA
ズ
ZU
U+30BB
セ
SE
U+30BC
ゼ
ZE
U+30BD
ソ
SO
U+30BE
ゾ
ZO
U+30BF
タ
TA
U+30C0
ダ
DA
U+30C1
チ
TI
U+30C2
ヂ
DI
U+30C3
ッ
SMALL TU
U+30C4
ツ
TU
U+30C5
ヅ
DU
U+30C6
テ
TE
U+30C7
デ
DE
U+30C8
ト
TO
U+30C9
ド
DO
U+30CA
ナ
NA
U+30CB
ニ
NI
U+30CC
ヌ
NU
U+30CD
ネ
NE
U+30CE
ノ
NO
U+30CF
ハ
HA
U+30D0
バ
BA
U+30D1
パ
PA
U+30D2
ヒ
HI
U+30D3
ビ
BI
U+30D4
ピ
PI
U+30D5
フ
HU
U+30D6
ブ
BU
U+30D7
プ
PU
U+30D8
ヘ
HE
U+30D9
ベ
BE
U+30DA
ペ
PE
U+30DB
ホ
HO
U+30DC
ボ
BO
U+30DD
ポ
PO
U+30DE
マ
MA
U+30DF
ミ
MI
U+30E0
ム
MU
U+30E1
メ
ME
U+30E2
モ
MO
U+30E3
ャ
SMALL YA
U+30E4
ヤ
YA
U+30E5
ュ
SMALL YU
U+30E6
ユ
YU
U+30E7
ョ
SMALL YO
U+30E8
ヨ
YO
U+30E9
ラ
RA
U+30EA
リ
RI
U+30EB
ル
RU
U+30EC
レ
RE
U+30ED
ロ
RO
U+30EE
ヮ
SMALL WA
U+30EF
ワ
WA
U+30F0
ヰ
WI
U+30F1
ヱ
WE
U+30F2
ヲ
WO
U+30F3
ン
N
U+30F4
ヴ
VU
U+30F5
ヵ
SMALL KA
U+30F6
ヶ
SMALL KE
U+30F7
ヷ
VA
U+30F8
ヸ
VI
U+30F9
ヹ
VE
U+30FA
ヺ
VO
U+30FB
・
KATAKANA MIDDLE DOT
U+30FC
ー
KATAKANA-HIRAGANA PROLONGED SOUND MARK
U+30FD
ヽ
KATAKANA ITERATION MARK
U+30FE
ヾ
KATAKANA VOICED ITERATION MARK
U+30FF
ヿ
`;

const alphabetSplit = alphabet_katagana.split("\nU+");
alphabetSplit.forEach(sylabble => {
  const alphabet_sylabble = sylabble.split("\n", 3)[1];
  const alphabet_word = sylabble.split("\n", 3)[2];
  for (const group of Hirakana.groups) {
    for (const syl of group.sylabbles) {
      if (!syl.word) {
        continue;
      }
      if (
        syl.word.toLowerCase().trim() === alphabet_word.toLowerCase().trim()
      ) {
        syl.sylabble = alphabet_sylabble;
      }
    }
  }
});
console.log(Hirakana);