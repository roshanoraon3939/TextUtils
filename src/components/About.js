import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
        
    }
    
    return (
        <div className="container">
            
        <h1 className="my-3 text-center" style={{color: props.mode ==='dark'?'white':'#042743'}}>About TextUtils</h1>

        
        <div id="carouselExampleControls" className="carousel slide my-5" data-bs-ride="carousel">
        <div className="carousel-inner w-75  position-absolute top-0 start-50 translate-middle">
            <div className="carousel-item active text-center" >
                <p style={myStyle}>Textutils gives you a way to analyze your text quickly and efficiently.<br/>
                    Be it word count, character count or Minutes to read.
                </p>
            </div>
            <div className="carousel-item text-center">
                <p style={myStyle}>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. <br/>
                    It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </p>
            </div>
            <div className="carousel-item text-center">
            <p style={myStyle}>This TextUtil not only counts word, character or Minutes to read but also,<br/>
            changes the written text into uppercase, lowercase, copies the text and removes extra spaces.
            </p>
            </div>
        </div>

    </div>
        </div>
         
    )
}
