import Emily from "./../../assets/images/image-emily.jpg";
import Thomas from "./../../assets/images/image-thomas.jpg";
import Jennie from "./../../assets/images/image-jennie.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials">
        <h4>CLIENT TESTIMONAILS</h4>
        <aside>
          <article>
            <img src={Emily} alt="emily avatar" className="avatar" />
            <p className="testimony">
              We put our trust in sunnyside and they delivered, making sure our
              needs were met and deadlines were always a hit.
            </p>

            <h3 className="name">Emily R.</h3>
            <p className="position">Marketing Director</p>
          </article>
          <article>
            <img src={Thomas} alt="thomas avatar" className="avatar" />
            <p className="testimony">
              Sunnyside's enthusiam coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>

            <h3 className="name">Thomas S.</h3>
            <p className="position">Chief Operating Officer</p>
          </article>
          <article>
            <img src={Jennie} alt="jennie avatar" className="avatar" />
            <p className="testimony">
              Incredible end result! Our sales increased over 400% when we worked
              with Sunnyside. Highly recommended!
            </p>

            <h3 className="name">Jennie F.</h3>
            <p className="position">Business Owner</p>
          </article>
        </aside>
      </section>
    </>
  );
}

export default Testimonials;
