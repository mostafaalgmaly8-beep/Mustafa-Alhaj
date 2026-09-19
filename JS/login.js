// تبديل واجهة تسجيل الدخول وإنشاء الحساب

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

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        showToast("لا يوجد حساب مسجل بهذا البريد", "error");
        return;
    }

    if (email !== savedUser.email || password !== savedUser.password) {
        showToast("البريد الإلكتروني أو كلمة المرور غير صحيحة", "error");
        return;
    }

    showToast("تم تسجيل الدخول بنجاح", "success");
    loginForm.reset();
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

    const user = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    showToast("تم إنشاء الحساب بنجاح", "success");

    registerForm.reset();
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