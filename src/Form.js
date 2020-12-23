import React, {useState} from 'react';
import FormSignUp from './Pages/FormSignUp';
import FormSuccess from './Pages/FormSuccess';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? (<FormSignUp submitForm=
            {submitForm}/>) : (<FormSuccess/>)}
            {/* <FormSuccess/> */}
        </div>
    )
}
export default Form;