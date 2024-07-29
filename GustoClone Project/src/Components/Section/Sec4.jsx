import "../../assets/block-cta-style.css";
import "../../assets/block-style.css";
import "../../assets/style.min.css";

export default function Sec4() {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center animation fade-up animated">
          <div className="wp-block-columns">
            <div className="wp-block-column">
              <div className="wp-block-cgb-bam-one-col-customer-image col-12 col-lg-12 text-center text-left-lg bam-one-col-customer-image">
                <div className="caption-image-wrapper relative">
                  <div className="d-none d-sm-block text-center bam-one-col-customer-image__image-orientation-original">
                    <img
                      src="https://prod.gusto-assets.com/wp-content/uploads/techpartners_hero%402x.jpeg"
                      alt
                      width={1420}
                      height={1100}
                      loading="lazy"
                      className="wp-image-9241"
                      srcSet="https://prod.gusto-assets.com/wp-content/uploads/techpartners_hero%402x.jpeg 1420w, https://prod.gusto-assets.com/wp-content/uploads/techpartners_hero%402x-300x232.jpeg 300w, https://prod.gusto-assets.com/wp-content/uploads/techpartners_hero%402x-1024x793.jpeg 1024w, https://prod.gusto-assets.com/wp-content/uploads/techpartners_hero%402x-768x595.jpeg 768w"
                      sizes="(max-width: 1420px) 100vw, 1420px"
                    />
                  </div>
                  <div className="d-block d-sm-none text-center bam-one-col-customer-image__image-orientation-original">
                    <img
                      src="https://prod.gusto-assets.com/wp-content/uploads/inception_Hero_mobile%402x.png"
                      alt
                      width={750}
                      height={468}
                      loading="lazy"
                      className="wp-image-2831"
                      srcSet="https://prod.gusto-assets.com/wp-content/uploads/inception_Hero_mobile%402x.png 750w, https://prod.gusto-assets.com/wp-content/uploads/inception_Hero_mobile%402x-300x187.png 300w"
                      sizes="(max-width: 750px) 100vw, 750px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="wp-block-column">
              <div className="wp-block-cgb-bam-one-col-text bam-one-col-top col-12 bg-none text-left margin-bottom-40px c-back-900 offset-lg-2">
                <strong className="c-guava-500 d-block margin-bottom-15px bam-one-col-text__eyebrow">
                  Get started for free
                </strong>
                <h3 className="bam-one-col-text__header">
                  You’re three steps away from easy, automated payroll.
                </h3>
                <p className="padding-top-10px padding-bottom-20px bam-one-col-text__copy text-decoration-none">
                  <strong>Create an account.</strong>
                  <br />
                  It’s free to sign up. You’ll pick your plan and add your
                  company details.
                  <br />
                  <br />
                  <strong>Add your people.</strong>
                  <br />
                  Add your employee details. They can even self-onboard to save
                  you time.
                  <br />
                  <br />
                  <strong>Run your first payroll.</strong>
                  <br />
                  Once we have your employee and tax info, you can run payroll
                  in just a few clicks.
                </p>
                <a
                  className="wp-block-cgb-bam-button btn btn-primary"
                  href="https://gusto.com/invite/company"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Create account
                </a>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
