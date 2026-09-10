//sessionStorage.setItem("visitorName", "Opah")
//sessionStorage.removeItem("visitorName")

var openerElement
window.customElements.whenDefined('my-opener').then( function() {
    openerElement = document.getElementById('opener');
    console.dir(openerElement);
    setUpOpenerDisplay();

    document.getElementById("submission").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        fetch(event.target.action, {
            method: event.target.method,
            body: formData
        }).then (response => response.json())
        .then(data => {
            console.log("done", data),
            openerElement.style.display = "none"
        })
    })

    //document.getElementById("submitVisitor").addEventListener('click', function(event) {
        //event.preventDefault()
        //registerVisitor(false);
        //openerElement.style.display = "none";
    //});

    document.getElementById("submitNope").addEventListener('click', function(event) {
        event.preventDefault()
        registerVisitor(true);
        openerElement.style.display = "none";
    });
})

function setUpOpenerDisplay () {
    if (sessionStorage.getItem("visitorName") == null) {
        openerElement.style.display = "block";
    } else {
        openerElement.style.display = "none";
    }
}

function registerVisitor (anonCheck) {
    if (!anonCheck) {
        console.log(document.getElementById("visitorName.value"))
        sessionStorage.setItem("visitorName", document.getElementById("visitorName").value);
        sessionStorage.setItem("visitorCompany", document.getElementById("visitorCompany").value);
    } else {
        sessionStorage.setItem("visitorName", "anon");
        sessionStorage.setItem("visitorCompany", "anon"); 
    }
}

