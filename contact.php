
<section class="container col-xs-12 col-md-offset-1 col-md-6 col-md-offset-3" id="contact">
	<h2 class="text-center text-info">Contact me for work</h2> <!--<br/><br/>-->	

	<form action="contact.php" method="post" class="col-md-10 col-md-offset-1">
		<p><span class="text-danger">&#42; All fields required</span></p>
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
		<div class="form-group">
			<label for="subject">Subject: &nbsp;&nbsp;&nbsp;&nbsp;
<!--			<small class="text-danger">* </small>-->
<!--			<small class="text-danger emailError">Required</small>-->
			</label>
			<input type="text" class="form-control" id="subject" name="subject">
		</div>
		<div class="form-group">
			<label for="message">Message: &nbsp;&nbsp;&nbsp;&nbsp;
<!--			<small class="text-danger">* </small>-->
<!--			<small class="text-danger emailError">Required</small>-->
			</label>
			<textarea name="message" id="message" cols="10" rows="2" class="form-control"></textarea>
		</div>
<!--		<p><span class="text-danger">All fields required</span></p>-->
<!--		<p><span class="text-danger">* = Required</span></p>-->
<!--		<span class="text-danger">*</span>-->
		<br/>

		<button type="submit" class="btn btn-info btn-lg col-xs-4">Send</button>
<!--		<button type="button" class="btn btn-warning btn-lg col-xs-4 col-xs-offset-4">Cancel</button>-->
	</form>
</section>


















<section class="bottom" id="contact"> <!-- container id="contact">-->
		<h2 class="text-center text-info">Contact me for work</h2> <!--<br/><br/>-->	
		<form action="contact.php" method="post" class="col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
			<p><span class="text-danger">&#42; All fields required</span></p>
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
			<div class="form-group">
				<label for="subject">Subject: &nbsp;&nbsp;&nbsp;&nbsp;
	<!--			<small class="text-danger">* </small>-->
	<!--			<small class="text-danger emailError">Required</small>-->
				</label>
				<input type="text" class="form-control" id="subject" name="subject">
			</div>
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

			<button type="submit" class="btn btn-info btn-lg col-xs-4">Send</button>
	<!--		<button type="button" class="btn btn-warning btn-lg col-xs-4 col-xs-offset-4">Cancel</button>-->
		</form>
	</section>
	






		 <!--<div class="container project-container col-md-6">
			<div class="thumbnail">
				<iframe src="<?= $value['projecturl']; ?>" frameborder="0"></iframe>
			
				<a href="#" class="image"></a>
			</div>
		</div>-->