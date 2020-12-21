import React, {useState} from 'react';
import Form from './Pages/Form';
import FormSuccess from './FormSuccess';

const NewForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? <Form submitForm=
            {submitForm}/> : <FormSuccess/>}
        </div>
    )
}
export default NewForm;