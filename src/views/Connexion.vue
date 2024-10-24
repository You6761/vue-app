<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div class="max-w-xl lg:max-w-lg">
          <h2 class="text-4xl font-semibold tracking-tight text-white"> {{ isLoginMode ? 'Newsletter' : 'Inscription' }}
          </h2>
          <form @submit.prevent="submitForm">
            <div class="mt-4"> <label for="email" class="sr-only">Email</label> <input type="email" v-model="email"
                required id="email"
                class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Entrez votre email" /> </div>

            <div v-if="!isLoginMode" class="mt-4"> <label for="photo" class="sr-only">Photo de profil</label> <input
                type="file" @change="onFileChange"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
            <button type="submit"
              class="mt-4 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              {{ isLoginMode ? 'Envoyer' : 'S’inscrire' }} </button>
          </form>

        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10"> <svg class="h-6 w-6 text-white" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg> </div>
            <dt class="mt-4 font-semibold text-white">Articles hebdomadaires</dt>
            <dd class="mt-2 leading-7 text-gray-400"></dd>
          </div>
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10"> <svg class="h-6 w-6 text-white" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
              </svg> </div>
            <dt class="mt-4 font-semibold text-white">Pas de spam</dt>
            <dd class="mt-2 leading-7 text-gray-400"></dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 0.1% 36.1%, 23.2% 4.4%)">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoginMode: true,
      email: '',

    };
  },
  mounted() {
    // Récupérer les données depuis le localStorage au démarrage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.email = user.email;
      console.log("Utilisateur restauré depuis localStorage:", user);
    }
  },
  methods: {
    submitForm() {
      const user = {
        email: this.email,

      };

      if (this.isLoginMode) {
        // Logique de connexion
        console.log('Connexion avec:', user.email);

        // Stocker l'utilisateur dans localStorage
        localStorage.setItem('user', JSON.stringify(user));

        // Simuler une redirection après la connexion (remplacer par une vraie redirection si nécessaire)
        console.log('Rediriger l\'utilisateur après la connexion');
      } else {
        // Logique d'inscription
        console.log('Inscription avec:', user.email, this.photo);

        // Stocker l'utilisateur dans localStorage
        localStorage.setItem('user', JSON.stringify(user));

        // Simuler une redirection après l'inscription (remplacer par une vraie redirection si nécessaire)
        console.log('Rediriger l\'utilisateur après l\'inscription');
      }
    },

    toggleMode() {
      this.isLoginMode = !this.isLoginMode;
      this.email = '';


    },

    onFileChange(event) {
      this.photo = event.target.files[0];
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>