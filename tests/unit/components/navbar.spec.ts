
import { mount, createLocalVue } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from "@fortawesome/fontawesome-svg-core";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);


describe('Navbar.vue', () => {
  it('renders passed', () => {
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)
    localVue.component("font-awesome-icon", FontAwesomeIcon);

    const $route = {path: '/', name: 'home'}

    const wrapper = mount(Navbar, {
      localVue,
      mocks: {
        $route
      },
    })

    const searcInput = wrapper.find('input');
    const homeNav = wrapper.find('img');
    expect(searcInput.attributes('placeholder')).toBe('Search')
    expect(homeNav.exists()).toBe(true);
  })
})
