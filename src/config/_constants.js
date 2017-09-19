// App action strings
export const ACTIONS = {
  menu_home_page: 'Home',
  menu_about_page: 'About',
  menu_contact_page: 'Contact',
  menu_account_settings: 'Settings',
  menu_account_profile: 'Profile',
  menu_account_logout: 'Logout',
  menu_filter_popular: 'Popular',
  menu_filter_editors_choice: 'Editors choice',
  menu_filter_new: 'New',
};

// App menu items
export const BROWSE_MENU = [
  {ref: 'browse_menu', menu_item_click: 'menu_home_page', link: "home"},
  {ref: 'browse_menu', menu_item_click: 'menu_about_page', link: "about"},
  {ref: 'browse_menu', menu_item_click: 'menu_contact_page', link: "contact"},
];

export const ACCOUNT_MENU = [
  {ref: 'profile_menu', menu_item_click: 'menu_account_settings', link: "account/settings"},
  {ref: 'profile_menu', menu_item_click: 'menu_account_profile', link: "account/profile"},
  {ref: 'profile_menu', menu_item_click: 'menu_account_logout', link: "account/logout"},
];

export const FILTER_MENU = [
  {ref: 'filter_menu', menu_item_click: 'menu_filter_popular', link: "#"},
  {ref: 'filter_menu', menu_item_click: 'menu_filter_new', link: "#"},
  {ref: 'filter_menu', menu_item_click: 'menu_filter_editors_choice', link: "#"},
];


