import React from 'react'

export default function Section() {
  return (
    <section>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="section-title">
                    <p class="text-primary">ABOUT FOODHUB</p>
                    <h4 class="text-uppercase">Order Takeaway Online<br/>Get Exclusive Discounts!</h4>
                </div>
            </div>    
        </div>
        <div class="row">
            <div class="col-sm-4">
                <div class="image-box">
                    <img src="https://placehold.jp/415x295.png" class="img-fluid" alt="about"/>
                    <div class="box-inner">
                        <div class="icon-wrapper ion-fireball"></div>
                        <div class="title-wrapper">
                            <h5>About Foodhub</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="image-box">
                    <img src="https://placehold.jp/415x295.png" class="img-fluid" alt="about"/>
                    <div class="box-inner">
                        <div class="icon-wrapper ion-coffee"></div>
                        <div class="title-wrapper">
                            <h5>Our Services</h5>
                        </div>  
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="image-box">
                    <img src="https://placehold.jp/415x295.png" class="img-fluid" alt="about"/>
                    <div class="box-inner">
                        <div class="icon-wrapper ion-help-buoy"></div>
                        <div class="title-wrapper">
                            <h5>Help Center</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
