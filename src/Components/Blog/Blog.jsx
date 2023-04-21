import React from "react";

const Blog = () => {
  return (
    <div className="container mb-5">
      <h4 className="text-center mb-5 mt-5 fw-bold">QNA</h4>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              When should you use context API?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              When we need to share data between many components, we use context
              API. I use it to share data in different content very easily.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What is a custom hook?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Custom Hook is a JavaScript function that we create by ourselves
              when we want to share logic between other JavaScript functions. It
              allows you to reuse some pieces of code in several parts of your
              app.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is useRef?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              By using useRef, you can directly use the elements of the DOM and
              if you want to change them, you can do that too.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFoure">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFoure"
              aria-expanded="false"
              aria-controls="collapseFoure"
            >
              What is useMemo?
            </button>
          </h2>
          <div
            id="collapseFoure"
            className="accordion-collapse collapse"
            aria-labelledby="headingFoure"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The basic purpose of the useMemo hook is related to the fact that
              we try to avoid the unnecessary re-rendering of components and
              props in our program.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
