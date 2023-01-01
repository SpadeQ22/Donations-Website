import './form.css';
import logo from './Avatar.png'
import {useState} from 'react'

function Form() {

    const [body, setBody] = useState("");
    const [subject, setSubject] = useState("");
    const [from, setFrom] = useState("");

    return (
        <div>

            <table id="form_table">
                <tr id="header_row">
                    <td id="contact_cell">
                        Get in touch
                    </td>
                    <td id="send_mail">
                        Send an Email
                    </td>
                </tr>

                <tr id="second_row">
                    <td id="contact_cell">
                        <div id="avatar_img">
                            <img src={logo} alt="Avatar" id="avatar" />
                        </div>
                        <div id="companyInfo_cell">
                            Company <br />
                            19P8102@eng.asu.edu.eg <br />
                            +20 115 665 8744 <br /> <br />

                            Address
                            123 Cairo, Egypt

                        </div>
                    </td>
                    <td id="form_cell">

                        <div id="form-main">
                            <form class="form" id="form1">

                                <div class="page">

                                    <div class="field name_field">
                                        <label class="screen_reader">Name</label>
                                        <input id="name" class="input_field" placeholder="e.g. Zakaria Sobhy" onChange={setSubject}/>
                                        <span class="field_labelWrap" aria-hidden="true">
                                            <span class="field__label">Name</span>
                                        </span>
                                    </div>

                                    <div class="field email_field">
                                        <label for="email" class="screen_reader">Email</label>
                                        <input id="email" class="input_field" placeholder="e.g. MahmoudElKhashab@gmail.com" onChange={setFrom}/>
                                        <span class="field_labelWrap" aria-hidden="true">
                                            <span class="field__label">Email</span>
                                        </span>
                                    </div>

                                    <div class="text">
                                        <textarea name="text" class="feedback-input"
                                            id="comment" placeholder="Comment" onChange={setBody}></textarea>
                                    </div>
                                    <a href="mailto:test@gmail.com">
                                    <div class="submit">

                                        <input class="btn" value="Send" id="button-blue" />
                                        <div class="ease"></div>
                                    </div>
                                    </a>
                                </div>

                            </form>
                        </div>
                    </td>
                </tr>

            </table>



        </div>
    );
}

export default Form;




