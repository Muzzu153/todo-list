import '../css/header.css';

// create header div
const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');
  header.setAttribute('id', 'header');

  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.textContent = 'TodOdin';
  header.append(logo);

  return header;
};

// load header div
const loadHeader = () => {
  const header = createHeader();
  const wrapper = document.getElementById('wrapper');
  wrapper.append(header);
};

export default loadHeader;
