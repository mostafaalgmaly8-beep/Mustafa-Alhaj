function openAboutModal() {

    document.getElementById("aboutModal").style.display = "block";

    document.getElementById("aboutContent").innerHTML = "جاري التحميل...";

    var request = new XMLHttpRequest();

    request.open("GET", "about.html", true);

    request.onreadystatechange = function () {

        if (request.readyState === 4) {

            if (request.status === 200) {

                document.getElementById("aboutContent").innerHTML =
                    request.responseText;

            } else {

                document.getElementById("aboutContent").innerHTML =
                    "حدث خطأ أثناء تحميل المحتوى.";

                alert("تعذر تحميل ملف about.html");
            }
        }
    };

    request.onerror = function () {

        document.getElementById("aboutContent").innerHTML =
            "حدث خطأ في الاتصال.";

        alert("حدث خطأ في الشبكة أثناء تحميل المحتوى.");
    };

    request.send();
}

