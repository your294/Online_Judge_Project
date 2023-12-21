<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{name: 'default'}">Online Judge</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'problemset'}">题库</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'contest'}">竞赛</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <img class="user-avatar" src="https://cdn.acwing.com/media/user/profile/photo/140865_lg_3a61c42259.jpg" alt="user avatar">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hello, Chen
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">个人信息</a></li>
                            <li><a class="dropdown-item" href="#">我的主页</a></li>
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            
            </div>
        </div>
    </nav>
</template>

<style scoped>

.user-avatar {
    border-radius: 50%;
    height: 25px;
    width: 25px;
}


</style>