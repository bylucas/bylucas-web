<template>
  
 <section class="contact-form">
    <h2>How Can We Help?</h2>
           
  <div class="form-wrap">
    <form @submit.prevent="handleSubmit">
     <input class="subscribe" type="text" v-model="name" placeholder="your name" required/>

     <input class="subscribe" type="email" v-model="email" placeholder="youremail@example.com" required/>
    
    <textarea class="subscribe" v-model="message" placeholder="How can we help?" required></textarea>
    <transition name="success">
    <div class="success" v-if="showSuccess">You did it...</div>
  </transition>
  
    <button>Send</button>
  
        </form>
            </div>
        </section>
</template>

<script>
import { ref } from 'vue'

// firebase imports
import { db } from '../firebase/config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'


export default {

    setup() {
    const name = ref('')
    const email = ref('')
    const message = ref('')
    const showSuccess = ref(false)

    const handleSubmit = async () => {
      const colRef = collection(db, 'contacts')

      await addDoc(colRef, { 
        name: name.value,
           email: email.value,
           message: message.value,
           createdAt: serverTimestamp()
      })

            showSuccess.value = true

          setTimeout(() => {
            showSuccess.value = false,
            name.value = '',
            email.value = '',
            message.value = ''
              }, 3000);
            }

    return { handleSubmit, name, email, message, showSuccess }
  }
}

</script>

<style scoped>
 /* enter transitions */
 .success-enter-from {
  opacity: 0;
  }
  /* leave transitions */
  .success-leave-to {
    opacity: 0;
  }
  .success-enter-active,
  .success-leave-active {
    transition: all .7s ease;
  }
</style>

