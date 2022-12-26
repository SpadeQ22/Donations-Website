import "./slider2.css";


function Slider2() {
  return (
    <div>
      <table width="100%" height="70px">
        <tr>
          <td width="60%" id="help_td">
            <h1 class="div1h1" align="left">
              The World Needs Your Help 
              <i class="fa fa-solid fa-ribbon"></i>
            </h1>
            <br /> <br />
            <div id="donation_text" align="left">
              Multiple interlocking crises have characterized this year,
              including global hunger, distupted education and the climate
              crisis.
              <br />
              <br /> In Somalia, a mother holds her baby who is being treated
              for malnutrition. <br />
              <br /> What Is Famine: 10 Things You Need to Know Parts of certain
              countries such as Somalia, Afghanistan, Yemen, South Sudan and
              Ethiopia are at risk of famine, but what does that mean and what
              happens next?
            </div>
            <br /> <br />
            <a href = "/donate">
            <button type="button" class="btn btn-primary" id="donate_btn" >Donate Now</button>

            </a>
          </td>

          <td>
            <img
              id="slider2img"
              src={require("./component1.svg").default}
              alt="image"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Slider2;
