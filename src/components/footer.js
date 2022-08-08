import React from 'react'

export default function Footer() {
  return (
    <footer class="page-footer bg-black text-white pattern-bg pb-0" id="page-footer">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-6">
                <div class="widget social-icons mb-20">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item"><a href="#" class="ion-social-facebook-outline no-hvr-link" title="Facebook"></a></li>
                        <li class="list-inline-item"><a href="#" class="ion-social-twitter-outline no-hvr-link" title="Twitter"></a></li>
                        <li class="list-inline-item"><a href="#" class="ion-social-instagram-outline no-hvr-link" title="Instagram"></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-6 text-end">
                <a href="#" class="back-to-top d-inline-block mb-20">Back To top <span class="lnr lnr-chevron-up-circle"></span></a>
            </div>
        </div>
        <div class="footer-main bg-dark p-15 p-sm-5">
            <div class="row">
                <div class="col">
                    <div class="widget img-widget mb-30">
                        <a href="index.html" title="theme_name" class="no-hvr-link">
                            <img src={require("./logo-light.png")} class="img-fluid" alt="logo"/></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5 col-md-9">
                    <div class="widget menu-hr-widget mb-30">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item"><a href="#" title="About">About</a></li>
                            <li class="list-inline-item"><a href="#" title="Services">Services</a></li>
                            <li class="list-inline-item"><a href="#" title="Meet our team">Meet our team</a></li>
                            <li class="list-inline-item"><a href="#" title="Latest news">Latest news</a></li>
                            <li class="list-inline-item"><a href="#" title="Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="widget subscribe-widget mb-30">
                        <div class="bg-black p-3 p-md-4">
                            <h6>Subsrcibe for latest articles and updates</h6>
                            <div class="input-group">
                                <input type="text" class="form-control form-control-lg rounded-0" placeholder="Email Address" aria-label="Email Address" aria-describedby="sub-btn"/>
                                <button class="btn btn-primary" type="button" id="sub-btn">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="offset-lg-4 col-md-3">
                    <div class="widget contact-widget mb-30">
                        <ul class="list-unstyled">
                            <li>66 Broklyn Street, New York, USA</li>
                            <li><abbr title="Tel Phone">T:</abbr> (123) 456-789</li>
                            <li><abbr title="Email">E:</abbr> <a href="mailto:info@nvthemes.com">help@company.com</a></li>
                        </ul>    
                    </div>        
                </div>
            </div>
            <hr class="mt-0 mb-30"/>
            <div class="row">
                <div class="col-md-6">
                    <div class="copyright">Test &copy; 2021. All Rights Reserved</div>
                </div>
                <div class="col-md-6 text-md-end">
                    <div class="widget menu-hr-widget">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item"><a href="#" title="Privacy Policy">Privacy Policy</a></li>
                            <li class="list-inline-item"><a href="#" title="Terms & Conditions">Terms & Conditions</a></li>
                        </ul>
                    </div>            
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}
