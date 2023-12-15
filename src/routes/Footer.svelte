<script lang="ts">
	import Container from '$lib/components/Conatiner.svelte';
	import logo from '$lib/images/logo.svg';
	import H6 from '$lib/components/common/headings/H6.svelte';

	import { _ } from 'svelte-i18n';
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
						<H6>{$_('footer.contact')}</H6>
						<a href="tel:+43285620320">+43 (0) 2856 203 20</a>
						<a href="mailto:office@floral.at">office@floral.at</a>
					</div>
				</div>
				<div class="flex flex-col gap-3">
					<H6>{$_('footer.goto')}</H6>
					<a href="/">{$_('navbar.home')}</a>
					<a href="/News">{$_('navbar.news')}</a>
					<a href="/Team">{$_('navbar.team')}</a>
					<a href="/AboutUs">{$_('navbar.aboutus')}</a>
				</div>
				<div class="flex flex-col gap-3">
					<H6><a href="https://floral.at">{$_('floralat.website')}</a></H6>
					<a href="https://floral.at/stoffe">{$_('floralat.stoffe')}</a>
					<a href="https://floral.at/biostoffe">{$_('floralat.biostoffe')}</a>
					<a href="https://floral.at/naehstudio">{$_('floralat.naehstudio')}</a>
					<a href="https://floral.at/sonnenschutz">{$_('floralat.sonnenschutz')}</a>
					<a href="https://floral.at/ueber-uns">{$_('floralat.ueberuns')}</a>
					<a href="https://floral.at/kontakt">{$_('floralat.kontakt')}</a>
				</div>
			</div>
			<div class="grid gap-8">
				<hr class="border-black" />
				<div class="flex justify-between">
					<p>© 2023 Floral LÖSIEG Gardinenerzeugungsges.m.b.H</p>
					<div class="flex gap-6">
						<a class="underline" href="https://floral.at/impressum">{$_('footer.imprint')}</a>
						<a class="underline" href="https://floral.at/datenschutzbestimmungen"
							>{$_('footer.privacy-policy')}
						</a>
					</div>
				</div>
			</div>
		</div>
	</Container>
</footer>
