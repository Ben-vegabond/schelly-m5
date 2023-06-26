$(function () {
    // Get the current date
    const currentDate = new Date();
  
    // Get the individual components of the date
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDate.getDate();
  
    // Format the date as desired (e.g., "MM/DD/YYYY")
    const formattedDate = `${month}/${day}/${year}`;
  
    // Display the formatted date
    document.getElementById("currentDate").textContent = formattedDate;
  
    // Get the current hour in 24-hour format
    const currentHour = dayjs().format("H");
// use this for testing 
    // const currentHour = "11";
    $("#currentHour").text(currentHour);
    // Iterate over each timeblock element
    const timeblocks = document.getElementsByClassName("time-block");
    for (let i = 0; i < timeblocks.length; i++) {
      const timeblock = timeblocks[i];
  
      // Get the timeblock identifier
      const timeblockId = timeblock.getAttribute("id");
  
      // Extract the hour from the timeblockId
      const hour = parseInt(timeblockId.split("-")[1]);
  
      // Compare the hour with the current hour
      if (hour < currentHour) {
        // Apply "past" class if it's a past hour
        timeblock.classList.add("past");
      } else if (hour == currentHour) {
        // Apply "present" class if it's the current hour
        timeblock.classList.add("present");
      } else {
        // Apply "future" class if it's a future hour
        timeblock.classList.add("future");
      }
    }
  
    $(".saveBtn").click(function () {
      console.log("click");
      console.log($(this).closest(".time-block"));
    });
  
    // TODO: Add a listener for click events on the save button.
    // This code should use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  });
  
  $(function() {
    // Retrieve saved user input from localStorage and set values of textarea elements
    for (let i = 9; i <= 17; i++) {
      const savedInput = localStorage.getItem(`hour-${i}`);
      if (savedInput) {
        $(`#hour-${i} textarea`).val(savedInput);
      }
    }
  
    $(".saveBtn").click(function() {
      // Get the id of the parent time-block
      const timeblockId = $(this).closest(".time-block").attr("id");
      // Get the user input from the textarea within the clicked time-block
      const userInput = $(this).siblings("textarea").val();
      // Save the user input in localStorage using the timeblockId as the key
      localStorage.setItem(timeblockId, userInput);
    });
  
    // Rest of your existing code...
  
  });
  