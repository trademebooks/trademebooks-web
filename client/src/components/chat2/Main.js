import React from 'react';
// import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1>
          <img width={80} src={reactLogo} alt="react logo" /> h1 image title
        </h1>
        <p>description</p>
        <div className="social-bagdes">
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
        </div>
      </header>
      <div className="block ">
        {/* <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        /> */}
        <span> message1 </span>
      </div>
      <div className="block">
        {/* <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleRtlChange}
          checked={rtl}
          onColor="#219de9"
          offColor="#bbbbbb"
        /> */}
        <span> message2</span>
      </div>
      <div className="block">
        {/* <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleImageChange}
          checked={image}
          onColor="#219de9"
          offColor="#bbbbbb"
        /> */}
        <span> image </span>
      </div>

      <footer>
        <small>
          © 2020 made with <FaHeart style={{ color: 'red' }} /> by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://azouaoui.netlify.com">
            Mohamed Azouaoui
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a href="https://github.com/azouaoui-med" target="_blank" rel="noopener noreferrer">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social"
            />
          </a>
          <a href="https://twitter.com/azouaoui_med" target="_blank" rel="noopener noreferrer">
            <img
              alt="Twitter Follow"
              src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Main;
