import { lazy } from "react";
import { Navigate } from "react-router-dom";

import CreateForm from "@/components/CreateForm";
import ChooseCurrency from "@/components/ChooseCurrency";
import CollapseBox from "@/components/CollapseBox";
import DeleteModal from "@/components/CrudModal";
import DataTable from "@/components/DataTable";
import { IconMenu } from "@/components/IconMenu";
import MoneyInputForm from "@/components/MoneyInputFormItem";
import MultiStepSelectAsync from "@/components/MultiStepSelectAsync";
import Notifications from "@/components/Notification";
import PaypalButton from "@/components/PaypalButton/index";
import UpdateForm from "@/components/UpdateForm";
import SidePanel from "@/components/SidePanel";
import SelectTag from "@/components/Tag";
import TabsContent from "@/components/TabsContent";
import Customer from "@/pages/Customers";


const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Login = lazy(() => import('@/pages/Login'));
const Logout = lazy(() => import('@/pages/Logout'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));
const Register = lazy(() => import('@/pages/Register'));
const About = lazy(() => import('@/pages/About'));
const HeaderContent = lazy(() => import('@/apps/Header/Header'));
const AppNav = lazy(() => import('@/apps/Navigation/Navigation'));
const NotFound = lazy(() => import('@/components/NotFound'));
const Customers = lazy(() => import('@/pages/Customers'));
const People = lazy(() => import('@/pages/People/index'));
const Companies = lazy(() => import('@/pages/Company'));
const Leads = lazy(() => import('@/pages/Lead'));
const Offers = lazy(() => import('@/pages/Offer'));
const Invoices = lazy(() => import('@/pages/Invoice'));
const Payments = lazy(() => import('@/pages/Payment'));
const Products = lazy(() => import('@/pages/Product'));
const ProductCategories = lazy(() => import('@/pages/ProductCategory'));
const Expenses = lazy(() => import('@/pages/Expense'));
const Settings = lazy(() => import('@/pages/Settings'));
const PaymentMode = lazy(() => import('@/pages/PaymentModule'));
const Taxes = lazy(() => import('@/pages/Taxes'));

let routes = {
  default: [
    { path: "/login", element: <Navigate to="/login" /> },
    { path: "/", element: <AppNav /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/about", element: <About /> },
    { path: "/reset", element: <ResetPassword /> },
    { path: "/logout", element: <Logout /> },
    { path: "/header", element: <HeaderContent /> },
    { path: "/customer", element: <Customer /> },
    { path: "/people", element: <People /> },
    { path: "/company", element: <Companies /> },
    { path: "/lead", element: <Leads /> },
    { path: "/offer", element: <Offers /> },
    { path: "/invoice", element: <Invoices /> },
    { path: "/payment", element: <Payments /> },
    { path: "/product", element: <Products /> },
    { path: "/category/product", element: <ProductCategories /> },
    { path: "/expenses", element: <Expenses /> },
    { path: "/settings", element: <Settings /> },
    { path: "/payment/mode", element: <PaymentMode /> },
    { path: "/taxes", element: <Taxes /> },
    { path: "/*", element: <NotFound /> },
    
    // Testing Routes
    { path: "/create", element: <CreateForm /> },
    { path: "/currency", element: <ChooseCurrency /> },
    { path: "/collapse", element: <CollapseBox /> },
    { path: "/modal", element: <DeleteModal /> },
    { path: "/datatable", element: <DataTable /> },
    { path: "/icon", element: <IconMenu /> },
    { path: "/money", element: <MoneyInputForm /> },
    { path: "/multistep", element: <MultiStepSelectAsync /> },
    { path: "/notification", element: <Notifications /> },
    { path: "/paypal", element: <PaypalButton /> },
    { path: "/update", element: <UpdateForm /> },
    { path: "/siderPanel", element: <SidePanel /> },
    { path: "/tag", element: <SelectTag /> },
    { path: "/tabscontent", element: <TabsContent /> }
  ],
};

export default routes;
