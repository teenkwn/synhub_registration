import './Form.css';
import synhublogo from '../Assets/synhub-logo.png';
import synergylogo from '../Assets/synergy-logo.png';
import {useState} from 'react';
import firestore from '../Database/firebase';

function Form() {
    const [from, setFrom] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [purposeVisit, setPurposeVisit] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [interest, setInterest] = useState('');

    const userRef = firestore.collection('users');

    function submitForm() {
        userRef.add({
            FullName: fullName,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    
    userRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => $doc.data()`);
        })
    });

    userRef.doc('RoSEUaUXQ40Tz1tWb6OB').update({
        "FullName": "haha",
    })
    .then(function() {
        console.log("Document successfully updated!");
    });
    
  return (
    <div className="form-root">
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
                            <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios1">
                                SYN HUB Co-Innovation Space
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."></input>
                            <label class="form-check-label form-add-margin" for="exampleRadios2">
                                Syntech Innovation Co.,Ltd.
                            </label>
                        </div>
                    
                    </div>
                </div>
                <div>
                    <div>Upload Your Picture</div>
                    <div className="picbutton">
                        <button>Browse File</button>
                        <button>Camera</button>
                    </div>
                </div>
                <div>
                    <div>FullName*</div>
                    <input type="text" placeholder="FirstName" className="box-text" name="Fullname" value={fullName} onChange={e => setFullName(e.target.value)} ></input>
                </div>
                <div>
                    <div>Email*</div>
                    <input type="email" placeholder="example@example.com" className="box-text" value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <div>Company Name</div>
                    <input type="text" placeholder="example Co.,Ltd," className="box-text" value={companyName} onChange={e => setCompanyName(e.target.value)}></input>
                </div>
                <div>
                    <div>Phone Number*</div>
                    <div className="phonenumber-box">
                        <input type="text" placeholder="+66" className="box-text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input> 
                    </div>
                </div>
                <div>
                    <div>Purpose of Visiting*</div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                        <label class="form-check-label" for="inlineRadio1">Workshop</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                        <label class="form-check-label" for="inlineRadio2">Codecamp</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                        <label class="form-check-label" for="inlineRadio2">Cafe</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                        <label class="form-check-label" for="inlineRadio2">Other...</label>
                        </div>
                        </div>
                    <div>
                    <div>Contact Person Name</div>
                    <input type="text" className="box-text" value={contactPerson} onChange={ e => setContactPerson(e.target.value)}></input>
                </div>
                <div className="interest-project">
                    <div>Interested in our product*</div>
                    <div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked ></input>
                            <label class="form-check-label" for="exampleRadios1">
                                Edutech Workshop
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked ></input>
                            <label class="form-check-label" for="exampleRadios1">
                                Energy Management
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                PCB/PCBA
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Robotics
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Smart Building
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Smart Environment
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Smart Health Products
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Smart Juristic Platform
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Smart Lighting System
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Water Monitoring System
                            </label>
                            </div>
                        </div>
                    <div className="picbutton">
                        <button type="submit" onClick={submitForm}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Form;
