<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >

    <div class="text-red">


      <ul id="user">

      </ul>
    </div>
  </q-page>
</template>



<script>
import { baseURL } from 'boot/axios'
import { echo } from 'boot/laravel-echo'
export default {
  name: 'PageIndex',
  methods: {

   getUser(){
      this.$axios.get("/api/users")
      .then((response) => {

         const userElement = document.getElementById('user')
         let users = response.data
         users.forEach((user, index) => {
           let element = document.createElement('li')
           element.setAttribute('id', user.id)
           element.innerText = user.name
           userElement.appendChild(element)

         });

            })
            .catch(error => {
            //  console.log(response.data.error)
            })
   },

},

  mounted(){
    this.$echo.channel('user')
              .listen('UserCreated', (e) => {
        const userElement = document.getElementById('user')

        let element = document.createElement('li')
            element.setAttribute('id', e.user.id)
            element.innerText = e.user.name
            userElement.appendChild(element)

      })


    this.getUser();
  }
}
</script>
