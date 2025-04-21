
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-green-600 font-bold text-xl">Urban2Farm</Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;
