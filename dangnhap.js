let fullname = "thin ne ";
let age = 24;
let object = "studen";

document.getElementById("p1").textContent = `My name is ${fullname}`;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = object;

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
let Thong_bao_thanh_toan;
let username;
let usage;
let so_may_man;
let usphone;
document.getElementById("btn_mayman").onclick = function () {
  so_may_man = parseInt(document.getElementById("so_may_man").value.trim()); // Chuyển thành số
  switch (so_may_man) {
    case 1:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "chúc bạn may mắn lần sao";
      break;
    case 2:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "Trúng cái nịt";
      break;
    case 3:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "Trúng bim bim";
      break;
    case 4:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "ko có gì hết";
      break;
    case 5:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "Trúng J97";
      break;
    case 6:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "Trúng trịnh trần phương tuấn";
      break;
    case 7:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "Trúng Linda";
      break;
    case 8:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "trúng Sơn Tùng";
      break;
    case 9:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "Trúng babiboo";
      break;
    case 10:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "trúng ko rõ";
      break;
    default:
      document.getElementById("thong_bao_trung_thuong").textContent =
        "nhập số từ 1-10 ";
  }
};

document.getElementById("ussubmit").onclick = function () {
  let kiemtraloi = false;
  username = document.getElementById("usname").value.trim();
  usage = document.getElementById("usage").value.trim();
  usphone = document.getElementById("usphone").value.trim();

  if (!username) {
    document.getElementById("thogbaousname").textContent = "Nhập tên của bạn";
    kiemtraloi = true;
  } else if (/\d/.test(username)) {
    // Kiểm tra xem tên có chứa số hay không
    document.getElementById("thogbaousname").textContent =
      "Tên không được chứa số";
    kiemtraloi = true;
  } else {
    document.getElementById("thogbaousname").textContent = "";
  }

  if (!usage) {
    document.getElementById("thongusage").textContent = "Nhập tuổi của bạn";
    kiemtraloi = true;
  } else {
    document.getElementById("thongusage").textContent = "";
  }
  if (!usphone) {
    const thongbaophone = document.getElementById("thongbaophone");
    thongbaophone.textContent = "Nhập Số điện thoại giùm cái";
    thongbaophone.classList.remove("error");
    kiemtraloi = true;
  } else {
    const phoneRegex = /^\d{10}$/; // Biểu thức kiểm tra 10 số, chỉ chứa chữ số

    if (!phoneRegex.test(usphone)) {
      thongbaophone.textContent =
        "Số điện thoại không hợp lệ. Phải là 10 chữ số, không ký tự đặc biệt.";
      thongbaophone.classList.add("error");
      kiemtraloi = true;
    } else {
      document.getElementById("thongbaophone").textContent = "";
    }
  }

  // Kiểm tra trạng thái checkbox
  if (myCheckBox.checked) {
    document.getElementById("subResult").textContent =
      "Bạn đã đăng ký thanh toán !";
  } else {
    document.getElementById("subResult").textContent =
      "Bạn chưa đăng ký than htoán.";
    kiemtraloi = true;
  }
  if (visaBtn.checked) {
    paymentResult.textContent = "Đăg ký thanh toán bằng the visa";
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = "Đăng ký thanh toán bằng Mastercard";
  } else if (payPalBtn.checked) {
    paymentResult.textContent = "Đăng ký thanh toán bằn paypal";
  } else {
    paymentResult.textContent = "Vui lòng chọn phương thức thanh toán";
    kiemtraloi = true;
  }

  if (!kiemtraloi) {
    let age = Number(usage); // Chuyển đổi tuổi sang số
    if (age <= 18 || age >= 80) {
      document.getElementById("thongusage").textContent =
        "Bạn quá ít tuổi hoặc quá nhiều tuổi để sử dụng web";
      kiemtraloi = true;
    } else {
      let fname = username.slice(0, username.indexOf(" ")); // loại bỏ từ sau dấu cách của tên lấy tên đầu
      document.getElementById(
        "hello"
      ).textContent = `Xin chào ${fname}, ${age} tuổi , sdt : ${usphone}`;
      document.getElementById("hello").classList.add("success"); // chuyển màu
    }
  }
};

const Decrease = document.getElementById("decrease");
const Increase = document.getElementById("increase");
const Reset = document.getElementById("reset");
const Count = document.getElementById("count");
const Roll = document.getElementById("roll");
let demso = 0;

Increase.onclick = function () {
  demso++;
  Count.textContent = demso;
};
Decrease.onclick = function () {
  demso--;
  Count.textContent = demso;
};
Reset.onclick = function () {
  demso = 0;
  Count.textContent = demso;
};

Roll.onclick = function () {
  demso = Math.round(Math.random() * 99 + 1);
  Count.textContent = demso;
};

// let loggedIn = false;
// let usernameh;
// let passwordh;

// while (!loggedIn) {
//   usernameh = window.prompt(`Enter your username`);
//   passwordh = window.prompt(`Enter your password`);

