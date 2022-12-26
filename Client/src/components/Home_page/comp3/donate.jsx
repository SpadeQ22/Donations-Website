import "./donate.css";

function Donate() {
  return (
    <div>
      <table id="gc_table" width="100%" height="40%">
        <tr>
          <td>
            <img
              src={require("./img2.svg").default}
              alt="image"
              id="donate_img"
            />
          </td>

          <td id="gc_td">
            <h1 id="greatercause_title">Greater Cause</h1>
            <br />
            <div id="donation_text2">
              Multiple interlocking crises have characterized this year,
              including global hunger, distupted education and the climate
              crisis. In Somalia, a mother holds her baby who is being treated
              for malnutrition. <br />
              <br />
              What Is Famine: 10 Things You Need to Know Parts of certain
              countries such as Somalia, Afghanistan, Yemen, South Sudan and
              Ethiopia are at risk of famine, but what does that mean and what
              happens next?
            </div>
            <br />
            <a href="/donate">
            <button type="button" class="btn" id="donate_btn2">Donate Now</button>

            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Donate;
