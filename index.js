import { ThongTinKBYT } from "./js/method.js"
document.querySelector('#signup-form .actions ul li:last-child a ').onclick =  () => {
  let thongTinKBYT = new ThongTinKBYT();
  let arrInput = document.querySelectorAll("input#ten, input#ho, input#email, input#soDienThoai, input#ngay, input#thang, input#nam, input#diaChi, input#thongTinDiChuyen, select#loaiNhiem");

  for ( let input of arrInput){
    let {id,value} = input;
    thongTinKBYT[id] = value;
  }
  console.log('thongTinKBYT',thongTinKBYT);
  let htmls = "";
  for (let key in thongTinKBYT){
    htmls += `
     <div class="hienThiThongTin">
        <h4>${key}: </h4><p>${thongTinKBYT[key]}</p>
      </div>
    `
  }
  document.querySelector(".donate-us").innerHTML = htmls;

}