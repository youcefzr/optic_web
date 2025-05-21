import React from 'react';

const MapComponent: React.FC = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.937521700762!2d5.3655175!3d43.300287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0b84d3dcd93%3A0xa26dde3cd76b126e!2s60+Rue+de+la+R%C3%A9publique%2C+13002+Marseille%2C+France!5e0!3m2!1sen!2sus!4v1711408675332!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;