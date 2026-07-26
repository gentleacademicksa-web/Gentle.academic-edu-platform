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
// تسجيل الدخول
function login(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if(email && password){

        alert("تم تسجيل الدخول بنجاح");

        window.location.href = "dashboard.html";

    }else{

        alert("يرجى إدخال البريد وكلمة المرور");

    }

}

// إنشاء حساب طالب function registerStudent(event){ event.preventDefault(); let name = document.getElementById("studentFullName").value; let email = document.getElementById("studentEmail").value; let course = document.getElementById("course").value; alert( "تم إنشاء حساب الطالب: " + name + "\nالدورة: " + course ); window.location.href = "login.html"; }
// فتح واتساب
function openWhatsApp() {
    window.open(
        "https://wa.me/966533739123",
        "_blank"
    );
}


// فتح تليجرام
function openTelegram() {
    window.open(
        "https://t.me/Saudi_GnlSrvs",
        "_blank"
    );
}


// إرسال بريد إلكتروني
function sendEmail() {
    window.location.href =
        "mailto:gentle.academic.ksa@gmail.com";
}


// إرسال الواجب
function sendHomework(event){

    event.preventDefault();

    let student =
        document.getElementById("studentName").value;

    let subject =
        document.getElementById("subject").value;

    alert(
        "تم استلام الواجب بنجاح\n\n" +
        "الطالب: " + student +
        "\nالمادة: " + subject
    );

}
async function registerStudent(event) {

    event.preventDefault();

    const name = document.getElementById("studentFullName").value;
    const email = document.getElementById("studentEmail").value;
    const phone = document.getElementById("studentPhone").value;
    const course = document.getElementById("course").value;
    const password = document.getElementById("studentPassword").value;


    // إنشاء حساب في Auth
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });


    if (error) {
        alert(error.message);
        return;
    }


    // حفظ بيانات الطالب في جدول students
    const { error: studentError } = await supabase
        .from("students")
        .insert([
            {
                user_id: data.user.id,
                name: name,
                email: email,
                phone: phone,
                course: course
            }
        ]);


    if (studentError) {
        alert(studentError.message);
        return;
    }


    alert("تم إنشاء الحساب بنجاح");

    window.location.href = "login.html";

}
