import React from 'react'
import "./NewItem.css"
import background_2 from "../../images/background_2.jpg"
const NewItem = () => {
    return (
        <div id='center'>
            <h1 className='Heading'>New Birds</h1>

            <div className='newitem_main_div_grid'>
                <div  className='new_item_div'>
                    <div id='newitem_img'><img src={background_2}  className="img_size_newitem"/></div>
                    <div id='newitem_heading'>par Blue<hr className='no_margin_padding'/></div>
                    <div id='newitem_price'> price : 20,000/- <br />link</div>
                </div>
                <div className='new_item_div'>
                    <div id='newitem_img'><img src={background_2} className="img_size_newitem"/></div>
                    <div id='newitem_heading'>par Blue<hr className='no_margin_padding'/></div>
                    <div id='newitem_price'> price : 20,000/- <br />link</div>
                </div>
                <div className='new_item_div'>
                    <div id='newitem_img'><img src={background_2} className="img_size_newitem"/></div>
                    <div id='newitem_heading'>par Blue <hr className='no_margin_padding'/></div>
                    <div id='newitem_price'> price : 20,000/- <br />link</div>
                </div>
                <div className='new_item_div'>
                    <div id='newitem_img'><img src={background_2} className="img_size_newitem"/></div>
                    <div id='newitem_heading'>par Blue<hr className='no_margin_padding'/></div>
                    <div id='newitem_price'> price : 20,000/- <br />link</div>
                </div>

            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    )
}

export default NewItem