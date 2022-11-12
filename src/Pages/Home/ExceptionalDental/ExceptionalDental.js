import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ExceptionalDental = () => {
  return (
    <div>
      <div className="hero pt-16 ">
        <div className="hero-content flex-col md:flex-row-reverse">
        <img
            src={treatment}
            alt="treatment"
            className="md:w-full lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="lg:ml-11">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content  of a page when looking at its layout. The
              point of using  Lorem Ipsumis  that it has a more-or-less normal
              distribution of letters,as opposed to  using 'Content here,  content
              here', making it look like readable English.
            </p>
            <PrimaryButton>Getting Started</PrimaryButton>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ExceptionalDental;
