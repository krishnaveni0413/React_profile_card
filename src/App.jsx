import 'bootstrap/dist/css/bootstrap.min.css';
import UserCard from './Components/UserCard';

const App = () => {
  const users = [
  {
    title: "Frontend Developer",
    description: "Builds UI using React and CSS.",
    image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000",
    link: "Friends"
  },
  {
    title: "Backend Engineer",
    description: "Handles server and APIs.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    link: "Friends"
  },
  {
    title: "UI/UX Designer",
    description: "Creates smooth user experiences.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    link: "Friends"
  },
  {
    title: "DevOps Engineer",
    description: "Manages CI/CD pipelines and servers.",
   image: "https://media.istockphoto.com/id/1285361566/photo/beautiful-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=cI6Ay3GFCYP8rrjGSpP2Sbnd5cI_ZJaitpwq8Q6sCFs=",
    link: "Friends"
  },
  {
    title: "Data Analyst",
    description: "Analyzes data to drive insights.",
    image: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2019/02/How-to-post-portrait-photos-on-Instagram-without-cropping1.jpg?fit=900%2C600&ssl=1",
    link: "Friends"
  },
  {
    title: "DevOps Engineer",
    description: "Manages CI/CD pipelines and servers.",
   image: "https://media.istockphoto.com/id/1301213600/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=H15EX-pLJ63i84r5k256BX_f-s_F7c3pBVvb17D4TPY=",
    link: "Friends"
  },
  {
    title: "Data Analyst",
    description: "Analyzes data to drive insights.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "Friends"
  }
];

  return <center>
    <h1>User Profile Cards</h1>
    <div className="allCards" style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      {users.map((user)=>(
        <UserCard 
        key={user}
        title={user.title}
        description={user.description}
        image={user.image}
        link={user.link}
        />
      ))}
       
    </div>
   
    
  </center>
}

export default App;