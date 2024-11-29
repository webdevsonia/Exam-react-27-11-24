import logo from './logo.svg';
import './App.css';
import UserProfilecard from './UserProfilecard';

function App() {
  return (
    <div style={{backgroundColor:'pink'  , display:'grid', gap:'50',gridTemplateColumns:'repeat(4,1fr)' }}>
    <UserProfilecard title='USERPOFILE' Name='Dakshitakumari' Email='Dakshita@gmail.com' imgurl='https://img.freepik.com/free-photo/fashion-shot-beautiful-young-woman_1385-1565.jpg?ga=GA1.1.1578816696.1732710665&semt=ais_hybrid'ContactNum='+91 765 8765 763' Course='WebDev'
       />
    <UserProfilecard title='USERPOFILE' Name='bhagyavikumari' Email='Soniyaa@gmail.com' imgurl='https://img.freepik.com/free-photo/closeup-photo-young-lady_144627-77264.jpg?ga=GA1.1.1578816696.1732710665&semt=ais_hybrid'ContactNum='+91 765 8765 763' Course='WebDev'
       />
    <UserProfilecard title='USERPOFILE' Name='Denishakumari' Email='Denisha@gmail.com' imgurl='https://img.freepik.com/free-photo/female-office-wear-looking-camera_1301-2395.jpg?ga=GA1.1.1578816696.1732710665&semt=ais_hybrid'ContactNum='+91 765 8765 763' Course='WebDev'
       />
    <UserProfilecard title='USERPOFILE' Name='Srushtikumari' Email='Srushti@gmail.com' imgurl='https://img.freepik.com/free-photo/brunette-woman-with-shirt-posing_144627-19048.jpg?ga=GA1.1.1578816696.1732710665&semt=ais_hybrid'ContactNum='+91 765 8765 763' Course='WebDev'
       />
    </div>
  );
}

export default App;
