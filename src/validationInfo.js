export default function validateInfo(values) {
    let errors = {}

    if(!values.fullName.trim()) {
        errors.fullName = "FullName Required"
    }
    if(!values.email) {
        errors.email ="Email required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))  {
        errors.email = "Email address is invalid"
    }

    if(!values.phoneNumber.match(/^[0-9]+$/)) {
        errors.phoneNumber = "Invalid Phone number"
    }
    if(!values.yourBirthday.trim()) {
        errors.yourBirthday = "YourBirthday Required"
    }
    if(!values.career.trim()) {
        errors.career = "career Required"
    }
    return errors;
}