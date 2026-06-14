// ==========================================
// 1. تجهيز نص رسالة الواتساب قبل الإرسال
// ==========================================
const purchaseForm = document.getElementById('purchaseForm');

if (purchaseForm) {
    purchaseForm.addEventListener('submit', function() {
        // جلب القيم التي كتبها العميل
        const customerName = document.getElementById('name').value;
        const customerPhone = document.getElementById('phone_input').value;
        const selectedColor = document.getElementById('color').value;

        // صياغة الرسالة منسقة وسهلة القراءة
        const message = `طلب جديد من الموقع 🎉\n\n` +
                        `👤 الاسم: ${customerName}\n` +
                        `📞 الهاتف: ${customerPhone}\n` +
                        `🎨 اللون المطلوب: ${selectedColor}`;

        // وضع الرسالة داخل الحقل المخفي المخصص لإرسالها لواتساب
        document.getElementById('whatsapp_text').value = message;
    });
}

// ==========================================
// 2. كود تشغيل العداد التنازلي (2 ساعة)
// ==========================================
let countdownTime = 2 * 60 * 60 * 1000; 

const timerInterval = setInterval(() => {
    countdownTime -= 1000;

    const hours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

    if(document.getElementById('hours')) {
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }

    if (countdownTime <= 0) {
        clearInterval(timerInterval);
        const container = document.querySelector('.timer-container');
        if(container) container.innerHTML = "انتهى العرض الحصري!";
    }
}, 1000);
