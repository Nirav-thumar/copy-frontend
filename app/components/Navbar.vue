<template>
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <!-- <a class="navbar-brand" href="#">Bharat Railway   </a> -->
                <NuxtLink class="navbar-brand" aria-current="page" to="/">Bharat Railway</NuxtLink>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-link fw-bold"> |</li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link fw-bold" aria-current="page" to="/trains">Trains</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>