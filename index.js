// Bài 1: Tính tiền lương theo giờ
function ex1(){

    let Credit = +document.getElementById("input_credit").value; // thêm dấu cộng ở đầu để chuyển string thành value
    let Day = +document.getElementById("input_day").value;
    let Payment = 0;
    
    
   


        Payment = Credit*Day;

   

     alert(` Tiền lương của bạn: ${Payment}`); // Viết kiểu có dấu huyền này dễ hơn
 }

// Bài 2: Tính giá trị trung bình

function ex2(){

    let Number1 = +document.getElementById("input_num1").value; // thêm dấu cộng ở đầu để chuyển string thành value
    let Number2 = +document.getElementById("input_num2").value;
    let Number3 = +document.getElementById("input_num3").value;
    let Number4 = +document.getElementById("input_num4").value;
    let Number5 = +document.getElementById("input_num5").value;
    let Ave = 0;
    
    
   


       Ave = (Number1 + Number2 + Number3 + Number4 + Number5) / 5;

   

     alert(` Giá trị trung bình: ${Ave}`); // Viết kiểu có dấu huyền này dễ hơn
 }
// Bài 3: Quy đổi tiền
function ex3(){

    let USD = +document.getElementById("input_usd").value; // thêm dấu cộng ở đầu để chuyển string thành value
    let VND = 0;
    
    
    
   


    VND = Intl.NumberFormat('vn-VN').format(USD*23500);

   

     alert(` Tiền VND của bạn: ${VND}`); // Viết kiểu có dấu huyền này dễ hơn
 }

 // Bài 4:Tính diện tích, chu vi hình chữ nhật
function ex4(){

    let CD = +document.getElementById("input_cd").value; // thêm dấu cộng ở đầu để chuyển string thành value
    let CR = +document.getElementById("input_cr").value;
    let CV = 0;
    let DT = 0;
    
    
   

       CV = (CD + CR)*2 
       DT = CD*CR;

   

     alert(` Chu vi: ${CV}` +` `+ `& Diện tích: ${DT}`); // Viết kiểu có dấu huyền này dễ hơn
 }
// Bài 5: Tính tổng 2 ký số
function ex5(){

    let Numb = +document.getElementById("input_numb").value; // thêm dấu cộng ở đầu để chuyển string thành value
    
    let NumbDv = Numb % 10;
    let NumbHc = Math.floor(Numb /10);
    let SumNumb = 0;
    
    
   


   SumNumb = NumbDv + NumbHc;

   

     alert (` Tổng 2 ký số của số là: ${SumNumb}`); // Viết kiểu có dấu huyền này dễ hơn
 }
  