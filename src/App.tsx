import { useEffect, useRef, useState } from "react";
import "./App.css";
import { labelArr } from "./labelArr";
import { formArr } from "./formArr";

function App() {
  // tracks the form this is what tells the stepper the item that is active and assigns the needed styles
  const [currVal, setCurrVal] = useState(0);

  // Helper text to tell the user what went wrong
  const [nameHelperText, setNameHelperText] = useState(
    "Please fill in the details below"
  );

  // the button is disabled onBlur if input is not valid
  const [disabled, setDisabled] = useState(true);

  // this is what checks the input for the value that is being typed
  const [inputValue, setInputValue] = useState("");

  const [pwd, setPwd] = useState("");

  // Getting the refs of all the required item for validation. forget the long code in the angle brackets typescript just needed this to breathe. REFs are the most preferred way to manipulate the dom in react since react uses the virtual DOM.
  const inputBoxRef = useRef<Array<HTMLDivElement | null>>(
    new Array(formArr.length).fill(null)
  );
  const inputSelfRef = useRef<Array<HTMLDivElement | null>>(
    new Array(formArr.length).fill(null)
  );
  const iconRef = useRef<Array<HTMLDivElement | null>>(
    new Array(formArr.length).fill(null)
  );

  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineGrowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const loginRef = useRef<HTMLDivElement | null>(null);

  // the useEffect ensures that my code is rerun eact time currVal is changed
  useEffect(() => {
    inputBoxRef.current[currVal]?.classList.remove("inactive");
    iconRef.current[currVal]?.classList.add("active");
    dotRefs.current[currVal]?.classList.add("active-dot");
    lineGrowRefs.current[currVal]?.classList.add("active-lineGrow");
  }, [currVal]);

  // This is the next Step button nothing serious going on here
  const nextStepClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrVal((prev) => prev + 1);
    if (currVal === formArr.length) {
      setCurrVal(formArr.length);
      console.log("Form submitted successfully");
    }
    setInputValue("");
    setNameHelperText(nameHelperText);
  };

  const entryValidator = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (pwd === "123456") {
      if (cardRef.current && loginRef.current) {
        loginRef.current.classList.add("login-inactive");
        cardRef.current.classList.remove("card-inactive");
      }
    }
  };

  // This is where the validation happens, test the input by supplying text less than 2 or a number where a text is required.
  const validateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);

    const inputTag = document.getElementsByTagName("input")[currVal];
    const helperText = document.getElementById("helperText") as HTMLDivElement;

    // console.log(inputTag);
    console.log(inputBoxRef.current[0]);
    if (inputSelfRef.current[0]) {
      // const inputValue = e.target.value;

      if (/[\d!@#$%^&*(),.?":{}|<>]/.test(inputValue)) {
        setNameHelperText("Name should only contain letters");
        inputTag.style.border = "1px solid red";
        helperText.style.color = "red";
        setDisabled(true);
      } else if (inputValue.length < 2) {
        setNameHelperText("Name is Too Short");
        inputTag.style.border = "1px solid red";
        helperText.style.color = "red";
        setDisabled(true);
      } else {
        setNameHelperText("Please fill in the details below");
        inputTag.style.border = "";
        helperText.style.color = "";
        setDisabled(false);
      }
    }

    // if (inputSelfRef.current[1]) {
    //   if (inputValue.length < 2) {
    //     setNameHelperText("City Not found");
    //     inputTag.style.border = "1px solid red";
    //     helperText.style.color = "red";
    //     setDisabled(true);
    //   } else {
    //     setNameHelperText("Please fill in the details below");
    //     inputTag.style.border = "";
    //     helperText.style.color = "";
    //     setDisabled(false);
    //   }
    // }
  };

  console.log(inputValue);

  return (
    <div className="container">
      <div className="login" ref={loginRef}>
        <div>Enter Your Password Here</div>
        <input
          type="text"
          name="password"
          id="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <button type="button" onClick={entryValidator}>
          Enter
        </button>
      </div>
      <div className="card card-inactive" ref={cardRef}>
        <div className="formHeading">
          <h3>My Skill Level</h3>
          <span>Answer the following questions to begin your plan</span>
        </div>

        <div className="contentBody">
          <div className="label">
            {labelArr.map((el, index) => (
              <div className="labelContainer" key={el.id}>
                <div className="labelText">
                  <div>{el.LabelName}</div>
                  <div>{el.helper}</div>
                </div>

                <div
                  className="labelIcon"
                  ref={(item) => (iconRef.current[index] = item)}
                >
                  {el.icon}
                </div>
              </div>
            ))}
            <div className="line"></div>
          </div>
          <div className="stepper">
            <div className="line"></div>
            <div
              className="lineGrow line-1"
              ref={(item) => (lineGrowRefs.current[0] = item)}
            ></div>
            <div
              className="lineGrow line-2"
              ref={(item) => (lineGrowRefs.current[1] = item)}
            ></div>
            <div
              className="lineGrow line-3"
              ref={(item) => (lineGrowRefs.current[2] = item)}
            ></div>
            <div
              className="lineGrow line-4"
              ref={(item) => (lineGrowRefs.current[3] = item)}
            ></div>
            <div
              className="lineGrow line-5"
              ref={(item) => (lineGrowRefs.current[4] = item)}
            ></div>
            <div
              className="lineGrow line-6"
              ref={(item) => (lineGrowRefs.current[5] = item)}
            ></div>
            <div
              className="dot dot-1"
              ref={(el) => (dotRefs.current[0] = el)}
            ></div>
            <div
              className="dot dot-2"
              ref={(el) => (dotRefs.current[1] = el)}
            ></div>
            <div
              className="dot dot-3"
              ref={(el) => (dotRefs.current[2] = el)}
            ></div>
            <div
              className="dot dot-4"
              ref={(el) => (dotRefs.current[3] = el)}
            ></div>
            <div
              className="dot dot-5"
              ref={(el) => (dotRefs.current[4] = el)}
            ></div>
          </div>
          <div className="form">
            <div className="introText">
              <div className="step">
                {" "}
                {`Step ${currVal + 1}/${formArr.length + 1}  `}
              </div>
              <h3> Let's start with your name</h3>
              <div id="helperText">{nameHelperText}</div>
            </div>
            {currVal < formArr.length ? (
              <div className="formBody">
                {formArr.map((el, index) => (
                  <div
                    key={el.id}
                    className={`inputContainer
                    ${currVal === index ? "" : "inactive"}
                    `}
                    ref={(item) => (inputBoxRef.current[index] = item)}
                  >
                    <div className="inputBox">
                      <input
                        type={el.inputType}
                        name={el.inputName}
                        id={`${el.inputId}`}
                        onChange={validateForm}
                        value={inputValue}
                        ref={(item) => (inputSelfRef.current[index] = item)}
                      />
                      <span> {el.labelText}</span>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="nextBtn"
                  onClick={nextStepClicked}
                  disabled={disabled}
                >
                  Next Step
                </button>
              </div>
            ) : (
              <h1 className="successful"> It PAYS $$$ to Serve Jesus</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
