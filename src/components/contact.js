import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_isl8mrn",
        "template_0pgmpz7",
        form.current,
        "UUj9QPzTOO6Qj-h55"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset(); // Optionally reset the form after submission
  };

  return (
    <div className="Container fakLAl">
      <div className="btAWOx">
        <div className="cwGKJh iJkwdP">
          <div className="RatioImg__Wrapper-sc-8qesjk-1 iJkwdP">
            <img
              src="https://images.prismic.io/idi2019/02f47f4e-d51a-4d6a-bd61-6370bb0f9cbc_idi_out-of-office_1.jpg?auto=compress,format&amp;w=540&amp;h=665&amp;fit=crop&amp;q=70&amp;fm=pjpg"
              alt="Marquette Office"
              className="RatioImg__Img-sc-8qesjk-0 dwEpAz"
            />
          </div>
        </div>
        <div className="isoNtD bZSVww">
          <div className="RatioImg__Wrapper-sc-8qesjk-1 bHipPv">
            <img
              src="https://images.prismic.io/idi2019/edf82392-7709-438f-b767-92f37d449841_idi_office-brighton_2.jpg?auto=compress,format&amp;w=510&amp;h=384&amp;fit=crop&amp;q=70&amp;fm=pjpg"
              alt="Brighton Office"
              className="RatioImg__Img-sc-8qesjk-0 dwEpAz"
            />
          </div>
        </div>
      </div>
      <div className="kQgmzP">
        <div className="fynJbO">
          <div className="dRgZKO">
            <h2 className="H__H4-sc-be5gk5-2 StwfE">Kottoor</h2>
            <address className="ffqjhh">
              Location – Wearhouse# 4, Ras al khor Industrial area 2, <br />
              Dubai, UAE
            </address>
          </div>
          <div className="dRgZKO" style={{ marginTop: "25px" }}>
            <h2 className="H__H4-sc-be5gk5-2 StwfE">Get In Touch</h2>
            <address className="ffqjhh">
              Mobile: 0555891992, Mobile: 0509380025
              <br />
              Email: <a href="mailto:sales@kottoor.com">
                sales@kottoor.com
              </a>{" "}
              <br />
              Website:{" "}
              <a
                href="http://www.kottoor.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.kottoor.com
              </a>
            </address>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="GsYIv ContactForm">
          <input type="hidden" name="form-name" value="contact_idi" />
          <div className="ezXYZL">
            <label htmlFor="bot-field">
              Don't fill this out if you're human:
              <input name="bot-field" id="bot-field" />
            </label>
          </div>
          <input
            type="text"
            name="contactName"
            id="contactName"
            placeholder="Name"
            className="ContactForm__StyledInput-sc-14p1k92-1 eBIHJq"
          />
          <div className="ContactForm__InputWrap-sc-14p1k92-4 ehAtBL">
            <input
              type="email"
              name="contactEmail"
              id="contactEmail"
              placeholder="Email"
              className="ContactForm__StyledInput-sc-14p1k92-1 eBIHJq"
            />
          </div>
          <textarea
            id="contactMessage"
            name="contactMessage"
            placeholder="Message"
            className="ContactForm__StyledTextArea-sc-14p1k92-3 fhDgCJ"
          />
          <button
            type="submit"
            id="submit"
            className="UnstyledButton-sc-1lhpa8-0 Vucbf Button__StyledButton-sc-1coru9f-0 ggJyiH ContactForm__StyledSubmit-sc-14p1k92-5 gBMAvg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
