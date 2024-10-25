import './style/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import CreateForm from './components/CreateForm';
import ChooseCurrency from './components/ChooseCurrency';
import CollapseBox from './components/CollapseBox';
import DeleteModal from './components/CrudModal';
import DataTable from './components/DataTable';
import { IconMenu } from './components/IconMenu';
import MoneyInputForm from './components/MoneyInputFormItem';
import MultiStepSelectAsync from './components/MultiStepSelectAsync';
import Notifications from './components/Notification';
import PaypalButton from "./components/PaypalButton/index"
import UpdateForm from './components/UpdateForm';
import SidePanel from './components/SidePanel';
import SelectTag from './components/Tag';
import TabsContent from './components/TabsContent';
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Logout = lazy(() => import('./pages/Logout'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Register = lazy(() => import('./pages/Register'));
const About = lazy(() => import('./pages/About'));
const HeaderContent = lazy(() => import("./apps/Header/Header"));
const AppNav = lazy(() => import("./apps/Navigation/Navigation"));
const NotFound = lazy(() => import('./components/NotFound'));
const Customers = lazy(() => import('./pages/Customers/index'));
const People = lazy(() => import('./pages/People/index')); // Assuming you have this component
const Companies = lazy(() => import('./pages/Company')); // Assuming you have this component
const Leads = lazy(() => import('./pages/Lead')); // Assuming you have this component
const Offers = lazy(() => import('./pages/Offer')); // Assuming you have this component
const Invoices = lazy(() => import('./pages/Invoice')); // Assuming you have this component
const Payments = lazy(() => import('./pages/Payment')); // Assuming you have this component
const Products = lazy(() => import('./pages/Product')); // Assuming you have this component
const ProductCategories = lazy(() => import('./pages/ProductCategory'));
const Expenses = lazy(() => import('./pages/Expense')); // Assuming you have this component
const Settings = lazy(() => import('./pages/Settings')); // Assuming you have this component
const PaymentMode = lazy(() => import('./pages/PaymentModule')); // Assuming you have this component
const Taxes = lazy(() => import('./pages/Taxes')); // Assuming you have this component

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppNav />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/header" element={<HeaderContent />} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/people" element={<People />} />
          <Route path="/company" element={<Companies />} />
          <Route path="/lead" element={<Leads />} />
          <Route path="/offer" element={<Offers />} />
          <Route path="/invoice" element={<Invoices />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/product" element={<Products />} />
          <Route path="/category/product" element={<ProductCategories />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/payment/mode" element={<PaymentMode />} />
          <Route path="/taxes" element={<Taxes />} />
          <Route path="/*" element={<NotFound />} />
        
        
        
        
        
        
        
        
       { /**
        * Testing Routes
        */}

        <Route path='/create' element={<CreateForm/>}/>
        <Route path='/currency' element={<ChooseCurrency/>}/>
        <Route path='/collapse' element={<CollapseBox/>}/>
        <Route path='/modal' element={<DeleteModal/>}/>
        <Route path='/datatable' element={<DataTable/>}/>
        <Route path='/icon' element={<IconMenu/>}/>
        <Route path='/money' element={<MoneyInputForm/>}/>
        <Route path='/multistep' element={<MultiStepSelectAsync/>}/>
        <Route path='/notification' element={<Notifications/>}/>
        <Route path='/paypal' element={<PaypalButton/>}/>
        <Route path='/update' element={<UpdateForm/>}/>
        <Route path='/siderPanel' element={<SidePanel/>}/>
        <Route path='/tag' element={<SelectTag/>}/>
        <Route path='/tabscontent' element={<TabsContent/>}/>

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


/**
 * ! Suspense 
 * ! Lazy
 */
