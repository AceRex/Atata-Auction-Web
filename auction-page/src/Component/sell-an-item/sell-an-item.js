import "./style/style.css";
import Header from "../Header/header";
import Footer from '../footer/footer'

export default function SAI() {
  return (
    <div className="container">
      <Header />
      <section>
        <div className="section-header">Want to Auction an Item?</div>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Enter Fullname" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <input type="tel" pattern="[0-9]{3}[0-9]{4}[0-9]{4}" placeholder="Enter Phone Number" />
          </div>
          <div className="form-group">
            <textarea
              cols="50"
              rows="10"
              placeholder="Short Description about the item you want to auction"
            />
          </div>
          <div className="form-group">
              <button>
                  Send us your interest
              </button>
</div>
        </form>
      </section>
      <Footer/>
    </div>
  );
}
