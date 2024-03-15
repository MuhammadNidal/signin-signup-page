
  const signInBtn = document.getElementById("signInBtn");
  const signUpBtn = document.getElementById("signUpBtn");
  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");
  const bottomSignInBtn = document.getElementById("bottomSignInBtn");
  const bottomSignUpBtn = document.getElementById("bottomSignUpBtn");

  signInBtn.addEventListener("click", () => {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
  });
  function signIn() {
    const username = document.getElementById("signInUsername").value;
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;

    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields for Sign In.");
    } else {
      alert("Sign In successful!\nUsername: " + username + "\nEmail: " + email);
      // Reset the form
      signInForm.reset();
    }
  }


  signUpBtn.addEventListener("click", () => {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
  });

  bottomSignInBtn.addEventListener("click", () => {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
  });

  bottomSignUpBtn.addEventListener("click", () => {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
  });
