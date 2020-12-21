import {useState, useEffect} from 'react';
import firestore from './Database/firebase';


const useForm =(callback,validate) => {
    const userRef = firestore.collection('users');
    const [errors, setErrors] = useState({});  
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [values, setValues] = useState({
        from: '',
        fullName: '',
        email: '',
        yourBirthday: '',
        companyName: '',
        career: '',
        phoneNumber: '',
        purposeVisit: '',
        contactPerson: '',
        interest: '',
    })
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const testAdd = (e) => {
        // e.preventDefault()
        // console.log("test");
        // userRef.add({
        //     FullName: "Hello",
        //     VisitingFrom: "From",
        //     Email: "email@hotmail.com",
        //     CompanyName: "Google",
        //     PhoneNumber: "0000",
        //     purposeVisit: "dddd",
        //     contactPerson: "sss",
        //     interest: "sss",
        // })
        e.preventDefault()
        setErrors(validate(values));
        setIsSubmitting(true);
        if(Object.keys(errors).length === 0 && errors.constructor === Object) {
            userRef.add({
                FullName: values.fullName,
                VisitingFrom: values.from,
                Email: values.email,
                YourBirthday: values.yourBirthday,
                CompanyName: values.companyName,
                Career: values.career,
                PhoneNumber: values.phoneNumber,
                purposeVisit: values.purposeVisit,
                contactPerson: values.contactPerson,
                interest: values.interest,
            })
            .then(function(docRef) {
                console.log("Success register", docRef.id);
            })
            .catch(function(error) {
                console.log("Error register", error);
            });
        }
        
    }

    // const submitForm = e => {
    //     e.preventDefault()
    //     setErrors(validate(values));
    //     setIsSubmitting(true);
    //     if(Object.keys(errors).length === 0 && errors.constructor === Object) {
    //         userRef.add({
    //             FullName: values.fullName,
    //             VisitingFrom: values.from,
    //             Email: values.email,
    //             CompanyName: values.companyName,
    //             PhoneNumber: values.phoneNumber,
    //             purposeVisit: values.purposeVisit,
    //             contactPerson: values.contactPerson,
    //             interest: values.interest,
    //         })
    //         .then(function(docRef) {
    //             console.log("Success register", docRef.id);
    //         })
    //         .catch(function(error) {
    //             console.log("Error register", error);
    //         });
    //     }
    //     // setIsSubmitting(true);
    // }
    // useEffect(() => {
    //     if(Object.keys(errors).length===0 &&
    //     isSubmitting) {
    //         callback();
    //     }
    // },[errors]
    // )

    return {handleChange, values, errors,testAdd};
}
export default useForm;

   // const [from, setFrom] = useState('');
    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [companyName, setCompanyName] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [purposeVisit, setPurposeVisit] = useState('');
    // const [contactPerson, setContactPerson] = useState('');
    // const [interest, setInterest] = useState('');
