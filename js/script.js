function WTTailor() {

    // retrieve outputList list from text area
    let txtArea = document.getElementById("mailList");
    let alertItem = document.getElementById("alert");
    let inputList = txtArea.value;
    let outputList = "";

    // execute only if string not empty
    if (Boolean(inputList)) {
        // split string into array (semicolon)
        const mailArray = inputList.split(";");

        if (inputList.indexOf("<") == -1) {
            alertItem.innerHTML = "Expected: Surname Name &lt;name.surname@domain&gt;";
            window.setTimeout("closeAlert();", 4000);
            alertItem.style.color = "#50fa7b";
        } else 
            // apply string datafix
            for (const element of mailArray) {
                    outputList = outputList.concat(element.substring(element.indexOf("<")+1,element.indexOf(">")),";");
            }
    } else {
        alertItem.innerHTML = "No input defined";
        window.setTimeout("closeAlert();", 4000);
        alertItem.style.color = "#50fa7b";
    }
    // remove last semicolon and spaces
    outputList = outputList.replace(/;\s*$/, "");
    //overwrite text area
    txtArea.value = outputList;
    console.log(outputList);
    
    return;
}

function copyText() {

    // retrieve outputList list from text area
    let copyText = document.getElementById("mailList");
    let alertItem = document.getElementById("alert");

    // copy to clipboard
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    window.setTimeout("closeAlert();", 4000);

    //Confirmation message
    alertItem.innerHTML = "Output copied to clipboard";
    alertItem.style.color = "#8be9fd";
    
  }

function closeAlert(){
    document.getElementById("alert").style.color = "#282A36";
}

