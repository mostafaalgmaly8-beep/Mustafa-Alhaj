// تبديل واجهة تسجيل الدخول وإنشاء الحس

const loginSection = document.getElementById("loginSection");
const registerSection = document.getElementById("registerSection");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

showRegister.addEventListener("click", () => {
    loginSection.classList.add("hidden");
    registerSection.classList.remove("hidden");
});

showLogin.addEventListener("click", () => {
    registerSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
});


// Validation

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        showToast("يرجى تعبئة جميع الحقول", "error");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("يرجى إدخال بريد إلكتروني صحيح", "error");
        return;
    }

    if (password.length < 6) {
        showToast("كلمة المرور يجب أن تكون 6 أحرف على الأقل", "error");
        return;
    }

    showToast("تم تسجيل الدخول بنجاح", "success");
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !phone || !password || !confirmPassword) {
        showToast("يرجى تعبئة جميع الحقول", "error");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("يرجى إدخال بريد إلكتروني صحيح", "error");
        return;
    }

    if (!/^[0-9]{9,15}$/.test(phone)) {
        showToast("يرجى إدخال رقم هاتف صحيح", "error");
        return;
    }

    if (password.length < 6) {
        showToast("كلمة المرور يجب أن تكون 6 أحرف على الأقل", "error");
        return;
    }

    if (password !== confirmPassword) {
        showToast("كلمة المرور غير متطابقة", "error");
        return;
    }

    showToast("تم إنشاء الحساب بنجاح", "success");
    reset.registerForm();
});


// Toast Notification

function showToast(message, type) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true,
        style: {
            background: type === "success" ? "#28a745" : "#dc3545"
        }
    }).showToast();
}

//booking pag
document.getElementById("bookingForm").onsubmit = function(event) {

    event.preventDefault();

    document.getElementById("message").innerHTML =
        "✅ تم الحجز بنجاح";

};

