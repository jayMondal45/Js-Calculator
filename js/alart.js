window.onload = function() {
    const isAdult = confirm("Warning: This content is for individuals aged 18 and above. Are you 18 years or older?");
    if (!isAdult) {
      alert("You must be 18 or older to view this content.");
      window.location.href = "https://www.google.com"; // Redirects to another page
    }
  };
  