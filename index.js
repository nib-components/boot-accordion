var Accordion = require('accordion');
var ga = require('analytics');
var query = require('element-collection');

function after(el, accordion) {
  accordion.on('toggle', function(){
    ga.trackEvent({
      category: el.getAttribute('data-category') || 'Accordion',
      action: 'Toggle',
      label: el.getAttribute('data-label')
    });
  });
}

function create(el) {
  if(el.hasAttribute('data-accordion-loaded')) return;
  var accordion = new Accordion({ el: $(el) });
  el.setAttribute('data-accordion-loaded', true);
  after(el, accordion);
}

query('.js-accordion').forEach(create);