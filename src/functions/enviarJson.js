function EnviarJSON(RecebeJSON) {

 <---
  //const firstname = document.getElementById("fname").value;
  //const lastname = document.getElementById("lname").value;


  //const dict_values = {firstname, lastname} //Pass the javascript variables to a dictionary.
  //const s = JSON.stringify(dict_values); // Stringify converts a JavaScript object or value to a JSON string
  //console.log(s); // Prints the variables to console window, which are in the JSON format
  //window.alert(s)
  $.ajax({
      url:"/api/CONSUMIR_API",
      type:"POST",
      contentType: "application/json",
      data: JSON.stringify(RecebeJSON)});

}