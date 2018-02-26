<!DOCTYPE html>
<html lang="">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Dustin Hammack">
	<meta name="description" content="A portfolio site for Dustin Hammack!">
	<title>Dustin Hammack</title>
	<!-- Minified Bootstrap Styles -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<!-- Custom Style Sheets -->
	<link rel="stylesheet" href="styles/styles.css">
	
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>

<body class="">
<!-- Removed Bootstrap-Collapsible Navigation Code -->
<!--<div class="row" id="headingNav" >
	<div class="navbar nav-container col-xs-1 col-sm-5 col-sm-push-1 col-md-6 col-md-push-1" id="mainNav">
		<nav class=" nav-pills">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle col-xs-10  col-xs-offset-1" data-toggle="collapse" data-target="#nav" aria-label="Toggle navigation">
					<span class="sr-only">Toggle navigation</span>
					<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" id="nav">
				<ul class="nav navbar-nav col-sm-12">
					<li class="col-xs-12 col-sm-4 col-md-4 activeLink"><a href="#" id="aboutLink">About</a></li>
					<li class="col-xs-12 col-sm-4 col-md-4"><a href="#" id="projectsLink">Projects</a></li>
					<li class="col-xs-12 col-sm-4 col-md-4"><a href="#" id="contactLink">Contact</a></li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="container col-xs-11 col-sm-5 col-sm-push-1 col-md-4 noLeftPadding">
		<header id="nameAndTitle">
			<h1 id="name"><span>Dustin Hammack</span></h1>
			<div id="professionalPhoto">
				<img src="./images/proMe(left-side).jpg" alt="A picture of me, Dustin Hammack" id="professionalPhotoLeft">
				<img src="./images/proMe(right-side).jpg" alt="A picture of me, Dustin Hammack" id="professionalPhotoRight">
			</div>
			<h4 id="title"><span>Full Stack Web Developer</span></h4>
		</header>
	</div>
</div>-->

<!-- Main Navigation -->
<nav>
	<div class="collapsed-nav">
		<span class="bar-icon"></span>
		<span class="bar-icon"></span>
		<span class="bar-icon"></span>
	</div>
	<div class="navbar">
		<ul>
			<li><a href="#main" id="home-link">Home</a></li>
			<li><a href="#about" id="about-link">About</a></li>
			<li><a href="#projects" id="project-link">Portfolio</a></li>
			<li><a href="#contact" id="contact-link">Contact</a></li>
		</ul>
	</div>
</nav>
<!-- Main Body Content -->
<main>
	<!-- Main Content Section -->
	<section id="main">
		<div id="home-wrapper">
			<div id="home-left">
				<div class="left-cover"></div>
				<div id="home-img-holder">
					<div>
						<img src="images/mePro.jpg" alt="">
					</div>
				</div>
			</div>
			<div id="home-right">
				<div class="text-holder">
					<h2>Dustin Hammack</h2>
					<span>&lt;</span><hr><span>&gt;</span>
					<h4>Full Stack Web Developer</h4>
					<p>
						
					</p>
				</div>
			</div>
<!--			<button class="scroll-down">&darr;</button>-->
		</div>
		<p class="scroll-down-button">
			<a href="#about" class="scroll-down btn">&darr;</a> <!-- role="button" -->
		</p>
	</section>

	<!-- About Me Section -->
	<section id="about">
		<div id="about-wrapper">
<!--			<a href="#contact" class="scroll-up btn">&uarr;</a>-->
			<p class="scroll-up-button">
				<a href="#main" class="scroll-up btn">&uarr;</a> <!-- role="button" -->
			</p>
			<h2>Who am I?</h2>
			<p>I am a 28 year old Web Developer from Fort Worth, TX. I started creating content for the web a little over a year ago, and it has now become a passion of mine. The projects displayed on this site are built upon the LAMP stack, using technologies such as:</p>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>Bootstrap</li>
				<li>SASS</li>
				<li>Javascript</li>
				<li>jQuery</li>
				<li>PHP</li>
				<li>MySQL</li>
			</ul>

			<h2>Background</h2>

			<p>I currently have experience using the LAMP stack. 
			HTML, CSS, Bootstrap, SASS, Javascript, jQuery, PHP &amp; MySQL. </p>
			<br><br>

<!--			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat voluptatem facilis, itaque, fuga laboriosam dolorem facere nostrum ullam quis aliquid voluptate quidem maiores natus vero culpa doloremque! Consequatur vel quia aperiam labore fugiat ipsam aspernatur odit, iusto quibusdam quod. Provident sint quod dolorum dolores ab aut excepturi suscipit doloribus.</p>		-->

<!--			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quisquam eaque, ad iusto totam eius quasi rerum. Dolorum sequi harum eos maxime a ea aspernatur animi quis doloremque quae sit consectetur rerum, blanditiis excepturi tenetur corporis et quasi veniam nihil possimus odio voluptatibus, iste deserunt repudiandae officia.</p>-->

	
			<h2>Follow Me!</h2>
