// import AdminLayout from "@/layout/admin/AdminLayout.vue";
import AdminLayout from "@/layouts/admin/AdminLayout.vue";
import Dashboard from "@/views/admin/Dashboard.vue";
import AdminUser from "@/views/admin/AdminUser.vue";
import AdminLogin from "@/views/admin/AdminLogin.vue";
const adminRoutes = [
  {
    path: "/admin",
    redirect: "admin/dashboard",
    component: AdminLayout,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },
      {
        path: "adminUser",
        component: AdminUser,
      },
      {
        path: "adminlogin",
        component: AdminLogin,
      }
    ],
  },
];

export default adminRoutes;
