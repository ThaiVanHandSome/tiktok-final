import VideoContainer from '~/components/VideoContainer';
import { VideoHome } from '~/FakeData/VideoHome';

function Home() {
    return (
        <div>
            {VideoHome.map((data, index) => (
                <VideoContainer key={index} DATA={data} />
            ))}
        </div>
    );
}

export default Home;
