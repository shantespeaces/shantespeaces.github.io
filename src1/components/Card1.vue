<template>
  <section class="section-plans" id="section-plans">
    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-secondary">Hosting Plans</h2>
    </div>

    <div class="row">
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front-1">
            <div class="card__title card__title--1">
              <i class="fas fa-paper-plane"></i>
              <h4 class="card__heading">Basic</h4>
            </div>

            <div class="card__details">
              <ul>
                <li>1 Website</li>
                <li>50 GB SSD Storage</li>
                <li>Unmetered Bandwidth</li>
                <li>Free SSL Certificate</li>
                <li>1 Included Domain</li>
                <li>1 Included Domain</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-1">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$2.95/mo*</p>
              </div>
              <a href="#popup" class="btn btn--white">Select</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front-2">
            <div class="card__title card__title--2">
              <i class="fas fa-plane"></i>
              <h4 class="card__heading">Plus</h4>
            </div>

            <div class="card__details">
              <ul>
                <li>Includes Basic Package Features</li>
                <li>Unlimited Websites</li>
                <li>Unlimited SSD Storage</li>
                <li>Unlimited Domains</li>
                <li>Unlimited Parked Domains</li>
                <li>Unlimited Sub Domains</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-2">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$5.45/mo*</p>
              </div>
              <a href="#popup" class="btn btn--white">Select</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front-3">
            <div class="card__title card__title--3">
              <i class="fas fa-rocket"></i>
              <h4 class="card__heading">Pro</h4>
            </div>

            <div class="card__details">
              <ul>
                <li>Includes Plus Plan Features</li>
                <li>High Performance</li>
                <li>2 Spam Experts</li>
                <li>Free SSL Certificate</li>
                <li>Domain Privacy</li>
                <li>Site Backup - CodeGuard Basic</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-3">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$13.95/mo</p>
              </div>
              <a href="#popup" class="btn btn--white">Select</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="u-center-text u-margin-top-huge">
      <a href="#" class="btn btn--green">Get Started</a>
    </div>
  </section>
</template>
<script></script>
<style>
body {
  background: #000;
}

.heading-primary {
  color: #fff;
  text-transform: uppercase;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  margin-bottom: 6rem;
}

.section-plans {
  background-color: #000;
  padding: 4rem 0 4rem 0;
}

.card {
  /* -webkit-perspective: 150rem;

  -moz-perspective: 150rem; */
  position: relative;
  perspective: 150rem;
  height: 52rem;
}

.card__side {
  height: 52rem;

  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
}

.card__side--front {
  background-color: #fff;
}

.card__side--front-1 {
  background: linear-gradient(-45deg, #f403d1, #64b5f6);
}

.card__side--front-2 {
  background: linear-gradient(-45deg, #f321d7, #ffec61);
}

.card__side--front-3 {
  background: linear-gradient(-45deg, #24ff72, #9a4eff);
}

.card__side--back {
  transform: rotateY(180deg);
}

.card__side--back-1 {
  background: linear-gradient(-45deg, #64b5f6, #f403d1);
}

.card__side--back-2 {
  background: linear-gradient(-45deg, #ffec61, #f321d7);
}

.card__side--back-3 {
  background: linear-gradient(-45deg, #9a4eff, #24ff72);
}

.card:hover .card__side--front-1,
.card:hover .card__side--front-2,
.card:hover .card__side--front-3 {
  transform: rotateY(-180deg);
}

.card:hover .card__side--back {
  transform: rotateY(0);
}

.card__cta {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;
}

/* .row {
  max-width: 114rem;
  margin: 0 auto;
}

.row:not(:last-child) {
  margin-bottom: 5rem;
  margin-top: 5rem;
}

.row::after {
  content: "";
  display: table;
  clear: both;
}

.row [class^="col-"] {
  float: left;
}

.row [class^="col-"]:not(:last-child) {
  margin-right: 6rem;
}

.row .col-1-of-3 {
  width: calc((100% - 2 * 6rem) / 3);
} */
</style>
