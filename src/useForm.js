import {useState, useEffect} from 'react';
import firestore from './Database/firebase';

const useForm =(callback,validate) => {
    const userRef = firestore.firestore().collection('users');
    const storage = firestore.storage();
    const [errors, setErrors] = useState({});  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [image, setImage] = useState(null);
    const [values, setValues] = useState({
        from: '',
        fullName: '',
        email: '',
        picFile: '',
        yourBirthday: '',
        companyName: '',
        career: '',
        position: '',
        industry: '',
        phoneNumber: '',
        purposeVisit: '',
        improve: '',
        contactPerson: '',
        interest: '',
    })
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        if (e.target.files) {
            setImage(e.target.files[0]);
        } else {
            setValues({
                ...values,
                [name]: value
            })
        }
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(values));
        setIsSubmitting(true);
        if(Object.keys(errors).length === 0 && errors.constructor === Object) {
            if(image) {
                const uploadTask = storage.ref(`images/${image.name}`).put(image);
                uploadTask.on(
                    'state_changed',
                    snapshot => {},
                    error => {
                        console.log(error)
                    },
                    () => {
                        storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            console.log(url);
                            userRef.add({
                                FullName: values.fullName,
                                VisitingFrom: values.from,
                                Email: values.email,
                                PicFile: url,
                                YourBirthday: values.yourBirthday,
                                CompanyName: values.companyName,
                                Career: values.career,
                                Position: values.position,
                                Industry: values.industry,
                                PhoneNumber: values.phoneNumber,
                                purposeVisit: values.purposeVisit,
                                Improve: values.improve,
                                contactPerson: values.contactPerson,
                                interest: values.interest,
                            })
                        })
                    }
                )
            }
        }
    }
        
    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );
    return {handleChange, values, errors,handleSubmit};
};
export default useForm;

   // const [from, setFrom] = useState('');
    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [companyName, setCompanyName] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [purposeVisit, setPurposeVisit] = useState('');
    // const [contactPerson, setContactPerson] = useState('');
    // const [interest, setInterest] = useState('')

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

    // )