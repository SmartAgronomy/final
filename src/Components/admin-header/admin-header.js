import "../pages/styles/admin-bar.css"
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import { Link } from "react-router-dom";


function AdminBar(){
    const [alignment, setAlignment] = useState('left');
  
    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  return(
<div>
  <div class="admin-navbar">
  <ToggleButtonGroup sx={{
    marginTop:'10px',
    marginLeft:'10px'
  }}
      class="bar"
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
  </ToggleButtonGroup>
  <ul class="admin-ul">
  <h1 class="admin-heading" type="none">Administrator</h1>

 <Link to="/add_products"><li class="admin-li" type="none">Add products</li></Link>
  <Link to="/admin/add_categories"><li class="admin-li" type="none">Add Categories</li></Link>
  <Link to="/view_products"><li  class="admin-li"type="none">View products</li></Link>
  <Link to="/view_categories"><li class="admin-li" type="none">View categories</li></Link>

</ul>
  </div>
</div>
  )
}
export default AdminBar;