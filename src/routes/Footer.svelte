<script>
	import Container from '$lib/components/Conatiner.svelte';
	import logo from '$lib/images/logo.svg';
	import H6 from '$lib/components/Headings/H6.svelte';
</script>

<footer>
	<Container>
		<div class="grid gap-20 py-20">
			<div class="grid grid-cols-5">
				<div class=" col-span-3 grid gap-8">
					<img src={logo} alt="Floral Logo" class="h-12 object-contain" />
					<div class="grid">
						<H6>Floral LÖSIEG</H6>
						<p>Gardinenerzeugungsges.m.b.H</p>
						<p>Wilhelm-Szabo-Straße 230/1</p>
						<p>3970 Weitra</p>
					</div>
					<div class="grid">
						<H6>Contact:</H6>
						<a href="tel:+43285620320">+43 (0) 2856 203 20</a>
						<a href="mailto:office@floral.at">office@floral.at</a>
					</div>
				</div>
				<div class="flex flex-col gap-3">
					<H6>Go to</H6>
					<a href="/">Home</a>
					<a href="/News">News</a>
					<a href="/Team">Team</a>
					<a href="/AboutUs">About Us</a>
				</div>
				<div class="flex flex-col gap-3">
					<H6><a href="https://floral.at">floral.at</a></H6>
					<a href="https://floral.at/stoffe">Stoffe</a>
					<a href="https://floral.at/biostoffe">Biostoffe</a>
					<a href="https://floral.at/naehstudio">Nähstudio</a>
					<a href="https://floral.at/sonnenschutz">Sonnenschutz</a>
					<a href="https://floral.at/ueber-uns">Unternehmen</a>
					<a href="https://floral.at/kontakt">Kontakt</a>
				</div>
			</div>
			<div class="grid gap-8">
				<hr class="border-black" />
				<div class="flex justify-between">
					<p>© 2023 Floral LÖSIEG Gardinenerzeugungsges.m.b.H</p>
					<div class="flex gap-6">
						<a class="underline" href="https://floral.at/impressum">Impressum</a>
						<a class="underline" href="https://floral.at/datenschutzbestimmungen">Privacy Policy</a>
					</div>
				</div>
			</div>
		</div>
	</Container>
</footer>
