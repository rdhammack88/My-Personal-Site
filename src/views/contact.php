<!-- Contact Form Section -->	
<section id="contact" class="contact">
	<div class="container">
		<h2 class="text-center mb-5">Lets work together</h2>	
		<form action="contact.php" method="post" class="mx-auto">
			<!-- col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4  -->
			<div class="form-group">
				<label for="name">
					<strong>Name:</strong> &nbsp;&nbsp;
					<small class="text-danger nameError">* Required</small>
				</label>
				<input type="text" class="form-control" id="name" name="name" placeholder="name" autocomplete="name" required>
			</div>
			<div class="form-group">
				<label for="email">
					<strong>Email:</strong> &nbsp;&nbsp;
					<small class="text-danger emailError">* Required</small>
				</label>
				<input type="text" class="form-control" id="email" name="email" placeholder="email" autocomplete="email" required>
			</div>
			<div class="form-group">
				<label for="message">
					<strong>Message:</strong> &nbsp;&nbsp;
					<small class="text-danger emailError">* Required</small>
				</label>
				<textarea name="message" id="message" cols="10" rows="4" class="form-control" placeholder="Project ideas, details, and project budget"></textarea>
			</div>
			<p><span class="text-danger">&#42; All fields required</span></p>

			<button type="submit" name="send" class="btn btn-info btn-lg col-xs-4">Send</button>
		</form>
	</div>
</section><!-- Contact Form Section -->