<!--
			<img src="images/icons/facebook-icon.png" alt="facebook-icon">
			<img src="images/icons/instagram-icon.png" alt="instagram-icon">
			<img src="images/icons/linkedin-logo.png" alt="linked-in-icon">
-->
	
			
		</div>
		
		<p class="scroll-down-button">
			<a href="#projects" class="scroll-down btn">&darr;</a>
		</p>
	</section>

	<!-- Project Portfolio Section -->
	<section id="projects">
<!--		<a href="#contact" class="scroll-up btn">&uarr;</a>-->
			<p class="scroll-up-button">
				<a href="#about" class="scroll-up btn">&uarr;</a> <!-- role="button" -->
			</p>
		<div id="project-wrapper">
			<h2 class="text-center">Portfolio</h2>

			<?php 
				$jsonFile = file_get_contents("js/projects.json");
				$jsonData = json_decode($jsonFile, true);
				$x = 0;
				$y = 0;
				foreach($jsonData['projects'] as $key => $value) {
			 ?>

			 <div class="project-container col-xs-11 col-xs-offset-1 col-sm-3 col-sm-offset-1 col-lg-2" data-project-name="<?= $value['shortname']; ?>"> 
			 <!-- col-sm-8 col-sm-offset-2">-->
				<div class="project-overlay">
<!--
					<input type="checkbox" id="project<?php echo $x++; ?>" style="display:none" />  
					<label class="button" for="project<?php echo $y++; ?>">
-->
						<a  class="project-details btn btn-lg btn-danger">More Details</a>
<!--					</label>-->
				</div>
				 <div class="project-description">
					<h3><?= $value['projectname']; ?></h3>
				 </div>
				 <img src="<?= $value['projectimage']; ?>" alt="">
			 </div>

			<div class="overlay" id="<?= $value['shortname']; ?>">
				<div class="project-modal">
					<p class="close">X</p>
					<h2><?= $value['projectname']; ?></h2>
					<p><strong>Technology Used:</strong> <?= $value['techused']; ?></p>
					<p><strong>Project Description:</strong> <?= $value['description']; ?></p>
					<p><a href="<?= $value['projecturl']; ?>" target="_blank" class="btn btn-lg btn-primary">Go to project</a></p>
					<p><a href="<?= $value['githuburl']; ?>" target="_blank" class="btn btn-lg btn-success">Go to code</a></p>
				</div>
			</div>
			
		
			<?php } ?>
			
			
			
		</div>
		
		<p class="scroll-down-button">
			<a href="#contact" class="scroll-down btn">&darr;</a>
		</p>
	</section>

	<!-- Contact Form Section -->	
	<section id="contact">
<!--		<a href="#contact" class="scroll-up btn">&uarr;</a>-->
			<p class="scroll-up-button">
				<a href="#projects" class="scroll-up btn">&uarr;</a> <!-- role="button" -->
			</p>
		<div id="contact-wrapper">
			<!-- Contact me for work -->
			<h2 class="text-center">Lets work together</h2>	
			<form action="contact.php" method="post" class="col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
				<div class="form-group">

					<label for="name">Name: &nbsp;&nbsp;&nbsp;&nbsp;
		<!--			<small class="text-danger">* </small>-->
		<!--			<small class="text-danger nameError">Required</small>-->
					</label>
					<input type="text" class="form-control" id="name" name="name" required>
				</div>
				<div class="form-group">
					<label for="email">Email: &nbsp;&nbsp;&nbsp;&nbsp;
		<!--			<small class="text-danger">* </small>-->
		<!--			<small class="text-danger emailError">Required</small>-->
					</label>
					<input type="text" class="form-control" id="email" name="email" required>
				</div>
				<!--<div class="form-group">
					<label for="subject">Subject: &nbsp;&nbsp;&nbsp;&nbsp;-->
		<!--			<small class="text-danger">* </small>-->
		<!--			<small class="text-danger emailError">Required</small>-->
					<!--</label>
					<input type="text" class="form-control" id="subject" name="subject">
				</div>-->
				<div class="form-group">
					<label for="message">Message: &nbsp;&nbsp;&nbsp;&nbsp;
		<!--			<small class="text-danger">* </small>-->
		<!--			<small class="text-danger emailError">Required</small>-->
					</label>
					<textarea name="message" id="message" cols="10" rows="4" class="form-control"></textarea>
				</div>
		<!--		<p><span class="text-danger">All fields required</span></p>-->
		<!--		<p><span class="text-danger">* = Required</span></p>-->
		<!--		<span class="text-danger">*</span>-->
				<br/>
				<p><span class="">&#42; All fields required</span></p>

				<button type="submit" class="btn btn-lg col-xs-4">Send</button>
		<!--		<button type="button" class="btn btn-warning btn-lg col-xs-4 col-xs-offset-4">Cancel</button>-->
			</form>
		</div>
	</section>
</main>

<!-- Scripts -->
<!-- Include JQuery -->
<script src="js/jquery-2.2.4.js"></script>

<!-- jQuery CDN -->
<script
  src="http://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
<!-- Minified Bootstrap JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<!-- Custom JavaScript -->
<script src="js/scripts.js"></script>
</body>
</html>