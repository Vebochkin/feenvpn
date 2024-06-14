import React, { useState } from 'react';
import duckGif from '../assets/duckGif.gif';
import alertGif from '../assets/alert.gif';

// Компонент для отображения пуш-уведомления
const PushNotification = ({ onClose }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Таймер для деактивации кнопки на 5 секунд
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonDisabled(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Обработчик клика на кнопку "Я понял(а)"
  const handleUnderstandClick = () => {
    window.location.href = 'https://apps.apple.com/ru/app/streisand/id6450534064';
  };

  return (
    <div className="push-notification">
      <div className="overlay"></div>
      <div className="notification-content">
        <img src={alertGif} alt="Alert" className="gif" />
        <h3 className="title"> </h3>
        <p className="description">Не забудьте вернуться<p> в Telegram и нажать</p> "Завершить настройку"</p>
        <a
          href="#"
          className={`btn ${isButtonDisabled ? 'disabled' : ''}`}
          disabled={isButtonDisabled}
          onClick={handleUnderstandClick}
        >
          Я понял(а)
        </a>
      </div>
    </div>
  );
};

// Компонент для отображения страницы
const VPNSetupPage = () => {
  const [showPushNotification, setShowPushNotification] = useState(false);

  // Обработчик клика на кнопку "Установить приложение"
  const handleInstallClick = () => {
    setShowPushNotification(true);
  };

  // Обработчик закрытия пуш-уведомления
  const handleCloseNotification = () => {
    setShowPushNotification(false);
  };

  return (
    <div className="container">
      <div className="content">
        <img src={duckGif} alt="Duck" className="gif" />
        <h2 className="title">Давайте настроим VPN</h2>
        <p className="description">
          Чтобы подключить vpn, установите приложение, а затем нажмите "Завершить настройку"
        </p>
        <div className="footer">
          <button className="btn install-btn" onClick={handleInstallClick}>
            Установить приложение
          </button>
          <button className="btn setup-btn">Завершить  настройку</button>
        </div>
      </div>
      {showPushNotification && <PushNotification onClose={handleCloseNotification} />}
    </div>
  );
};

export default VPNSetupPage;