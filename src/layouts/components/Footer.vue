<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}

    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
   
      <a
        href="https://demos.pixinvent.com/vuexy-vuejs-admin-template/documentation/"
        target="noopener noreferrer"
      >Documentation</a>
    </span>
  </div>
</template>
