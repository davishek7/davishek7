export default function Contact() {
  return (
    <>
      <section className="resume-section" id="contact">
        <div className="resume-section-content">
          <h2 className="mb-5">Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-12">
              <form id="contactForm" method="post">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="full_name"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    required
                  />
                  <label htmlFor="name">Full name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="subject"
                    id="subject"
                    type="text"
                    placeholder="Enter your subject"
                    data-sb-validations="required"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <input type="hidden" name="from_app" value="resume_app" />
                <button
                  className="btn btn-primary btn-xl"
                  id="submitButton"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
