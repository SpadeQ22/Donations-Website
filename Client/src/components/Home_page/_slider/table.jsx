import './table.css';
import * as campaigns from '../../../middleware/campaign.service'
import {useState } from 'react';



function Table(props) {
    return (
        <div>
            <table id="news_table">
            <tr>
                <td id="c2" class="box">
					<div class="box_no">{props.number}</div>
					<b>{props.title}</b> <br/><br/> <p>{props.description} <br/><br/> </p>

					<br/> <br/> <a href="https://help.unicef.org/">Read more</a>	
				</td>
              
            </tr>
        </table>

    </div>

    );
}

export default Table;





