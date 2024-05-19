// translations.ts

interface TranslationDictionary {
  [key: string]: string;
}

export const translationDictionary: TranslationDictionary = {
  "Anonymous sign-ins are disabled": "يرجى ملئ جميع الحقول!",
  "User already registered": "هذا الحساب موجود",
  "Invalid login credentials": "هذه المعلومات خاطئة",
  "Unable to validate email address: invalid format": "يرجى ادخال البريد الالكتروني بشكل صحيح",
  "Signup requires a valid password": "تحتاج بريد الكتروني حقيقي لانشاء حساب",
  "Password should be at least 6 characters.": "يجب ان تكون كلمة المرور 6 حروف او ارقام على الاقل"
};