//   if (usernameh === "myUsername" && passwordh === "myPassword") {
//     loggedIn = true;
//     console.log("You are logged in!");
//   } else {
//     console.log("Invalid credentials! Please try again");
//   }
// }
// =========================================== vòng lặp while
// for (i = 0; i <= 10; i += 1) {
//   if (i == 5) {
//     continue; // nếu i = 5 thì bỏ qua
//   } else if (i == 8) {
//     break; // nếu i gần = 8 thì ừng
//   }
//   console.log(i);
// }
// ===================== vòng lặp for

function tinhngay(ngay, thang, nam) {
  console.log(`bạn sinh ngày ${ngay} tháng ${thang} năm ${nam}`);
}
tinhngay(3, 7, 2000);

const input_cannang = document.getElementById("input_cannang");
const to_pound = document.getElementById("to_pound");
const to_stone = document.getElementById("to_stone");
const result = document.getElementById("result");

function convert() {
  const cannang = parseFloat(input_cannang.value); // Lấy giá trị và chuyển sang số
  if (isNaN(cannang) || cannang <= 0) {
    result.textContent = "Vui lòng nhập số cân nặng hợp lệ.";
    result.classList.add("error");
    return;
  }

  if (to_pound.checked) {
    const pounds = (cannang * 2.20462).toFixed(2); // 1kg = 2.20462 pound
    result.textContent = `${cannang} kg = ${pounds} pounds`;
    result.classList.add("success");
    result.classList.remove("error");
  } else if (to_stone.checked) {
    const stones = (cannang * 0.15747).toFixed(2); // 1kg = 0.15747 stone
    result.textContent = `${cannang} kg = ${stones} stones`;
    result.classList.add("success");
    result.classList.remove("error");
  } else {
    result.textContent = "Vui lòng chọn đơn vị chuyển đổi.";
    result.classList.add("error");
  }
}
function roll_xucac() {
  const input_xucxac = parseInt(document.getElementById("input_xucxac").value); // Chuyển thành số
  const ketqua_xucxac = document.getElementById("ketqua_xucxac");
  const anh_xucxac = document.getElementById("anh_xucxac");
  const values = []; // Mảng để lưu giá trị xúc xắc
  const images = []; // Mảng để lưu hình ảnh xúc xắc

  for (let i = 0; i < input_xucxac; i++) {
    // Duyệt từ 0 đến input_xucxac - 1
    const value = Math.floor(Math.random() * 6) + 1; // Tạo giá trị xúc xắc ngẫu nhiên từ 1 đến 6
    values.push(value); // Thêm giá trị vào mảng
    images.push(`<img src="xucxac/${value}.png"  alt="xuc xac so ${value}">`);
    ketqua_xucxac.textContent = `xucxac: ${values.join(" , ")}`;
    anh_xucxac.innerHTML = images.join("");
  }

  console.log(values);
}

// ===============================================================================================

const arrs = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
arrs[0][2] = "hi";
for (let row of arrs) {
  const rowstr = row.join(" ");
  console.log(rowstr);
}

function openrige(...foods) {
  console.log(...foods);
  // return foods;
}
const food1 = "banana";
const food2 = "buno";
const food3 = "kol";
const food4 = "sao";
const foods = openrige(food1, food2, food3, food4);
console.log(foods);

function chuoiten(...hovaten) {
  return hovaten.join(" ");
}
const hoten = chuoiten("nguyen", "van", "khi", "xua");
console.log(hoten);

function randompw(pwleng, viethoa, vietthuong, kytudaubiet, sorandom) {
  const avietthuong = "qwertyuiopasdfghjklzxcvbnm";
  const aviethoa = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const asorandom = "1234567890";
  const akytudaubiet = "!@#$%^&*?<>?";
  let trontu = "";
  let matkhau = "";
  trontu += vietthuong ? avietthuong : "";
  trontu += viethoa ? aviethoa : "";
  trontu += sorandom ? asorandom : "";
  trontu += kytudaubiet ? akytudaubiet : "";
  if (pwleng <= 0) {
    return "Độ dài mật khẩu phải lớn hơn 0";
  }
  if (pwleng.length === 0) {
    return `Không có ký tự nào được chọn để tạo mật khẩu`;
  }
  for (let i = 0; i <= pwleng; i++) {
    const randommatkhau = Math.floor(Math.random() * trontu.length);
    matkhau += trontu[randommatkhau];
  }
  return matkhau;
}
const pwleng = 12;
const viethoa = true;
const vietthuong = true;
const kytudaubiet = true;
const sorandom = true;
const passwods = randompw(pwleng, viethoa, vietthuong, kytudaubiet, sorandom);
console.log(`Generated password: ${passwods}`);

hihi();
haha();
function hihi() {
  setTimeout(function(){
    
  })
  console.log(`hihi`);
}
function haha() {
  console.log(`haha`);
}
