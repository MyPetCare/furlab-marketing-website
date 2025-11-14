
import React, { useEffect, useState } from 'react';

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

interface ImageUploaderProps {
  onUploadSuccess: (url: string) => void;
  buttonText?: string;
  className?: string;
}

// Extend Window interface to include cloudinary widget
declare global {
  interface Window {
    cloudinary?: {
      createUploadWidget: (
        options: any,
        callback: (error: any, result: any) => void
      ) => {
        open: () => void;
        close: () => void;
      };
    };
  }
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ 
  onUploadSuccess, 
  buttonText = "上传图片",
  className = ""
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Cloudinary widget script
    if (!document.getElementById('cloudinary-upload-widget')) {
      const script = document.createElement('script');
      script.id = 'cloudinary-upload-widget';
      script.src = 'https://upload-widget.cloudinary.com/global/all.js';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  const openUploadWidget = () => {
    setError('');

    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
      setError('Cloudinary 未正确配置。请设置环境变量。');
      console.error('Missing Cloudinary configuration:', {
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET
      });
      return;
    }

    if (!scriptLoaded || !window.cloudinary) {
      setError('上传组件正在加载中...');
      return;
    }

    const uploadWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET,
        sources: ['local', 'url', 'camera'],
        multiple: false,
        maxFiles: 1,
        folder: 'furlab-marketing',
        clientAllowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'],
        maxFileSize: 10000000, // 10MB
        maxImageWidth: 2000,
        maxImageHeight: 2000,
        cropping: false,
        showSkipCropButton: true,
        styles: {
          palette: {
            window: '#FDFCF9',
            windowBorder: '#E0DED7',
            tabIcon: '#4547AC',
            menuIcons: '#5E5E5E',
            textDark: '#2D2D2D',
            textLight: '#FFFFFF',
            link: '#4547AC',
            action: '#FBC052',
            inactiveTabIcon: '#E0DED7',
            error: '#FF8A65',
            inProgress: '#4547AC',
            complete: '#73D1A3',
            sourceBg: '#F5F4F0'
          },
          fonts: {
            default: {
              active: true
            }
          }
        }
      },
      (error: any, result: any) => {
        if (error) {
          console.error('Upload error:', error);
          setError('上传失败，请重试。');
          setIsLoading(false);
          return;
        }

        if (result.event === 'success') {
          const imageUrl = result.info.secure_url;
          console.log('Upload successful:', imageUrl);
          onUploadSuccess(imageUrl);
          setIsLoading(false);
          uploadWidget.close();
        } else if (result.event === 'queues-start') {
          setIsLoading(true);
        } else if (result.event === 'close') {
          setIsLoading(false);
        }
      }
    );

    uploadWidget.open();
  };

  return (
    <div className={className}>
      <button
        type="button"
        onClick={openUploadWidget}
        disabled={isLoading || !scriptLoaded}
        className={`px-4 py-2 font-poppins font-semibold rounded-lg transition-all duration-200 ${
          isLoading || !scriptLoaded
            ? 'bg-neutral-divider text-neutral-muted cursor-not-allowed'
            : 'bg-gold text-neutral-dark hover:bg-yellow-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
        }`}
      >
        {isLoading ? '上传中...' : !scriptLoaded ? '加载中...' : buttonText}
      </button>
      
      {error && (
        <p className="mt-2 text-xs text-accent-coral">{error}</p>
      )}
      
      {!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET ? (
        <p className="mt-2 text-xs text-neutral-muted">
          提示：需要配置 VITE_CLOUDINARY_CLOUD_NAME 和 VITE_CLOUDINARY_UPLOAD_PRESET 环境变量
        </p>
      ) : null}
    </div>
  );
};

export default ImageUploader;

