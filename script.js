// וידוא אימייל - בדיקה שהאימייל הוא בפורמט תקין
function validateEmail(email) {
    // Regex לבדיקת פורמט אימייל תקין
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // בדיקה שהאימייל לא מכיל תווים לא תקינים בתחילה
    if (email.includes('מחרטט') || email.includes('שטרודל')) {
        return false;
    }
    
    // בדיקה שהאימייל עומד בתנאים הבסיסיים
    if (!emailRegex.test(email)) {
        return false;
    }
    
    // בדיקה שיש @ בדיוק אחד
    if ((email.match(/@/g) || []).length !== 1) {
        return false;
    }
    
    // בדיקה שאין רווחים
    if (email.includes(' ')) {
        return false;
    }
    
    return true;
}

// קבלת אלמנטים מה-DOM
const emailInput = document.getElementById('email');
const emailForm = document.getElementById('emailForm');
const emailError = document.getElementById('emailError');
const emailSuccess = document.getElementById('emailSuccess');

// בדיקה בזמן הקלדה
emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    
    // ניקוי הודעות
    emailError.classList.remove('show');
    emailSuccess.classList.remove('show');
    this.classList.remove('error', 'success');
    
    if (email.length === 0) {
        return;
    }
    
    if (validateEmail(email)) {
        this.classList.add('success');
        emailSuccess.textContent = '✓ אימייל תקין';
        emailSuccess.classList.add('show');
    } else {
        this.classList.add('error');
        emailError.textContent = '✗ אימייל לא תקין. יש להכניס אימייל בפורמט: user@example.com';
        emailError.classList.add('show');
    }
});

// בדיקה בעת הגשת הטופס
emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    // ניקוי הודעות
    emailError.classList.remove('show');
    emailSuccess.classList.remove('show');
    emailInput.classList.remove('error', 'success');
    
    if (email.length === 0) {
        emailError.textContent = '✗ אנא הכנס אימייל';
        emailError.classList.add('show');
        emailInput.classList.add('error');
        return;
    }
    
    if (!validateEmail(email)) {
        emailError.textContent = '✗ אימייל לא תקין. יש להכניס אימייל בפורמט: user@example.com';
        emailError.classList.add('show');
        emailInput.classList.add('error');
        return;
    }
    
    // אם הגענו לכאן - האימייל תקין!
    emailInput.classList.add('success');
    emailSuccess.textContent = '✓ אימייל תקין! המשך להרשמה...';
    emailSuccess.classList.add('show');
    
    // כאן אפשר להוסיף קוד להעברה לעמוד הבא או שליחת הנתונים לשרת
    console.log('אימייל תקין:', email);
    
    // דוגמה: לאחר 1.5 שניות, העבר לעמוד הבא (יש להוסיף עמוד בעתיד)
    // setTimeout(() => {
    //     window.location.href = '/next-page.html';
    // }, 1500);
});

// ===== בקרות עיצוב =====

// קבלת אלמנטים של הקונטרולות
const bgColorInput = document.getElementById('bgColor');
const logoColorInput = document.getElementById('logoColor');
const buttonColorInput = document.getElementById('buttonColor');
const fontSizeInput = document.getElementById('fontSize');
const fontSizeValue = document.getElementById('fontSizeValue');
const borderRadiusInput = document.getElementById('borderRadius');
const borderRadiusValue = document.getElementById('borderRadiusValue');
const resetBtn = document.getElementById('resetBtn');
const previewContent = document.getElementById('previewContent');

// ערכים ברירת מחדל
const defaultValues = {
    bgColor: '#1a1a1a',
    logoColor: '#22c55e',
    buttonColor: '#22c55e',
    fontSize: 16,
    borderRadius: 20
};

// שינוי צבע הרקע
bgColorInput.addEventListener('input', function() {
    const logoSection = previewContent.querySelector('.logo-section');
    logoSection.style.background = `linear-gradient(135deg, ${this.value} 0%, ${this.value}dd 100%)`;
});

// שינוי צבע הלוגו
logoColorInput.addEventListener('input', function() {
    const logoIcon = previewContent.querySelector('.logo-icon');
    const logoGreen = previewContent.querySelector('.logo-green');
    logoIcon.style.stroke = this.value;
    logoGreen.style.color = this.value;
});

// שינוי צבע הכפתור
buttonColorInput.addEventListener('input', function() {
    const submitBtn = previewContent.querySelector('.submit-btn');
    submitBtn.style.background = `linear-gradient(135deg, ${this.value} 0%, ${this.value}cc 100%)`;
});

// שינוי גודל הטקסט
fontSizeInput.addEventListener('input', function() {
    const profileSection = previewContent.querySelector('.profile-section');
    profileSection.style.fontSize = this.value + 'px';
    fontSizeValue.textContent = this.value + 'px';
});

// שינוי עיגול הפינות
borderRadiusInput.addEventListener('input', function() {
    const phoneFrame = document.querySelector('.phone-frame');
    phoneFrame.style.borderRadius = this.value + 'px';
    borderRadiusValue.textContent = this.value + 'px';
});

// איפוס לברירת מחדל
resetBtn.addEventListener('click', function() {
    bgColorInput.value = defaultValues.bgColor;
    logoColorInput.value = defaultValues.logoColor;
    buttonColorInput.value = defaultValues.buttonColor;
    fontSizeInput.value = defaultValues.fontSize;
    borderRadiusInput.value = defaultValues.borderRadius;
    
    // טריגר אירועים
    bgColorInput.dispatchEvent(new Event('input'));
    logoColorInput.dispatchEvent(new Event('input'));
    buttonColorInput.dispatchEvent(new Event('input'));
    fontSizeInput.dispatchEvent(new Event('input'));
    borderRadiusInput.dispatchEvent(new Event('input'));
});

console.log('🚗 SPOTY - אפליקציית חיפוש חניות בתל אביב');
console.log('📝 הכנס אימייל תקין כדי להמשיך');
