
function ChangeToSignUp() {
    document.getElementById("clickityclick").innerHTML = "SIGN UP";
    document.getElementById("clickityclick").onclick = function () { signUp() };
    document.getElementById("logIn").classList.remove("active");
    document.getElementById("signUp").classList.add("active");
}
function ChangeToLogIn() {
    document.getElementById("clickityclick").innerHTML = "LOG IN";
    document.getElementById("clickityclick").onclick = function () { logIn() };
    document.getElementById("signUp").classList.remove("active");
    document.getElementById("logIn").classList.add("active");
}

function UpdateInfo() {
    if (localStorage.getItem("currentUser"))
    {
        document.getElementById("signOut").classList.remove("hide");
        document.getElementById("formContent").classList.add("hide");
        let mesaj = "Momentan sunteti autentificat sub utilizatorul " + localStorage.getItem("currentUser");
        document.getElementById("autentificareInfo").innerHTML = mesaj;   
    }
    else
    {
        document.getElementById("formContent").classList.remove("hide");
        document.getElementById("signOut").classList.add("hide");
        let mesaj = "Momentan nu sunteti autentificat!"; 
        document.getElementById("autentificareInfo").innerHTML = mesaj; 
    }
}


function SignOut() {
    localStorage.removeItem("currentUser");
    UpdateInfo();
}    


function signUp() {
    let numeIntrodus = document.getElementById("nume").value;
    let parolaIntrodusa = document.getElementById("parola").value;
    if (numeIntrodus != "") {
        if (parolaIntrodusa != ""){
            if (localStorage.getItem(numeIntrodus)) {
                var mesaj = 'Utilizatorul ' + numeIntrodus + ' este deja inregistrat!';
                alert(mesaj);
            }
            else {
                let user = { name: numeIntrodus, password: parolaIntrodusa };
                localStorage.setItem(user.name, JSON.stringify(user));
            }   
        }
        else {
            alert("Trebuie sa introduci o parola!");
        }
    }
    else {
        alert("Trebuie sa introduci un nume de utilizator!")
    }
}
function logIn() {
    let numeIntrodus = document.getElementById("nume").value;
    let parolaIntrodusa = document.getElementById("parola").value;

    if (numeIntrodus != "") {
        if (parolaIntrodusa != "") {
            if (localStorage.getItem(numeIntrodus)){
                let userTry = JSON.parse(localStorage.getItem(document.getElementById("nume").value));
                if (userTry.password == document.getElementById("parola").value)
                {
                    localStorage.setItem("currentUser", userTry.name);
                    UpdateInfo();
                }
                else {
                    alert('Parola introdusa nu este corecta!');
                }
            }
            else {
                var mesaj = 'Nu exista un utilizator cu numele '+numeIntrodus;
                alert(mesaj);
            }
        }
        else {
            alert("Trebuie sa introduci o parola!");
        }
    }
    else {
        alert("Trebuie sa introduci un nume de utilizator!");
    }
    
}

function ShowUI() {
    document.getElementById("dark").classList.remove("hide");
    document.getElementById("autentificareUI").classList.remove("hide");
}

function HideUI() {
    document.getElementById("dark").classList.add("hide");
    document.getElementById("autentificareUI").classList.add("hide");
}