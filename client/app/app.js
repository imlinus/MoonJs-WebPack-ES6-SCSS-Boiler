require('../scss/style.scss')
import Moon from 'moonjs'
import anime from 'animejs'
import cash from 'cash-dom'
// import browserDetection from './helpers/browserdetection'
// import { Analytics } from './helpers/analytics'
import { router } from './router';
import { TopBar, Logo, Menu } from './modules/index'
import { Home, Contact, NotFound } from './pages/index'

const $ = cash

// browserDetection({ addClasses: true })
// new Analytics('UA-XXX-XXX')

window.onload = () => {
	$('body').removeClass('loading').addClass('loaded')

	const app = new Moon({
	  el: '.app',
	  router
	})
}
