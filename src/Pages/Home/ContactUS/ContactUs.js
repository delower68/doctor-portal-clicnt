import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      className="mt-32"
      style={{
        background: `url(${appointment})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className="hero ">
          <div className="hero-content flex-col ">
            <div className="card flex-shrink-0 w-full  ">
                <div className=" text-center mt-6 ">
                    <h5 className="text-primary">Contact us</h5>
                    <p className="text-white">Stay connected with us</p>
                </div>
              <div className="card-body my-7">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="input input-bordered "
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input input-bordered"
                  />
                </div>
                <textarea className="textarea" placeholder="Your message"></textarea>
                <div className="form-control mt-6 w-1/2 mx-auto">
                  <PrimaryButton >Submit</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
