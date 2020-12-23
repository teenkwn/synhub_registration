import './FormSignUp.css';
import synhublogo from '../Assets/synhub-logo.png';
import synergylogo from '../Assets/synergy-logo.png';
import {useState} from 'react';
import firestore from '../Database/firebase';
import validate from '../validationInfo';
import useForm from '../useForm';
// import '../CheckForm';

function FormSignUp({submitForm}) {
    const {handleChange, values,handleSubmit, errors} = useForm(submitForm,validate);
    const userRef = firestore.firestore().collection('users');

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
                    
                    <input type="file" name="picFile" onChange={handleChange}></input>
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
                    <input type="text" placeholder="YYYY/MM/DD" name="yourBirthday" className="box-text" value={values.yourBirthday} onChange={handleChange} ></input>
                    {errors.yourBirthday && <p className="error_alert">{errors.yourBirthday}</p>}
                </div>
                <div>
                    <div>หน่วยงาน / องค์กร / มหาวิทยาลัย</div>
                    <input type="text" placeholder="example Co.,Ltd," name="companyName" className="box-text" value={values.companyName} onChange={handleChange} ></input>
                </div>
                <div>
                    <div>อาชีพ</div>
                    <input type="text" name="career" className="box-text" value={values.career} onChange={handleChange} ></input>
                </div>
                <div>
                    <div>ตำแหน่ง/สถานะ</div>
                    <input type="text" name="position" className="box-text" value={values.position} onChange={handleChange} ></input>
                </div>
                <div className="visit-from">
                    <div>อยู่ในอุตสาหกรรมใด</div>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="industry" id="blankRadio1" value="Smart farm/ Agriculture" aria-label="..." onChange={handleChange} ></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios1">
                                Smart farm/ Agriculture
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="industry" id="blankRadio1" value="Food and beverage" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Food and beverage
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="industry" id="blankRadio1" value="Consumer product" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Consumer product
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="industry" id="blankRadio1" value="Financial" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Financial
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="industry" id="blankRadio1" value="Property and Construction" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Property and Construction
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="industry" id="blankRadio1" value="Resource" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Resource
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="industry " id="blankRadio1" value="Communication " aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Communication 
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="industry" id="blankRadio1" value="System Integrator " aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                System Integrator 
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="industry" id="blankRadio1" value="Mobility" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Mobility
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="industry" id="blankRadio1" value="Services" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Services
                            </label>
                        </div>
                    </div>
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
                </div>
                <div>
                <div className="visit-from">
                    <div>สนใจพัฒนาด้านใดเป็นพิเศษ</div>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Creativity" aria-label="..." onChange={handleChange} ></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios1">
                                Creativity
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Leadership Ability" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Leadership Ability
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Design Thinking" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Design Thinking
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Agile" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Agile 
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Pitching Skill" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Pitching Skill
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Coding" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Coding
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Data Science" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Data Science
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Digital Marketing" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Digital Marketing
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Marketing Communication" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Marketing Communication
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Branding" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Branding
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="improve" id="blankRadio1" value="Business Model" aria-label="..." onChange={handleChange}></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Business Model
                            </label>
                        </div>
                    </div>
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
                        <button className="fileChoose" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
  );
}

export default FormSignUp;
