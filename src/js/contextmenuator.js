/*!
 * Context Menu
 * UI custom context menu component
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */

// N/A

/* ================================ Variables =============================== */

// N/A

/* ============================= Private Methods ============================ */

function _addElement(parent, type) {
  const element = document.createElement(type);
  parent.appendChild(element);
  return element;
}

function _removeHoverEffect(menu) {
  const menuitems = menu.children;
  for (let i = 0; i < menuitems.length; i++) {
    const menuitem = menuitems[i];
    menuitem.style.borderLeft = '4px solid transparent';
    menuitem.style.backgroundColor = '';
    if (menuitem.tagName.toLowerCase() === 'menu') {
      menuitem.style.backgroundColor = 'rgba(255,255,255,1)';
      _removeHoverEffect(menuitem);
    }
  }
}

function _addHoverEffect(menuitem) {
  menuitem.style.borderLeft = '4px solid rgba(28,144,243,1)';
  menuitem.style.backgroundColor = 'rgba(232,240,254,1)';
}

function _displaySubMenu(menu, menuitem, submenu) {
  const dims = menuitem.getBoundingClientRect();
  submenu.style.display = 'block';
  submenu.style.left = `${dims.right + parseFloat(menu.style.borderWidth) + 1}px`;
  submenu.style.top = `${dims.top - dims.height / 2}px`;
}

function _displayMenu(event, menu) {
  const tagName = event.target.tagName.toLowerCase();
  if (tagName !== 'menu' && tagName !== 'menuitem') {
    menu.style.display = 'block';
    menu.style.left = `${event.pageX - 10}px`;
    menu.style.top = `${event.pageY - 10}px`;
  }
}

function _hideSubMenus(menu) {
  const menuitems = menu.children;
  for (let i = 0; i < menuitems.length; i++) {
    const menuitem = menuitems[i];
    if (menuitem.tagName.toLowerCase() === 'menu') {
      menuitem.style.display = 'none';
      menuitem.style.left = '';
      menuitem.style.top = '';
      _hideSubMenus(menuitem);
    }
  }
}

function _hideMenu(menu) {
  menu.style.display = 'none';
  menu.style.left = '';
  menu.style.top = '';
  _hideSubMenus(menu);
}

function _addListener(element, menu) {
  if (element.addEventListener) {
    // context menu event listener
    element.addEventListener('contextmenu', function listener(e) {
      _hideMenu(menu);
      _removeHoverEffect(menu);
      _displayMenu(e, menu);
      e.preventDefault();
    }, false);
    // single click event listener - added to entire html document so menu always
    // hiddden no matter where user clicks
    document.addEventListener('click', function listener() {
      _hideMenu(menu);
    }, false);
  } else {
    element.attachEvent('oncontextmenu', function listener() {
      window.event.returnValue = false;
    });
  }
}

function _applyRender(element, properties) {
  const arr = Object.keys(properties);
  for (let i = 0; i < arr.length; i++) {
    const prop = arr[i];
    if (typeof properties[prop] === 'object' && properties[prop] !== null) {
      _applyRender(element[prop], properties[prop]);
    } else {
      element[prop] = properties[prop];
    }
  }
  return element;
}

function _menuRenderer() {
  const menu = {};
  menu.class = 'context-menu-menu';
  menu.style = {};
  menu.style.fontFamily = 'Arial';
  menu.style.fontSize = '13px';
  menu.style.width = '175px';
  menu.style.padding = '0px';
  menu.style.border = '1px solid rgba(255,255,255,1)';
  menu.style.backgroundColor = 'rgba(255,255,255,1)';
  menu.style.whiteSpace = 'nowrap';
  menu.style.boxShadow = '2px 2px 4px 0 #ccc';
  menu.style.cursor = 'pointer';
  return menu;
}

function _menuItemRenderer() {
  const menuitem = {};
  menuitem.class = 'context-menu-menu__menuitem';
  menuitem.style = {};
  menuitem.style.padding = '5px';
  menuitem.style.borderLeft = '4px solid transparent';
  menuitem.style.borderBottom = 'solid 1px rgba(218,220,224,1)';
  return menuitem;
}

function _addMenu(frag, options) {
  const cnf = { renderer: options.menuRenderer || _menuRenderer };
  const menu = _addElement(frag, 'menu');
  menu.style.display = 'none';
  menu.style.position = 'fixed';
  menu.style.zIndex = 100;
  const render = cnf.renderer();
  _applyRender(menu, render);
  return menu;
}

function _addSubMenuIndicator(menuitem) {
  const indicator = _addElement(menuitem, 'table');
  indicator.innerHTML = '&#9658';
  indicator.style.float = 'right';
  indicator.style.fontSize = '10px';
}

function _addMenuItemsRecursive(menu, menuitems, renderer, options) {
  // add all items to context menu
  const props = Object.keys(menuitems);
  for (let i = 0; i < props.length; i++) {
    const menuitem = _addElement(menu, 'menuitem');
    const render = renderer();
    const prop = props[i];
    menuitem.innerHTML = prop;
    menuitem.style.display = 'block';
    _applyRender(menuitem, render);
    // add menu item functionality
    menuitem.onmouseover = function onmouseover() {
      _removeHoverEffect(menuitem.parentNode);
      _addHoverEffect(menuitem);
      _hideSubMenus(menu);
    };
    // rescursively call function if a submenu is found
    if (typeof menuitems[prop] === 'object' && menuitems[prop] !== null) {
      _addSubMenuIndicator(menuitem);
      const submenu = _addMenu(menu, options);
      menuitem.onmouseover = function onmouseover() {
        _removeHoverEffect(menuitem.parentNode);
        _addHoverEffect(menuitem);
        _hideSubMenus(menu);
        return _displaySubMenu(menu, menuitem, submenu);
      };
      _addMenuItemsRecursive(submenu, menuitems[prop], renderer, options);
    } else {
      menuitem.onclick = menuitems[prop];
    }
  }
  return menu;
}

function _addMenuItems(menu, options) {
  const cnf = {
    items: options.items,
    renderer: options.itemRenderer || _menuItemRenderer
  };
  _addMenuItemsRecursive(menu, cnf.items, cnf.renderer, options);
}

/* ============================== Public Methods ============================ */

/**
 * Example inputs for public API of module
 */
// const exampleOptions = {
//   // div to apply custom context menu to
//   'div': 'container',
//   // renderer for applying css and styles to entire context menu
//   'menuRenderer': function () {},
//   // renderer for applying css and styles to each row in the context menu
//   'itemRenderer': function () {},
//   // menu items and sub items
//   'items': {
//       // parent menu item example with on click function
//       'context-menu-item-1' : function() {},
//       'context-menu-item-2' : {
//         // child menu item example with onclick function
//         'context-menu-item-2.1': function() {},
//         'context-menu-item-2.2': {
//           "context-menu-item-2.2.1" : function() {},
//           "context-menu-item-2.2.2" : function() {}
//         }
//       }
//   }
// }

function init(options) {
  // Create DOM fragment
  const frag = document.createDocumentFragment();
  // Create context menu
  const menu = _addMenu(frag, options);
  // Add context menu items
  _addMenuItems(menu, options);
  // Override default context menu
  const div = document.getElementById(options.div);
  _addListener(div, menu);
  // Append fragment to DOM
  div.appendChild(menu);
}

/* =========================== Export Public APIs =========================== */

module.exports = {
  init
};
