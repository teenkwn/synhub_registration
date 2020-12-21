import './Form.css';
import synhublogo from '../Assets/synhub-logo.png';
import synergylogo from '../Assets/synergy-logo.png';
import {useState} from 'react';
import firestore from '../Database/firebase';
import validate from '../validationInfo';
import useForm from '../useForm';

function Form({submitForm}) {
    const {handleChange, values, errors, testAdd} = useForm(submitForm,validate);
    const userRef = firestore.collection('users');


    // function submitForm(e) {
    //     e.preventDefault();

    //     userRef.add({
    //         FullName: values.fullName,
    //     })
    //     .then(function(docRef) {
    //         ("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function(error) {
    //         console.error("Error adding document: ", error);
    //     });
    // }
    
    // userRef.get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // console.log(`${doc.id} => $doc.data()`);
    //     })
    // });

    // userRef.doc('RoSEUaUXQ40Tz1tWb6OB').update({
    //     "FullName": "haha",
    // })
    // .then(function() {
    //     console.log("Document successfully updated!");
    // });
    
  return (
    <form className="form-root">
        <div className="form-logo">
            <img src={synhublogo} alt="logo-1" className="form-logo-in-1"></img>
            <img src={synergylogo} alt="logo-2" className="form-logo-in-2"></img>
        </div>
        <div className="form-info">
            <div className="form-info-detail">
                <div>
                    <div>Module1</div>
                    <div>type a description</div>
                </div>
                <div className="line-break"></div>
                <div className="visit-from">
                    <div>Visiting from...*</div>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="from" id="blankRadio1" value="SYN HUB Co-Innovation Space" aria-label="..." onChange={handleChange} ></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios1">
                                SYN HUB Co-Innovation Space
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="from" id="blankRadio1" value="Syntech Innovation Co.,Ltd." aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Syntech Innovation Co.,Ltd.
                            </label>
                        </div>
                    
                    </div>
                </div>
                <div>
                    <div>Upload Your Picture</div>
                    
                    <input type="file"></input>
                    {/* <input type="file"
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg">Bro</input> */}
                    
                </div>
                <div>
                    <div>FullName*</div>
                    <input type="text" placeholder="FirstName" className="box-text" name="fullName" value={values.fullName} onChange={handleChange} ></input>
                    {errors.fullName && <p className="error_alert">{errors.fullName}</p>}
                </div>
                <div>
                    <div>Email*</div>
                    <input type="email" placeholder="example@example.com" name="email" className="box-text" value={values.email} onChange={handleChange} ></input>
                    {errors.email && <p className="error_alert">{errors.email}</p>}
                </div>
                <div>
                    <div>Your Birthday*</div>
                    <input type="text" placeholder="YYYY/MM/DD" name="yourbirthday" className="box-text" value={values.yourbirthday} onChange={handleChange} ></input>
                    {errors.yourbirthday && <p className="error_alert">{errors.yourbirthday}</p>}
                </div>
                <div>
                    <div>หน่วยงาน / องค์กร / มหาวิทยาลัย</div>
                    <input type="text" placeholder="example Co.,Ltd," name="companyName" className="box-text" value={values.companyName} onChange={handleChange} ></input>
                </div>
                <div>
                    <div>อาชีพ</div>
                    <input type="text" placeholder="นักธุรกิจ/นักวิจัย/..." name="career" className="box-text" value={values.career} onChange={handleChange} ></input>
                </div>
                <div>
                    <div>Phone Number*</div>
                    <div className="phonenumber-box">
                        <input type="text" placeholder="+66" className="box-text" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} ></input>
                        {errors.phoneNumber && <p className="error_alert">{errors.phoneNumber}</p>}
                    </div>
                </div>
                <div>
                    <div>Purpose of Visiting*</div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" name="purposeVisit" id="inlineRadio1" value="Workshop" onChange={handleChange} ></input>
                        <label class="form-check-label" for="inlineRadio1">Workshop</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" name="purposeVisit" id="inlineRadio2" value="Codecamp" onChange={handleChange}></input>
                        <label class="form-check-label" for="inlineRadio2">Codecamp</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" name="purposeVisit" id="inlineRadio2" value="Cafe" onChange={handleChange}></input>
                        <label class="form-check-label" for="inlineRadio2">Cafe</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" name="purposeVisit"  id="inlineRadio2" value="Other..." onChange={handleChange}></input>
                        <label class="form-check-label" for="inlineRadio2">Other...</label>
                        </div>
                        </div>
                    <div>
                    <div>Contact Person Name</div>
                    <input type="text" className="box-text" name="contactPerson" value={values.contactPerson} onChange={handleChange}></input>
                </div>
                <div className="interest-project">
                    <div>Interested in our product*</div>
                    <div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="interest" id="exampleRadios1" value="Edutech Workshop" onChange={ handleChange}></input>
                            <label class="form-check-label" for="exampleRadios1">
                                Edutech Workshop
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="interest" id="exampleRadios2" value="Energy Management" onChange={handleChange}></input>
                            <label class="form-check-label" for="exampleRadios1">
                                Energy Management
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="interest" id="exampleRadios1" value="PCB/PCBA" onChange={handleChange}></input>
                            <label class="form-check-label" for="exampleRadios2">
                                PCB/PCBA
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="interest" id="exampleRadios2" value="Robotics" onChange={handleChange}></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Robotics
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="interest" id="exampleRadios1" value="Smart Building" onChange={handleChange}></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Smart Building
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="interest" id="exampleRadios2" value="Smart Environment" onChange={handleChange}></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Smart Environment
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="interest" id="exampleRadios1" value="Smart Health Products" onChange={handleChange}></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Smart Health Products
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="interest" id="exampleRadios2" value="Smart Juristic Platform" onChange={handleChange}></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Smart Juristic Platform
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="interest" id="exampleRadios1" value="Smart Lighting System" onChange={handleChange}></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Smart Lighting System
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="interest" id="exampleRadios2" value="Water Monitoring System" onChange={handleChange}></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Water Monitoring System
                            </label>
                            </div>
                        </div>
                    <div className="picbutton">
                        <button className="fileChoose" type="submit" onClick={testAdd}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
  );
}

export default Form;
