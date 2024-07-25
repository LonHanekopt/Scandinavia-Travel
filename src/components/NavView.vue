<template>
    <div class="nav">
        <div class="wrapper">
            <div class="logo">
                <router-link to="/">
                    <img src="@/assets/logo.jpg" alt="logo">
                </router-link>
            </div>
            <ul class="navbar-menu">
                <li class="navbar-item">
                    <RouterLink to="/">{{ $t('Home') }}</RouterLink>
                </li>
                <!-- <li class="navbar-item">
                    <RouterLink id="explore-regions" to="/explore">{{ $t('explore') }}</RouterLink>
                </li> -->
                <li class="navbar-item dropdown">
                    <a style="display: flex;" @click.prevent>{{$t('Visit')}}<span
                            class="material-symbols-outlined">arrow_drop_down</span></a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item"><router-link to="/sweden">{{$t('Sweden')}}</router-link></li>
                        <li class="dropdown-item"><router-link to="/norway">{{$t('Norway')}}</router-link></li>
                        <li class="dropdown-item"><router-link to="/finland">Finland</router-link></li>
                        <li class="dropdown-item"><router-link to="/denmark">{{$t('Denmark')}}</router-link></li>
                    </ul>
                </li>
                <li class="navbar-item"><router-link to="/hotels">{{$t('Hotels')}}</router-link></li>

                <li class="navbar-item dropdown">
                    <a style="display: flex;" @click.prevent>Information<span
                            class="material-symbols-outlined">arrow_drop_down</span></a>

                    <ul class="dropdown-menu">
                        <li class="dropdown-item">
                            <RouterLink id="" to="/travel-info">{{$t('Travel Information')}}</RouterLink>
                        </li>
                        <li class="dropdown-item">
                            <RouterLink to="/privacy">{{$t('Privacy')}}</RouterLink>
                        </li>
                        <li class="dropdown-item">
                            <RouterLink to="/terms">{{$t('Terms of Service')}}</RouterLink>
                        </li>
                        <li class="dropdown-item">
                            <RouterLink to="/cookie">{{$t('Cookie Policy')}}</RouterLink>
                        </li>
                    </ul>
                </li>
                <li class="navbar-item">
                    <RouterLink id="" to="/contact">{{$t('Contact Us')}}</RouterLink>
                </li>
            </ul>
            <div class="locale">
                <select @change="changeLang($event)" name="locale" id="locale" ref="locale">
                    <option value="sv">Svenska</option>
                    <option value="en">English</option>
                </select>
                <div class="mobile-menu" @click="showMenu">
                    <img src="@/assets/menu-white.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <aside ref="sidemenu">
        <div class="sidemenu">
            <div class="items">
                <span class="material-symbols-outlined" @click="closeMenu()"> close </span>
                <ul>
                    <li>
                        <RouterLink id="explore-regions" to="/">{{ $t('Home') }}</RouterLink>
                    </li>
                    <li>
                        <a style="display: flex;" @click.prevent>{{$t('Visit')}}</a>
                        <div class="indent">
                            <router-link to="/sweden">{{$t('Sweden')}}</router-link>
                            <router-link to="/finland">Finland</router-link>
                            <router-link to="/norway">{{$t('Norway')}}</router-link>
                            <router-link to="/denmark">{{$t('Denmark')}}</router-link>
                        </div>
                    </li>
                    <li>
                        <router-link to="/hotels"><a href="">{{$t('Hotels')}}</a></router-link>
                    </li>

                    <li>
                        <a style="display: flex;" @click.prevent>{{$t('Information')}}</a>
                        <div class="indent">
                            <RouterLink id="" to="/travel-info">{{$t('Travel Information')}}</RouterLink>
                            <RouterLink to="/privacy">{{$t('Privacy')}}</RouterLink>
                            <RouterLink to="/terms">{{$t('Terms of Service')}}</RouterLink>
                            <RouterLink to="/cookie">{{$t('Cookie Policy')}}</RouterLink>
                        </div>
                    </li>
                    <li>
                        <RouterLink to="/contact">Contact Us</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>

export default {
    mounted() {
        this.$refs['locale'].value = this.$i18n.locale;
    },
    methods: {
        changeLang(event) {
            this.$i18n.locale = event.target.value
        },
        closeMenu() {
            this.$refs.sidemenu.style['display'] = 'none';
        },
        showMenu() {
            this.$refs.sidemenu.style['display'] = 'block';
        }
    }
}
</script>

<style scoped>
aside {
    display: none;
}

aside .sidemenu * {
    z-index: 100 !important;
}

.items {
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.748);
    height: 100%;
    position: fixed;
    width: 30%;
    color: var(--white);
}

.items span {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.4rem;
}

.items ul {
    display: flex;
    flex-direction: column;
    margin: 3rem;
    align-items: start;
    justify-content: flex-start;
    gap: 1rem;
}

.items a {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    color: var(--white);
}

.items .indent {
    margin-top: 0.3rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 0.4em 0;
}

.items .indent a {
    font-size: 0.7rem;
    font-weight: 400;
    text-align: left;
}

.items a.active {
    color: var(--blue-soft);
}

.mobile-menu {
    height: 25px;
    display: none;
}

.locale {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2em;
}

.locale #locale {
    font-size: 0.5rem;
}

select {
    border: 1px solid rgb(97, 189, 181);
    padding: 1em 2em;
    border-radius: 5px;
}

select:focus {
    outline: none;
}

.nav {
    background-color: var(--black-bg);
    color: var(--white);
}

.nav .wrapper {
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.nav .wrapper .logo {
    width: 80px;
    cursor: pointer;
}

.nav .wrapper .logo img {
    border-radius: 1rem;
}

.nav .wrapper .links {
    display: inherit;
    gap: 1rem;
}

.navbar-menu {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.navbar-item {
    position: relative;
}

.navbar-item a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
    color: var(--white);
    font-size: 0.75rem;
    user-select: none;
    cursor: pointer;
}

.navbar-item a:hover {
    color: var(--blue-hover)
}

.navbar-item a.active {
    color: var(--blue-soft)
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--black);
    padding: 0.5rem 0;
    z-index: 100000;
}

.dropdown-item a {
    padding: 0.5rem 1rem;
    display: block;
    margin-inline: 10px;

}

.dropdown-item a:hover {
    background-color: var(--white-soft);
    border-radius: 0.5rem;
}

.navbar-item.dropdown:hover .dropdown-menu {
    display: block;
}

@media screen and (max-width: 800px) {
    .nav .wrapper {
        justify-content: space-between;
        padding: 0 3em;
    }

    .flex {
        display: flex;
        gap: 2em;
    }

    .mobile-menu {
        display: block;
    }

    .navbar-menu {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    .items {
        width: 45%;
    }

    .items a {
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
    }

    .items .indent a {
        font-size: 0.7rem;
        font-weight: 400;
    }
}

@media screen and (max-width: 500px) {
    .items {
        width: 55%;
    }
}
</style>