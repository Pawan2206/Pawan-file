import "../../assets/block-cta-style.css";
import "../../assets/block-style.css";
import "../../assets/style.min.css";


export default function CompareGusto() {
  return (
    <div>
      <div className="container" style={{"background-color":"#005961", "color":"white", "padding-bottom":"0px", "padding-top":"0px"}}>
        <div className="row justify-content-center align-items-center">
          <div className="bam-grid__container col-12 col-md-10 d-flex flex-column">
            <div className="wp-block-cgb-bam-content-block bam-content-block text-left">
              <div className="container bam-content-block__container d-flex flex-column">
                <div className="row animation fade-up justify-content-center align-items-center animated">
                  <div className="col-12 col-lg-7 col-md-7 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="bam-content-block__header margin-bottom-none h3">
                      See how Gusto stacks up against other payroll providers.
                    </h3>
                    <div className />
                  </div>
                </div>
              </div>
            </div>
            <div className="wp-block-columns col-12 padding-none margin-top-45px order-2 justify-content-center">
              <div className="wp-block-column">
                <div className="wp-block-cgb-bam-grid-item bam-grid-item__container">
                  <div className="d-flex flex-column align-items-center padding-bottom-md-none">
                    <div className="bam-grid-item-container__center text-center">
                      <div className="col-auto-ie">
                        <h3 className="bam-grid-item__header text-center margin-none h6 padding-none margin-bottom-15px">
                          Save 5 hours running payroll each month.
                        </h3>
                      </div>
                      <div className="col-auto-ie">
                        <p className="bam-grid-item__copy text-default text-center margin-none">
                          on average compared to ADP¹
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wp-block-column">
                <div className="wp-block-cgb-bam-grid-item bam-grid-item__container">
                  <div className="d-flex flex-column align-items-center padding-bottom-md-none">
                    <div className="bam-grid-item-container__center text-center">
                      <div className="col-auto-ie">
                        <h3 className="bam-grid-item__header text-center margin-none h6 padding-none margin-bottom-15px">
                          “It gives me more time to run my business.”
                        </h3>
                      </div>
                      <div className="col-auto-ie">
                        <p className="bam-grid-item__copy text-default text-center margin-none">
                          85% of surveyed Gusto customers¹
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wp-block-column">
                <div className="wp-block-cgb-bam-grid-item bam-grid-item__container">
                  <div className="d-flex flex-column align-items-center padding-bottom-md-none">
                    <div className="bam-grid-item-container__center text-center">
                      <div className="col-auto-ie">
                        <h3 className="bam-grid-item__header text-center margin-none h6 padding-none margin-bottom-15px">
                          Switch to Gusto in two weeks or less.
                        </h3>
                      </div>
                      <div className="col-auto-ie">
                        <p className="bam-grid-item__copy text-default text-center margin-none">
                          on average, according to customers¹
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="wp-block-columns col-12 padding-none show bam-grid-button__top-center order-1"> */}
              <a
                className="wp-block-cgb-bam-button btn btn-tertiary"
                href="https://gusto.com/product/compare"
                target="_self"
                rel="noopener noreferrer"
              >
                Compare Gusto
              </a>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
