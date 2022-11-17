import React, {useState} from 'react';

const Contact = () => {
  const [userData, setuserData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    address:"",
    message:"",
  });
  let name, value;
  const postUserData = (event) =>{
    name = event.target.name;
    value = event.target.value;

    setuserData({...userData, [name]:value});
  };

  const submitData = async(event) =>{
    event.preventDefault();
    const { firstName, lastName,phone, email,address, message} = userData;
    if(firstName && lastName && phone && email && address && message){
    const res = await fetch('https://reactfirebasewebsite-2ef47-default-rtdb.firebaseio.com/userDataRecord.json', {method:"POST", Headers: {"Content-Type":"application/json",},
  body:JSON.stringify({
    firstName, lastName,phone, email,address, message
  })
  }) ;
  if(res){
    setuserData({
      firstName:"",
    lastName:"",
    phone:"",
    email:"",
    address:"",
    message:"",
    })
    alert("Data Stored")
  }else{
    alert("plz fill data")
  }
}
  };
    return (
        <>
          <section className="contactus-section"> 
              <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                    <div className="contact-leftside col-12 col-lg-5">
                    <h1 className="main-heading fw-bold"> 
                    Connect With Out <br/> Sales Team.
                    </h1>
                    <p className="main-hero-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem eum quas quam numquam, eos vero nulla, tempora nam illum obcaecati sunt incidunt error architecto iure. Nesciunt quia error totam?</p>
                    <figure>
                        <img src="./images/hero1.jpg"alt="contactus" className="img-fluid"/>
                    </figure>
                    </div> 
                      {/* right side  */}
                      <div className="contact-rightside col-12 col-lg-7">
                        <form method="post">
                            <div className="row">
                            <div className="col-12 col-lg-6 contact-input-field">
                            <input type="text" name="firstName" id="" placeholder="firstname" value={userData.firstName} onChange={postUserData} className="form-control"/>
                            </div>
                            
                            <div className="col-12 col-lg-6 contact-input-field">
                            <input type="text" name="lastName" id="" placeholder="Last Name" value={userData.lastName} onChange={postUserData} className="form-control"/>
                            </div>

                            <div className="col-12 col-lg-6 contact-input-field">
                            <input type="text" name="phone" id="" placeholder="Phone Number" value={userData.phone} onChange={postUserData} className="form-control"/>
                            </div>

                            <div className="col-12 col-lg-6 contact-input-field">
                            <input type="text" name="email" id="" placeholder="Email ID" value={userData.email} onChange={postUserData} className="form-control"/>
                            </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                  <input type="text" name="address" id="" placeholder="Add Address"value={userData.address} onChange={postUserData}  className="form-control contact-input-field" />

                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                  <input type="text" name="message" id="" placeholder="Enter Your Message" value={userData.message} onChange={postUserData} className="form-control" />
                              </div>
                            </div>
                            <div class="form-check form-checkbox-style">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                              <label class="form-check-label main-hero-para" for="flexCheckDefault">
                                 I agree that Aasif may send emails to me. 
                             </label>
                             </div>
                            <button type="submit" className="btn btn-style w-100" onClick={submitData}>
                            submit
                            </button>
                        </form>
                      </div>
                      </div>
                </div>
              </div>
              </div>
          </section> 
        </>
    )
}

export default Contact
