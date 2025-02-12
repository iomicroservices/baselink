const template = document.createElement("template");
template.innerHTML = `
<header id="header" class="header-sticky header-absolute">
	<!-- Logo Nav START -->
	<nav class="navbar navbar-expand-xl">
		<div class="container">
			<!-- Logo START -->
			<a class="navbar-brand me-0" href="index.html">
				<img class="light-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo">
				<img class="dark-mode-item navbar-brand-item" src="assets/images/logo-light.svg" alt="logo">
			</a>
			<!-- Logo END -->

			<!-- Main navbar START -->
			<div class="navbar-collapse collapse" id="navbarCollapse">
				<ul class="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">

					<!-- Nav item -->
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle active" href="#" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</a>
						<div class="dropdown-menu dropdown-menu-size-lg p-3">
							<div class="row">
								<!-- Image and button -->
								<div class="col-xl-6">
									<div class="card bg-light overflow-hidden h-100 p-3" style="background:url(assets/images/bg/08.jpg) no-repeat; background-size:cover; background-position:center;">
										<!-- Bg overlay -->
										<div class="bg-overlay bg-dark opacity-5"></div>
										<div class="card-body d-flex justify-content-center text-center flex-column align-items-center position-relative z-index-2 p-0">
											<h5 class="text-white">Supercharge your site</h5>
											<a href="#" class="btn btn-sm btn-white mb-0">See how <i class="bi bi-arrow-right"></i></a>
										</div>
									</div>
								</div>

								<!-- Index nav links -->
								<div class="col-xl-6">
									<ul class="list-unstyled pt-3">
										<li> <a class="dropdown-item active" href="index.html">Classic Default</a> </li>
										<li> <a class="dropdown-item" href="index-creative-agency.html">Creative Agency</a> </li>
										<li> <a class="dropdown-item" href="index-saas.html">SaaS v.1</a> </li>
										<li> <a class="dropdown-item" href="index-saas-v2.html">SaaS v.2</a> </li>
										<li> <a class="dropdown-item" href="index-saas-v3.html">SaaS v.3</a> </li>
										<li> <a class="dropdown-item" href="index-saas-v4.html">SaaS v.4</a> </li>
										<li> <a class="dropdown-item" href="index-saas-v5.html">SaaS v.5</a> </li>
										<li> <a class="dropdown-item" href="index-landing-product.html">Product Landing</a> </li>
										<li> <a class="dropdown-item" href="index-mobile-app-showcase.html">Mobile App Showcase</a> </li>
										<li> <a class="dropdown-item" href="index-shop.html">Index Shop</a> </li>
									</ul>
								</div>

								<!-- CTA -->
								<div class="col-12">
									<hr class="mt-sm-4"> <!-- Divider -->
									<div class="d-sm-flex justify-content-between align-items-center px-2">
										<div class="me-3 mb-2 mb-sm-0">
											<h6 class="mb-2 mb-sm-0">Ready to get started?</h6>
											<small class="mb-0">Take your documents to the next level with Mizzle</small>
										</div>
										<a href="#" class="btn btn-sm btn-primary">Get in touch</a>
									</div>
								</div>
							</div>
						</div>
					</li>

					<!-- Nav item -->
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">Pages</a>
						<ul class="dropdown-menu">
							<!-- Dropdown submenu -->
							<li class="dropdown dropend">
								<a class="nav-link dropdown-link dropdown-toggle" data-bs-toggle="dropdown" href="#">About</a>
								<ul class="dropdown-menu" data-bs-popper="none">
									<li> <a class="dropdown-item" href="about-v1.html">About v.1</a></li>
									<li> <a class="dropdown-item" href="about-v2.html">About v.2</a></li>
									<li> <a class="dropdown-item" href="about-v3.html">About v.3</a></li>
									<li> <a class="dropdown-item" href="team.html">Team</a></li>
									<li> <a class="dropdown-item" href="services-v1.html">Services v.1</a></li>
									<li> <a class="dropdown-item" href="services-v2.html">Services v.2</a></li>
									<li> <a class="dropdown-item" href="service-single.html">Service Single</a></li>
									<li> <a class="dropdown-item" href="customer-stories.html">Customer Stories</a></li>
									<li> <a class="dropdown-item" href="customer-story-single.html">Customer Story Single</a></li>
									<li> <a class="dropdown-item" href="career.html">Career <span class="badge text-bg-primary ms-2">2 Job</span></a></li>
									<li> <a class="dropdown-item" href="career-single.html">Career Single</a></li>
								</ul>
							</li>
							
							<li> <a class="dropdown-item" href="contact-v1.html">Contact v.1</a></li>
							<li> <a class="dropdown-item" href="contact-v2.html">Contact v.2</a></li>

							<!-- Dropdown submenu -->
							<li class="dropdown dropend">
								<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">SaaS Pages</a>
								<ul class="dropdown-menu">
									<li> <a class="dropdown-item" href="features.html">Features</a></li>
									<li> <a class="dropdown-item" href="feature-single.html">Feature Single</a></li>
									<li> <a class="dropdown-item" href="integrations.html">Integrations</a></li>
									<li> <a class="dropdown-item" href="integration-single.html">Integration Single</a></li>
								</ul>
							</li>

							<!-- Dropdown submenu -->
							<li class="dropdown dropend">
								<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Shop</a>
								<ul class="dropdown-menu" >
									<li> <a class="dropdown-item" href="shop-grid.html">Shop Grid</a></li>
									<li> <a class="dropdown-item" href="shop-single.html">Shop Single</a></li>
									<li> <a class="dropdown-item" href="shop-cart.html">Shop Cart</a></li>
									<li> <a class="dropdown-item" href="shop-empty-cart.html">Shop Empty Cart</a></li>
									<li> <a class="dropdown-item" href="shop-checkout.html">Shop Checkout</a></li>
								</ul>
							</li>

							<!-- Dropdown submenu -->
							<li class="dropdown dropend">
								<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Blog</a>
								<ul class="dropdown-menu" >
									<li> <a class="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
									<li> <a class="dropdown-item" href="blog-list-sidebar.html">Blog List Sidebar</a></li>
									<li> <a class="dropdown-item" href="blog-single-v1.html">Blog Single v.1</a></li>
									<li> <a class="dropdown-item" href="blog-single-v2.html">Blog Single v.2</a></li>
								</ul>
							</li>

							<!-- Dropdown submenu -->
							<li class="dropdown dropend">
								<a class="nav-link dropdown-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Specialty Pages</a>
								<ul class="dropdown-menu" data-bs-popper="none">
									<li> <a class="dropdown-item" href="help-center.html">Help Center</a></li>
									<li> <a class="dropdown-item" href="help-center-detail.html">Help Center Detail</a></li>
									<li> <a class="dropdown-item" href="pricing.html">Pricing</a></li>
									<li> <a class="dropdown-item" href="faq.html">Faqs</a></li>
									<li> <a class="dropdown-item" href="error-404.html">Error 404</a></li>
									<li> <a class="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
									<li> <a class="dropdown-item" href="terms-and-condition.html">Terms & Conditions</a></li>
								</ul>
							</li>

							<!-- Dropdown submenu -->
							<li class="dropdown dropend">
								<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Authentication</a>
								<ul class="dropdown-menu" data-bs-popper="none">
									<li> <a class="dropdown-item" href="sign-up.html">Sign Up</a></li>
									<li> <a class="dropdown-item" href="sign-in.html">Sign In</a></li>
									<li> <a class="dropdown-item" href="forgot-password.html">Forgot Password</a></li>
								</ul>
							</li>

							<!-- Dropdown submenu -->
							<li class="dropdown dropend">
								<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Accounts</a>
								<ul class="dropdown-menu" data-bs-popper="none">
									<li> <a class="dropdown-item" href="account-detail.html">Details</a></li>
									<li> <a class="dropdown-item" href="account-security.html">Security</a></li>
									<li> <a class="dropdown-item" href="account-notification.html">Notifications</a></li>
									<li> <a class="dropdown-item" href="account-projects.html">My Projects</a></li>
									<li> <a class="dropdown-item" href="account-payment-details.html">Payment Details</a></li>
									<li> <a class="dropdown-item" href="account-order.html">Order History</a></li>
									<li> <a class="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
									<li> <a class="dropdown-item" href="account-delete.html">Delete Profile</a></li>
								</ul>
							</li>

							<!-- Dropdown divider -->
							<li> <hr class="dropdown-divider"></li>
							
							<!-- Dropdown Multilevel -->
							<li> 
								<a class="dropdown-item" href="https://mizzle.webestica.com/rtl/" target="_blank">
									<i class="fa-fw bi bi-toggle-off me-2"></i>RTL demo
								</a> 
							</li>
							<li> 
								<a class="dropdown-item" href="https://support.webestica.com/" target="_blank">
									<i class="fa-fw bi bi-life-preserver me-2"></i>Support
								</a> 
							</li>
							<li> 
								<a class="dropdown-item" href="docs/index.html" target="_blank">
									<i class="fa-fw bi bi-card-text me-2"></i>Documentation
								</a> 
							</li>
						</ul>
					</li>

					<!-- Nav item -->
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</a>
						<div class="dropdown-menu dropdown-menu-center dropdown-menu-size-xl p-3">
							<div class="row g-xl-3">
								<!-- Work -->
								<div class="col-xl-8 d-none d-xl-block">
									<div class="d-flex gap-4">
										<!-- Card -->
										<div class="card bg-transparent">
											<!-- Image -->
											<img src="assets/images/portfolio/list/01.jpg" class="card-img" alt="">
											<!-- Card body -->
											<div class="card-body px-0 text-start pb-0">
												<h6><a href="#">Ceremony Worthy of Time</a></h6>
												<p class="mb-2 small">We help our customers better manage their web presence.</p>
												<a class="icon-link icon-link-hover stretched-link mb-0" href="portfolio-case-studies-v1.html">Learn more<i class="bi bi-arrow-right"></i> </a>
											</div>
										</div>

										<!-- Card -->
										<div class="card bg-transparent">
											<!-- Image -->
											<img src="assets/images/portfolio/list/02.jpg" class="card-img" alt="">
											<!-- Card body -->
											<div class="card-body px-0 text-start pb-0">
												<h6><a href="#">Brushstrokes and Beyond</a></h6>
												<p class="mb-2 small">We help our customers better manage their web presence.</p>
												<a class="icon-link icon-link-hover stretched-link mb-0" href="portfolio-case-studies-v2.html">Learn more<i class="bi bi-arrow-right"></i> </a>
											</div>
										</div>

										<!-- Divider line -->
										<div class="vr ms-2"></div>
									</div>
								</div>

								<!-- Index nav links -->
								<div class="col-xl-4">
									<ul class="list-unstyled">
										<li class="dropdown-header h6">Portfolio Pages</li>
										<li> <a class="dropdown-item" href="portfolio-masonry.html">Portfolio Masonry</a> </li>
										<li> <a class="dropdown-item" href="portfolio-showcase.html">Portfolio Showcase</a> </li>
										<li> <a class="dropdown-item" href="portfolio-list.html">Portfolio List</a> </li>
										<li> <a class="dropdown-item" href="portfolio-case-studies-v1.html">Portfolio Case Study v.1</a> </li>
										<li> <a class="dropdown-item" href="portfolio-case-studies-v2.html">Portfolio Case Study v.2</a> </li>
									</ul>
								</div>
							</div>
						</div>
					</li>

					<!-- Nav item -->
					<li class="nav-item dropdown dropdown-fullwidth">
						<a class="nav-link dropdown-toggle" href="#" id="megaMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Megamenu</a>
						<div class="dropdown-menu py-0" aria-labelledby="megaMenu">
							
							<div class="row p-2 p-sm-4 g-4">
								<!-- Dropdown column item -->
								<div class="col-md-6 col-xl-3">
									<ul class="list-unstyled">
										<li class="dropdown-header h6 mb-2">Useful links</li>
										<li> <a class="dropdown-item" href="#">Market research</a> </li>
										<li> <a class="dropdown-item" href="#">Advertising</a> </li>
										<li> <a class="dropdown-item" href="#">Consumer behavior</a> </li>
										<li> <a class="dropdown-item" href="#">Digital marketing</a> </li>
										<li> <a class="dropdown-item" href="#">Marketing ethics</a> </li>
										<li> <a class="dropdown-item" href="#">Social media marketing</a> </li>
									</ul>
								</div>

								<!-- Dropdown column item -->
								<div class="col-md-6 col-xl-3">
									<span class="dropdown-header h6 mb-2">Company</span>
									<!-- Dropdown item -->
									<div class="dropdown-item d-flex bg-light-hover position-relative text-wrap py-3">
										<div class="icon-md border bg-body rounded flex-shrink-0"><i class="bi bi-boxes heading-color fs-6"></i></div>
										<div class="ms-2">
											<a class="stretched-link heading-color fw-bold mb-0" href="#">About us</a>
											<p class="mb-0 text-body small">Learn about our story, our mission statement and roadmap.</p>
										</div>
									</div>
									<!-- Dropdown item -->
									<div class="dropdown-item d-flex bg-light-hover position-relative text-wrap py-3">
										<div class="icon-md border bg-body rounded flex-shrink-0"><i class="bi bi-rocket heading-color fs-6"></i></div>
										<div class="ms-2">
											<a class="stretched-link heading-color fw-bold mb-0" href="#">Career<span class="badge text-bg-primary ms-2">3 Jobs</span></a>
											<p class="mb-0 text-body small">We're always looking for talented people. Join our team!</p>
										</div>
									</div>
									<!-- Dropdown item -->
									<div class="dropdown-item d-flex bg-light-hover position-relative text-wrap py-3">
										<div class="icon-md border bg-body rounded flex-shrink-0"><i class="bi bi-emoji-sunglasses heading-color fs-6"></i></div>
										<div class="ms-2">
											<a class="stretched-link heading-color fw-bold mb-0" href="#">Customer stories</a>
											<p class="mb-0 text-body small">Learn how our customer are making big changes to their tech stack</p>
										</div>
									</div>
								</div>

								<!-- Dropdown column item -->
								<div class="col-md-6 col-xl-3">
									<ul class="list-unstyled">
										<li class="dropdown-header h6 mb-2">Integration</li>
										<li> 
											<a class="dropdown-item d-flex bg-light-hover icon-link icon-link-hover py-2" href="#">
												<img src="assets/images/elements/slack.svg" class="h-30px" alt="">
												<span class="heading-color fw-bold ms-2">Slack</span>
												<i class="bi bi-arrow-right ms-auto"></i>
											</a>

											<a class="dropdown-item d-flex bg-light-hover icon-link icon-link-hover py-2" href="#">
												<img src="assets/images/elements/webflow.svg" class="h-30px" alt="">
												<span class="heading-color fw-bold ms-2">Webflow</span>
												<i class="bi bi-arrow-right ms-auto"></i>
											</a>
											
											<a class="dropdown-item d-flex bg-light-hover icon-link icon-link-hover py-2" href="#">
												<img src="assets/images/elements/mailchimp.svg" class="h-30px" alt="">
												<span class="heading-color fw-bold ms-2">Mailchimp</span>
												<i class="bi bi-arrow-right ms-auto"></i>
											</a>

											<a class="dropdown-item d-flex bg-light-hover icon-link icon-link-hover py-2" href="#">
												<img src="assets/images/elements/reddit.svg" class="h-30px" alt="">
												<span class="heading-color fw-bold ms-2">Reddit</span>
												<i class="bi bi-arrow-right ms-auto"></i>
											</a>
											<a href="#" class="btn btn-sm btn-light mb-0 d-grid mt-2">View all</a>
										</li>
									</ul>
								</div>

								<!-- Dropdown column item -->
								<div class="col-md-6 col-xl-3">
									<span class="dropdown-header h6 mb-2">Recent blogs</span>
									<!-- Blog item -->
									<div class="dropdown-item bg-light-hover d-flex align-items-sm-center gap-2 position-relative mb-3">
										<img src="assets/images/blog/4by4/02.jpg" class="rounded icon-lg" alt="blog-img">
										<p class="text-wrap fw-bold mb-0"><a href="blog-single-v1.html" class="stretched-link heading-color text-primary-hover">10 things you need to know about Mizzle</a></p>
									</div>

									<!-- Blog item -->
									<div class="dropdown-item bg-light-hover d-flex align-items-sm-center gap-2 position-relative mb-3">
										<img src="assets/images/blog/4by4/01.jpg" class="rounded icon-lg" alt="blog-img">
										<p class="text-wrap fw-bold mb-0"><a href="blog-single-v2.html" class="stretched-link heading-color text-primary-hover">The Power of Gratitude: Cultivating Joy and Abundance</a></p>
									</div>

									<!-- Blog item -->
									<div class="dropdown-item bg-light-hover d-flex align-items-sm-center gap-2 position-relative">
										<img src="assets/images/blog/4by4/03.jpg" class="rounded icon-lg" alt="blog-img">
										<p class="text-wrap fw-bold mb-0"><a href="blog-single-v1.html" class="stretched-link heading-color text-primary-hover">Effortless Web Development with Mizzle</a></p>
									</div>

								</div>
							</div>
						</div>
					</li>

					<!-- Nav item -->
					<li class="nav-item"> <a class="nav-link" href="contact-v1.html">Contact us</a> </li>
				</ul>
			</div>
			<!-- Main navbar END -->

			<!-- Buttons -->
			<ul class="nav align-items-center dropdown-hover ms-sm-2">
				<!-- Dark mode option START -->
				<li class="nav-item dropdown dropdown-animation">
					<button class="btn btn-link mb-0 px-2 lh-1" id="bd-theme"
					type="button"
					aria-expanded="false"
					data-bs-toggle="dropdown"
					data-bs-display="static">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  class="bi bi-circle-half theme-icon-active fill-mode fa-fw" viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
						<use href="#"></use>
					</svg>
					</button>

					<ul class="dropdown-menu min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
						<li class="mb-1">
							<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
								<svg width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill fa-fw mode-switch me-1" viewBox="0 0 16 16">
									<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
									<use href="#"></use>
								</svg>Light
							</button>
						</li>
						<li class="mb-1">
							<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill fa-fw mode-switch me-1" viewBox="0 0 16 16">
									<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
									<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
									<use href="#"></use>
								</svg>Dark
							</button>
						</li>
						<li>
							<button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-half fa-fw mode-switch me-1" viewBox="0 0 16 16">
									<path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
									<use href="#"></use>
								</svg>Auto
							</button>
						</li>
					</ul>
				</li>
				<!-- Dark mode option END -->

				<!-- Sign up button -->
				<li class="nav-item me-2 d-none d-sm-block">
					<a href="sign-up.html" class="btn btn-sm btn-light mb-0"><i class="bi bi-person-circle me-1"></i>Sign up</a>
				</li>
				<!-- Buy now button -->
				<li class="nav-item d-none d-sm-block">
					<button class="btn btn-sm btn-primary mb-0">Buy now!</button>
				</li>
				<!-- Responsive navbar toggler -->
				<li class="nav-item">
					<button class="navbar-toggler ms-sm-3 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-animation">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</button>
				</li>	
			</ul>

		</div>
	</nav>
	<!-- Logo Nav END -->
</header>`
;

class CustomHeader extends HTMLElement {
constructor(){
super();

const clone = template.content.cloneNode(true);
this.appendChild(clone);
}
}

window.customElements.define("custom-header", CustomHeader);