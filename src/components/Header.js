import * as React from 'react';
import { Label, Pivot, PivotItem } from '@fluentui/react';
import logo from './../assets/logo_h.png'
import './Header.scss'

const Header = () => (
  <header className="page-header">
    <div className="college-logo">
        <img src={logo} className="college-logo-image" alt="logo" />
        <div className='college-logo-text'>
          STRIXHAVEN
        </div>
    </div>
    <Pivot className="navbar" aria-label="Links of Large Tabs Pivot Example" linkFormat="tabs" linkSize="large">
      <PivotItem headerText="VISIT">
      </PivotItem>
      <PivotItem headerText="APPLY">
      </PivotItem>
      <PivotItem headerText="EXPLORE">
      </PivotItem>
    </Pivot>
  </header>
);
  
export default Header;