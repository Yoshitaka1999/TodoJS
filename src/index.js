// var val1 = "var変数";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// var val1 = "再宣言"
// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// val2 = "上書き"
// console.log(val2);

// // letは再宣言できない
// let val2 = "再宣言"
// console.log(val2);

// const val3 = "const変数"
// console.log(val3);

// // constは上書きも再宣言もできない
// val3 = "上書き"
// console.log(val3);

// const val3 = "再宣言"
// console.log(val3);

// constで定義したオブジェクトはプロパティの編集できる
// const val4 = {
//   name: "かとう",
//   age: 22,
// };
// val4.name = "kato";
// val4.address = "Chiba";
// console.log(val4);

// // constで定義した配列はプロパティの編集ができる
// const val5 = ['cat', 'dog'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const name = "かとう";
// const age = 22;

// const message1 = `私の名前は${name}です。${age}歳です。`
// console.log(message1);

// アロー関数
// const func1 = (str) => {
//   return str;
// }

// const func1 = (str) => str;
// console.log(func1("func1です"));

// const func2 = (num1, num2) => num1 + num2;
// console.log(func2(10, 20));

// 分割代入
// const myProfile = {
//   name: "加藤",
//   age: 22,
// }

// オブジェクト
// const message1 = `名前は${myProfile.name}です。${myProfile.age}歳です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。${age}歳です。`
// console.log(message2);

// 配列
// const myProfile = ['加藤', 22]

// const message3 = `名前は${myProfile[0]}です。${myProfile[1]}歳です。`
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。${age}歳です。`
// console.log(message4);

// デフォルト値、引数
// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん!`);
// sayHello('kato');

// スプレット構文
// 配列を分割
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// 配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// Map,filterの配列処理
// const nameArr = ["田中", "山田", "佐藤"];
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// })
// console.log(newNumArr)

// const newNumArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNumArr)

// 三項演算子
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1)

// const num = 1300;

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して下さい';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲ないです';
// }
// console.log(checkSum(50, 40));

// 論理演算子の本当の意味
// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "全額未設定です"
// console.log(fee)

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました"
// console.log(fee2);
