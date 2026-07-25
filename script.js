// رسالة ترحيب
document.addEventListener("DOMContentLoaded", function () {
    console.log("مرحبًا بك في منصة Gentle Academic");
});

// فتح واتساب
function openWhatsApp() {
    const phone = "966500000000"; // غيّر الرقم إلى رقمك
    const message = encodeURIComponent("السلام عليكم، أرغب في الاستفسار عن الدورات.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

// فتح تيليجرام
function openTelegram() {
    const username = "YourTelegramUsername"; // غيّر اسم المستخدم
    window.open(`https://t.me/${username}`, "_blank");
}

// إرسال بريد إلكتروني
function sendEmail() {
    const email = "info@example.com"; // غيّر البريد الإلكتروني
    const subject = encodeURIComponent("استفسار عن الدورات");
    window.location.href = `mailto:${email}?subject=${subject}`;
}

// إرسال الواجب (واجهة فقط)
function sendHomework(event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const subject = document.getElementById("subject").value;

    if (!studentName || !subject) {
        alert("يرجى تعبئة جميع الحقول المطلوبة.");
        return;
    }

    alert(`تم استلام واجب الطالب ${studentName} في دورة ${subject} بنجاح.`);
}

// البحث في الدورات
function searchCourses() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (card.innerText.toLowerCase().includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
