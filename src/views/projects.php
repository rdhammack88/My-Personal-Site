<!-- Project Portfolio Section -->
<section class="projects mt-5" id="projects">
	<div class="container">
		<h2 class="text-center">Portfolio</h2>
		<div class="row">

		<?php
            $jsonFile = file_get_contents("./src/js/projects.json");
            $jsonData = json_decode($jsonFile, true);
            $projects = $jsonData['projects'];

            foreach ($projects as $project_set) {
                foreach ($project_set as $project_category => $project_info) {
                    foreach ($project_info as $project) {
                        ?>

			<div class="project-container col-10 offset-1 col-lg-4 col-md-6 my-5 mx-auto text-center" data-project-name="<?php echo $project['shortname']; ?>"> 
			<!--  col-sm-8 offset-sm-2 -->
				<div class="project-image <?php echo $project['projectimageclass'] ?>">

					<img class="project-image <?php echo $project['projectimageclass'] ?>" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAACJJREFUeNrtwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAQGVUwQAAAAASUVORK5CYII=">

					<div class="project-overlay">
						<a  class="project-details btn btn-lg btn-info">More Details</a>
					</div>
				</div>
				<div class="project-description d-none">
					<h3><?php echo $project['projectname']; ?></h3>
				</div>				

				<!-- Project Overlay -->
				<div class="overlay d-none" id="<?php echo $project['shortname']; ?>">
					<div class="project-modal">
						<span class="close">X</span>
						<h2><?php echo $project['projectname']; ?></h2>
						<p class="mt-3 mb-1 text-justify"><strong>Technologies:</strong> <?php echo $project['techused']; ?></p>
						<p  class="text-justify"><strong>Description:</strong> <?php echo $project['description']; ?></p>
						<!-- Project and Code Repository Links -->
						<p class="mt-4 mr-4">
							<a href="<?php echo $project['projecturl']; ?>" target="_blank" class="btn btn-link p-2">
								<i class="fas fa-code mr-2"></i>	
								Check out the project
							</a>
						</p>
						<p>
							<a href="<?php echo $project['githuburl']; ?>" target="_blank" class="btn btn-link p-2">
								<i class="fab fa-github fa-1x mr-2"></i>
								Check out the code
							</a>
						</p>

						<?php if ($project['completed'] === 'false') {
                            ?>
							<br/><br/>
							<p class="text-justify text-danger mb-0">* This site is not 100% completed.</p>
							<p class="text-justify text-info">** <?php echo $project['completed_description']; ?></p>
						<?php
                        } ?>
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

