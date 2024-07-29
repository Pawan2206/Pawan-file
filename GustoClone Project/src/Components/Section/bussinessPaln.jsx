import "../../assets/block-cta-style.css";
import "../../assets/block-style.css";
import "../../assets/style.min.css";


export default function BussinessPlan() {
  return (
    <div>
      <div className="container" style={{"background-color":"#f8f5f2"}}>
        <div className="row justify-content-center align-items-center">
          <div className="bam-large-tiles__container text-center d-flex flex-md-row flex-md-wrap flex-column align-items-stretch justify-content-center col-12 col-lg-10 padding-left-none padding-right-none">
            <div className="wp-block-cgb-bam-content-block bam-content-block width-100 text-center">
              <div className="container bam-content-block__container d-flex flex-column">
                <div className="row animation fade-up justify-content-center align-items-center animated">
                  <div className="col-12 col-lg-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <h4 className="bam-content-block__header margin-bottom-none h4">
                      <meta charSet="utf-8" />
                      Let’s find the right plan for your business.
                    </h4>
                    <div className>
                      <p className="bam-content-block__copy margin-bottom-none text-default">
                        Choose from a variety of plans and add-ons. You won’t
                        pay a cent until you’re ready to run payroll.
                      </p>
                      <a
                        className="wp-block-cgb-bam-button btn btn-primary"
                        href="https://gusto.com/product/pricing"
                        target="_self"
                        rel="noopener noreferrer"
                      >
                        Compare plans
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <article className="wp-block-cgb-bam-guava-border-card bam-guava-border-card__card col-12 col-lg-4">
              <div className="bg-white card relative height-100 margin-none border-radius hover">
                <a
                  href="https://gusto.com/product/pricing"
                  className="text-decoration-none bam-guava-border-card__cta-text--link"
                >
                  <span className="d-block pointer-hover height-100 width-100 bam-guava-border-card__content text-left">
                    <p className="bam-guava-border-card__eyebrow c-guava-500 text-default-bold">
                      $40/mo + $6/mo per person
                    </p>
                    <h3 className="bam-guava-border-card__header h6 c-black-1000">
                      Simple
                    </h3>
                    <p className="text-default c-black-900 c-black-900 bam-guava-border-card__copy margin-bottom-none">
                      Best for new businesses and startups paying people in one
                      state.
                    </p>
                  </span>
                </a>
              </div>
            </article>
            <article className="wp-block-cgb-bam-guava-border-card bam-guava-border-card__card col-12 col-lg-4">
              <div className="bg-white card relative height-100 margin-none border-radius hover">
                <a
                  href="https://gusto.com/product/pricing"
                  className="text-decoration-none bam-guava-border-card__cta-text--link"
                >
                  <span className="d-block pointer-hover height-100 width-100 bam-guava-border-card__content text-left">
                    <p className="bam-guava-border-card__eyebrow c-guava-500 text-default-bold">
                      $80/mo + $12/mo per person
                    </p>
                    <h3 className="bam-guava-border-card__header h6 c-black-1000">
                      Plus
                    </h3>
                    <p className="text-default c-black-900 c-black-900 bam-guava-border-card__copy margin-bottom-none">
                      Run payroll in 2 or more states and get built-in time
                      tracking and HR tools.
                    </p>
                  </span>
                </a>
              </div>
            </article>
            <article className="wp-block-cgb-bam-guava-border-card bam-guava-border-card__card col-12 col-lg-4">
              <div className="bg-white card relative height-100 margin-none border-radius hover">
                <a
                  href="https://gusto.com/product/pricing"
                  className="text-decoration-none bam-guava-border-card__cta-text--link"
                >
                  <span className="d-block pointer-hover height-100 width-100 bam-guava-border-card__content text-left">
                    <p className="bam-guava-border-card__eyebrow c-guava-500 text-default-bold">
                      Exclusive pricing
                    </p>
                    <h3 className="bam-guava-border-card__header h6 c-black-1000">
                      Premium
                    </h3>
                    <p className="text-default c-black-900 c-black-900 bam-guava-border-card__copy margin-bottom-none">
                      You’ll get a dedicated success liaison to meet your teams’
                      complex needs.
                    </p>
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
