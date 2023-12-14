<template>
<footer class="footer">
 <p>&copy;2022 howardlucas | <a id="contact" @click="showModalContact = true">Contact</a> | <a id="privacy" @click="showModalPrivacy = true">Privacy</a></p>
 <transition name="modal">
 <modal v-if="showModalContact" @close="showModalContact = false">

					<ContactForm />
				
			</modal>
    </transition>

    <transition name="modal">
  <modal v-if="showModalPrivacy" @close="showModalPrivacy = false">
				
					<PrivacyContent />
				
			</modal>
    </transition>
  </footer>
</template>
<script>
import Modal from './Modal.vue'
import ContactForm from './ContactForm.vue'
import PrivacyContent from './PrivacyContent.vue'
export default {
  name: 'Footer',
  data() {
    return {
    showModalContact: false,
    showModalPrivacy: false
    }
  },
  components: {
    Modal,
    ContactForm,
    PrivacyContent
  }
};
</script>