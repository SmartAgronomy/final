import  {Routes,Route,} from "react-router-dom";
import PrivacyPolicy from "./privacy_policy";
import About from "./about";
import Contact from "./contact"
import Blogs from "./blogs"
import Marketplace from "./marketplace"
import Products from "./products"
import Dashboard from "./dashboard/Dashboard";
import LoginUpdated from "./login-mithun";
import Signup from "./signup"
import FAQ from "./pages/FAQ"
import AddProducts from "./admin-header/addProducts"
import AddCategory from "./admin-header/addCategory"
import ViewCategories from "./admin-header/viewCategories"
import ViewProducts from "./admin-header/viewProducts"



function Links(){   
    return(
        <div>
               <Routes>
                 <Route exact path="signin"  Component={LoginUpdated}/>
                 <Route path="signup" Component={Signup}/>
                 <Route path="/" Component={Dashboard}/>
                 <Route path="blogs" Component={Blogs } />
                 <Route path="/products" Component={Products} />
                 <Route path="marketplace" Component={Marketplace } />
                 <Route path='contact' Component={Contact} />
                 <Route path="about" Component={About } />
                 <Route path="privacy_policy" Component={PrivacyPolicy } />
                 <Route path="faq" Component={FAQ } />
                 <Route path="add_products" Component={AddProducts} />
                 <Route path="admin/add_categories" Component={AddCategory} />
                 <Route path="view_products" Component={ViewProducts} />
                 <Route path="view_categories" Component={ViewCategories} />

               </Routes>  
        </div>
    )
}
export default Links;