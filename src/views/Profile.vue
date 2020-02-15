<template>
  <div class="profile">
    <div class="container-fluid">
         <div class="row">
           <div class="col-lg-3 col-md-3 col-sm-12">
             <aside class="sidebar">
                <ul class="list-unstyled">
                    <li class="nav-item">
                      <router-link to="/profile-data" class="nav-link">profile</router-link>
                    </li>
                    <li class="nav-item">
                       <router-link to="/profile-update" class="nav-link">profile update</router-link>
                    </li>
                </ul>
             </aside>
           </div>
           <div class="col-md-9 col-lg-9 col-sm-12">
             <router-view></router-view>
           </div>
         </div>
    </div>
  </div>
</template>

<style lang="scss">
  .profile{
    .container-fluid{
      margin: 0px -15px;
    box-sizing: border-box;
    }
    .col-md-3,.col-lg-3{
      width: 100%;
      background-color: #333;
      height: 1000px;

    }
  }
</style>
