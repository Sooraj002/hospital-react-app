import React from "react";
import "../General/General.css";

function General() {
  return (
    <div className="container">
      <div className="boxwrap">
        <div className="details">
          <h2>Laparoscopic Surgery</h2>
          <p>
            Laparoscopic or “minimally invasive” surgery is a specialised
            technique for performing surgery. In traditional “open” surgery the
            surgeon uses a single incision (around 2-3 inch) to enter into the
            abdomen. Laparoscopic surgery uses 1/4 to 1/2 inch incisions. This
            system allows the surgeon to perform the same operation as
            traditional surgery but with smaller incisions.
          </p>

          <ul>
            <h5>Procedures that are done safely with laparoscopic surgery.</h5>
            <li>Removal of Ectopic Pregnancy</li>
            <li>Treatment of Endometriosis</li>
            <li>Ovarian Cystectomy</li>
            <li>Laparoscopic Hysterectomy</li>
            <li>Laparoscopic Supra cervical Hysterectomy</li>
            <li>Laparoscopic Burch Procedure</li>
            <li>Laparoscopic Vault Suspension</li>
            <li>Operative Hysteroscopy</li>
            <li>Endometrial Ablation</li>
            <li>Laparoscopic Aspiration of Cyst</li>
            <li>Laparoscopic Salpingo Oopherectomy</li>
            <li>Laparoscopic Sterilization</li>
            <li>Diagnostic Hystero- Laparoscopy</li>
          </ul>
        </div>
        <div className="image">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            height="300px"
            width="300px"
          />
        </div>
      </div>
    </div>
  );
}

export default General;
