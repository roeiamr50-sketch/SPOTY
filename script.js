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

// התאמה לדוגמה - לבדיקה מהר
console.log('🚗 SPOTY - אפליקציית חיפוש חניות בתל אביב');
console.log('📝 הכנס אימייל תקין כדי להמשיך');
