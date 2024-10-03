// import { Component } from '@angular/core';
// import { 
//   faDashboard,
//   faLocation,
//   faShop,
//   faBox,
//   faMoneyBill,
//   faChartBar,
//   faContactBook,
//   faHand

// } from "@fortawesome/free-solid-svg-icons"
// @Component({
//   selector: 'app-side-nav',
//   templateUrl: './side-nav.component.html',
//   styleUrls: ['./side-nav.component.scss']
// })
// export class SideNavComponent {
 
//   faDashboard = faDashboard;
//   faLocation = faLocation;
//   faShop =  faShop;
//   faBox = faBox;
//   faMoneyBill = faMoneyBill;
//   faChartBar = faChartBar;
//   faContactBook = faContactBook;
//   faHand = faHand
// }


import { Component, OnInit } from '@angular/core';
import { 
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  // Navigation items array with icon and label
  navItems = [
    { icon: faDashboard, label: 'Dashboard' },
    { icon: faLocation, label: 'Locations' },
    { icon: faShop, label: 'Shops' },
    { icon: faBox, label: 'Products' },
    { icon: faMoneyBill, label: 'Sales' },
    { icon: faChartBar, label: 'Statistics' },
    { icon: faContactBook, label: 'Contact' },
    { icon: faHand, label: 'Help' }
  ];

  ngOnInit() {
    // Shuffle the navItems array to show random data
    this.shuffleNavItems();
  }

  // Function to shuffle array (optional for random order)
  shuffleNavItems() {
    for (let i = this.navItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.navItems[i], this.navItems[j]] = [this.navItems[j], this.navItems[i]];
    }
  }
}

