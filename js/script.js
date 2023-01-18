let signin = document.querySelector("button");
let login = document.getElementById("login-submit");
let warning = document.querySelector(".message");

signin.onclick = (e) => {
    e.preventDefault();
        if (document.getElementById("sign-submit"))
        {
            let login = document.getElementById("login_mode");
            let login_value = login.options[login.selectedIndex].value;
            let sign_usernameEL = document.getElementById("sign-name");
            let sign_username = sign_usernameEL.value;
            let sign_useridEL = document.getElementById("sign-user");
            let sign_userid = sign_useridEL.value;
            let sign_passEL = document.getElementById("sign-pass");
            let sign_pass = sign_passEL.value;
            let sign_cpassEL = document.getElementById("sign-cpass");
            let sign_cpass = sign_cpassEL.value;
            
                if (sign_username == "" && sign_userid == "" && sign_pass == "" && sign_cpass == "")
                {
                    warning.textContent = "Fields should not be empty!"
                }
                else if (sign_cpass != sign_pass) {
                    warning.textContent = "Passwords are not matched!"
                }
                else
                {
                    if (login_value == "master" && sign_userid != localStorage.getItem("Student_Userid"))
                    {

                        warning.textContent = "Registration Successful!";
                        localStorage.setItem("Master_Username", sign_username);
                        localStorage.setItem("Master_Userid", sign_userid);
                        localStorage.setItem("Master_Password", sign_pass);
                        fieldreset()
                    }
                    else if (login_value == "student"  && sign_userid != localStorage.getItem("Master_Userid"))
                    {

                        warning.textContent = "Student Registration Successful!"
                        localStorage.setItem("Student_Username", sign_username)
                        localStorage.setItem("Student_Userid", sign_userid)
                        localStorage.setItem("Student_Password", sign_pass)
                        fieldreset()
                    }
                    else if (login_value == "student"  && sign_userid == localStorage.getItem("Master_Userid"))
                    {
                        warning.textContent = "User ID already exit!, Try another one!"
                    }
                    else if (login_value == "master"  && sign_userid == localStorage.getItem("Student_Userid"))
                    {
                        warning.textContent = "User ID already exit!, Try another one!"
                    }
                }
        function fieldreset()
        {
            sign_usernameEL.value = ""
            sign_useridEL.value = ""
            sign_passEL.value = ""
            sign_cpassEL.value =""
        }
        }
        else
        {
            let login_userid = document.getElementById("user").value
            let login_password = document.getElementById("pass").value
            let master_userid = localStorage.getItem("Master_Userid")
            let master_pass = localStorage.getItem("Master_Password")
            
            let student_userid = localStorage.getItem("Student_Userid")
            let student_pass = localStorage.getItem("Student_Password")
            let student_username = localStorage.getItem("Student_Username")
            let master_name = document.getElementById("master-name")
            if(login_userid == "" && login_password =="")
            {
                warning.textContent = "Fields should not be empty!"
            }
            else if(login_userid == master_userid && master_pass == login_password)
            {
                window.location.href="master.html"
                let master_name = document.getElementById("master-name")
                let master_username = localStorage.getItem("Master_Username")
                master_name.innerText = master_username
            }
            else if(login_userid == student_userid && student_pass == login_password)
            {
                window.location.href="student.html"
            }
            else{
                warning.textContent = "Username or Password is incorrect!"
            }
        }
};


