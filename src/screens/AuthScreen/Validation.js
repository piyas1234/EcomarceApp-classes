export const FromValidator = (input, setmsg) => {
    const {  email = "", password = ""  } = input;
    const emailText = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    const emailresult = emailText.test(email)
    const passwordTest = /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/
    const passwordresult = passwordTest.test(password)

     
    const emailMsg = email == "" ? "fill the Field" : email.length < 5 ? "Email should  least 5 chars!" : emailresult == false ? "Please Provide a valid Email" : "okk";
    const passwordMsg = password == "" ? "fill the Field" : password.length < 3 ? "password should be more Than 3!!" :   "okk";
  
    setmsg({   emailMsg, passwordMsg  })

}