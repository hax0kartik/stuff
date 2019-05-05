function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
  
    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';
  
    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;
  
    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
  
    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';
  
  
    textArea.value = text;
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  
    document.body.removeChild(textArea);
}
  
function produce_input(){    
    /*==================================================================
    [ Validate ] */
    var site_name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var m_cnumber = document.getElementById("m_cnumber").value;
    var fbw_number = document.getElementById("fbw_number").value;
    var depot_weld = document.getElementById("depot_weld").value;
    var total_weld = document.getElementById("total_weld").value;
    var block_time_0 = document.getElementById("block_time_0").value;
    var block_time_1 = document.getElementById("block_time_1").value;
    var month_cum = document.getElementById("month_cum").value;
    var daily_cut = document.getElementById("daily_cut").value;
    var hole = document.getElementById("hole").value;

    var input = "Daily Progress report for " + site_name + ".\n" +
                "Date: " + date + "\n" +
                "M/C Number: " + m_cnumber + "\n" +
                "F.B.W Number: " + fbw_number + "\n" +
                "Depot Weld: " + depot_weld + "\n" +
                "Total Weld: " + total_weld + "\n" +
                "Block Time: " + block_time_0 + " to " + block_time_1 + "\n" +
                "Month Cum: " + month_cum + "\n" +
                "Daily Cut: " + daily_cut + "\n" +
                "Hole: " + hole + "\n";
    copyTextToClipboard(input);
    alert("Copied!!!!!")
}
