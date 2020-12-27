import {useState, useEffect} from 'react';
import firestore from './Database/firebase';
import firebase from 'firebase/app'
import admin from 'firebase-admin';
import 'firebase/firestore';

const useForm =(callback,validate) => {
    
    const userRef = firestore.firestore().collection('users');
    const countRef = firestore.firestore().collection('count');
    const increment = firebase.firestore.FieldValue.increment(1);
    const industryRef = firestore.firestore().collection('count').doc('industry');
    const interestRef = firestore.firestore().collection('count').doc('interest');
    const improveRef = firestore.firestore().collection('count').doc('improve');
    const [data, setData] = useState([]);
    const allData = [];
    const getCount = () => {
        countRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
            allData.push({id: doc.id, ...doc.data()})
        })
        console.log(allData)
        setData(allData);
        })
    }
    useEffect(getCount,[])
    // console.log(data);

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
                                frequency: 1,
                            })
                            industryRef.update({ [values.industry]: increment})
                            interestRef.update({[values.interest]: increment})
                            improveRef.update({[values.improve]: increment})
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

   