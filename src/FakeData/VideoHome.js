import SpliceTextToTag from './SpliceTextToTag';
import { video1, video2, video3, video4 } from '~/asset/videos';

const VideoHome = [
    {
        image: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Msx3hw26gqYAX8oXbQ3&_nc_ht=scontent-hkg4-2.xx&oh=00_AfCWYNd2v5kA6ohsLSwSnKrK9Rxqb-kkP0nTh_O2T-K0Uw&oe=64B6818D',
        name: 'Nguyễn Thái Văn',
        userName: 'thaivan01',
        content: 'Tôi sẽ cố gắng đạt được mục tiêu',
        tags: SpliceTextToTag(' #xuhuong #fyp #viral #dadada #dadadaremix #tvt #tvtremix'),
        music: `nhạc nền - thaivan01`,
        video: video1,
    },
    {
        image: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/353636181_813042353570397_1543305343994373323_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=R113qLuWC5MAX9bntny&_nc_ht=scontent.fdad3-5.fna&oh=00_AfA4PUgA2gBDnfMMQuhOlQNxSyDVZ7wSo6JO2t6IHBaZdA&oe=64B5EEF4',
        name: 'Mỹ Tú',
        userName: 'mytu01',
        content: 'Music for motivation!',
        tags: SpliceTextToTag(' #xuhuong #fyp #viral #dadada #dadadaremix #tvt #tvtremix'),
        music: `nhạc nền - mytu01`,
        video: video2,
    },
    {
        image: 'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/355481129_1449893562432093_5879169989258677260_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ww0heJ38qEkAX--6P9d&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfA4vZeqeQM8vnSF4S5pphCLXWjYAtBcp7g5EfjSmbG4iw&oe=64B6D4E2',
        name: 'Mỹ Tuyền',
        userName: 'mytuyen01',
        content: 'Peaceful in every day!',
        tags: SpliceTextToTag(' #xuhuong #fyp #viral #dadada #dadadaremix #tvt #tvtremix'),
        music: `nhạc nền - mytuyen01`,
        video: video3,
    },
    {
        image: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-1/311489611_1207717013435777_6182457312672250983_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Eu3n-Qy04qMAX9CMvXz&_nc_ht=scontent-hkg4-2.xx&oh=00_AfCYojMFAJ3qpPPQ6hnhkNbGKXfP5cMIKKKfZV5l-3aYgw&oe=64B56380',
        name: 'Ngọc Nhất',
        userName: 'ngocnhat01',
        content: 'Chilllllllll!',
        tags: SpliceTextToTag(' #xuhuong #fyp #viral #dadada #dadadaremix #tvt #tvtremix'),
        music: `nhạc nền - ngocnhat01`,
        video: video4,
    },
];

export { VideoHome };
