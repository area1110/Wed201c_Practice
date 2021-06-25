function hammthanhtoan() {
    var tenthanhToan =  document.getElementById("billingName");
    var maZipthanhToan = document.getElementById("billingZip");
    if(document.getElementById("same").checked){
      maZipthanhToan.value = document.getElementById("shippingZip").value;
      tenthanhToan.value = document.getElementById("shippingName").value;
      tenthanhToan.setAttribute("disabled", true);
      maZipthanhToan.setAttribute("disabled", true);
    } else {
      tenthanhToan.value = "";
      maZipthanhToan.value = "";
      tenthanhToan.removeAttribute("disabled");
      maZipthanhToan.removeAttribute("disabled");
    }
  }