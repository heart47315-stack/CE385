console.log("Name:jutamas");
console.log("age:21");
console.log("Department:computer engineering");
// สร้างตัวแปรแต่ละประเภท
let myString = "สวัสดี";   // String
let myNumber = 42;              // Number
let myBoolean = true;           // Boolean
let myNull = null;              // Null
let myUndefined;                // Undefined (ยังไม่ได้กำหนดค่า)

// ตรวจสอบชนิดข้อมูลด้วย typeof และแสดงผลทาง console
console.log("myString:", typeof myString);     // "string"
console.log("myNumber:", typeof myNumber);     // "number"
console.log("myBoolean:", typeof myBoolean);   // "boolean"
console.log("myNull:", typeof myNull);         // "object" (JavaScript แสดง null เป็น object)
console.log("myUndefined:", typeof myUndefined); // "undefined"
// ประกาศตัวแปรคะแนนสอบ
let mathScore = 85;
let scienceScore = 72;
let englishScore = 90;

// คำนวณคะแนนรวม
let totalScore = mathScore + scienceScore + englishScore;

// คำนวณค่าเฉลี่ย
let averageScore = totalScore / 3;

// แสดงผลคะแนนรวมและค่าเฉลี่ย
console.log("คะแนนรวม =", totalScore);
console.log("คะแนนเฉลี่ย =", averageScore);

// ใช้ comparison operator เพื่อตรวจสอบค่าเฉลี่ย
if (averageScore >= 80) {
  console.log("ค่าเฉลี่ยมากกว่าหรือเท่ากับ 80");
} else {
  console.log("ค่าเฉลี่ยน้อยกว่า 80");
}
username, password = "admin", "1234"

// ตรวจสอบข้อมูลการเข้าสู่ระบบ   
if (username === "admin" && password === "1234") {
  console.log("เข้าสู่ระบบสำเร็จ");
} else {
  console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
}   