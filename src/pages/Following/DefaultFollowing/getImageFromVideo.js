const captureImageFromVideo = (videoURL) => {
    const videoElement = document.createElement('video');
    videoElement.crossOrigin = 'anonymous'; // Đảm bảo việc tải video từ tài nguyên không bị cản trở
    videoElement.src = videoURL;
    videoElement.type = 'video/mp4';

    return new Promise((resolve, reject) => {
        videoElement.addEventListener('loadedmetadata', () => {
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL();
            resolve(dataURL);
        });

        videoElement.addEventListener('error', () => {
            reject(new Error('Error loading video.'));
        });
    });
};

export default captureImageFromVideo;
