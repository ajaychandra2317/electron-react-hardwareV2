/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-named-as-default */
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AudioControls2 from './components/AudioControls2';
import MicControls from './components/MicControls';
import StillPicture from './components/StillPicture';
import TakeVideo2 from './components/TakeVideo2';

// const navigate = useNavigate();

// Upload to local seaweedFS instance
const uploadImage = async (file: string | Blob) => {
  const formData = new FormData();
  formData.append('file', file);
};

const exitApplication = () => {
  console.log('exiting');
  window.electron.ipcRenderer.sendMessage('close_application', ['close_application'])
}

// const { status, startRecording, stopRecording, mediaBlobUrl } =
//     useReactMediaRecorder({ video: true });

const Hello = () => {
  return (
    <div className="App" style={{}}>
      <h2 style={{ color: '#009900', fontFamily: 'cursive', fontSize: '42px' }}>
        HARDWARE POC's V2
      </h2>
      <h3
        style={{
          color: '#009900',
          fontFamily: 'cursive',
          fontSize: '32px',
          marginTop: '-24px',
        }}
      >
        using web API's
      </h3>
      <div>
        <Link
          to="/picture"
          style={{
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '20px',
            backgroundColor: '#e60000',
            color: 'white',
            height: '48px',
            outline: 'none',
            border: 'none',
            borderRadius: '24px',
            padding: '10px 20px',
            cursor: 'pointer',
            marginRight: '15px',
            textDecoration: 'none'
          }}
        >
          CLICK PICTURES
        </Link>
        <Link
          to="/video"
          style={{
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '20px',
            backgroundColor: '#ffcc00',
            color: 'white',
            height: '48px',
            outline: 'none',
            border: 'none',
            borderRadius: '24px',
            padding: '10px 20px',
            cursor: 'pointer',
            marginRight: '15px',
            textDecoration: 'none'
          }}
        >
          RECORD VIDEOS
        </Link>
        <Link
                    to="/audio"

          style={{
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '20px',
            backgroundColor: '#990099',
            color: 'white',
            height: '48px',
            outline: 'none',
            border: 'none',
            borderRadius: '24px',
            padding: '10px 20px',
            cursor: 'pointer',
            marginRight: '15px',
            textDecoration: 'none'
          }}
        >
          AUDIO OUTPUT
        </Link>
        <Link
                   to="/mic"

          style={{
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '20px',
            backgroundColor: '#0066ff',
            color: 'white',
            height: '48px',
            outline: 'none',
            border: 'none',
            borderRadius: '24px',
            padding: '10px 20px',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          MICROPHONE OUTPUT
        </Link>
      </div>
      {/* <div>
        {process.env.REACT_APP_ENV_TYPE}
        {process.env.REACT_APP_API_END_POINT}
      </div> */}
      {/* <StillPicture sendFile={uploadImage}></StillPicture>
      <TakeVideo></TakeVideo> */}
      {/* <AudioControls url='src/components/HeatWaves.mp3'></AudioControls> */}
      {/* <AudioControls url='http://streaming.tdiradio.com:8000/house.mp3'></AudioControls>
      <MicControls></MicControls>
      <TestIframe></TestIframe> */}
      <div>
        <button type='button' onClick={exitApplication}
        style={{
          fontWeight: 'bold',
          fontFamily: 'cursive',
          fontSize: '20px',
          backgroundColor: 'white',
          color: '#e60000',
          height: '48px',
          outline: 'none',
          border: '1px solid #e60000',
          borderRadius: '24px',
          padding: '10px 20px',
          cursor: 'pointer',
          marginRight: '15px',
          textDecoration: 'none',
          position: 'fixed',
          bottom: '8%',
          right: '4%',
        }}>
          EXIT APPLICATION
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/" element={<App />} />
        <Route
          path="/picture"
          element={<StillPicture sendFile={uploadImage} />}
        />
        <Route path="/video" element={<TakeVideo2 />} />
        <Route
          path="/audio"
          element={
            <AudioControls2 url="http://streaming.tdiradio.com:8000/house.mp3" />
            // <AudioControls url="http://streaming.tdiradio.com:8000/house.mp3" />
          }
        />
        <Route path="/mic" element={<MicControls />} />
      </Routes>
    </Router>
  );
}
