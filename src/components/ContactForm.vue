<template>
  
 <section class="contact-form">
    <h2>How Can We Help?</h2>
           
  <div class="form-wrap">
    <form @submit.prevent="handleSubmit">
     <input class="subscribe" type="text" v-model="name" placeholder="your name" required/>

     <input class="subscribe" type="email" v-model="email" placeholder="youremail@example.com" required/>
    
    <textarea class="subscribe" v-model="message" placeholder="How can we help?" required></textarea>
    <div class="success">{{ success }}</div>
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
    const success = ref(null)

    const handleSubmit = async () => {
      const colRef = collection(db, 'contacts')

      await addDoc(colRef, { 
        name: name.value,
           email: email.value,
           message: message.value,
           createdAt: serverTimestamp()
      })

            success.value = 'you did it'

          setTimeout(() => {
            success.value = '',
            name.value = '',
            email.value = '',
            message.value = ''
              }, 3000);
            }

    return { handleSubmit, name, email, message, success }
  }
}

</script>

