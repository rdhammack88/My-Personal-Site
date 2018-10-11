<!-- Project Portfolio Section -->
<section class="projects" id="projects">
	<div class="container">
		<h2 class="text-center">Portfolio</h2>
		<div class="row">

		<?php 
			$jsonFile = file_get_contents("./src/js/projects.json");
			$jsonData = json_decode($jsonFile, true);
			$projects = $jsonData['projects'];

			foreach($projects as $project_set) {
				foreach($project_set as $project_category => $project_info) {
					foreach($project_info as $project) {
		?>

			<div class="project-container col-10 offset-1 col-lg-4 col-md-6 my-5 mx-auto text-center" data-project-name="<?= $project['shortname']; ?>"> <!--  col-sm-8 offset-sm-2 -->
				<div class="project-image <?= $project['projectimageclass'] ?>">
					<div class="project-overlay">
						<a  class="project-details btn btn-lg btn-info">More Details</a>
					</div>
				</div>
				<div class="project-description d-none">
					<h3><?= $project['projectname']; ?></h3>
				</div>				

				<!-- Project Overlay -->
				<div class="overlay d-none" id="<?= $project['shortname']; ?>">
					<div class="project-modal">
						<p class="close">X</p>
						<h2><?= $project['projectname']; ?></h2>
						<p>
							<strong>Technology Used:</strong> <?= $project['techused']; ?>
						</p>
						<p>
							<strong>Project Description:</strong> <?= $project['description']; ?>
						</p>
						<p>
							<a href="<?= $project['projecturl']; ?>" target="_blank" class="btn btn-lg btn-primary">Check out the project</a>
						</p>
						<p>
							<a href="<?= $project['githuburl']; ?>" target="_blank" class="btn btn-lg btn-success">Check out the code</a>
						</p>

						<?php if($project['completed'] === 'false') { ?>
							<br/><br/><br/>
							<p class="text-center">** This site is not 100% completed, and I am always adding new features and playing with the diplays.</p>
						<?php } ?>
					</div>
				</div> <!-- End of Project Overlay -->
				
			</div> <!-- End of Project Container -->
						

			<!-- End of all 3 PHP FOREACH -->
			<?php
					}
				}
			} 
			?>

		</div> <!-- End of Row -->
	</div> <!-- End of .container -->
</section><!-- Project Portfolio Section -->


<!-- <img src="./images/sprite.png" class="<?php//= $project['projectimageclass'] ?>" alt=""> -->