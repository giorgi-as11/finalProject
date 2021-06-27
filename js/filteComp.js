Vue.component(`filtera`, {
    template: `
    <form action="#" class="search__form" @submit.prevent="$root.filter">
        <input type="text" class="search-field input"         v-model="$root.userSearch">
        <button type="submit" class="button">
            <i class="fas fa-search"></i>
        </button> 
    </form>
    `
})