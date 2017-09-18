import React, {Component} from 'react';
import me from '../../images/me.jpg';


class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
       <div className="hf-header">
         {/* App logo */}
         <div className="hf-header__left">
            <div className="hf-header__nav-item">
              <a href="#" className="hf-logo">IDEA<span>DATE</span></a>
            </div>
         </div>
         {/* Browse section */}
         <div className="hf-header__middle">
           <div className="hf-header__nav-item">
             Browse <i data-feather="chevron-down" />
           </div>
         </div>
         {/* User info */}
         <div className="hf-header__right">

           {/* notification icon */}
           <span className="hf-header__icon">
             <i data-feather="bell" />
           </span>

           {/* like icon */}
           <span className="hf-header__icon">
             <i data-feather="heart" />
           </span>

           {/* avatar  */}
           <div className="hf-avatar">
             <img src={me} alt=""/>
           </div>

           {/* user profile (dropdown) */}
           <div>
             <i data-feather="chevron-down" />
           </div>
         </div>
       </div>
      </header>
    )
  }
}

export default Header;
