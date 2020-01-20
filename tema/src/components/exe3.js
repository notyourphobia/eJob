import React from 'react';

const cards = (props) => {
    const images = [
        <img src={require("./resources/settings.png")} key={props + 1} index={props} alt="settings" id='settings' />,
        <img src={require("./resources/phone.png")} key={props + 1} index={props} alt="phone" id='phone' />,
        <img src={require("./resources/news.png")} key={props + 1} index={props} alt="news" id='news' />]
    const title = [
        'easy to use equipment'
        , "a system you'll actually use"
        , 'save up to $20 a month on your energy bill']
    const text = [
        ' Pellentesque dignissim mi non ipsum vulputatultrices justo euismod [..]',
        'Suspendisse vulputate porta mi, non interdum metus tempus quis [...]',
        'Fusce et orci leo. Nulla condimentum et magna sit amet rhoncus. [...]']

    return <div className={`middle-card-${props}`}>
        <div className='middle-image-container'>
            {images[props]}
        </div>
        <div className={`middle-card-title-${props}`}>
            {title[props]}
        </div>
        <div className={`middle-card-text-${props}`}>
            {text[props]}
        </div>
        <div className={`middle-card-button-${props}`}>
            read more >
        </div>
    </div>
}

const exe3 = () =>
    <div className='exe3'>
        <div className='header' >
            <img src={require("./resources/V3-Security.png")} alt="V3-Security.png" id='v3-security' />
            <div className='header-content'>
                <div className='notimage'>
                    <div className='header-content-contact'>
                        <div className='header-content-contact-quote'>
                            <h5> get a free quote &#709;</h5>
                        </div>
                        <div className='header-content-number'>
                            <h5>&#128379;</h5>
                            <h5>916.543.1543</h5>
                        </div>
                    </div>
                    <div className='navbar'>
                        <div className='navbar-content'>
                            <a className='home'><h5>home</h5></a>
                            <div className='point'></div>
                            <a className='about-us'><h5>about us</h5></a>
                            <div className='point'></div>
                            <a className='v3-cares'><h5>v3 cares</h5></a>
                            <div className='point'></div>
                            <a className='products'><h5>products</h5></a>
                            <div className='point'></div>
                            <a className='services'><h5>services</h5></a>
                            <div className='point'></div>
                            <a className='contact'><h5>contact</h5></a>
                        </div>
                    </div>
                </div>
                <img src={require("./resources/BBB.png")} alt="BBB.png" id='bbb' />

            </div >

        </div>
        <div className='main'>
            <div className='main-content'>
                <div className='main-title'>
                    <div>we are your neighbors</div>
                </div>
                <div className='main-text'>
                    <div>  Fusce et orci leo. Nulla condimentum et magna sit amet rhoncus. Pellentesque dignissim mi non
                      ipsum Suspendisse vulputate porta mi, non interdum metus tempus quis. Donec gravida, tortor aliquet consequat
                    sagittis[...]</div>
                </div>
                <div className='main-quote'>
                    <div>get a free quote</div>
                </div>
            </div>
        </div>
        <div className='middle'>
            <div className='middle-all-cards'>
                {[0, 1, 2].map(e => cards(e))}
            </div>
            <div className='middle-about-us'>about us</div>
            <div className='middle-text'>
                <div className='middle-text-1'>We are Northern California’s premiere local home security and automation provider.
                    We firmly believe in giving the residents of our communities the best protection,
                    and we pride ourselves in providing top-quality equipment, prompt response from expert
                    technicians, and courteous customer service. As our customers you are not just a number—you
                    are members of the same community that we live in; we are your neighbors. We will never cut
                    corners to save time or money. You will receive excellent service year after year to give you
                    the safety and peace of mind you want and deserve.
                </div>
                <div className='middle-text-2'>
                    At V3 Security, we pride ourselves on being Northern California’s premier home security and
                    home automation providers. We know that your family’s home and safety is unbelievably important
                    to you, and because you’re a part of our local family, it’s important to us as well.
                </div>
            </div>
        </div>
        <div className='footer'>
            <div className='footer-clients-container'>
                <div className='try'>
                    <div className='footer-clients-title'>
                        <div>our clients say</div>
                    </div>
                </div>
                <div className='footer-clients-comments'>
                    <div className='footer-client-container-1'>
                        <div className='footer-client-speech-bubble'>
                            <hdiv3>Vestibulum malesuada hendrerit odio, ut tristique magna pretium vel. Integer metus lectus,[..]</hdiv3>
                        </div>
                        <div className='footer-client-box'>
                            <div className='footer-client-1'>
                                <img src={require("./resources/alice.png")} alt="alice" id='alice' />
                                <div><b>Alice Knigh -</b> Client</div>
                            </div>
                            <div className='footer-client-rating-1'>
                                &#9733; &#9733; &#9733; &#9734; &#9734;
                        </div>
                        </div>
                    </div>
                    <div className='footer-client-container-2'>
                        <div className='footer-client-speech-bubble-2'>
                            <div>Nullam ut facilisis justo. Ut tempus porta urna a accumsan. Praesent sollicitudin augue nib [..] </div>
                        </div>
                        <div className='footer-client-box-2'>
                            <div className='footer-client-2'>
                                <img src={require("./resources/john.png")} alt="john" id='john' />
                                <div><b>John Smith -</b> Client</div>
                            </div>
                            <div className='footer-client-rating-2'>
                                &#9733; &#9733; &#9733; &#9733; &#9734;
                        </div>
                        </div>
                    </div>
                    <div className='footer-last'>
                        <div>view all</div>
                        <div className='footer-last-next-arrow'>
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-video-container'>
                <div className='footer-video'>
                </div>
                <div className='footer-video-text'>
                    <div>Watch Our Video</div>
                    <div>Suspendisse vulputate porta mi, non interdum metus tempus quis. Donec gravida, tortor aliquet consequat
                        sagittis, diam arcu mattis dolor, a pellentesque neque nisi eu ante. Suspendisse luctus justo ac aliquam
                         porta. Integer fermentum nisl mauris, eu commodo est rhoncus nec. Integer lectus tellus,  [...]
                    </div>
                </div>
            </div>
        </div>
    </div >

export default exe3;



{/*
     <div className=''>
</div> 
*/}