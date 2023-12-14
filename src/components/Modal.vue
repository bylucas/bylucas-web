<template>
 
  <div class="modal-mask">
   
    <div class="modal-wrapper">
      
      <div class="modal-container">
        <div class="modal-body">
          <div class="modal-close" @click="$emit('close')">X</div>
          <slot></slot>
          </div>
        </div>
      
      </div>
   
    </div>
  
</template>

<script>
export default {
  emits: [ "close" ]
  };
</script>