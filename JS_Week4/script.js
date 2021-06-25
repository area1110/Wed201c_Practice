function billingFunction() {
    var billingName =  document.getElementById("billingName");
    var billingZip = document.getElementById("billingZip");
    if(document.getElementById("same").checked){
      billingZip.value = document.getElementById("shippingZip").value;
      billingName.value = document.getElementById("shippingName").value;
      billingName.setAttribute("disabled", true);
      billingZip.setAttribute("disabled", true);
    } else {
      billingName.value = "";
      billingZip.value = "";
      billingName.removeAttribute("disabled");
      billingZip.removeAttribute("disabled");
    }
  }