"use strict";
(function () {
    function Start() {
        console.log("App Started!");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "../data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON Data:");
                console.log("===========");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);

    function Sent() {
        let emailBtn = document.getElementById('email_btn');

        emailBtn.addEventListener("click", function () {
            // get value
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let subject = document.getElementById('subject').value;

            let content = "" + document.getElementById('content').value + '%0A%0A';
            content += "From:" + name.value + '%0a';
            content += "Email:" + email.value + '%0a';

            mailTo.href = "mailto:" + to + "?subject" + "&body=" + body;
            mailTo.click();
        });
    }
})();
//# sourceMappingURL=app.js.map